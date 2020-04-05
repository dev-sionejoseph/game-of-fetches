import React from 'react';
import './App.css';
import axios from "axios";

let one = 'http://anapioficeandfire.com/api/characters/16';
let two = '';
let three = '';
let four = '';
let five = '';
let six = '';
let seven = '';

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
