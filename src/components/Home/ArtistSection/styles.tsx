const cssStyles = {
  songUlStyles: {
    marginBottom: 0,
    padding: "1em 0",
    borderTop: "1px solid #fca511",
  },
  songLiStyles: {
    borderBottom: "1px solid #fca511",
    padding: ".5em 0",
  },
  songImageStyles: {
    maxHeight: 40,
    maxWidth: 40,
  },
  songNameStyles: {
    display: "inline",
    marginLeft: 10,
    width: "70%",
  },
  songInfoStyles: {
    width: "30%",
    textAlign: "center" as const,
  },
  songInfoHeaderStyles: {
    width: "30%",
    textAlign: "center" as const,
    color: "rgb(0, 0, 0)",
    marginRight: 10,
    verticalAlign: "top",
    ":hover": {
      cursor: "pointer",
    },
  },
};

export default cssStyles;
