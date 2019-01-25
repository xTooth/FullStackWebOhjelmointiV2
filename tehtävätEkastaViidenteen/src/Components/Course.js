import React from 'react'
import ReactDOM from 'react-dom'


const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            <br />
            <Total parts={course.parts} />
        </>

    )
}
const Header = (props) => {
    console.log({ props })
    return (
        <header>
            <h1>{props.course.name}</h1>
        </header>
    )
}

const Content = (props) => {
    const rows = () => props.parts.map(part =>
        <Part
            key={part.name}
            part={part}
        />
    )
    return (
        <div>
            {rows()}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <p>yhteensä {total} tehtävää</p>
    )
}

export default Course