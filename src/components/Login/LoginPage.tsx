import { loginURL } from "../../controller/spotify";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const LoginPage = () => {
  const classes = styles();
  return (
    <Grid>
      <Box className={classes.loginHeader}>Hear Me Out</Box>
      <Typography variant="body1" component="p" className={classes.loginSubHeader}>
        A 30 second music player <br />
        powered by <span className={classes.spotifyColor}>Spotify</span>
      </Typography>
      <Button href={loginURL} className={classes.loginBtn}>
        Login
      </Button>
    </Grid>
  );
};

export default LoginPage;
