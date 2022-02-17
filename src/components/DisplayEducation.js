/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputForm from './InputForm';
import { handleChange, handleSubmit, handleAdd, handleEdit } from './HelperFuncs';
import '../styles/formStyles.css';

class DisplayEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eduInfo: [],
      newEduInfo: {
        school:    '',
        location:   '',
        degreeYear:  '',
        degreeName:    '',
      },
      isEditable: false,
      display: 'form',
    }
    this.baseFormState = this.state.newEduInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  
  render() {
    const renderPage = () => {
      const { eduInfo, newEduInfo } = this.state;
      const eduInfoLabels = ['school', 'location', 'degreeYear', 'degreeName'];
     
      if(this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="eduInfo"
            sectionKey="newEduInfo"
            heading="Education"
            inputList={eduInfoLabels}
            details={newEduInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return (
          <InputDisplay
            details={eduInfo} 
            editFunc={this.handleEdit}
            isOpen={this.state.isEditable}
            addFunc={this.handleAdd}
            infoType="eduInfo"
            sectionKey="newEduInfo"
          />
        )
      }
    }
    return (
      <div>
        {renderPage()}
      </div>
    )
  }
}

export default DisplayEducation;