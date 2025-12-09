import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/authSelectors'

type Props = { children: JSX.Element }

const RestrictedRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (isLoggedIn) {
    return <Navigate to="/become-a-mentor" replace />
  }

  return children
}

export default RestrictedRoute
