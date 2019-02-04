import React, { useState, useEffect } from 'react'
import CountryMan from './CountryMan.js'
import Countries from './Countries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const hook = () => {
        CountryMan.getAll()
            .then(response => {
                setCountries(response.data)
            })
    }

    const handleFilter = (event) => {
        event.preventDefault()
        setFilter(event.target.value);
    }

    useEffect(hook, [])
    
    const show = (props) =>{
        setFilter(props)
    }
    return (
        <div>
            <form>
                Find a country: <input value={filter} onChange={handleFilter} />
            </form>
            <Countries places={countries} filter={filter} show={show}/>

        </div>
    )

}

export default App