import { Box, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getAlbumSongs } from "../../../API";
import "./AlbumSection.css"

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
        <Grid container className=".albumSection-grid-container">
			<Grid item xs={6}>
				<Box>
					<img
						className="albumSection-img"
						src={props.currentAlbum ? props.currentAlbum.images[0].url : ""}
						alt={`${props.currentAlbum ? props.currentAlbum.name : ''} album cover`}
					/>	
				</Box>
			</Grid>
			<Grid item xs={6}>
				<Box>
					<p>{props.currentAlbum ? `${props.currentAlbum.name} by` : "Album Name"}</p>
					<p>{props.currentAlbum ? props.currentAlbum.artists[0].name : "Artist Name"}</p>
				</Box>
			</Grid>
			<Grid item xs={10} className="albumSection-songlist-grid">
				<Box >
					<ul style={{margin: 10}}>
						{props.currentAlbum ? 
							albumSongs.map((song: any, idx: number) => (
							<li key={idx}>{song.name}</li>
							)): "Album Songs"}
					</ul>
				</Box>
			</Grid>
        </Grid>
    )
  }

  export default AlbumSection