/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';

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
            <div className='resumeEduSchool' key={keyID}>
              <div className='schoolInfo'>
                <div className='school left'>{school.School}</div>
                <div className='location right'>{school.Location}</div>
              </div>
              <div className="degreeInfo">
                <div className='year right'>{school.Year}</div>
                <div className='degree left'>{school.Degree}</div>
              </div>
            </div>
          )
          })
      )
    }
    return (
      <div className="resumeEdu resume">
        {renderAllDivs()}
      
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} />
        <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey} />
      </div>
    )
  }
}
export default EduTemplate;