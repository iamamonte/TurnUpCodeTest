import React , {Component} from 'react';
import {Jumbotron} from "react-bootstrap";

class Amin extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <Jumbotron>
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#">##</a></li>
         <li><a href="../interns/AminTasks/Task_One">Counter</a></li>
         <li><a href="#">FadeText</a></li>
         <li><a href="#">ImgButton</a></li>
         <li><a href="#">IncrementButton</a></li>
         <li><a href="#">InputField</a></li>
         <li><a href="#">JokeModel</a></li>
          </ul>
         
        ):
        (
          null
        )
        }

       </div>
       </Jumbotron>
    );
  }
}

export default Amin;
