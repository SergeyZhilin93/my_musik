import { render } from '@testing-library/react';
import React from 'react';

export function TestArray() {
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

  const test = tracks.map((track) => <p>{track.author + ' - ' + track.songName}</p>)

  return(
    <>
      {test}
    </>
  )
}