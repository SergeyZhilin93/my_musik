import React from 'react'
import './style.css'

export function CreateFilePage() {
  return(
		<>
			<form type="submit" className='create_file-container'>
				<input type="text" />
				<input type="text" />
				<button className='create_file-container__button'>Add Song</button>
			</form>
		</>
	)
}