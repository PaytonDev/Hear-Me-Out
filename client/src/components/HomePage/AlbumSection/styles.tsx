import { makeStyles } from "@material-ui/styles";


// dark grey #1D1F22
// orange
const muiGridContainer = makeStyles({
    root: {
        backgroundColor: "#1D1F22",
        margin: "2em 0",
        padding:"2em",
        borderRadius: 10,
    }
})

const cssStyles = {
    albumImageStyles: {
        maxHeight: 300
    },
    songUlStyles: {
        marginBottom: 0,
        padding: '1em 0',
        borderTop: "1px solid rgba(0, 0, 0, 0.3)",
        

    },
    songLiStyles: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        padding: ".5em 0"
    },
    songImageStyles: {
        maxHeight: 40,
    },
    songNameStyles: {
        display: 'inline',
        marginLeft: 10,
        width: "30%",
    },
    songInfoStyles: {
        width: "31%",
        textAlign: "center" as const,
    },
    songInfoHeaderStyles: {
        width: "30%",
        textAlign: "center" as const,
        color: "rgb(0, 0, 0)",
        marginRight: 10,
        verticalAlign: "top",
        ':hover': {
            cursor: "pointer"
        }
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
    }

}

export {muiGridContainer, cssStyles}