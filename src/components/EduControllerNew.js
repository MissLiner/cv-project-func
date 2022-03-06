/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import '../App.css';
import InputForm from './InputForm';
import EduTemplate from './EduTemplate';
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
    const eduEditObj = handleChange(e, newEduInfo, eduIndex);
    setNewEduInfo(eduEditObj);
  }

  const handleEduSubmit = () => {
    let newObj = Object.assign({}, newEduInfo);
    let newArray = [];
    newArray = eduInfo.concat(newArray);

    if(eduIndex === 'none') {
      newObj.keyID = uniqid();
      newArray = newArray.concat(newObj);
    } else {
      newArray = newArray.splice(eduIndex, 1, newObj);
    }
    setEduInfo(newArray);
    setDisplay('text');
    setEduIndex('none');
    localStorage.setItem('eduInfo', JSON.stringify(newArray));
  }
  const handleEduAdd = () => {
    setNewEduInfo(newEduInfoBaseState);
    setDisplay('form');
  }
  const renderPage = () => {
    const eduInfoLabels = [['School', 'first'], ['Location', 'second'], 
                          ['Degree', 'fourth'], ['Year', 'third']];

    if (display === 'form') {
      return (
        <InputForm
          changeFunc={handleEduChange} 
          submitFunc={handleEduSubmit}
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
          addFunc={handleEduAdd}
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