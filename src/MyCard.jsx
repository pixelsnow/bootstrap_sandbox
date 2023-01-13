import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = ({ title, text }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
