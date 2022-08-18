import React from 'react'
import { TestArray } from '../../services/testArray'
import './style.css'

export function ListPage(props) {
  
  return(
		<>
			<div className='list-page-container'>
				{/* <button onClick={hui}>TEST</button> */}
				<h1>List Songs:</h1>
				<div>
					<TestArray/>
				</div>
			</div>
		</>
	)
}