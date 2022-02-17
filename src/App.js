/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducation';
import InputForm from './components/InputForm';
import InputDisplay from './components/InputDisplay';
import { handleChange, handleSubmit, handleEdit } from './components/HelperFuncs';
import './styles/formStyles.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genInfo: '',
      newGenInfo: {
        name:     '',
        address:  '',
        city:     '',
        state:    '',
        zip:      '',
        phone:    '',
        email:    '',
      },
      isEditable: false,
      display: 'initial',
    };
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  // handleChange = (e) => {
  //   const section = e.target.dataset.section;
  //   this.setState({
  //     [section]: {
  //       ...this.state[section],
  //       [e.target.name]: e.target.value,
  //     }
  //   })
  // }
  // handleSubmitGenInfo = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     display: 'locked',
  //     genInfo: this.state.newGenInfo,
  //     newGenInfo: {
  //       name:     '',
  //       address:  '',
  //       city:     '',
  //       state:    '',
  //       zip:      '',
  //       phone:    '',
  //       email:    '',
  //     }
  //   })
  // }

  // handleEdit = (e) => {
  //   const lockKey = e.target.dataset.section;

  //   if(this.state[lockKey] === true) {
  //     this.setState({
  //       [lockKey]: false 
  //     })
  //   }
  //   else if(this.state[lockKey] === false) {
  //     this.setState({
  //       [lockKey]: true 
  //     })
  //   }
  // }

  render() {
    const { genInfo, newGenInfo } = this.state;
    const genInfoLabels = ['name', 'address', 'city', 'state', 'zip', 'phone', 'email'];

    const renderPage = () => {
      if(this.state.display === 'initial') {
        return (
          <InputForm 
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="eduInfo"
            sectionKey="newEduInfo"
            heading="Education"
            inputList={genInfoLabels}
            details={newGenInfo}
          />
        )     
      }
      else if(this.state.display === 'locked') {
        return(
          <InputDisplay 
            details={genInfo} 
            editFunc={this.handleEdit}
            isOpen={this.state.isEditable}
            addFunc={this.handleAdd}
            infoType="genInfo"
            sectionKey="newGenInfo"
          />
        )
      }
    }
    return (
      <div>
        <h1>CV Builder</h1>
        {renderPage()}
        <DisplayExperience />
        <DisplayEducation />
      </div>
    )
  }
};

export default App;
