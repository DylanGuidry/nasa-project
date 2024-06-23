import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/NASA-Logo-No-Background.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Marsvbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="NASA logo"
            /> 
            <span style={{ marginLeft: '10px' }}>Space Project</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/marsweather">Mars</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Marsvbar;