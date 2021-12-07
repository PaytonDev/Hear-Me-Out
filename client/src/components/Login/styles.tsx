import { Palette } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  loginHeader: {
    fontSize: 104,
  },
  loginSubHeader: {
    fontSize: 44,
    fontWeight: 300,
    marginTop: 0,
    marginBottom: 20,
  },
  loginBtn: {
    width: 350,
    height: 96,
    fontSize: 36,
    fontWeight: 400,
    background: "#000",
    borderRadius: 30,
    "&:hover": {
      color: "#000",
      background: "#fca511",
    },
  },
  spotifyColor: {
    color: "#1DB954",
  },
});

export default styles;
