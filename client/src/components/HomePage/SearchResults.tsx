import { Box, Link } from "@material-ui/core";



type SearchResultsProps = {
    artists: Artist[]
    albums: Album []
    songs: Song []
}

export default function SearchResults(props: SearchResultsProps) {

    const listArtists = props.artists.map((artist, idx) => 
        <li key={idx} ><Link>{artist.name}</Link></li>
    )
    const listAlbums = props.albums.map((album, idx) => 
        <li key={idx}>{album.name}</li>
    )
    const listSongs = props.songs.map((song, idx) => 
        <li key={idx}>{song.name}</li>
    )


    return (
        <Box>
            <ul>{listArtists}</ul>
            <ul>{listAlbums}</ul>
            <ul>{listSongs}</ul>
        </Box>
    )
}