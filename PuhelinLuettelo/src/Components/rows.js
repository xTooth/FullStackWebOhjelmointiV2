import React from 'react'
import Person from './person.js'

const Rows = (props) => {

  const p = props.persons
    .filter(per => per.name.toLowerCase().includes(props.filter.toLowerCase()))
    .map(person => <Person key={person.name} value={person} rem={props.rem}/>)

  return (
    <>
      <ul>
        {p}
      </ul>
    </>
  )
}



export default Rows