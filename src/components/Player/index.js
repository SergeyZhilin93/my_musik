import React, { useEffect, useState, useRef } from "react";
import "./style.scss"
import Album from "../CustomPlayer/images/linkin_park_album.jpeg"
import { songs } from '../CustomPlayer/constans.js'
import { AiFillPlayCircle, AiFillPauseCircle, AiFillPushpin } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious, BiVolumeFull, BiVolumeLow, BiVolume, BiVolumeMute, BiSync, BiShuffle, BiListUl } from "react-icons/bi";
import { IconContext } from "react-icons";

export function Player() {

  const audio = useRef()
	const progresBarEm = useRef()
	const opacitySync = useRef()
	const opacityShufle = useRef()
	const opacityList = useRef()
	const opacityFillPushPin = useRef()

	const [statevolum, setStateVolum] = useState(0.8) //Громкость звука
  const [dur, setDur] = useState(0) //Продолжительность
  const [currentTime, setCurrentTime] = useState(0) // Текущее время трека
	const [isPlaying, setIsPlaying] = useState(false) // Активнось трека
	const [currentSong, setCurrentSong] = useState(songs[0]) //Порядок трека
	const [tracks, setTracks] = useState(songs) //Массив песен
	const [mute, setMute] = useState(false)


	const calculateTimer = (s) => {
    return (s - (s %= 60)) / 60 + (10 < s ? ':' : ':0') + ~~s
  }

	const PlayPause = () => {
		setIsPlaying(!isPlaying)		
	}

	const handleVolume = (v) => {
    setStateVolum(v)
    audio.current.volume = v
  }

	const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

	const handleEnd = () => {
		if (audio.current.ended) {
			return nextSong()
		}
  }

	const nextSong = () => {
		const index = tracks.findIndex(x=>x.name == currentSong.name);
    
		if (index == tracks.length - 1)
			{
				setCurrentSong(tracks[0])
			}
    else
			{
				setCurrentSong(tracks[index + 1])
			}
  }

	const prevSong = () => {
		const index = tracks.findIndex(x=>x.name == currentSong.name);
		if (index == 0)
			{
				setCurrentSong(tracks[tracks.length - 1])
			}
		else
			{
				setCurrentSong(tracks[index - 1])
			}
  }

	const handleClickOpacity = (ref) => {
		if (ref.current.style.opacity == 0.5) {
			ref.current.style.opacity = 1
		} else {
			ref.current.style.opacity = 0.5
		}
	}

	const handleMute = () => {
		setMute(!mute)
	}

	useEffect(() => {
		if (isPlaying) {
			audio.current.play()
			audio.current.autoplay = true
		} else {
			audio.current.pause()
			audio.current.autoplay = false
		}
		if (mute) {
			audio.current.muted = mute
		} else {
			audio.current.muted = mute
		}
		opacitySync.current.style.opacity = 0.5
		opacityShufle.current.style.opacity = 0.5
		opacityList.current.style.opacity = 0.5
		opacityFillPushPin.current.style.opacity = 0.5
		const x = (currentTime * 100) / dur
		const color = `-webkit-linear-gradient(left, white 0%, white ${x}%, #000 0%, #000 100% )`
		progresBarEm.current.style.background = color
	}, [isPlaying, currentTime])

	useEffect(() => {
    const timeUpdate = (e) => {
      setCurrentTime(e.target.currentTime);
    };
    audio.current.addEventListener("timeupdate", timeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", timeUpdate);
    };
  });

	
	return(
		<>
			<div className="player-component">
				<audio
					onCanPlay={(e) => setDur(e.target.duration)}
					onEnded={handleEnd}
					ref={audio}
					type="audio/mpeg"
					preload="metadata"
					src={Object.values(currentSong.audio).toString()}
				/>
				<div className="range">
					<input
						type="range"
						min="0"
						value={dur ? (currentTime * 100) / dur : 0}
						className="timeLine"
						onChange={handleProgress}
						ref={progresBarEm}
					/>
				</div>
				<div className="components">
					<div className="infoPlayer">
						<img className="musicCover" src={Album}/>
						<div className="playButons">
							<button className="playButton" onClick={prevSong}>
								<IconContext.Provider value={{ size: "2em", color: "#fff" }}>
									<BiSkipPrevious/>
								</IconContext.Provider>
							</button>
							<button className="playButton" onClick={PlayPause}>
								{
									!isPlaying ? (
										<IconContext.Provider value={{ size: "3em", color: "#fff" }}>
											<AiFillPlayCircle/>
										</IconContext.Provider>
									) : (
										<IconContext.Provider value={{ size: "3em", color: "#fff" }}>
											<AiFillPauseCircle/>
										</IconContext.Provider>

									)
								}
							</button>
							<button className="playButton" onClick={nextSong}>
								<IconContext.Provider value={{ size: "2em", color: "#fff" }}>
									<BiSkipNext/>
								</IconContext.Provider>
							</button>
						</div>
						<div className="nameSong">
							<p className="title">{currentSong.name}</p>
						</div>
					</div>
					<div className="settingsPlayer">
						<div className="timeSong">
							<p className="timeSong__view">{calculateTimer(currentTime)}</p>
							<p className="timeSong__view">/</p>
							<p className="timeSong__view">{calculateTimer(dur)}</p>
						</div>
						<div className="volume">
							<div className="volume__icon" onClick={handleMute}>
								{(statevolum == 0 || mute) ? (
										<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
											<BiVolumeMute/>
										</IconContext.Provider>
									) : null}
								{(statevolum < 0.3 && statevolum > 0 && !mute) ? (
									<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
										<BiVolume/>
									</IconContext.Provider>
								) : (
									null
								)}
								{(statevolum < 0.6 && statevolum >= 0.3 && !mute) ? (
									<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
										<BiVolumeLow/>
									</IconContext.Provider>
								) : null}
								{(statevolum >= 0.6 && statevolum <= 1 && !mute) ? (
									<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
										<BiVolumeFull/>
									</IconContext.Provider>
								) : null}
							</div>
							<div className="volume__bar">
								<input
									value={Math.round(statevolum * 100)}
									className="volume__bar__line"
									type="range"
									name="volBar"
									id="volBar"
									onChange={(e) => handleVolume(e.target.value / 100)}
								/>
							</div>
						</div>
						<div className="settingsIcon">
							<div className="settingsIcon__sync" ref={opacitySync} onClick={() => handleClickOpacity(opacitySync)}>
								<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
									<BiSync/>
								</IconContext.Provider>
							</div>
							<div className="settingsIcon__shufle" ref={opacityShufle} onClick={() => handleClickOpacity(opacityShufle)}>
								<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
									<BiShuffle/>
								</IconContext.Provider>
							</div>
							<div className="settingsIcon__playList" ref={opacityList} onClick={() => handleClickOpacity(opacityList)}>
								<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
									<BiListUl/>
								</IconContext.Provider>
							</div>
							<div className="settingsIcon__fillPushpin" ref={opacityFillPushPin} onClick={() => handleClickOpacity(opacityFillPushPin)}>
								<IconContext.Provider value={{ size: "1em", color: "#fff" }}>
									<AiFillPushpin/>
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}