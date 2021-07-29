import { Container } from "@material-ui/core/"
import { useEffect, useState } from "react"
import useAuth from "../../useAuth";
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import "./HomeContainer.css"
import SearchBar from "./SearchBar/SearchBar"
import SpotifyWebApi from "spotify-web-api-node";

interface HomeContainerProps {
    code: string | null
}

const spotifyApi = new SpotifyWebApi({
    clientId: "76007946b07a474487db86cb749ba027"
})

const HomeContainer = ({ code }: HomeContainerProps ) => {
    const [currentSong, setCurrentSong] = useState<HTMLAudioElement>()
    const [pauseButtonView, setPauseButtonView] = useState(false)
    const [playButtonView, setPlayButtonView] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Song>()

    let token = useAuth(code)

    useEffect(() => {
        if (!token) return;
        spotifyApi.setAccessToken(token)
    }, [token])

    const handlePlaySong = (song: any) => {
        if (song === undefined) return
        setCurrentSong(song)
        song.song.play()
        setPlayButtonView(!playButtonView)
        setPauseButtonView(!pauseButtonView)
    }

    const handlePauseSong = (song: any) => {
        if (song === undefined) return
        song.song.pause()
        setPauseButtonView(!pauseButtonView)
        setPlayButtonView(!playButtonView)
    }

    return (
        <div className="home-container">
            <Container >
                <header className="home-hero">
                    Hear Me Out
                </header>
                <SearchBar
                    currentSong={currentSong}
                    handlePlaySong={handlePlaySong}
                    pauseButtonView={pauseButtonView}
                    playButtonView={playButtonView}
                    token={token}
                    nowPlaying={nowPlaying}
                    setNowPlaying={setNowPlaying}
                />
            </Container>
            <PlayerWidget
                currentSong={currentSong}
                handlePlaySong={handlePlaySong}
                handlePauseSong={handlePauseSong} 
                token={token}
                pauseButtonView={pauseButtonView}
                playButtonView={playButtonView}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
            />
        </div>
    )
}

export default HomeContainer;