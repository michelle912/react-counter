import { createSlice } from '@reduxjs/toolkit'

export const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    value: 0
  },
  reducers: {
    updateSize: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { updateSize} = sizeSlice.actions

export default sizeSlice.reducer