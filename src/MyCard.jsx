import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = ({ title, text, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
