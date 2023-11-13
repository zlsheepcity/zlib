import { createSlice } from '@reduxjs/toolkit'

const sliceExample = createSlice({
  name: 'storeExample',
  initialState: {
    title: 'initial',
  },
  reducers: {
    storeExampleSetTitle: (state, action) => {
      state.title = action.payload
    },
  },
})

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ setters

export const {
  storeExampleSetTitle,
} = sliceExample.actions

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ getters

export const storeExampleGetTitle = (state) => state?.title || ''

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const sliceExampleReducer = sliceExample.reducer;
export default sliceExampleReducer;
