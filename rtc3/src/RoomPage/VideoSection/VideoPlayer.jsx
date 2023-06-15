import React from 'react'
import styled from 'styled-components'
import { LoadingSpinner } from '../../app/components/common/LoadingSpinner'

const VideoPlayer = ({ isLoading }) => {
  return (
    <SVideoContainer id="videos_portal">
      
    {
        isLoading && (
            <LoadingSpinner />
       )
    }
     </SVideoContainer>
  )
}

export default VideoPlayer

const SVideoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: center;
  align-items: center;
  
`

const SVideoGallery = styled.div`
  
`