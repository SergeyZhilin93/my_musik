import React, { useState } from 'react';
import './style.css'

export function TestArray(props) {
  const tracks = [
		{
      author: 'Tiesto',
			songName: 'Business',
		},
		{
      author: 'T-Mass',
			songName: 'Can you feel it',
		},
		{
      author: 'F.O.O.L',
			songName: 'Guns',
		},
		{
      author: "The Weeknd",
			songName: "Blinding Lights"
		}
	]
  return( tracks ) 
}