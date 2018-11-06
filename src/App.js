import React, { Component } from 'react';
import Input from './modules/Input'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flexContainer">
        <h1>The sick input</h1>
        <h2>It displays your text right when you type it!</h2>
        <Input />
      </div>
    );
  }
}
export default App;
