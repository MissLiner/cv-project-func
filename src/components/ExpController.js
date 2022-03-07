/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import InputForm from './InputForm';
import ExpTemplate from './ExpTemplate';
import {  handleChange, 
          handleSubmit, 
          handleAdd, 
          handleEdit, 
          handleDelete, 
          handleCancel } from './HelperFuncs';
import uniqid from 'uniqid';

class DisplayExperience extends Component {
  constructor(props) {
    super(props);

    let storedExpInfo = [];
    let storedDisplay = 'form';

    if(localStorage.getItem('expInfo')) {
      storedExpInfo = JSON.parse(localStorage.getItem('expInfo'));
      storedDisplay = 'text';
    }

    this.state = {
      expInfo:    storedExpInfo,
      newExpInfo: {
        Company:    '',
        Location:   '',
        Title:      '',
        StartDate:  '',
        EndDate:    '',
        Highlights: '',
        baseID:     uniqid(),
      },
      display:    storedDisplay,
      editIndex:  'none',
    }

    this.baseFormState = this.state.newExpInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
    this.handleDelete = handleDelete.bind(this);
    this.handleCancel = handleCancel.bind(this);
  }
  
  render() {
    const renderPage = () => {
      const { expInfo, newExpInfo } = this.state;
      const { isPublished } = this.props;
      const expInfoLabels = [['Company', 'first'], ['Location', 'second'], 
                            ['Title', 'fifth'], ['StartDate', 'third'], 
                            ['EndDate', 'fourth'], ['Highlights', 'sixth']];
   
      if(this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            cancelFunc={this.handleCancel}
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
          <ExpTemplate 
            expData={expInfo}
            infoType="expInfo"
            editFunc={this.handleEdit}
            addFunc={this.handleAdd}
            deleteFunc={this.handleDelete}
            sectionKey="newExpInfo" 
            isPublished={isPublished}
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