/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import Button from './ElemButton';

class EduTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      eduData,
      editFunc,
      deleteFunc,
      infoType,
      addFunc,
      sectionKey,
      isPublished,
    } = this.props;

    const renderAllDivs = () => {
      if(isPublished === true) {
        return (
          eduData.map((school, i) => {
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
          eduData.map((school, i) => {
            const keyID = school.baseID + i;
            return (
              <div key={keyID}>
                <div className='resumeEduSchool flex'>
                  <div className='degreeInfo left'>
                    <b>{school.Degree}</b>| {school.School}, {school.Location}
                  </div>
                  <div className='schoolYear right emphasized'>{school.Year}</div>
                </div>
                <Button 
                  btnText="Edit" 
                  btnKey={keyID + 'btn'} 
                  clickFunc={editFunc} 
                  infoType={infoType} 
                  sectionKey={sectionKey} 
                  arrIndex={i} 
                  order='regularBtn'
                 />
                <Button 
                  btnText="Delete" 
                  btnKey={keyID + 'btn'} 
                  clickFunc={deleteFunc} 
                  infoType={infoType} 
                  sectionKey={sectionKey} 
                  arrIndex={i} 
                  order='regularBtn'
                 />
              </div>
            )
          })
        )
      }
    }
    const addAddNewBtn = () => {
      if(isPublished === false) {
        return(
          <Button 
            btnText="Add New" 
            clickFunc={addFunc} 
            sectionKey={sectionKey} 
            order='regularBtn addBtn'
           />
        )
      }
    }
    const setDivClass = () => {
      if(isPublished === false) {
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
}
export default EduTemplate;