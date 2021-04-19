/**
   Sean Curley
*/

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import InternInfoDisplay from "../practice/InternInfoDisplay";
import {Intern} from "../../model/Intern";

function SeanPage() {

    const [show, setShow] = useState(false);

  const sean = new Intern (
    "Sean Curley",
    "Hello, my name is Sean! I am a junior pursuing a B.S. in Computer Science at Boston College. I am really passionate about coding and progressive politics, so combining those two passions at TurnUp would be a dream for me.",
    "Intern Web/Mobile Development",
    "https://media-exp1.licdn.com/dms/image/C4D03AQEmvzkbMBY-gQ/profile-displayphoto-shrink_400_400/0/1618866702471?e=1624492800&v=beta&t=SfjGch3gcKxxHW43HLnRiFCUjA7zmwLY0fhqMlF7h9k",
    new Date(2021, 8, 27)
  );

  return (
    <Container>
      <Modal show={show} onHide={() => {setShow(false)}}>
        <Modal.Header closeButton>
          <Modal.Title >
            Random Facts About Sean 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Have been programing since I was 14</li>
            <li>Taught myself guitar and ukelele</li>
            <li>Bisexual</li>
            <li>Recently became a huge anime fan</li>
            <li>Love watching documentaries</li>
            <li>Love spending time with my friends and family</li>        
        </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => {setShow(false)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <InternInfoDisplay intern={sean} onClick={()=> {setShow(true);}}/>
  </Container>
  );
}

export default SeanPage;