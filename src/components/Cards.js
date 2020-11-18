import React from "react";
import { CardDeck, Card } from "react-bootstrap";

const Cards = () => (
  <CardDeck style={{ margin: "0 10%", width: "80vw" }}>
    <Card>
      <Card.Img
        variant="top"
        style={{ height: "70%" }}
        src="https://images.pexels.com/photos/5417109/pexels-photo-5417109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img
        variant="top"
        style={{ height: "70%" }}
        src="https://images.pexels.com/photos/5706422/pexels-photo-5706422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img
        variant="top"
        style={{ height: "70%" }}
        src="https://images.pexels.com/photos/5614642/pexels-photo-5614642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardDeck>
);

export default Cards;
