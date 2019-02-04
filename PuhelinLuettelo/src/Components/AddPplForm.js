import React from 'react'

const AddPplForm = (props) => {
 return( <form onSubmit={props.addName}>
    <div> 
      nimi: <input value={props.newName} onChange={props.handleNameChange} />
      <br />
      numero: <input value={props.newNumber} onChange={props.handleNumbChange} />
    </div>
    <div>
      <button type="submit" >lisää</button>
    </div>
  </form>
 )
}
export default AddPplForm