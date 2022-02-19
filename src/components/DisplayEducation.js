/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputForm from './InputForm';
import { handleChange, handleSubmit, handleAdd, handleEdit } from './HelperFuncs';
import uniqid from 'uniqid';
import '../styles/formStyles.css';

class DisplayEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eduInfo: [],
      newEduInfo: {
        School:   '',
        Location: '',
        Degree:   '',
        Year:     '',
        baseID:   uniqid(),
      },
      display: 'form',
      editIndex: 'none',
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
      const eduInfoLabels = [['School', 'first'], ['Location', 'second'], 
                              ['Degree', 'fourth'], ['Year', 'third']];

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
            addFunc={this.handleAdd}
            infoType="eduInfo"
            sectionKey="newEduInfo"
            needsAddBtn={true}
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