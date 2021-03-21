/**
 * @author Yumeng Li
 */

 import React from "react";
 import InternInfoDisplay from "../practice/InternInfoDisplay";
 import {Jumbotron} from "react-bootstrap";
 import {Intern} from "../../model/Intern";

 import Popup from '../practice/Popup';
 import {useState} from 'react';

 let Yumeng = new Intern("Yumeng Li", "2nd Year in Master program at The Ohio State University", "Intern(Web/Mobile Dev)", 
 "https://images.unsplash.com/photo-1461353789837-8eb180f968d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1MzM0MDI4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  new Date ("8/10/2021"));



  function YumengPage(){
      const [buttonPopup, setButtonPopup] = useState(false);

    return(
    <Jumbotron>
        <h1>Yumeng's page</h1>
        <InternInfoDisplay
            intern = {Yumeng}
            onClick = {() => setButtonPopup(true)}
        >
        </InternInfoDisplay>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            <p>Hello, I'm currently in my 2nd year in Master Program at The Ohio State University. I'm a self-motivated individual, love to learn and apply my skills in a professional setting! ;)</p>
        </Popup>
    </Jumbotron>
    );
  }
  export default YumengPage;
 
