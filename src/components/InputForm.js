// import React, { useEffect, useState } from 'react';
import '../App.css';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const InputForm = (props) => {
  const renderToggleBtn = () => {
    if(props.hiddenClass === "") {
      return(
        <KeyboardArrowUpRoundedIcon />
      )
    } else {
      return(
        <KeyboardArrowDownRoundedIcon />
      )
    }
  }
  const renderInputs = () => {
    return(
      props.inputList.map((input, i) => {
        const keyID = i;
        const inputName = input[0];
        const inputOrder = input[1];  

        return(
          <div key={inputName + keyID} className={inputOrder + "Form inputBox"}>
            <input
              type={props.inputList[i][2]}
              maxLength={props.inputList[i][3]}
              minLength={props.inputList[i][3]}
              data-name={props.infoType}
              data-section={props.sectionKey}
              data-field={inputName}

              placeholder={inputName}
              value={props.details[inputName]}
              tabIndex={i + 1}
              autoFocus={props.inputList[i][4]}
              onChange={props.changeFunc}
            />
          </div>
        )
      })
    )
  }
  return (
    <form key={props.infoType}
      data-name={props.infoType} 
      data-section={props.sectionKey}
      className="InputForm"
      onSubmit={props.submitFunc}
      >
      <button className="toggle-btn glass" onClick={props.toggleFunc}>
        {renderToggleBtn()}
      </button>
      <h2 className="heading">{props.heading}</h2>
      <div className={"inputs-div " + props.hiddenClass + " " + props.infoType + "Form"}>
        {renderInputs()}
        <div className='bottomForm'>
        <button 
          type="submit" 
          className="regularBtn" 
          data-section={props.sectionKey} 
          >Save
        </button> 
        <button 
          type="button" 
          className="regularBtn" 
          data-section={props.sectionKey} 
          onClick={props.cancelFunc}
          >Cancel
        </button> 
      </div>
      </div>
 

    </form>
  )
}
export default InputForm;