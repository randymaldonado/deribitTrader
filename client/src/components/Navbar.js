import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">deribitTrader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/config">Config</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBar;