import React, { useState } from 'react'
import './style.scss'

export function LoginControl() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggerControl = () => setIsLoggedIn(!isLoggedIn)
  
  return(
    <>
      <button className='logged-button' onClick={handleLoggerControl}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </>
  )
}