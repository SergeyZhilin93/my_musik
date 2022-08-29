import React, { useState, useEffect } from 'react'
import './style.css'

export function Timer() {

  const [ date, setDate ] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
  })
  return(
    <>
      <div>
        <h2 className='timer-watch'>{date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}, [])}</h2>
      </div>
    </>
  )
}