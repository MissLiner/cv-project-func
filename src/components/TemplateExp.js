/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import Button from './ElemButton';

class ExpTemplate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      expData,
      editFunc,
      infoType,
      addFunc,
      sectionKey,
      isPublished,
    } = this.props;

    const renderAllDivs = () => {
      return (
        expData.map((job, i) => {
          const keyID = job.baseID + i;
          if(isPublished === false) {
            return (
              <div className='resumeExpJob' key={keyID}>
                <div className='companyInfo flex'>
                  <div className='company left'><b>{job.Title}</b> | {job.Company}, {job.Location}</div>
                  <div className='dates right emphasized'>{job.StartDate} - {job.EndDate}</div>
                </div>
                <div className='highlights left'>{job.Highlights}</div>
                <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} sectionKey={sectionKey} arrIndex={i} order='regularBtn' />
              </div>
            )
          } else {
            return (
              <div className='resumeExpJob' key={keyID}>
                <div className='companyInfo flex'>
                  <div className='company left'><b>{job.Title}</b> | {job.Company}, {job.Location}</div>
                  <div className='dates right emphasized'>{job.StartDate} - {job.EndDate}</div>
                </div>
                <div className='highlights left'>{job.Highlights}</div>
              </div>
            )
          }
        })
      )
    }
    const addAddBtn = () => {
      if(isPublished === false) {
        return(
          <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey} order='regularBtn addBtn' />
        )
      }
    }
    const setDivClass = () => {
      if(isPublished === false) {
        return 'resumeExp resume' 
      } else {
        return 'pubExp pubResume'
      }
    }
    return (
      <div className={setDivClass()}>
        <h2>Experience {addAddBtn()}</h2>
        {renderAllDivs()}
      </div>
    )
  }
}
export default ExpTemplate;