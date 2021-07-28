import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getArtistAlbums } from "../../../API";
import  styles from "./styles"

type ArtistSectionProps = {
    currentArtist: any
    handleShowAlbum: () => void
    handleCurrentAlbum: React.Dispatch<React.SetStateAction<undefined>>
    token: string | undefined
}


const ArtistSection = (props: ArtistSectionProps) => {
    const [artistAlbums, setArtistAlbums] = useState<any>([])

    const classes = styles()

    useEffect(() => {
      async function getCurrentArtistAlbums() {
        if (!props.currentArtist) return
        let res = await getArtistAlbums(props.currentArtist.id, props.token)
        setArtistAlbums(res.data.items)
      }
      getCurrentArtistAlbums()
    },[props.currentArtist, props.token])


    return (
        <Grid container spacing={3} className={classes.container}>
            <Grid item xs={6}>
                <img
                    src={props.currentArtist ? props.currentArtist.images[0].url : "Artist Image"}
                    alt={`${props.currentArtist ? props.currentArtist.name : ''} avatar`}
                    style= {{maxHeight : 300, borderRadius: "50%"}}
                />
            </Grid>
            <Grid item container xs={6}>
                <Grid item>
                    <p style={{fontSize: 64}}>{props.currentArtist ? props.currentArtist.name : "Artist Name"}</p>
                </Grid>
            </Grid>
            <Grid container item  xs={12} spacing={3}>
                <Grid container item xs={12} alignItems="flex-start">
                    <p>Albums</p>
                </Grid>
                {props.currentArtist ? artistAlbums.map((album: any, idx: number) => (
                    <Grid item xs={2} key={idx}>
                        <Box onClick={() => {props.handleCurrentAlbum(album); props.handleShowAlbum()}}>
                            <img key={`${idx}-image`} src={album.images[1].url} alt={`${album.name} avatar`} style={{maxHeight : 150}}/>
                            <div key={`${idx}-album`} >{album.name}</div>
                        </Box>
                    </Grid>
                )): "Album Songs"}
            </Grid>
        </Grid>
    )
}

export default ArtistSection;