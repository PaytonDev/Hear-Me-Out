import { Container } from "@material-ui/core/";
import { useState } from "react";
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import SearchBar from "./SearchBar/SearchBar";
import "./Home.css";

interface HomeProps {
  token: string | undefined;
}

const Home = (props: HomeProps) => {
  const [openRecentlyPlayed, setOpenRecentlyPlayed] = useState(false);
  const { token } = props;

  return (
    <>
      {token ? (
        <div className="home-container">
          <Container>
            <header className="home-hero">Hear Me Out</header>
            <SearchBar />
          </Container>
          <PlayerWidget
            openRecentlyPlayed={openRecentlyPlayed}
            setOpenRecentlyPlayed={setOpenRecentlyPlayed}
          />
        </div>
      ) : null}
    </>
  );
};

export default Home;
