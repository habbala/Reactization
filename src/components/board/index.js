import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import Cell from './cell'

class Board extends Component{

  constructor(props){
    super(props);

    this.state = {
      cells: [],
    }
  }

  grid(){
    var x,y;
    let arr = this.state.cells;

    for(y = 0 ; y < 5 ; y++){
      for(x = 0 ; x < 5 ; x++){
        this.setState(state => ({ ...state, cells: state.cells.concat([<Cell xPos={x} yPos={y}/>])}));
      }
    }

  }

  componentDidMount(){
    this.grid();
  }

  render(){

    const grid = this.state.cells.map((cell) => cell);

    return(
      <div className="game-grid">
        {grid}
      </div>
    );
  }
}

const connectedBoard = connect(null, null)(Board);
export default connectedBoard;
