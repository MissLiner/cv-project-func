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
          handleCancel,
          handleToggle, } from './HelperFuncsOld';
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
        Highlight1: '',
        Highlight2: '',
        Highlight3: '',
        baseID:     uniqid(),
      },
      display:    storedDisplay,
      isOpen:       false,
      editIndex:  'none',
    }

    this.baseFormState = this.state.newExpInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
    this.handleDelete = handleDelete.bind(this);
    this.handleCancel = handleCancel.bind(this);
    this.handleToggle = handleToggle.bind(this);
  }
  
  render() {
    const renderPage = () => {
      const { expInfo, newExpInfo } = this.state;
      const { isPublished } = this.props;
      const expInfoLabels = [['Company', 'first'], ['Location', 'second'], 
                            ['Title', 'fifth'], ['StartDate', 'third'], 
                            ['EndDate', 'fourth'], ['Highlight1', 'sixth'],
                            ['Highlight2', 'seventh'], ['Highlight3', 'eighth']];
   
      if(this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            cancelFunc={this.handleCancel}
            toggleFunc={this.handleToggle}
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