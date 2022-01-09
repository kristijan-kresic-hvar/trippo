import React from 'react'
import { Box, Card, Typography, Button, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = ({ place, selected, refProp }) => {

    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    const classes = useStyles()

    console.log(selected)
    console.log(refProp)


    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : "https://www.homefolksrestaurant.com/Content/commerce-icons/menu-item-placeholder.png"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name || "This restaurant did not provide a name"}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)}  readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award, index) => (
                    <Box key={index} my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Box my={1}>
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                           <LocationOnIcon /> {place.address}
                        </Typography>
                    </Box>
                )}
                {place?.phone && (
                    <Box my={1}>
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                           <PhoneIcon /> {place.phone}
                        </Typography>
                    </Box>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails