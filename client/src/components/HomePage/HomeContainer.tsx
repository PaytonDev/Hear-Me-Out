import Container  from "@material-ui/core/Container"
import { useState } from "react"

import "./HomeContainer.css"
import SearchBar from "./SearchBar"


export type HomeContainerProps = {

}


const HomeContainer = (props: HomeContainerProps) => {
    const [currentSong] = useState<any>()


    return (
        <div className="home-container">
            <Container >
                <header className="home-hero">Hear Me Out</header>
                <SearchBar currentSong={currentSong}/>
            </Container>
        </div>
    )
}

export default HomeContainer;