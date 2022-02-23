import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '248d0d31e6msh3dbc20f058754e0p1d102cjsn3059651e6587'
        }
    })
}