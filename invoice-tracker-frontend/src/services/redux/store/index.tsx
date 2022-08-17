import { configureStore } from '@reduxjs/toolkit'
import AuthenticationSlice from '../slices/AuthenticationSlice'

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    AuthenticationSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
