import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { api, setAuthHeader, clearAuthHeader } from '../api/axios'

type User = {
  email: string
  name?: string
  id?: string
}

type AuthState = {
  user: User | null
  token: string | null
  isLoading: boolean
  isRefreshing: boolean
  error: string | null
}

// try to rehydrate from localStorage
const savedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null
const savedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken || null,
  isLoading: false,
  isRefreshing: false,
  error: null,
}

const handlePending = (state: AuthState) => {
  state.isLoading = true
  state.error = null
}

const handleRejected = (state: AuthState, action: any) => {
  state.isLoading = false
  state.error = action.error?.message || 'Something went wrong'
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: { name?: string; email: string; password: string }) => {
    const { data } = await api.post('/auth/register', credentials)
    // expecting { user, token }
    return data
  },
)

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    const { data } = await api.post('/auth/login', credentials)
    return data
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await api.post('/auth/logout')
  return
})

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_: void, thunkAPI: any) => {
    const state: any = thunkAPI.getState()
    const token = state.auth.token || null
    if (!token) return thunkAPI.rejectWithValue('No token')
    setAuthHeader(token)
    const { data } = await api.get('/auth/me')
    return data
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state: AuthState, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user
      state.token = action.payload.token
      setAuthHeader(action.payload.token)
      try {
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('user', JSON.stringify(action.payload.user))
      } catch (e) {
        /* ignore */
      }
    },
    clearCredentials(state: AuthState) {
      state.user = null
      state.token = null
      clearAuthHeader()
      try {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      } catch (e) {
        /* ignore */
      }
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state: AuthState, action: any) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        setAuthHeader(action.payload.token)
        try {
          localStorage.setItem('token', action.payload.token)
          localStorage.setItem('user', JSON.stringify(action.payload.user))
        } catch (e) {
          /* ignore */
        }
      })
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state: AuthState, action: any) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        setAuthHeader(action.payload.token)
        try {
          localStorage.setItem('token', action.payload.token)
          localStorage.setItem('user', JSON.stringify(action.payload.user))
        } catch (e) {
          /* ignore */
        }
      })
      .addCase(login.rejected, handleRejected)

      .addCase(logout.pending, (state: AuthState) => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state: AuthState) => {
        state.isLoading = false
        state.user = null
        state.token = null
        clearAuthHeader()
        try {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        } catch (e) {
          /* ignore */
        }
      })
      .addCase(logout.rejected, handleRejected)

      .addCase(refreshUser.pending, (state: AuthState) => {
        state.isRefreshing = true
      })
      .addCase(refreshUser.fulfilled, (state: AuthState, action: any) => {
        state.isRefreshing = false
        state.user = action.payload.user
      })
      .addCase(refreshUser.rejected, (state: AuthState) => {
        state.isRefreshing = false
      })
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer
