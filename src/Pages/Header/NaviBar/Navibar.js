import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

import './Navibar.css'

const Navibar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="positioning container">
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Fly Hopes BD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {user?.email ?
                                <button onClick={logOut} className="btn btn-light">LogOut</button>
                                :
                                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>}
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/mybookings">My Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/managebookings">Manage My Bookings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addaservice">Add a Service</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Text className="directions">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navibar;