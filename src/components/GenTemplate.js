import React from 'react';
import '../App.css';

const GenTemplate = (props) => {

  const renderHeader = () => {
    if(props.isPublished === false) {
      return (
        <div className='resumeHeader resume'>
          <div className='name bolded larger'>{props.headerData[0].Name}</div>
          <div className='address1'>
            {props.headerData[0].Address} | {props.headerData[0].City}, 
            {props.headerData[0].State} {props.headerData[0].Zip}
          </div>
          <div className='contacts'>
            {props.headerData[0].Email} | {props.headerData[0].Phone}
          </div>
          <button 
            onClick={props.editFunc} 
            data-name={props.infoType} 
            data-section="newGenInfo"
            data-arrindex="0"
            className="regularBtn"
            >Edit</button>
        </div>
      )
    } else {
      return (
        <div className='pubHeader pubResume'>
        <div className='name bolded larger'>{props.headerData[0].Name}</div>
        <div className='address1'>
          {props.headerData[0].Address} | {props.headerData[0].City}, 
          {props.headerData[0].State} {props.headerData[0].Zip}
        </div>
        <div className='contacts'>
          {props.headerData[0].Email} | {props.headerData[0].Phone}
        </div>
      </div>
      )
    }
  }

  return (
    <div>
      {renderHeader()}
    </div>  
  )
}
export default GenTemplate;