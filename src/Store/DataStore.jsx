import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './ApiDataSlice'

const store=configureStore({
    reducer:{
        data:dataSlice
    }
})

export default store