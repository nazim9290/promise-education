import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "../Items/Item.css";
import "./Service.css";

const ServiceCard = (props) => {
    const{id,name,title,description,level,price,img,next}=props.item;
    return (
        <div>
            <Card>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
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
    <Button variant="primary">Enrol Now</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default ServiceCard;