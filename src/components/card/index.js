import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

class Card extends Component{

  render(){
    console.log("hej");

    if(this.props.card !== ""){
      return(
        <div>
          <h2>{this.props.card.fields.title}</h2>
          <p>{this.props.card.fields.description}</p>
        </div>
      );
    } else {
      return(
        <div>empty</div>
      );
    }
  }
}

const connectedCard = connect(null, null)(Card);
export default connectedCard;
