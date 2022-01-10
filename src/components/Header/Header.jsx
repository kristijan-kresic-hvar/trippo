import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import useStyles from './styles'

const Header = ({ setUserCoords, setCoordinates }) => {

    const classes = useStyles()
    const [autocomplete, setAutocomplete] = useState(null)

    const onLoad = (autoCom) => setAutocomplete(autoCom) 

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()

        setCoordinates({ lat, lng })
    }

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
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search ..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header