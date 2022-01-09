import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'


const App = () => {

    const [places, setPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClicked] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    // get user location information
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({
                lat: latitude,
                lng: longitude
            })
        })
    }, [])

    useEffect(() =>{
        setIsLoading(true)
        // call the api
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data)
                setPlaces(data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List childClicked={childClicked} places={places} isLoading={isLoading} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map setChildClicked={setChildClicked} places={places} setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
                </Grid>
            </Grid>
        </>
    )
}

export default App