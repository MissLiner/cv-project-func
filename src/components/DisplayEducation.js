/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import '../App.css';
import InputForm from './InputForm';
import EduTemplate from './TemplateEdu';
import { handleChange, handleSubmit, handleAdd, handleEdit, handleDelete, handleCancel } from './HelperFuncs';
import uniqid from 'uniqid';

function DisplayEducation() {
  let storedEduInfo = [];
  let storedDisplay = 'form';
  const newEduInfoBaseState = {
    newEduInfo: {
      School:   '',
      Location: '',
      Degree:   '',
      Year:     '',
      baseID:   uniqid(),
    },
  }

  if(localStorage.getItem('eduInfo')) {
    storedEduInfo = JSON.parse(localStorage.getItem('eduInfo'));
    storedDisplay = 'text';
  }
  const [newEduInfo, setNewEduInfo] = useState(newEduInfoBaseState);
  const [eduInfo, setEduInfo] = useState(storedEduInfo);
  const [display, setDisplay] = useState(storedDisplay);
  const [eduIndex, setEduIndex] = useState('none');
  const handleChange = (e) => {
    e.preventDefault();

    let editObj = newEduInfo;
    const editKey = e.target.dataset.field;
    const newValue = e.target.value;

    editObj[editKey] = newValue;
    if(eduIndex === 'none') { editObj.baseID = uniqid() };

    setNewEduInfo(editObj);

  }
    // this.handleChange = handleChange.bind(this);
    // this.handleSubmit = handleSubmit.bind(this);
    // this.handleAdd = handleAdd.bind(this);
    // this.handleEdit = handleEdit.bind(this);
    // this.handleDelete = handleDelete.bind(this);
    // this.handleCancel = handleCancel.bind(this);
  const renderPage = () => {
    const { eduInfo, newEduInfo } = this.state;
    const { isPublished } = this.props;
    const eduInfoLabels = [['School', 'first'], ['Location', 'second'], 
                          ['Degree', 'fourth'], ['Year', 'third']];

    if (this.state.display === 'form') {
      return (
        <InputForm
          changeFunc={handleChange()} 
          // submitFunc={this.handleSubmit}
          // cancelFunc={this.handleCancel}
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
        <EduTemplate
          eduData={eduInfo}
          infoType="eduInfo"
          // editFunc={this.handleEdit}
          // addFunc={this.handleAdd}
          // deleteFunc={this.handleDelete}
          sectionKey="newEduInfo" 
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

export default DisplayEducation;