import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import SearchResults from "./SearchResults/SearchResults";
import styles from "./styles";
import { useState, useEffect } from "react";
import { useGetSearchResultsQuery } from "../../../features/now-playing/now-playing-api";

/*
On load the Searchbar component uses the getSearchResults API function, user query,
 and the access token to retrieve arrays of song, album, and artist objects. Then assigns each array to a state.
 getSearchResults is controlled by the useEffect hook with query as a dependency so
 as the query changes.

*/
export default function SearchBar() {
  const classes = styles();

  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  const { data, isLoading } = useGetSearchResultsQuery(query);
  console.log(data);

  // Loading token as
  useEffect(() => {
    if (isLoading) return;
    if (!query) return;

    const handleChange = async (query: string) => {
      if (query === "") {
        return;
      }
      setAlbums(data.albums.items);
      setArtists(data.artists.items);
      setSongs(data.tracks.items);
    };

    handleChange(query);
  }, [query, data]);

  return (
    <>
      <FormControl variant="outlined" className="searchbar">
        <TextField
          id="searchbar"
          label="What would you like to hear?"
          variant="outlined"
          className={classes.root}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      {isLoading ? null : (
        <SearchResults artists={artists} albums={albums} songs={songs} query={query} />
      )}
    </>
  );
}
