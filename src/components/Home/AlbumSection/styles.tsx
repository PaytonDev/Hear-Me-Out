import { makeStyles } from "@material-ui/styles";

// dark grey #1D1F22
// orange #fca511

const styles = makeStyles({
  tableContainer: {
    margin: "2rem 3rem",
  },
  songTableCell: {
    width: "400px",
  },
  albumImageStyles: {
    maxHeight: 300,
  },
  songUlStyles: {
    marginBottom: 0,
    padding: "1em 0",
  },
  songLiStyles: {
    borderBottom: "1px solid #fca511",
    padding: ".5em 0",
  },
  songImageStyles: {
    maxHeight: 40,
  },
  songNameStyles: {
    marginLeft: 10,
    width: "50%",
  },
  songInfoStyles: {
    width: "31%",
    textAlign: "center",
  },
  songInfoHeaderStyles: {
    textAlign: "center",
    color: "#fca511",
    verticalAlign: "top",
    ":hover": {
      cursor: "pointer",
    },
  },
  songNameHeaderStyles: {
    width: "30%",
    color: "rgb(0, 0, 0)",
    marginRight: 45,
    verticalAlign: "top",
  },
  albumSectionContainer: {
    marginTop: "4em",
    marginBottom: "5em",
  },
  albumTitleStyles: {
    fontSize: 40,
  },
  albumTitleArtistStyles: {
    fontSize: 32,
  },
});

export { styles };
