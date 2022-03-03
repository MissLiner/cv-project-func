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
    } = this.props;

    const renderAllDivs = () => {
      return (
        expData.map((job) => {
          console.log(job);
          console.log(job.Company);
          return (
            <div className='resumeExpJob'>
              <div className='companyInfo'>
                <div className='company'>{job.Company}</div>
                <div className='location'>{job.Location}</div>
              </div>
              <div className='dates'>{job.StartDate} - {job.EndDate}</div>
              <div className='highlights'>{job.Highlights}</div>
            </div>
          )
          })
      )
    }
    return (
      // <div className='resumeExp resume'>
      //   <div className='companyInfo'>
      //     <div className='company'>{expData[0].Company}</div>
      //     <div className='location'>{expData[0].Location}</div>
      //   </div>
      //   <div className='dates'>{expData[0].StartDate} - {expData[0].EndDate}</div>
      //   <div className='highlights'>{expData[0].Highlights}</div>
      <div className="resumeExp resume">
        {renderAllDivs()}
      
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} />
        <Button btnText="Add New" clickFunc={addFunc} />
      </div>
    )
  }
}
export default ExpTemplate;