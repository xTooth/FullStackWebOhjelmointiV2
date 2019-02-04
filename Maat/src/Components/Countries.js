import React from 'react'
import Country from './Country.js'
import SingleCountry from './SingleCountry.js'
const Countries = (props) => {

  const countries = props.places.filter(cntr => cntr.name.toLowerCase().includes(props.filter.toLowerCase()))
    .map((c, i) => <Country key={i} name={c.name} show={props.show}/>)
  const countries2 = props.places.filter(cntr => cntr.name.toLowerCase().includes(props.filter.toLowerCase()))
    .map((c, i) => <SingleCountry key={i} name={c.name} lang={c.languages} capital={c.capital} population={c.population} flag={c.flag} />)

  if (countries.length > 10 && props.filter.length !== 0) {
    return (
      <p>Too many matches, please be more specific</p>
    )
  }
  if (countries.length > 1) {
    return (
      <>
        <ul>
          {countries}
        </ul>
      </>
    )
  }

  return (
    <>
      {countries2}

    </>
  )
}



export default Countries