import React from 'react'
import Todo from './Todo'
import { Container } from 'react-bootstrap'

export default function ToDos(props) {
  return (
    <Container className='container'>
      <h3 className='allignment-center'>ToDos List</h3>
      {props.todos.length === 0 ? 'No ToDos to display' :
      props.todos.map((todo, index)=>{
        return (<div key={index}><Todo todo={todo} onDelete={props.onDelete}/> <hr/></div>)
      })}
      
    </Container>
  )
}
