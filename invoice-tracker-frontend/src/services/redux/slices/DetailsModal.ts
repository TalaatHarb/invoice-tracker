import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false,
}

const closeModal = (state: ModalState) => {
  state.isOpen = false
}

const openModal = (state: ModalState) => {
  state.isOpen = true
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal,
    openModal,
  },
})

export const ModalScreenActions = ModalSlice.actions

export default ModalSlice.reducer
