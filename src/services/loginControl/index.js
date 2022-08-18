import React from 'react'
import { GreetingUser } from '../greetingUser'
import './style.css'

export class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginControl = this.handleLoginControl.bind(this)
    this.handleLogoutControl = this.handleLogoutControl.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginControl() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutControl() {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button;
    if (isLoggedIn) {
      button = <button className='logged-button' onClick={this.handleLogoutControl}>Logout</button>
    } else {
      button = <button className='logged-button' onClick={this.handleLoginControl}>Login</button>
    }
    return(
      <div>
        <GreetingUser isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}