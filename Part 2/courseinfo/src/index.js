import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ content }) => {
  return (
    <h1>{content}</h1>
  )
}


const Total = ({ parts }) => {
  const sum = parts.reduce ((counter, part) => counter + part.exercises, 0)
  return(
    <p>Number of exercises {sum}</p>
  ) 
}


const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(
        part => 
          <Part key = {part.id} 
                part = {part}
          />
      )}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Header content = {course.name}/>
    <Content parts = {course.parts}/>
    <Total parts = {course.parts}/>
    </>
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))