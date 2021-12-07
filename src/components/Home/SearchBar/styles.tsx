import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  root: {
    marginTop: 10,
    marginBottom: "2em",
    background: "#0e1012",
    width: 500,
    "& .MuiInputLabel-outlined": {
      color: "#FCA511",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
      color: "#FCA511",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FCA511",
    },
  },
});

export default styles;
