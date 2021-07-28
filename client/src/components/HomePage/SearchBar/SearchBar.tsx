import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Search from "@material-ui/icons/Search"
import SearchResults from "../SearchResults";
import styles from "./styles";
import { useState, useEffect } from "react";
import { getSearchResults } from "../../../API";



export type SearchBarProps = {
    currentSong: HTMLAudioElement | undefined;
    handlePlaySong: any
    token: string | undefined
}

export default function SearchBar(props: SearchBarProps) {
    const token = props.token
    const classes = styles()

    const [query, setQuery] = useState('')
    const [albums, setAlbums] = useState([])
    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])
    const [resultsVisible, setResultsVisible] = useState(false)


    useEffect(() => {
        if (!query) return
        handleChange(query, props.token)

    }, [query, props.token])


    const handleChange = async (query: string, token: string | undefined) => {
        if (query === '') {
            return
        }
        const res = await getSearchResults(query, token)
        setAlbums(res.data.albums.items)
        setArtists(res.data.artists.items)
        setSongs(res.data.tracks.items)
    }

    
    
    return (
        <>
            <FormControl variant="outlined" className="searchbar">
                <TextField
                    id="searchbar"
                    label="What would you like to hear?"
                    variant="outlined"
                    className = {classes.root}
                    onChange= { e => setQuery(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

                <SearchResults
                    artists={artists}
                    albums={albums}
                    songs={songs}
                    currentSong={props.currentSong}
                    query={query}
                    handlePlaySong={props.handlePlaySong}
                    token={token}
                />
        </>
    )
}