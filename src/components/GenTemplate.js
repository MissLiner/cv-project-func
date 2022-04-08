import React from 'react';
import '../App.css';
import InputHeader from './InputHeader';

const GenTemplate = (props) => {
  const {
    genData,
    editFunc,
    infoType,
    isPublished,
  } = props;
  
  const renderGenInfo = () => {
    if(isPublished === false) {
      return (
        <div className='resumeHeader resume'>
          <InputHeader 
            heading="Contact Info" 
            sectionKey={props.sectionKey}
            addBtn={false} 
           />
          <div className='GenTemplate-name'>{genData[0].Name}</div>
          <div className='address1'>
            {genData[0].Address} | {genData[0].City}, 
            {genData[0].State} {genData[0].Zip}
          </div>
          <div className='contacts'>
            {genData[0].Email} | {genData[0].Phone}
          </div>
          <button 
            onClick={editFunc} 
            data-name={infoType} 
            data-section="newGenInfo"
            data-arrindex="0"
            className="regularBtn"
            >Edit</button>
        </div>
      )
    } else {
      return (
        <div className='pubHeader pubResume resume-section'>
          <div className='GenTemplate-name'>{genData[0].Name}</div>
          <div className='address1'>
            {genData[0].Address} | {genData[0].City}, 
            {genData[0].State} {genData[0].Zip}
          </div>
          <div className='contacts'>
            {genData[0].Email} | {genData[0].Phone}
          </div>
      </div>
      )
    }
  }

  return (
    <div>
      {renderGenInfo()}
    </div>  
  )
}
export default GenTemplate;