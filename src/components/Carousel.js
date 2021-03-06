import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => (
  <Carousel style={{ width: "100vw", height: "95vh" }}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        alt="First slide"
        style={{ width: "100vw", height: "95vh" }}
        src="https://images.pexels.com/photos/5706422/pexels-photo-5706422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ width: "100vw", height: "95vh" }}
        src="https://images.pexels.com/photos/5614642/pexels-photo-5614642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/5417109/pexels-photo-5417109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Third slide"
        style={{ width: "100vw", height: "95vh" }}
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slider;
