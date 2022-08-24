import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false,
}

// disable html style overflow when modal is open

const closeModal = (state: ModalState) => {
  state.isOpen = false
  setTimeout(() => {
    document.documentElement.style.overflow = 'auto'
  }, 50)
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
