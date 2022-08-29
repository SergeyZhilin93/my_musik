import React, { useState, useEffect } from 'react'
import { TestArray } from '../../services/testArray'
import './style.css'

export function ListPage(props) {
  
  const [ count, setCount ] = useState(0)

  return(
		<>
			<div className='list-page-container'>
        <div className='test-container'>
        <p className='test-container-dicription'>Вы кликнули {count} раз</p>
        <div>
          <button className='test-container-button' onClick={() => setCount(count + 1)}>
            Click me!
          </button>
          <button className='test-container-button' onClick={() => setCount(count * 0)}>
            Reset
          </button>
        </div>
        </div>
				{/* <button onClick={hui}>TEST</button> */}
				<h1>List Songs:</h1>
				<div>
					<TestArray/>
				</div>
			</div>
		</>
	)
}