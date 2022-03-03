/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';

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
                <div className='company left'>{job.Company}</div>
                <div className='location right'>{job.Location}</div>
              </div>
              <div className='dates left'>{job.StartDate} - {job.EndDate}</div>
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