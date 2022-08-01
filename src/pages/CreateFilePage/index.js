import React from 'react'
import './style.css'

export function CreateFilePage(props) {
	// const handleSubmit = () => {
	// 	console.log('Получен фокус на поле ввода')
	// }
	const test = () => {
		if(!props.hui){
			return null
		}
		return props.hui
	}
  return(
		<>
			<form type="submit" className='create_file-container'>
				<h2>{test()}</h2>
				<input type="text" />
				<input type="text" />
				<button className='create_file-container__button'>Add Song</button>
			</form>
		</>
	)
}