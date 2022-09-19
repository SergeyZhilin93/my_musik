import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { TestArray } from '../../services/testArray'
import './style.css'

export function CreateFilePage() {
  const { register, handleSubmit } = useForm()
  const [arr, setArr] = useState(TestArray);
  
  const result = arr.map((track) => <i className='list-songs' key={track.id}>{track.author + ' - ' + track.songName}</i>)
  // const result = arr.map((element, index) => {
  //    return <p key={index}>{element.author + " - " + element.songName}</p>;
  // });

  const onSubmit = (data) => {
    setArr([...arr, data])
  }
  // console.log(result)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='create_file-container'>
        <input {...register("author")}/>
        <input {...register("songName")}/>
        <input value="Добавить песню" type='submit'/>
      </div>
      <h1>List Songs:</h1>
			<div>
        {result}
			</div>
    </form>
  ) 
}