import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

class Board extends Component{

  componentDidMount(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.scale(2,2);

    var x,y;
    var xNum, yNum;
    var ySize = canvas.height/20;
    var xSize = canvas.width/20;

    for(y = 0 ; y < 10 ; y++){
      for(x = 0 ; x < 10 ; x++){
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.fillRect(x*xSize, y*ySize,xSize, ySize);
        ctx.strokeRect(x*xSize, y*ySize,xSize, ySize);
      }
    }


  }

  render(){
    return(
      <canvas ref = "canvas" className = "game-canvas"/>
    );
  }
}

const connectedBoard = connect(null, null)(Board);
export default connectedBoard;
