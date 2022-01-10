import axios from 'axios'

export const getPlacesData = async (type = "restaurant", sw, ne) => {
    try {
        // request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
              }
        })

        return data
    } catch(err) {
        console.error(err)
    }
}