import axios from 'axios'

const baseUrl = 'http://api.apixu.com/v1/forecast.json?key=c160042a54804650bd6122707190402&q='

const getAll = (props) => {
    console.log(baseUrl + props.name)
    return axios.get(baseUrl+props.name)
}
export default {
    getAll: getAll
}