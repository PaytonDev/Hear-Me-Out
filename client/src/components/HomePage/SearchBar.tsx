import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import Search from "@material-ui/icons/Search"
import SearchResults from "./SearchResults";
import "./SearchBar.css"
import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { getSearchResults } from "../../API";
import { Box } from "@material-ui/core";


// Move to styles file!
const StyledOutlinedInput = withStyles({
    root: {
        borderColor: "#FCA511",
        outlineColor: "#FCA511",
        color: "#FCA511"
    }
})(OutlinedInput)


export type SearchBarProps = {
    currentSong: HTMLAudioElement | undefined;
    handlePlaySong: any
}

export default function SearchBar(props: SearchBarProps) {
    const [query, setQuery] = useState('')
    const [albums, setAlbums] = useState([])
    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])


    useEffect(() => {
        handleChange(query)
    }, [query])

    const handleChange = async (query: string) => {
        if (query === '') {
            return
        }
        const res = await getSearchResults(query)
        setAlbums(res.data.albums.items)
        setArtists(res.data.artists.items)
        setSongs(res.data.tracks.items)
    }
    
    return (
        <>
            <FormControl variant="outlined" className="searchbar">
                <InputLabel htmlFor="searchbar">What would you like to hear</InputLabel>
                <StyledOutlinedInput
                    id="searchbar"
                    notched
                    onChange= { e => setQuery(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Box>
                <SearchResults
                    artists={artists}
                    albums={albums}
                    songs={songs}
                    currentSong={props.currentSong}
                    query={query}
                    handlePlaySong={props.handlePlaySong}
                />
            </Box>
        </>
    )
}