import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
           <Container>
           <Row>
    <Col xs={6} md={2}>
      <img src={img} alt="" width="200"/>
      
    </Col>
    <Col xs={6} md={3}>
      <h4 className="title">Offline Courses</h4>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
    </Col>
    <Col xs={6} md={3}>
    <h4 className="title">Online Courses</h4>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
    </Col>
    <Col xs={6} md={2}>
    <h4 className="title">Company</h4>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
    </Col>
    <Col xs={6} md={2}>
    <h4 className="title">Contacts</h4>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private Japanese Lessons
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive Japanese Courses
      </NavLink>
    </Col>
  </Row>
           </Container>
        </div>
    );
};

export default Footer;