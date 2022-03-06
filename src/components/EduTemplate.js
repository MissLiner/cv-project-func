import React from 'react';
import '../App.css';

const EduTemplate = (props) => {
  const renderAllDivs = () => {
    if(props.isPublished === true) {
      return (
        props.eduData.map((school, i) => {
          const keyID = school.baseID + i;
          return (
            <div className='resumeEduSchool flex' key={keyID}>
              <div className='degreeInfo left'>
                <b>{school.Degree}</b>| {school.School}, {school.Location}
              </div>
              <div className='schoolYear right emphasized'>{school.Year}</div>
            </div>
          )
        })
      )
    } else {
      return (
        props.eduData.map((school, i) => {
          const keyID = school.baseID + i;
          return (
            <div key={keyID}>
              <div className='resumeEduSchool flex'>
                <div className='degreeInfo left'>
                  <b>{school.Degree}</b>| {school.School}, {school.Location}
                </div>
                <div className='schoolYear right emphasized'>{school.Year}</div>
              </div>
              <button 
                key={keyID + 'editBtn'} 
                onClick={props.editFunc} 
                data-name={props.infoType} 
                data-section={props.sectionKey} 
                data-arrindex={i} 
                className='regularBtn'
               >Edit</button>
              <button 
                key={keyID + 'delBtn'} 
                onClick={props.deleteFunc} 
                data-name={props.infoType} 
                data-section={props.sectionKey} 
                data-arrindex={i} 
                className='regularBtn'
               >Delete</button>
            </div>
          )
        })
      )
    }
  }
  const addAddNewBtn = () => {
    if(props.isPublished === false) {
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
    if(props.isPublished === false) {
      return 'resumeEdu resume' 
    } else {
      return 'pubEdu pubResume'
    }
  }
  return (
    <div className={setDivClass()}>
        <h2>Education {addAddNewBtn()}</h2>
      {renderAllDivs()}
    </div>
  )
}
export default EduTemplate;