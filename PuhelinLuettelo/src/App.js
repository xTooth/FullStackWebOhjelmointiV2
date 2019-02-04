import React, { useState, useEffect } from 'react'
import Rows from './Components/rows.js'
import AddPplForm from './Components/AddPplForm'
import PersonService from './Services/PersonService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [mStyle, setMStyle] = useState(message)

  const hook = () => {
    PersonService.getAll()
      .then(response => {
        console.log('data retrieved')
        setPersons(response.data)
      })
  }

  const Notification = ({ message, style }) => {

    if (message === null) {
      return null
    }

    return (
      <div className={style}>
        {message}
      </div>
    )
  }

  useEffect(hook, [])

  const rem = (props) => {
    console.log(props)

    PersonService.delete(props)
      .then(res => { hook() })
      .then(res => {
        setMStyle('message')
        setMessage(`${props.value.name} poistettiin`)
        setTimeout(() => { setMessage(null) }, 5000)
      })
      .catch(error => {
        setMStyle('error')
        setMessage(`${props.value.name} on jo poistettu`)
        setTimeout(() => { setMessage(null) }, 5000)
      }).then(res => { hook() })
  }

  const addName = (event) => {
    event.preventDefault()

    const person = {
      name: newName,
      number: newNumber
    }



    const doesExist = persons.find(i => i.name === person.name);
    setNewName('')
    setNewNumber('')
    if (doesExist !== undefined) {
      if (window.confirm(`${person.name} on jo listalla, korvataanko numero uudella?`)) {
        PersonService.update(doesExist.id, person)
          .then(res => { hook() })
          .then(res => {
            setMStyle('message')
            setMessage(`${person.name} muutettiin`)
            setTimeout(() => { setMessage(null) }, 5000)})
              .catch(error => {
                setMStyle('error')
                setMessage(`${person.name} on jo poistettu`);
                setTimeout(() => { setMessage(null) }, 5000)
              }).then(res => { hook() })
          }
        

    } else {
      setNewName('')
      setNewNumber('')
      PersonService.create(person).then(res => { hook() })
      setMStyle('message')
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
      <Notification message={message} style={mStyle} />

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