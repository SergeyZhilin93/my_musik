import React, { useState } from 'react'
import { GreetingUser } from '../greetingUser'
import './style.css'

export function LoginControl() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggerControl = () => {
    return setIsLoggedIn(!isLoggedIn)
  }
  
  return(
    <>
      <button className='logged-button' onClick={handleLoggerControl}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </>
  )
}