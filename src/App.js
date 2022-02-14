/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import GenInfoForm from './components/GenInfoForm';
import GenInfoDisplay from './components/GenInfoDisplay';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newGenInfo: {
        name:     '',
        address:  '',
        city:     '',
        state:    '',
        zip:      '',
        phone:    '',
        email:    '',
      },
      genInfo: '',
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
      display: 'initial',
    };
  }
  handleChange = (e) => {
    const section = e.target.dataset.section;
    this.setState({
      [section]: {
        ...this.state[section],
        [e.target.name]: e.target.value,
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      display: 'locked',
      genInfo: this.state.newGenInfo,
      newGenInfo: {
        name:     '',
        address:  '',
        city:     '',
        state:    '',
        zip:      '',
        phone:    '',
        email:    '',
      }
    })
  }
  render() {
    const { genInfo } = this.state;

    const renderPage = () => {
      if(this.state.display === 'initial') {
        return <GenInfoForm 
                  changeFunc={this.handleChange} 
                  submitFunc={this.handleSubmit}
                />;
      }
      else if(this.state.display === 'locked') {
        return  <GenInfoDisplay 
                  details={genInfo} 
                  editFunc={this.handleSubmit}
                />
      }
    }
    return (
      <div>
        <h1>CV Builder</h1>
        {renderPage()}
      </div>
    )
  }
};

export default App;
