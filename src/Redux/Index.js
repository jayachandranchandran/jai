import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/Counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
