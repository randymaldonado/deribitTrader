import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';

function NavBar() {
  const [tradingStatus, setTradingStatus] = useState(false)
  const [tradingStatusValue, setTradingStatusValue] = useState('Run')
  const [tradingStatusButtonCSS, setTradingStatusButtonCSS] = useState('blue')

  const onClick = () => {
    if (!tradingStatus) {
      setTradingStatus(true)
      setTradingStatusValue('Stop')
      setTradingStatusButtonCSS('red')
    } else {
      setTradingStatus(false)
      setTradingStatusValue('Run')
      setTradingStatusButtonCSS('blue')
    }


  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">deribitTrader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/config">Config</Nav.Link>
        </Nav>
        <Button onClick={onClick} className={tradingStatusButtonCSS}>
          {tradingStatusValue}
        </Button>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBar;
