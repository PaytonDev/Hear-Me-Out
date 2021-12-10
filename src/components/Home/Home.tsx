import { Container } from "@material-ui/core/";
import { useEffect, useState } from "react";
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import SearchBar from "./SearchBar/SearchBar";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../../controller/useAuth";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setToken } from "../../features/auth/auth-slice";
import "./Home.css";

interface HomeProps {
  code: string | null;
}

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
});

const Home = ({ code }: HomeProps) => {
  const [openRecentlyPlayed, setOpenRecentlyPlayed] = useState(false);
  const dispatch = useAppDispatch();
  const token = useAuth(code);

  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
    dispatch(setToken(token));
    console.log(token);
  }, [token, dispatch]);

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
