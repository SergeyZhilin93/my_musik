import React from 'react'
import './style.css'

export function CreateFilePage(props) {
	// const handleSubmit = () => {
	// 	console.log('Получен фокус на поле ввода')
	// }
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