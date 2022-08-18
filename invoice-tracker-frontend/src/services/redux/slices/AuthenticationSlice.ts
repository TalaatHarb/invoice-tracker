import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CONSTANTS } from '../../../utils/constants'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

interface AuthenticationState {
  error: string | undefined
  isAuthenticated: string | null
  userRole: string[] | null
  isLoading: boolean
  ID:String
}

const initialState: AuthenticationState = {
  error: undefined,
  isAuthenticated: cookies.get('token') || null,
  userRole: [],
  isLoading: false,
  ID:"",
}



export const loginUser = createAsyncThunk(
  'authentication/loginUser',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await fetch(`${CONSTANTS.BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      const data = response.json()
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
      state.isAuthenticated = null
      state.userRole = null
      state.error = undefined
      state.isLoading = false
    },
    getID:(state, action)=>{
      state.ID=action.payload
    }
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
      state.error = action?.error?.message
      state.isLoading = false
    })
  },
})

export const { logoutUser ,getID } = AuthenticationSlice.actions
export default AuthenticationSlice.reducer
