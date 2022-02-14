/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import GenInfoForm from './components/GenInfoForm';
import GenInfoDisplay from './components/GenInfoDisplay';

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
      display: 'initial',
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit = () => {
    this.setState({
      display: 'locked',
    })
  }
  render() {
    const renderPage = () => {
      if(this.state.display === 'initial') {
        return <GenInfoForm formID="display" changeFunc={this.handleChange} submitFunc={this.handleSubmit} />;
      }
      else if(this.state.display === 'locked') {
        return  <GenInfoDisplay displayID="display" details={this.state.genInfo} editFunc='' />
      }
    }
    return (
      <div>
        <h1>CV Builder</h1>
        {renderPage}
      </div>
    )
  }
};

export default App;
