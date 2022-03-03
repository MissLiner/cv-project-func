/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducation';
//import InputForm from './components/InputForm';
//import InputDisplay from './components/InputDisplay';
//import { handleChange, handleSubmit, handleEdit } from './components/HelperFuncs';
import './styles/formStyles.css';
import DisplayGenInfo from './components/DisplayGenInfo';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genDisplay: 'form',
      expDisplay: 'form',
      eduDisplay: 'form',
    }

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
