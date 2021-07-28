import { makeStyles } from "@material-ui/styles"


const styles = makeStyles({
    root: {
        borderColor: "#FCA511",
        outlineColor: "#FCA511",
        color: "#FCA511",
        width: 500,
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#FCA511",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#FCA511"
        },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCA511"
        },

    },
    focused: {
        borderColor: "#FCA511"
    }
})

export default styles

