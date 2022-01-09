import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import useStyles from './styles'

const Header = ({ setUserCoords }) => {

    const classes = useStyles()

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Trippo
                </Typography>
                <Box display="flex">
                    <Button className={classes.button} size="small" onClick={() => setUserCoords()}>
                        <MyLocationIcon />
                    </Button>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search ..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header