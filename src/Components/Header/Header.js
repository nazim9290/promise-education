import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const style={ textDecoration: 'none', color: 'white' , marginLeft:'15px'}
    return (
        <div className="header">
           <Navbar bg="primary" variant="dark">
    <Container>
      <NavLink to="/home" style={style}>
    <Navbar.Brand >Promise Education</Navbar.Brand>
    </NavLink>
    <Nav className="me-auto">
 <NavLink to="/home" style={style}>Home </NavLink>
      <NavLink to="/about" style={style}>About</NavLink>
      <NavLink to="/service" style={style}>Service</NavLink>
      <NavLink to="/contact" style={style}>GetStart</NavLink>
    </Nav>
    </Container>
  </Navbar>
  <div className="text-container">
  <h1>Part-time Japanese Lessons</h1>
     <p>Improve your Japanese speaking and conversation ability – As well as Grammar, Kanji, and anything else. Choose classes by topic.</p>
  </div>
 
        </div>
    );
};

export default Header;