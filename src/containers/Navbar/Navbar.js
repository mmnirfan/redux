import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Navbars = () => {
    return (
        <div className="container-fluid nav_bg mb-5">
            <Navbar bg="light" className="fixed-top" expand="lg">
            <Navbar.Brand to="/">My-First-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                <NavLink exact to="/" className="nav-link mr-4">Home</NavLink>
                <NavLink exact to="/About" className="nav-link mr-4">About</NavLink>
                <NavLink exact to="/Students" className="nav-link mr-4">Students</NavLink>
                <NavLink exact to="/Todo" className="nav-link mr-4">Todo</NavLink>
                <NavLink exact to="/Contact" className="nav-link mr-5">Contact Us</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
    
};

export default Navbars;