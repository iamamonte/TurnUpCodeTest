/**
 * @author Inan X.
 */
import React from 'react';
import {Jumbotron} from "react-bootstrap";

import InternInfoDisplay from "../practice/InternInfoDisplay";
import {Intern} from "../../model/Intern";


let inanIntern = new Intern(
    "Inan Xu\t",
    "Freshman at UC Santa Cruz",
    "Intern",
    "https://miro.medium.com/max/1156/1*uwSAzkmaJGFf_0GmvTTZRQ.png",
    "2021"
);

class InanPage extends React.Component {
    state = {
        description: ""
    }
    onClick = () => {
        this.setState({
            description: "Hello! I'm Inan, a passionate computer science student eager to self-learn skills and collaborate with others."
        })
    }
    render() {
        return (
            <Jumbotron>
                <InternInfoDisplay intern={inanIntern} onClick={this.onClick}>
                    <p>{this.state.description}</p>
                </InternInfoDisplay>
            </Jumbotron>
        );
    }
}
export default InanPage;