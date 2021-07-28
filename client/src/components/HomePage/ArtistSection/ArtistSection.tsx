import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getArtistAlbums } from "../../../API";
import "./ArtistSection.css"

type ArtistSectionProps = {
    currentArtist: any
    handleShowAlbum: () => void
    handleCurrentAlbum: React.Dispatch<React.SetStateAction<undefined>>
    token: string | undefined
}

const ArtistSection = (props: ArtistSectionProps) => {
    const [artistAlbums, setArtistAlbums] = useState<any>([])

    useEffect(() => {
      async function getCurrentArtistAlbums() {
        if (!props.currentArtist) return
        let res = await getArtistAlbums(props.currentArtist.id, props.token)
        setArtistAlbums(res.data.items)
      }
      getCurrentArtistAlbums()
    },[props.currentArtist, props.token])


    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <img
                    src={props.currentArtist ? props.currentArtist.images[0].url : "Artist Image"}
                    alt={`${props.currentArtist ? props.currentArtist.name : ''} avatar`}
                />
            </Grid>
            <Grid item xs={6}>
                <p>{props.currentArtist ? props.currentArtist.name : "Artist Name"}</p>
            </Grid>
            <Grid container item  xs={12} spacing={3}>
                {props.currentArtist ? artistAlbums.map((album: any, idx: number) => (
                    <Grid item xs={3} key={idx}>
                        <Box onClick={() => {props.handleCurrentAlbum(album); props.handleShowAlbum()}}>
                            <div key={`${idx}-album`} >{album.name}</div>
                            <img key={`${idx}-image`} src={album.images[1].url} alt={`${album.name} avatar`}/>
                        </Box>
                    </Grid>
                )): "Album Songs"}
            </Grid>
        </Grid>
    )
}

export default ArtistSection;