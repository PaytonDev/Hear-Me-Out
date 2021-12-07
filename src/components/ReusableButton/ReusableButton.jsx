import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

const StyledButton = withStyles({
    root: {
        background: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
        border: 2,
        color: "rgb(252, 165, 17)",
        height: 40,
        padding: '0 25px',
        boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`
    }
})(Button)

export default StyledButton