import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Todo(props) {
  return (
    <>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <Button variant="danger" size="sm" onClick={()=> props.onDelete(props.todo)}>Delete</Button>
    </>
  )
}
