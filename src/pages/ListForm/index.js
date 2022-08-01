import React from 'react'
import './style.css'

export function ListPage(props) {
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

	const test = tracks.map((track) => 
		<p>{track.author + ' - ' + track.songName}</p>
		)
	// const unReadMessage = props.unReadMessage

	return(
		<>
			<div className='list-page-container'>
				{/* <button onClick={test}>TEST</button> */}
				<h1>List Songs:</h1>
				<div>
					{test}
				</div>
				{/* <h1>Здравствуйте!</h1>
				{ unReadMessage.length > 0 && 
					<p>У вас {unReadMessage.length} не прочитанных сообщений!</p>
				} */}
			</div>
		</>
	)
}