import React, { useState, useEffect } from 'react'
import './style.scss'

export function Timer() {

  const [ date, setDate ] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  })
  return(
    <>
      <h2 className='timer-watch'>{date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute:'2-digit' }, [])}</h2>
    </>
  )
}