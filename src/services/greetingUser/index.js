import React from "react";

export function GreetingUser(props) {
  const isLoggedIn = props.isLoggedIn
  const userGreeting = () => {
    return alert("Hello!")
  };
  const guestGreeting = () => {
    return alert("Login please.")
  }
  const greetingControl = () => {
    if(isLoggedIn) {
      return guestGreeting() 
    }return userGreeting()
  };
  return(
		<>
			{/* {greetingControl()} */}
		</>
	)
}