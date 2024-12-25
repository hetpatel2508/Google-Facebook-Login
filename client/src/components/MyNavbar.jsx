import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'

export default function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="decoration-transparent text-inherit">
            Navbar
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/features" className="decoration-transparent text-inherit">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/pricing" className="decoration-transparent text-inherit">
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="decoration-transparent text-inherit">
            Log In
          </Nav.Link>
          <Nav.Link as={Link} to="/logout" className="decoration-transparent text-inherit">
            Log Out
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
