import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/authSlice'
import { useNavigate, Link } from 'react-router-dom'

const Register: React.FC = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(register({ name, email, password })).unwrap()
      navigate('/become-a-mentor', { replace: true })
    } catch (err) {
      console.error(err)
      alert('Registration failed')
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  )
}

export default Register
