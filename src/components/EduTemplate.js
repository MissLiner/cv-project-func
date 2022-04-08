import React from 'react';
import '../App.css';
import InputHeader from './InputHeader';

const EduTemplate = (props) => {
  const {
    eduData,
    editFunc,
    deleteFunc,
    infoType,
    // addFunc,
    sectionKey,
    isPublished,
  } = props;

  const renderAllDivs = () => {
    if(isPublished === true) {
      return (
        eduData.map((school, i) => {
          const keyID = school.baseID + i;
          return (
            <div>
              <h2 className="published-heading">Education</h2>
              <div className='resumeEduSchool flex' key={keyID}>
              <div className='degreeInfo left'>
                <b>{school.Degree}</b>| {school.School}, {school.Location}
              </div>
              <div className='schoolYear right emphasized'>{school.Year}</div>
              </div>
            </div>

          )
        })
      )
    } else {
      return (
        eduData.map((school, i) => {
          const keyID = school.baseID + i;
          return (
            <div key={keyID}>
              <InputHeader 
                heading="Education"
                sectionKey={sectionKey} 
                addBtn={true} 
                addFunc={props.addFunc}
              />
              <div className='resumeEduSchool flex preview-box'>
                <div className='degreeInfo left'>
                  <b>{school.Degree}</b>| {school.School}, {school.Location}
                </div>
                <div className='schoolYear right emphasized'>{school.Year}</div>
              </div>
              <button 
                key={keyID + 'editBtn'} 
                onClick={editFunc} 
                data-name={infoType} 
                data-section={sectionKey} 
                data-arrindex={i} 
                className='regularBtn'
               >Edit</button>
              <button 
                key={keyID + 'delBtn'} 
                onClick={deleteFunc} 
                data-name={infoType} 
                data-section={sectionKey} 
                data-arrindex={i} 
                className='regularBtn'
               >Delete</button>
            </div>
          )
        })
      )
    }
  }
  const renderAddBtn = () => {
    if(isPublished === false) {
      return(
        <button 
          onClick={props.addFunc} 
          data-section={props.sectionKey} 
          className='regularBtn addBtn'
         >Add New</button>
      )
    } 
  }

  const setDivClass = () => {
    if(isPublished === false) {
      return 'resumeEdu resume' 
    } else {
      return 'pubEdu pubResume resume-section'
    }
  }
  return (
    <div className={setDivClass()}>
      {renderAddBtn()}
      {renderAllDivs()}
    </div>
  )
}
export default EduTemplate;