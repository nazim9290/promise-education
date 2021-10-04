
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Item.css";

const Items = (props) => {
    const{id,name,title,description,level,price,img,next}=props.item;
    return (
        <div className="items">
            <Container>
  <Row>
    <Col xs={4} md={3} className="title-name">
        <h1>{name}</h1>
    <Button variant="outline-warning" pill bg="warning" text="dark">Next: {next}</Button>
    <br />
    <br />
    <div className="card-price">
    <div className="lessons-card">
        <h6>8 lessons</h6>
        <i>2 lessons per weack</i>
        </div>
        
        <div className="price-card">
            <div className="corse-price">
        <small>corse price</small>
        <h2>{price}</h2></div>
        <small>FREE CONSULTATION</small>
        </div>
    </div>
    </Col>

    <Col xs={8} md={8}>
    <Card false>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title className="title">{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Level : {level} </Card.Subtitle>
      <Card.Text>
        {description}
      </Card.Text>
      <Link to="#">
      <Button variant="primary">Enroll Now</Button>
      </Link>
    </Card.Body>
  </Card>
    </Col>
  </Row>
  </Container>
  
        </div>
    );
};

export default Items;