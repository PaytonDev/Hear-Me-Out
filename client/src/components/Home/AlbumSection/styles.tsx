import { makeStyles } from "@material-ui/styles";

// dark grey #1D1F22
// orange
const muiGridContainer = makeStyles({
  root: {
    margin: "2em 0",
    padding: "2em",
    borderRadius: 10,
  },
});

const cssStyles = {
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
    display: "inline",
    marginLeft: 10,
    width: "30%",
  },
  songInfoStyles: {
    width: "31%",
    textAlign: "center" as const,
  },
  songInfoHeaderStyles: {
    textAlign: "center" as const,
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
  albumTitleStyles: {
    fontSize: 40,
  },
  albumTitleArtistStyles: {
    fontSize: 32,
  },
};

export { muiGridContainer, cssStyles };
