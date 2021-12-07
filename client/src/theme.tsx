import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fca511",
    },
    background: {
      default: "#212529",
      paper: "#0e1012",
    },
    text: {
      primary: "#fca511",
      secondary: "#0e1012",
    },
  },
});
