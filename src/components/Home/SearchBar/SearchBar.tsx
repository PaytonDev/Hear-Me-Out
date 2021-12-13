import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import SearchResults from "./SearchResults/SearchResults";
import { useFormik } from "formik";
import styles from "./styles";
import { useState } from "react";

/*
On load the Searchbar component uses the getSearchResults API function, user query,
 and the access token to retrieve arrays of song, album, and artist objects. Then assigns each array to a state.
 getSearchResults is controlled by the useEffect hook with query as a dependency so
 as the query changes.

*/
interface FormValues {
  query: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const initialValues: FormValues = { query: "" };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {},
  });

  const classes = styles();

  return (
    <>
      <FormControl variant="outlined" className="searchbar">
        <TextField
          id="searchbar"
          label="What would you like to hear?"
          variant="outlined"
          name="query"
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

      {query || formik.touched.query ? <SearchResults query={query} /> : null}
    </>
  );
}
