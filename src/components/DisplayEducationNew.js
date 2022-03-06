/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import '../App.css';
import InputForm from './InputFormNew';
import EduTemplate from './TemplateEdu';
import { handleChange, 
        // handleSubmit, 
        // handleAdd, 
        // handleEdit, 
        // handleDelete, 
        // handleCancel
       } from './HelperFuncsNew';
import uniqid from 'uniqid';

function DisplayEducation(props) {
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
  
  const handleEduChange = (e) => {
    const eduEditObj = handleChange(e, eduInfo, eduIndex);
    setNewEduInfo(eduEditObj);
  }
    // this.handleSubmit = handleSubmit.bind(this);
    // this.handleAdd = handleAdd.bind(this);
    // this.handleEdit = handleEdit.bind(this);
    // this.handleDelete = handleDelete.bind(this);
    // this.handleCancel = handleCancel.bind(this);
  const renderPage = () => {
    const eduInfoLabels = [['School', 'first'], ['Location', 'second'], 
                          ['Degree', 'fourth'], ['Year', 'third']];

    if (display === 'form') {
      return (
        <InputForm
          changeFunc={handleEduChange} 
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
    else if(display === 'text') {
      return (
        <EduTemplate
          eduData={eduInfo}
          infoType="eduInfo"
          // editFunc={this.handleEdit}
          // addFunc={this.handleAdd}
          // deleteFunc={this.handleDelete}
          sectionKey="newEduInfo" 
          isPublished={props.isPublished}
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