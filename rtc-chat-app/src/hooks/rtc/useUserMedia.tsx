import React, { useEffect, useState } from 'react'

export default function useUserMedia(requestedMedia: any) {
  const [mediaStream, setMediaStream] = useState<any>(null)

  useEffect(() => {
    async function enableStream(){
        navigator.mediaDevices.getUserMedia(requestedMedia)
        .then((stream: any) => {
            console.log("Media stream: ", stream)
            setMediaStream(stream)
        })
        .catch((err: any) => console.error("Failed to get Media Stream: useUserMedia -- ", err))
    }

    if(!mediaStream){
        enableStream()
    } else {
        return function cleanup(){
            mediaStream.getTracks().forEach((track: any) => {
                track.stop()
            })
        }
    }
  }, [mediaStream, requestedMedia])

  return mediaStream
}
