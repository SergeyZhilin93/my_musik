import React from 'react';

export function TestArray() {
  const tracks = [
		{
      id: 1,
			author: 'Tiesto',
			songName: 'Business',
		},
		{
      id: 2,
			author: 'T-Mass',
			songName: 'Can you feel it',
		},
		{
      id: 3,
			author: 'F.O.O.L',
			songName: 'Guns',
		},
		{
      id: 4,
			author: "The Weeknd",
			songName: "Blinding Lights"
		}
	]
  const test = tracks.map((track) => <p key={track.id}>{track.author + ' - ' + track.songName}</p>)
  
  return(
    <>
      {test}
    </>
  )
}