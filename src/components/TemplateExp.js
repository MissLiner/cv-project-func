/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../styles/formStyles.css';
import Button from './ElemButton';

class ExpTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      expData,
      editFunc,
      infoType,
      addFunc,
      sectionKey,
    } = this.props;

    const renderAllDivs = () => {
      return (
        expData.map((job, i) => {
          const keyID = job.baseID + i;
          return (
            <div className='resumeExpJob' key={keyID}>
              <div className='companyInfo flex'>
                <div className='company left'><b>{job.Title}</b> | {job.Company}, {job.Location}</div>
                <div className='dates right emphasized'>{job.StartDate} - {job.EndDate}</div>
              </div>
              <div className='highlights left'>{job.Highlights}</div>
            </div>
          )
          })
      )
    }
    return (
      <div className="resumeExp resume">
        <h2>Experience</h2>
        {renderAllDivs()}
      
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} />
        <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey} />
      </div>
    )
  }
}
export default ExpTemplate;