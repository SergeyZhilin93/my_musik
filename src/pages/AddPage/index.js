import React from 'react'

export function AddPage() {
	const cycle = () => {
		let i = prompt("Name song", '')
		if(i == null || i == '') {
			alert("Goodbye!")	
		} else {
			alert(`Name song: ${i}!`)
		}
	}
  return(
		<>
			<div>
				<input type="button" onClick={cycle}/>
			</div>
		</>
	)
}