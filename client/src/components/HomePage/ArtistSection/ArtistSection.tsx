import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getArtistAlbums } from "../../../API";

type ArtistSectionProps = {
    currentArtist: any
}

const ArtistSection = (props: ArtistSectionProps) => {
    const [artistAlbums, setArtistAlbums] = useState<any>([])

    useEffect(() => {
      async function getCurrentArtistAlbums() {
        if (!props.currentArtist) return
        let res = await getArtistAlbums(props.currentArtist.id)
        setArtistAlbums(res.data.items)
      }
      getCurrentArtistAlbums()
    },[props.currentArtist])


    return (
        <Box>
            <img
                src={props.currentArtist ? props.currentArtist.images[1].url : "Artist Image"}
                alt={`${props.currentArtist ? props.currentArtist.name : ''} avatar`}
            />
            <p>{props.currentArtist ? props.currentArtist.name : "Artist Name"}</p>
            <Box>
                <ul>
                {props.currentArtist ? 
                artistAlbums.map((album: any, idx: number) => (
                    <li key={idx}>
                        <div key={`${idx}-album`} >{album.name}</div>
                        <img key={`${idx}-image`} src={album.images[1].url} alt={`${album.name} avatar`}/>
                    </li>
                )): "Album Songs"}
                </ul>
            </Box>

        </Box>
    )
}

export default ArtistSection;