/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import './App.css';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducation';
import DisplayGenInfo from './components/DisplayGenInfo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const updateDisplayStatus = (displayProp, newStatus) => {
      console.log(displayProp);
      console.log(newStatus);
      this.setState({
        [displayProp]: newStatus,
      })
    }
    return (
      <div>
        <h1>CV Builder</h1>
        <DisplayGenInfo updateFunc={updateDisplayStatus}/>
        <DisplayExperience />
        <DisplayEducation />
      </div>
    )
  }
};

export default App;
