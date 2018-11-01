import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header.js';
import Intro from './modules/Intro.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          helloText="Hoi"
          name="Kris"
        />
        <Intro 
          introMessage="Dit is mijn eerste React app."
        />
      </div>
    );
  }
}
export default App;
