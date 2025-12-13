import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import RtkReducer from "./RtkReducer"

const RtkStore = configureStore({
  reducer:{
    "User":RtkReducer
  }
})
 
export default RtkStore
