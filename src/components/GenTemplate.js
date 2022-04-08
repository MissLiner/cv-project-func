import React from 'react';
import '../App.css';

const GenTemplate = (props) => {
  const {
    genData,
    editFunc,
    infoType,
    isPublished,
  } = props;
  
  const renderHeader = () => {
    if(isPublished === false) {
      return (
        <div className='resumeHeader resume'>
          <h2 className="heading">Contact Info</h2>
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
      {renderHeader()}
    </div>  
  )
}
export default GenTemplate;