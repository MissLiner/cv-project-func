/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputForm from './InputForm';
import { handleChange, handleSubmit, handleAdd, handleEdit } from './HelperFuncs';
import '../styles/formStyles.css';

class DisplayExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expInfo: [],
      newExpInfo: {
        Company:    '',
        Location:   '',
        Title:      '',
        StartDate:  '',
        EndDate:    '',
        Highlights:    '',
      },
      display: 'form',
      editIndex: '',
    }
    this.baseFormState = this.state.newExpInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  
  render() {
    const renderPage = () => {
      const { expInfo, newExpInfo } = this.state;
      const expInfoLabels = [['Company', 'first'], ['Location', 'second'], ['Title', 'fifth'], ['StartDate', 'third'], ['EndDate', 'fourth'], ['Highlights', 'sixth']];
     
      if(this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="expInfo"
            sectionKey="newExpInfo"
            heading="Experience"
            inputList={expInfoLabels}
            details={newExpInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return (
          <InputDisplay
            details={expInfo} 
            editFunc={this.handleEdit}
            addFunc={this.handleAdd}
            infoType="expInfo"
            sectionKey="newExpInfo"
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

export default DisplayExperience;