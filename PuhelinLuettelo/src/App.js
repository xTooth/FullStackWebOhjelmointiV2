import React, { useState, useEffect } from 'react'
import Rows from './Components/rows.js'
import AddPplForm from './Components/AddPplForm'
import PersonService from './Services/PersonService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] =useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const hook = () => {
    PersonService.getAll()
      .then(response => {
        console.log('data retrieved')
        setPersons(response.data)
      })
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="success">
        {message}
      </div>
    )
  }
  const NotificationE = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }
  useEffect(hook, [])

  const rem = (props) => {
    console.log(props)
    PersonService.delete(props).then(res => { hook() })
  }

  const addName = (event) => {
    event.preventDefault()

    const person = {
      name: newName,
      number: newNumber
    }

    
    if (persons.filter(per => per.name === person.name).length > 0) {
      alert(`person ${newName} is already on the list`)
      setNewName('')
      setNewNumber('')
    } else {
      setNewName('')
      setNewNumber('')
      PersonService.create(person).then(res => { hook() })
      setMessage(
        `Henkilö '${person.name}' lisätty onnistuneesti`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  const handleNumbChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value);
  }

  return (
    <div>
      <Notification message={message}/>
      <NotificationE message={errorMessage} />
      <h2>Puhelinluettelo</h2>
      <form>
        rajaa näytettävät: <input value={filter} onChange={handleFilter} />
      </form>
      <h2>Lisää uusi</h2>
      <AddPplForm addName={addName}
        handleNameChange={handleNameChange} newName={newName}
        handleNumbChange={handleNumbChange} newNumber={newNumber} />

      <h2>Numerot</h2>
      <Rows filter={filter} persons={persons} rem={rem} />
    </div>
  )

}

export default App