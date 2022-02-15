/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import GenInfoForm from './components/GenInfoForm';
import GenInfoDisplay from './components/GenInfoDisplay';
import DisplayExpInfo from './components/DisplayExpInfo';
import './styles/formStyles.css';

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

      display: 'initial',
      genInfoOpen: false,
      eduInfoOpen: false,
      expInfoOpen: false,
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
  handleSubmitGenInfo = (e) => {
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
  // handleSubmitExpInfo = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     display: 'locked',
  //     expInfo: this.state.newExpInfo,
  //     newExpInfo: {
  //       company:    '',
  //       location:   '',
  //       title:      '',
  //       startDate:  '',
  //       endDate:    '',
  //       highlights: '',
  //     }
  //   })
  // }
  handleEdit = (e) => {
    const lockKey = e.target.dataset.section;

    if(this.state[lockKey] === true) {
      this.setState({
        [lockKey]: false 
      })
    }
    else if(this.state[lockKey] === false) {
      this.setState({
        [lockKey]: true 
      })
    }
  }

  render() {
    const { genInfo, eduInfo } = this.state;

    const renderPage = () => {
      if(this.state.display === 'initial') {
        return (
          <div>
            <GenInfoForm 
              changeFunc={this.handleChange} 
              submitFunc={this.handleSubmitGenInfo}
            />
            {/* <ExpInfoForm
              changeFunc={this.handleChange} 
              submitFunc={this.handleSubmitExpInfo}
            /> */}
          </div>
        )     
      }
      else if(this.state.display === 'locked') {
        return(
          <div>
            <GenInfoDisplay 
              details={genInfo} 
              editFunc={this.handleEdit}
              isOpen={this.state.genInfoOpen}
            />
            {/* <ExpInfoDisplay
              details={expInfo} 
              editFunc={this.handleEdit}
              isOpen={this.state.expInfoOpen}
            /> */}
          </div>
        )
      }
    }
    return (
      <div>
        <h1>CV Builder</h1>
        {renderPage()}
        <DisplayExpInfo />
      </div>
    )
  }
};

export default App;
