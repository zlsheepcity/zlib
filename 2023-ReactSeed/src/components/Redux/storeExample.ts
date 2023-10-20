import { createSlice } from '@reduxjs/toolkit'
import { IObject as IO } from 'Interfaces'

export interface ISliceExampleState {
  title: string;
}

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

export const storeExampleGetTitle = (state:any) => state?.title || ''

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const sliceExampleReducer = sliceExample.reducer
export default sliceExampleReducer
