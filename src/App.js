/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import GenInfo from './components/GenInfo';

class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <h1>CV Builder</h1>
        <GenInfo />
      </div>
    )
  }
};

export default App;
