import { loginURL } from "../../controller/spotify";
import { Grid, Button, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles"
import styles from "./styles";

const StyledButton = withStyles({
    root: {
        background: "rgb(252, 165, 17)",
        borderRadius: 10,
        border: 2,
        color: "#1d1f22",
        height: 60,
        padding: '0 25px',
        boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),`
       
    }
})(Button)


const LoginPage  = () => {
    const classes = styles()
    return (
        <Grid>
            <Box className={classes.loginHeader}>Welcome To <br/> Hear Me Out</Box>
            <p>This app uses Spotify so please Login Below.</p>
            <StyledButton href={loginURL}>Login with Spotify</StyledButton>
        </Grid>
    )
}

export default LoginPage