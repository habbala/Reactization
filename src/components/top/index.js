import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

const mapStateToProps = state => {
  return {
    player: state.player,
  };
}

class Top extends Component{
  render(){
    console.log(this.props.player.player);
    return(
      <div className="top-container">
        <p>Pop: {this.props.player.population} <br/> Gold: {this.props.player.gold}</p>
      </div>
    );
  }
}

const connectedTop = connect(mapStateToProps, null)(Top);
export default connectedTop;
