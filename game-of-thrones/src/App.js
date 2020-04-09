import React, { Component } from 'react';
import './App.css';
import axios from "axios";
  
let one = 'https://www.anapioficeandfire.com/api/characters/16';
let two = 'https://www.anapioficeandfire.com/api/houses/378';
let three = 'https://www.anapioficeandfire.com/api/houses/229';
let four = 'https://www.anapioficeandfire.com/api/houses/17';
let five = 'https://www.anapioficeandfire.com/api/characters/901';
let six = 'https://www.anapioficeandfire.com/api/houses/362';
let seven = 'https://www.anapioficeandfire.com/api/characters/232';
  
const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: null,
    }
  }

  componentDidMount(){
    axios
    .all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].date;
        const responseThree = responses[2].data;
        const responseFour = responses[3].data;
        const responseFive = responses[4].data;
        const responseSix = responses[5].data;
        const responseSeven = responses[6].data;
  
        this.setState({isLoaded:true})

        console.log(responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven);
      })
    )
    .catch(errors => {
      console.error(errors);
    });
  }
  
  
  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
