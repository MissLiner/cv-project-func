import React from 'react';
import '../App.css'; 
import InputHeader from './InputHeader';

const ExpTemplate = (props) => {
  const {
    expData,
    editFunc,
    deleteFunc,
    infoType,
    addFunc,
    sectionKey,
    isPublished,
  } = props;

  const renderHeading = () => {
    if(isPublished === false) {
      return(
        <InputHeader 
          heading="Experience"
          sectionKey={sectionKey} 
          addBtn={true} 
          addFunc={addFunc}
         />
      )
    } else {
      return(
        <h2 className="published-heading">Experience</h2>
      )
    }
  }
  const renderAllDivs = () => {
    return (
      expData.map((job, i) => {
        const keyID = job.baseID + i;
        if(isPublished === false) {
          return (
            <div className='resumeExpJob' key={keyID}>
              <div className='companyInfo flex preview-box'>
                <div className='company left'>
                  <b>{job.Title}</b> | {job.Company}, {job.Location}
                </div>
                <div className='dates right emphasized'>
                  {job.StartDate} - {job.EndDate}
                </div>
              </div>
              <ul className="preview-box-list">
                <li className='highlights left'>{job.Highlight1}</li>
                <li className='highlights left'>{job.Highlight2}</li>
                <li className='highlights left'>{job.Highlight3}</li>
              </ul>

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
              <ul>
                <li className='highlights left'>{job.Highlight1}</li>
                <li className='highlights left'>{job.Highlight2}</li>
                <li className='highlights left'>{job.Highlight3}</li>
              </ul>
            </div>
          )
        }
      })
    )
  }
  const renderAddBtn = () => {
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
      return 'pubExp pubResume resume-section'
    }
  }
  return (
    <div className={setDivClass()}>
      {renderHeading()}
      {renderAddBtn()}
      {renderAllDivs()}
    </div>
  )
}
export default ExpTemplate;