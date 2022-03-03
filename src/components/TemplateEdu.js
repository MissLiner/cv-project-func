/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../styles/formStyles.css';
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
    } = this.props;

    const renderAllDivs = () => {
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
    }
    return (
      <div className="resumeEdu resume">
        <h2>Education</h2>
        {renderAllDivs()}
      
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} />
        <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey} />
      </div>
    )
  }
}
export default EduTemplate;