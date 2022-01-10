import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'


const App = () => {

    const [places, setPlaces] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClicked] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState("restaurants")
    const [rating, setRating] = useState(0)

    const setUserCoords = () => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({
                lat: latitude,
                lng: longitude
            })
        })
    }

    // get user location information
    useEffect(() => {
        setUserCoords()
    }, [])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)
        
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() =>{
        if(bounds.sw && bounds.ne) {
            setIsLoading(true)
            // call the api
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    console.log(data)
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
                    setFilteredPlaces([])
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [type, bounds])

    return (
        <>
            <CssBaseline />
            <Header setUserCoords={setUserCoords} setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        childClicked={childClicked} 
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map setChildClicked={setChildClicked} places={filteredPlaces.length ? filteredPlaces : places} setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
                </Grid>
            </Grid>
        </>
    )
}

export default App