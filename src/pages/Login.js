import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/main_logo.png'

const Login = () => {

  const { user } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isUser, setIsUser] = useState(true)
  const navigate = useNavigate()

  const checkUser = () => {
    if (user.username === username && user.password === password) {
        setIsUser(true)
        navigate('/dashboard')
    } else {
        setIsUser(false)
    }
  }

  return (
   <div className='form-body'>
    <div className='form-wrapper'>

        <img src={Logo} alt="Logo" />

        <p>Login to spring POS</p>

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

        {!isUser && <span style={{color: "red"}}>Something went wrong! please try again</span> }
        <div className='btn-control'>
          <button onClick={checkUser} className='register-btn'>Sign Up</button>
        </div>

        <span>Already don't have an account or <Link to="/register">Sign Up.</Link></span>
      
    </div>
   </div>
  )
}

export default Login
