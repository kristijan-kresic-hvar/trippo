import axios from 'axios'

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (sw, ne) => {
    try {
        // request
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '35d2501eedmsh482997fb078b314p180993jsne11f0f401f80'
              }
        })

        return data
    } catch(err) {
        console.error(err)
    }
}