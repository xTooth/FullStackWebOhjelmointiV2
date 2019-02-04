import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    return axios.get(baseUrl)
}
const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
const del = (id) => {
    if (window.confirm('Haluatko varmasi poistaa')) {
        console.log(id)

        return axios.delete(`${baseUrl}/${id}`)

    }

}
const put = () => {

}

export default {
    getAll: getAll,
    create: create,
    update: update,
    delete: del,
    put: put
}