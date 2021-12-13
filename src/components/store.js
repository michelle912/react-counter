import { configureStore } from '@reduxjs/toolkit'
import sizeReducer from './sizeSlice'
import sumReducer from './sumSlice'

export default configureStore({
  reducer: {
    sum: sumReducer,
    size: sizeReducer
  }
})