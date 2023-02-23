import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { mockTracks } from './constants';
import './style.scss'

// ToDo: Rename component

export function CreateFilePage() {
  const { register, handleSubmit } = useForm()
  const [tracks, setTracks] = useState(mockTracks);
  
  const onSubmit = (data) => setTracks([...tracks, data])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='create_file-container'>
        <input {...register("author")}/>
        <input {...register("songName")}/>
        <input value="Добавить песню" type='submit'/>
      </div>
      <h1>List Songs:</h1>
			<div className='tracklist'>
        { tracks.map((track) => <i className='tracklist__song' key={track.id}>{track.author + ' - ' + track.songName}</i>) }
			</div>
    </form>
  ) 
}