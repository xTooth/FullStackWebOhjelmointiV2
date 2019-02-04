import React from 'react'


const Person = (props) => {
 // console.log(props.value.id, props.persons)  
  return (
      <>
        <li>{props.value.name} {props.value.number} <button onClick={() => {props.rem(props.value.id)}}>poista</button></li>
      </>
    )
  }
export default Person