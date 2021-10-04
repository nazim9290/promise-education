import { faBullseye, faCalendarCheck, faMapMarkerAlt, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./About.css";
const About = () => {
    return (
        <div className="about">
        <Container>
  <Row>
    <Col xs={12} md={4}>
      <h1>About</h1>
      <div className="icon-container">
      <div className="icon">
      <FontAwesomeIcon icon={faUsers} size="2x" className="font-icon" />
      <div>
     <small>GROUP SIZE</small>
      <p>Max 8 student</p>
      </div>
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="font-icon" />
      <div>
     <small>LOCATION</small>
      <p>Tokyo & Yokohama</p>
      </div>
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="font-icon" />
      <div>
     <small>DATE</small>
      <p>Flexiblel</p>
      </div>
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={faBullseye} size="2x" className="font-icon" />
      <div>
     <small>FOCUS</small>
      <p>Conversation Based</p>
      </div>
      </div>
      </div>
    </Col>
    <Col xs={12} md={8}>
        <div className="about-text">
      <h1>Part-time Japanese Classes in Tokyo and Yokohama</h1>
      <p>
      Our part-time Japanese lessons are designed for busy students who want to create a short-term or long-term customized study schedule. Students are able to sign up for a combination of classes that match their level and interest. <br /><br />
    Offering conversation focused classes for Japanese learners of all levels.<br /><br />

    Our part-time lessons are taught by professional instructors in small groups and are perfect for students who want to improve their Japanese communication abilities.
      </p>
      <div className="box bg-light">
      <FontAwesomeIcon icon={faVideo} size="2x" className="font-icon" />
      <p>         
            Can't study in Tokyo or Yokohama? We offer online small group lessons as well.
                Learn More
      </p>
      <Button variant="warning">Learn More</Button>
      </div>
      </div>
    </Col>
  </Row>
  </Container>
        </div>
    );
};

export default About;