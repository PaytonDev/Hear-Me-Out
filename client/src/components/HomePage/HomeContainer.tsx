import { Container } from "@material-ui/core/"
import { useState } from "react"
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import "./HomeContainer.css"
import SearchBar from "./SearchBar"





const HomeContainer = () => {
    const [currentSong, setCurrentSong] = useState<HTMLAudioElement>()

    const handlePlaySong = (song: any) => {
        if (song === undefined) return
        setCurrentSong(song)
        song.song.play()
        song.isPlaying = true
    }

    const handlePauseSong = (song: any) => {
        song.song.pause()
        song.isPlaying = false
    }

console.log(currentSong)

    return (
        <div className="home-container">
            <Container >
                <header className="home-hero">Hear Me Out</header>
                <SearchBar currentSong={currentSong} handlePlaySong={handlePlaySong}/>
            </Container>
            <PlayerWidget currentSong={currentSong} handlePlaySong={handlePlaySong} handlePauseSong={handlePauseSong}/>
        </div>
    )
}

export default HomeContainer;