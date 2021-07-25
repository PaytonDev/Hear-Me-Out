import Container  from "@material-ui/core/Container"
import "./HomeContainer.css"
import SearchBar from "./SearchBar"


export type HomeContainerProps = {

}

const HomeContainer = (props: HomeContainerProps) => {
    return (
        <div className="home-container">
        <Container >
            <header className="home-hero">Hear Me Out</header>
            <SearchBar />
        </Container>
        </div>
    )
}

export default HomeContainer;