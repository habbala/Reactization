import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

class Card extends Component{

  render(){
    if(this.props.card !== ""){
      return(
        <div className="card-container">
          <div className="card-header">
            <h3>{this.props.card.fields.title}</h3>
          </div>

          <div className="card-description-container">
            <p>{this.props.card.fields.description}</p>
          </div>
        </div>
      );
    }
  }
}

const connectedCard = connect(null, null)(Card);
export default connectedCard;
