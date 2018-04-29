import React, { Component } from 'react';
import {setCards} from '../../actions';
import {connect} from 'react-redux';
import Card from '../../components/card'
import Board from '../../components/board'

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'epy869m15409',
  accessToken: '611172f794f38df5d8b6ce0d8b112695a195556e011d2381f79d567ea5c427b2',
  host: 'cdn.contentful.com'
});

const mapStateToProps = state => {
  return {
    cards: state.cards,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setCards: cards => dispatch(setCards(cards)),
  };
};

class HomeScreen extends Component {

  componentWillMount(){
    this.setCardList();
  };

  setCardList(){
    client.getEntries({'content_type' : 'trigger'})
      .then((response) => {
        this.props.setCards(response.items);
      })
      .catch(function(error){
        console.log('error' + error);
    });
  };

  render(){

    const view = this.props.cards.length > 0 ? (
      this.props.cards.map((card) => {
        return(<Card card = {card}/>);
      })
    ) : (
      <div>
        empty
      </div>
    );

    return(

      <div>
        {view}
        <Board/>

      </div>
    );
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default connectedHome;
