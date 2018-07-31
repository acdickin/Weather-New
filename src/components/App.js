import React, { Component } from 'react';
// import {Route} from 'react-router-dom'
import Main from './Main';
const cloud1 = require('../img/cloud1.png')
const cloud2 = require('../img/cloud2.png')

class App extends Component {
  render() {
    return (
      <div className="App">
        <img id='cloud1' src={cloud1} alt='background Cloud'/>
        <img id='cloud2' src={cloud2} alt='background Cloud'/>
        <Main/>
      </div>
    );
  }
}

export default App;
