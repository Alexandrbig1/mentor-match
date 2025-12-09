import type { RootState } from './store'

export const selectAuth = (state: RootState) => state.auth
export const selectIsLoggedIn = (state: RootState) => Boolean(state.auth.token)
export const selectUser = (state: RootState) => state.auth.user
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing
export const selectIsLoading = (state: RootState) => state.auth.isLoading
