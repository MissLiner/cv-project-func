/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import GenInfo from './components/GenInfoForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genInfo: {
        name:     '',
        address:  '',
        city:     '',
        state:    '',
        zip:      '',
        phone:    '',
        email:    '',
      },
      newEduInfo: {
        schoolName:     '',
        schoolLocation: '',
        focus:          '',
        degree:         '',
        degreeDate:     '',
      },
      eduInfo: [],
      newExpInfo: {
        company:    '',
        location:   '',
        title:      '',
        startDate:  '',
        endDate:    '',
        summary:    '',
      },
      expInfo: [],
    };
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit = (evt) => {
    
  }
  render() {
    return (
      <div>
        <h1>CV Builder</h1>
        <GenInfo details={this.state.genInfo} changeFunc={this.handleChange} submitFunc={this.handleSubmit}/>
      </div>
    )
  }
};

export default App;
