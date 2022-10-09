import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/main_logo.png'

const Register = () => {

  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const addUser = () => {
    setUser({username: username, password: password})
    navigate('/login')
  }

  return (
   <div className='form-body'>
    <div className='form-wrapper'>

        <img src={Logo} alt="Logo" />

        <p>Sign Up with your username</p>

        <div className='form-control'>
          
          <input onChange={(e) => setUsername(e.target.value)} type="text" required />
          <label className='username'>Username</label>
        </div>

        <div className='form-control'>
          
          <input onChange={e => setPassword(e.target.value)} type="password" required />
          <label className='password'>Password</label>
        </div>

        <div className='checkbox-control'>
        <input type="checkbox" id='checkbox' />
        <label for="checkbox" >Remember me?</label>
        </div>


        <div className='btn-control'>
          <button onClick={addUser} className='register-btn'>Sign Up</button>
        </div>

        <span>Already have an account or <Link to="/login">Login.</Link></span>
      
    </div>
   </div>
  )
}

export default Register
