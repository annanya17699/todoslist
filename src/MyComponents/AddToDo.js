import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddToDo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fail, setFail] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    if (!title || !desc) {
      setFail(true);
    } else {
      props.addToDoItem(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <Container>
      {fail ? (
        <Alert variant="danger" onClose={() => setFail(false)} dismissible>
          Title or Description is missing!
        </Alert>
      ) : (
        ""
      )}
      <h3 className="allignment-center">Add ToDos</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="todoTitle">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="todoDesc">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit" size="sm">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
