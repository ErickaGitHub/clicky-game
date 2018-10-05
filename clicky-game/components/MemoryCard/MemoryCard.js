import React, { Component } from 'react'
import styled from 'react-emotion'
import MemoryCard from '../components/MemoryCard'
import gameCards from '../cardData.json'
import "./Wrapper.css"


/// setting up memory card data /// 
//// putting the on click shuffle function into this memory card Const? //////

const MemoryCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.shuffleCards(props.id)} >
    </span>
  </div>
);

export default MemoryCard;

//// esstentially setting up variables ///// 
class MemoryBoard extends Component {
  state = {
    cardsArray: [],
    clickedArray: [],
    score: 0,
    highScore: 0
  }


  //// Mount the components //// 

  componentDidMount(){  
    this.setState({
      cardsArray: MemoryCards})
  }


  //// event handler with shuffle ///// 
  onClickHandler = (CardName) => {
    let shuffledArray = this.shuffleCards();
    if(this.state.clickedArray.includes(CardName)){ 
      this.setState({
        score: 0,
        clickedArray: [],
        cardsArray: shuffledArray
      })
      
///// setting a new state once event has happened. ///////

      this.setState({
        score: this.state.score + 5,
        clickedArray: newArray,
        cardsArray: shuffledArray
      }, function() { 
        if(this.state.score > this.state.highScore){
        this.setState({
          highScore: this.state.score
        })}
      })
    }   
  }

  shuffleCards = () => {
      var array = [].concat(this.state.cardsArray);
      var currentIndex = array.length,;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex); 
      }
      return array;
  }

  render() {
    return (
      <div className="scoreBoard">
       Score: {this.state.score} &nbsp;&nbsp;&nbsp;&nbsp; High Score: {this.state.highScore}
       <div className="wrapper">
        {this.state.cardsArray.map(card => (
          <Card
            name={card.name}
            image={card.image}
            clickHandler={this.clickHandler}
        />))}
       </div>
      </div>
    )
  }
}


export default Memoryboard;

