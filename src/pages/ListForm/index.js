import React, { useState } from 'react'
import './style.css'

export function ListPage({counter}) {
  const [ count, setCount ] = useState(counter)
  return(
		<>
			<div className='list-page-container'>
        <div className='test-container'>
          <p className='test-container-dicription'>Вы кликнули {count} раз</p>
          <div>
            <button className='test-container-button' onClick={() => setCount(count + 1)}>
              Up!
            </button>
            <button className='test-container-button' onClick={() => setCount(count - 1)}>
              Down!
            </button>
            <button className='test-container-button' onClick={() => setCount(counter)}>
              Reset
            </button>
          </div>
        </div>
			</div>
		</>
	)
}