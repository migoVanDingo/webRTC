import { configureStore } from '@reduxjs/toolkit'
import rtcReducer from './rtcReducer'


const store = configureStore({
    reducer: rtcReducer
 
})

export default store