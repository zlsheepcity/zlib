import { configureStore } from '@reduxjs/toolkit'
import { sliceExampleReducer } from './storeExample'

export const store = configureStore({
  reducer: {
    storeExample: sliceExampleReducer,
  },
})

export default store
