import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import propTypes from 'prop-types';

export default function Header(props) {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/todoslist/'>Home</Nav.Link>
            <Nav.Link href='/about/todoslist'>About</Nav.Link>
          </Nav>
          {props.searchBar ?
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> 
          : <></>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
};
Header.defaultProps = {
    title : 'Add a title here',
    searchBar : false
};
Header.prototype = {
    title : propTypes.string,
    searchBar : propTypes.bool.isRequired
};


