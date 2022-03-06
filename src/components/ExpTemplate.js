/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css'; 

class ExpTemplate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      expData,
      editFunc,
      deleteFunc,
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
                  <div className='company left'>
                    <b>{job.Title}</b> | {job.Company}, {job.Location}
                  </div>
                  <div className='dates right emphasized'>
                    {job.StartDate} - {job.EndDate}
                  </div>
                </div>
                <div className='highlights left'>{job.Highlights}</div>

                <button 
                  key={keyID + 'btn'} 
                  onClick={editFunc} 
                  data-name={infoType} 
                  data-section={sectionKey} 
                  data-arrindex={i} 
                  className='regularBtn'
                 >Edit</button>
                <button 
                  key={keyID + 'btn'} 
                  onClick={deleteFunc} 
                  data-name={infoType} 
                  data-section={sectionKey} 
                  data-arrindex={i} 
                  className='regularBtn'
                 >Delete</button>
              </div>
            )
          } else {
            return (
              <div className='resumeExpJob' key={keyID}>
                <div className='companyInfo flex'>
                  <div className='company left'>
                    <b>{job.Title}</b> | {job.Company}, {job.Location}
                  </div>
                  <div className='dates right emphasized'>
                    {job.StartDate} - {job.EndDate}
                  </div>
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
          <button 
            onClick={addFunc} 
            data-section={sectionKey} 
            className='regularBtn addBtn'
           >Add New</button>
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