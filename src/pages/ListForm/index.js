import React from 'react'
import './style.css'

export function ListPage() {
	let firstSong = {
		author: 'Tiesto',
		songName: 'Business',
	}
	let secondSong = {
		author: 'T-Mass',
		songName: 'Fool',
	}
	let trithSong = {
		author: 'F.O.O.L',
		songName: 'Guns',
	}
	// const test = () => {
	// 	console.log('song:', `${user.author} - ${user.songName}`)
	// }
	return(
		<>
			<div className='list-page-container'>
				<h1>List Songs:</h1>
				<p className='list-page-container__song'>{firstSong.author} - {firstSong.songName}</p>
				<p className='list-page-container__song'>{secondSong.author} - {secondSong.songName}</p>
				<p className='list-page-container__song'>{trithSong.author} - {trithSong.songName}</p>
			</div>
		</>
	)
}