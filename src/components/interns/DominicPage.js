/**
  * @author Dominic Fernandez
*/


import React, { useState } from 'react';

/* React Boostrap imports */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import InternInfoDisplay from "../practice/InternInfoDisplay";
import {Intern} from "../../model/Intern";

function DominicPage() {

  const[isOpen, setIsOpen] = useState(false);

  const domIntern = new Intern (
    "Dominic Fernandez",
    "Hello, my name is Dominic Fernandez.  I am a currently a student at the University of San Francisco (a.ka. Zoom University), pursuing a B.S in Computer Science.",
    "",
    "",
    new Date(2021, 8, 27)
  );
  const bulletPointStyle = {marginLeft: "20px"};
  const myInterests = [
    "Hiking, backpacking, and being in nature 🌳",
    "Exercising and fitness 🏋️",
    "Coding 🤓",
    "Spending time with family and friends"
  ]

  return (
    <Container fluid>
      <Row>
        <Modal
          show={isOpen}
          onHide={() => {setIsOpen(false)}}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              My Interests/Hobbies
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Here's a little bit about myself and some of my interests:
            </p>
            <div>
              {myInterests.map((interest, index) => {
                return (
                  <div style={bulletPointStyle} key={index}>
                    <span role="img" aria-label="star"> ⭐ {interest} </span>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => {setIsOpen(false)}}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Col>
          <h4> Dominic Fernandez's Page </h4>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <InternInfoDisplay
            intern={domIntern}
            onClick={()=> {
              setIsOpen(true);
            }}
            />
          </Col>
      </Row>
      {/*
      <Row>
        <Col>
          <p>
            Hello 👋, my name is Dominic Fernandez.  I am a currently a student at the University of San Francisco (a.ka. Zoom University), pursuing a B.S in Computer Science.
          </p>
        </Col>
      </Row>
      */}
      {/*
      <Row>
        <Col>
          <Button variant="outline-dark" onClick={() => {setIsOpen(true)}}>
            My Interests/Hobbies
          </Button>
        </Col>
      </Row>
      */}
    </Container>
  );
}

export default DominicPage;
