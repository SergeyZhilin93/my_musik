import React from 'react'
import { TestArray } from '../../services/testArray'
import './style.css'

export function ListPage() {
  const test = () => {
    let x = prompt('Введите число кроме нуля', 0);
    if(x === '' || x === null || !isFinite(x)){
      alert('Goodbye')
    } else {
      x = +x
      for(let i = 1; i <= x; i++){
        x += i
      }
      if(x === 0){
        return alert('Я же говорил кроме нуля!')
      } alert(x)
    }
  }
	return(
		<>
			<div className='list-page-container'>
				<button onClick={test}>TEST</button>
				<h1>List Songs:</h1>
				<div>
					<TestArray />
				</div>
			</div>
		</>
	)
}