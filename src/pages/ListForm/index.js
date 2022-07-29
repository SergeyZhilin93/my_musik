import React from 'react'
import './style.css'

export function ListPage() {
	const tracks =[
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
		}
	]
	const test = () => {
		for(let track of tracks) {
			console.log(`${track.author} - ${track.songName}`)
		}
	}
	
	return(
		<>
			<div className='list-page-container'>
				<button onClick={test}>TEST</button>
				<h1>List Songs:</h1>
				{/* <p className='list-page-container__song'>{firstSong.author} - {firstSong.songName}</p>
				<p className='list-pacontainer__songge-'>{secondSong.author} - {secondSong.songName}</p>
				<p className='list-page-container__song'>{trithSong.author} - {trithSong.songName}</p> */}
			</div>
		</>
	)
}