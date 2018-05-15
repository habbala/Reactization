import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setResource} from '../../actions';
import './index.css';

const mapStateToProps = state => {
  return {
    player: state.player,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setResource: action => dispatch(setResource(action)),
  };
};

class Card extends Component{

  constructor(props){
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event){
    this.props.setResource(this.props.card.fields.output);
  }

  render(){
    if(this.props.card !== ""){
      return(
        <div className="card-container" onClick={this.eventHandler}>
          <div className="card-header">
            <h3>{this.props.card.fields.title}</h3>
          </div>

          <div className="card-description-container">
            <h4>Description:</h4>
            <p> {this.props.card.fields.description}</p><br/><br/>

            <h4>Cost:</h4>
            <p> {this.props.card.fields.cost.resource}:{this.props.card.fields.cost.value}</p><br/><br/>

            <h4>Output:</h4>
            <p> {this.props.card.fields.output.target}:{this.props.card.fields.output.value}</p><br/><br/>
          </div>
        </div>
      );
    }
  }
}

const connectedCard = connect(mapStateToProps, mapDispatchToProps)(Card);
export default connectedCard;
