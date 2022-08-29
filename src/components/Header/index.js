import React from 'react'
import { Timer } from '../../pages/ContentPage'
import { LoginControl } from '../../services/loginControl'
import "./style.css"

export function Header() {
  return(
    <>
      <header className="header-container">
        <p className="header-container-logo">My Musik</p>
        <Timer/>
        <LoginControl/>
      </header>
    </>
  )
}