import React from 'react'


const Country = (props) => { 
  return (
      <>
        <li>{props.name}<button onClick={() => {props.show(props.name)}}>show</button></li>
      </>
    )
  }
export default Country