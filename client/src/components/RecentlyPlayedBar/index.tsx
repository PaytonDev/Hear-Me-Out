import { Grid, Button, Drawer, Card, Box } from "@material-ui/core";
import { useState } from "react";



type RecentlyPlayedProps = {
    song: Song
    open: boolean
}

const RecentlyPlayedBar = (props: RecentlyPlayedProps) => {
    const [visible, setVisible] = useState(false)

    return (
        <Box>
            <Drawer>
                
            </Drawer>
        </Box>
    )
}