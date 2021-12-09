import { Container } from "@material-ui/core/";
import { useEffect, useState } from "react";
import useAuth from "../../controller/useAuth";
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import SearchBar from "./SearchBar/SearchBar";
import SpotifyWebApi from "spotify-web-api-node";
import { useAppDispatch } from "../../app/hooks";
import { setToken } from "../../features/auth/auth-slice";
import "./Home.css";
import { CLIENT_ID } from "../../server/credentials";

interface HomeProps {
  code: string | null;
}

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});

const Home = ({ code }: HomeProps) => {
  const [openRecentlyPlayed, setOpenRecentlyPlayed] = useState(false);

  let token = useAuth(code);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
    dispatch(setToken(token));
  }, [token, dispatch]);

  return (
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
  );
};

export default Home;
