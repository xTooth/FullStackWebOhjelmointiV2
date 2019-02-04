import React, { useState, useEffect } from 'react'
import WeatherMan from './WeatherMan.js'



const SingleCountry = (props) => {
  const [weather, setWeather] = useState([])
  const [cond, setCond] = useState([])
  const lang = props.lang
    .map((c, i) => <li key={i}>{c.name}</li>)

  const hook = () => {
    WeatherMan.getAll(props)
      .then(response => {
        setWeather(response.data.current)
        setCond(response.data.current.condition)
      })

  }
  useEffect(hook, [])
  console.log(props.capital)
  return (
    <>
      <h1>{props.name}</h1>
      <p> capital {props.capital}</p>
      <p>population {props.population}</p>
      <h2>languages</h2>
      <ul>
        {lang}
      </ul>
      <br />
      <img src={props.flag} alt="no werk" width="200" />
      <h3>Weather in {props.capital}</h3>
      <p> temperature: {weather.temp_c} Celcius</p>
      <img src={cond.icon}></img>
      <p> wind: {weather.wind_kph}kph direction {weather.wind_dir}</p>
    </>
  )
}
export default SingleCountry