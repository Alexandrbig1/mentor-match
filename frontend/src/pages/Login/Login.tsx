import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authSlice'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Login: React.FC = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as any)?.from?.pathname || '/become-a-mentor'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(login({ email, password })).unwrap()
      navigate(from, { replace: true })
    } catch (err) {
      console.error(err)
      alert('Login failed')
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

export default Login
