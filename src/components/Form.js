import React from 'react';
import { Form as F } from 'react-bootstrap';

function Form() {
 return (<F>
    <F.Group controlId="exampleF.ControlInput1">
      <F.Label>Email address</F.Label>
      <F.Control type="email" placeholder="name@example.com" />
    </F.Group>
    <F.Group controlId="exampleForm.ControlSelect1">
      <F.Label>Example select</F.Label>
      <F.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </F.Control>
    </F.Group>
    <F.Group controlId="exampleForm.ControlSelect2">
      <F.Label>Example multiple select</F.Label>
      <F.Control as="select" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </F.Control>
    </F.Group>
    <F.Group controlId="exampleForm.ControlTextarea1">
      <F.Label>Example textarea</F.Label>
      <F.Control as="textarea" rows={3} />
    </F.Group>
  </F>)
}

export default Form;