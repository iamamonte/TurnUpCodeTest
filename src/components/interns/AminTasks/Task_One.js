import React, { Component } from 'react';
import {  Button, Container } from 'react-bootstrap';
import { increment, decrement } from '../../../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Counter extends Component{
  render(){
    console.log(this.props.count);
    return(
      
        
        <Container>
       
         
              <h1>
                {this.props.count}
              </h1>
          
          
          <button onClick= {() => this.props.increment()}>
            <h1>Increment</h1>
          </button>
          <button onClick= {() => this.props.decrement()}>
            <h1>Decrement</h1>
          </button>
        
        </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    count : state.count
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
