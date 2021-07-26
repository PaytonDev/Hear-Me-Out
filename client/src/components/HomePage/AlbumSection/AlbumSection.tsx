import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getAlbumSongs } from "../../../API";

type AlbumSectionProps = {
  currentAlbum: any
}


 const AlbumSection = (props: AlbumSectionProps) => {
   const [albumSongs, setAlbumSongs] = useState<any>([])

   useEffect(() => {
     async function getCurrentAlbumSongs() {
       if (!props.currentAlbum) return
       let res = await getAlbumSongs(props.currentAlbum.id)
       setAlbumSongs(res.data.items)
     }
     getCurrentAlbumSongs()
   },[props.currentAlbum])


    return (
        <Box>
            <p>{props.currentAlbum ? props.currentAlbum.name : "Album Name"}</p>
            <img
             src={props.currentAlbum ? props.currentAlbum.images[1].url : ""}
             alt={`${props.currentAlbum ? props.currentAlbum.name : ''} album cover`}/>
            <p>{props.currentAlbum ? props.currentAlbum.artists[0].name : "Artist Name"}</p>
            <Box>
              <ul>
              {props.currentAlbum ? 
                albumSongs.map((song: any, idx: number) => (
                  <li key={idx}>{song.name}</li>
                )): "Album Songs"}
                </ul>
            </Box>
        </Box>
    )
  }

  export default AlbumSection