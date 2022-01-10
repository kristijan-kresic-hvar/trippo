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
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'f91d7cce03msh04c6da0c6a0fac5p160ec7jsn9e8da449e40e'
              }
        })

        return data
    } catch(err) {
        console.error(err)
    }
}