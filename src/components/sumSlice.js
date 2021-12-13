import { createSlice } from '@reduxjs/toolkit'

export const sumSlice = createSlice({
  name: 'sum',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const { increment, decrement} = sumSlice.actions

export default sumSlice.reducer