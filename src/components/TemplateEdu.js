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
                <div className='degreeInfo left'><b>{school.Degree}</b>| {school.School}, {school.Location}</div>
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
              <div className='resumeEduSchool flex' key={keyID}>
                <div className='degreeInfo left'><b>{school.Degree}</b>| {school.School}, {school.Location}</div>
                <div className='schoolYear right emphasized'>{school.Year}</div>
                <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} order='regularBtn' />
              </div>
            )
          })
        )
      }
    }
    const addAddNewBtn = () => {
      if(isPublished === false) {
        return(
          <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey} order='regularBtn' />
        )
      }
    }
    // fix edit button to attach to each section
    return (
      <div className="resumeEdu resume">
        <h2>Education</h2>
        {renderAllDivs()}
        {addAddNewBtn()}
      </div>
    )
  }
}
export default EduTemplate;