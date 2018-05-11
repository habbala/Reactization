import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

class Cell extends Component{

  constructor(props){
    super(props);

    this.state = {
      xPos: this.props.xPos,
      yPos: this.props.yPos,
    }
  }

  render(){
    return(
      <div className="cell">
        <p>{this.state.xPos}:{this.state.yPos}</p>
      </div>
    );
  }
}

const connectedCell = connect(null, null)(Cell);
export default connectedCell;
