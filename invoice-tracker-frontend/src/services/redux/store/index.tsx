import { configureStore } from '@reduxjs/toolkit'
import AuthenticationSlice from '../slices/AuthenticationSlice'
import ModalSlice from '../slices/DetailsModal'

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    AuthenticationSlice,
    ModalSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
