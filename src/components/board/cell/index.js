import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import {setCell} from '../../../actions';

const mapDispatchToProps = dispatch => {
  return {
    setCell: cell => dispatch(setCell(cell)),
  };
};

class Cell extends Component{

  constructor(props){
    super(props);

    this.state = {
      xPos: this.props.xPos,
      yPos: this.props.yPos,
      yields: 1,
    }

    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event){
    this.props.setCell(this);
  }

  render(){
    return(
      <div className="cell" onClick={this.eventHandler}>
        <p>{this.state.xPos}:{this.state.yPos}</p>
      </div>
    );
  }
}

const connectedCell = connect(null, mapDispatchToProps)(Cell);
export default connectedCell;
