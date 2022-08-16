import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CONSTANTS } from '../../../utils/constants'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

interface AuthenticationState {
  error: string | null
  token: string | null
  isAuthenticated: boolean
  userRole: string | null
  isLoading: boolean
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  token: null,
  userRole: null,
  error: null,
  isLoading: false,
}

export const loginUser = createAsyncThunk(
  'authentication/loginUser',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await fetch(`${CONSTANTS.BACKEND_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      const data = await response.json()
      if (response.status === 200) {
        return data
      } else {
        return rejectWithValue(data)
      }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logoutUser: (state) => {
      cookies.remove('token')
      state.isAuthenticated = false
      state.token = null
      state.userRole = null
      state.error = null
      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isAuthenticated = false
      state.token = null
      state.userRole = null
      state.error = null
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.token = action.payload.tokens.access_token
      state.userRole = action.payload.roles
      state.error = null
      cookies.set('token', action.payload.token.access_token, {
        path: '/',
        // parse string to date
        expires: new Date(action.payload.tokens.expires_in),
      })
      //   cookies.set('userRole', action.payload.userRole, { path: '/' })
      state.isLoading = false
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false
      state.token = null
      state.userRole = null
      state.error = action.error.message || 'Wrong Username or Password'
      state.isLoading = true
    })
  },
})

export const { logoutUser } = AuthenticationSlice.actions
export default AuthenticationSlice.reducer
