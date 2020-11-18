import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (<Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
        {(props.routes || []).map(route => <Nav.Link as={Link} {...route} > {route.to.split('/')[1]} </Nav.Link>)}
    </Nav>
  </Navbar>)
}

export default NavBar;

