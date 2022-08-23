import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CONSTANTS } from '../../../utils/constants'
import Cookies from 'universal-cookie'
import axios from 'axios'
const cookies = new Cookies()

interface AuthenticationState {
  error: string | undefined
  isAuthenticated: string | null
  userRole: string[] | null
  isLoading: boolean
  ID: number | null
}

const initialState: AuthenticationState = {
  error: undefined,
  isAuthenticated: cookies.get('token') || null,
  userRole: localStorage.getItem('userRole')
    ? JSON.parse(localStorage.getItem('userRole') || '')
    : null,
  ID: localStorage.getItem('ID')
    ? JSON.parse(localStorage.getItem('ID') || '')
    : null,
  isLoading: false,
}

export const loginUser = createAsyncThunk(
  'authentication/loginUser',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${CONSTANTS.BACKEND_URL}/api/auth/login`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        return response.data
      }
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.message)
    }
  }
)

const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logoutUser: (state) => {
      cookies.remove('token')
      localStorage.removeItem('userRoles')
      localStorage.removeItem('ID')
      state.isAuthenticated = null
      state.userRole = null
      state.error = undefined
      state.isLoading = false
    },
    getID: (state, action) => {
      state.ID = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.userRole = null
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload.token
      state.userRole = action.payload.roles
      localStorage.setItem('userRoles', JSON.stringify(action.payload.roles))
      localStorage.setItem('ID', JSON.stringify(action.payload.id))
      state.error = undefined
      cookies.set('token', action.payload.token, {
        path: '/',
        // parse string to date
        expires: new Date(action.payload.expiryTime),
      })
      state.isLoading = false
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = null
      state.userRole = null

      state.error = action?.payload as string
      state.isLoading = false
    })
  },
})

export const { logoutUser, getID } = AuthenticationSlice.actions
export default AuthenticationSlice.reducer
