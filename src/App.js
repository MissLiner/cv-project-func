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
      genInfo: [],
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
      display: 'form',
    };
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }

  render() {
    const { genInfo, newGenInfo } = this.state;
    const genInfoLabels = ['name', 'address', 'city', 'state', 'zip', 'phone', 'email'];

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
          <InputForm 
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="genInfo"
            sectionKey="newGenInfo"
            heading="Basic Info"
            inputList={genInfoLabels}
            details={newGenInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return(
          <InputDisplay 
            details={genInfo} 
            editFunc={this.handleEdit}
            isOpen={this.state.isEditable}
            addFunc={this.handleAdd}
            infoType="genInfo"
            sectionKey="newGenInfo"
            needsAddBtn={false}
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
