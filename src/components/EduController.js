/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import '../App.css';
import InputForm from './InputForm';
import EduTemplate from './EduTemplate';
import uniqid from 'uniqid';

function DisplayEducation(props) {
  let storedEduInfo = [];
  let storedDisplay = 'form';

  const newEduInfoBaseState = {
      School:   '',
      Location: '',
      Degree:   '',
      Year:     '',
      baseID:   uniqid(),
  }

  if(localStorage.getItem('eduInfo')) {
    storedEduInfo = JSON.parse(localStorage.getItem('eduInfo'));
    storedDisplay = 'text';
  }
  const [newEduInfo, setNewEduInfo] = useState(newEduInfoBaseState);
  const [eduInfo, setEduInfo] = useState(storedEduInfo);
  const [display, setDisplay] = useState(storedDisplay);
  const [editIndex, setEditIndex] = useState('none');
  const [hiddenClass, setHiddenClass] = useState("hidden");
  
  const handleEduChange = (e) => {
    const editKey = e.target.dataset.field;
    const newValue = e.target.value;
    const newEduInfoCopy = Object.assign({}, newEduInfo);

    newEduInfoCopy[editKey] = newValue;

    setNewEduInfo(newEduInfoCopy);
  }

  const handleEduSubmit = () => {
    let newObj = Object.assign({}, newEduInfo);
    let newArray = [];
    newArray = newArray.concat(eduInfo);

    if(editIndex === 'none') {
      newObj.baseID = uniqid();
      newArray = newArray.concat(newObj);
    } else {
      newArray.splice(editIndex, 1, newObj);
    }
    setNewEduInfo(newEduInfoBaseState);
    setEduInfo(newArray);
    setDisplay('text');
    setEditIndex('none');
    localStorage.setItem('eduInfo', JSON.stringify(newArray));
  }
  const handleEduAdd = () => {
    setNewEduInfo(newEduInfoBaseState);
    setDisplay('form');
  }
  const handleEduCancel = () => {
    setDisplay('text');
    setNewEduInfo(newEduInfoBaseState);
  }
  const handleEduEdit = (e) => {
    const btnIndex = e.target.dataset.arrindex;
    setDisplay('form');
    setEditIndex(btnIndex);
    setNewEduInfo(eduInfo[btnIndex]);
  }
  const handleEduDelete = (e) => {
    const deleteIndex = e.target.dataset.arrindex;
    let newArray = [];
    newArray = newArray.concat(eduInfo);
    newArray.splice(deleteIndex, 1);
    setEduInfo(newArray);
  }
  const handleEduToggle = (e) => {
    e.preventDefault();
    if(hiddenClass === "hidden") { setHiddenClass("") 
    } else { setHiddenClass("hidden")};
  }

  const renderPage = () => {
    const eduInfoLabels = [['School', 'first'], ['Location', 'second'], 
                          ['Degree', 'fourth'], ['Year', 'third']];

    if (display === 'form') {
      return (
        <InputForm
          changeFunc={handleEduChange} 
          submitFunc={handleEduSubmit}
          cancelFunc={handleEduCancel}
          toggleFunc={handleEduToggle}
          infoType="eduInfo"
          sectionKey="newEduInfo"
          heading="Education"
          inputList={eduInfoLabels}
          details={newEduInfo}
          hiddenClass={hiddenClass}
        />
      )     
    }
    else if(display === 'text') {
      return (
        <EduTemplate
          eduData={eduInfo}
          infoType="eduInfo"
          editFunc={handleEduEdit}
          addFunc={handleEduAdd}
          deleteFunc={handleEduDelete}
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