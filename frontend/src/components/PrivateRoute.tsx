import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/authSelectors'

type Props = { children: JSX.Element }

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
