import React from 'react';
import '../App.css';

const InputForm = (props) => {
  const [ info, submitFunc, changeFunc ] = props;
  const attributes = {
    className: "genInfoForm",
  }
  return(
    <div>
      <h2 className="heading">Personal Info</h2>
 
      <form key="genInfo"
            className="genInfoForm"
            data-name="genInfo"
            data-section="newGenInfo"
       
            onSubmit={submitFunc}
      >
        <label for="GenForm-name">Name:</label>
        <input 
            id="GenForm-name"
            className="GenForm-name"
            name="Name"

            value={info[0]}
            tabIndex='1'
            autoFocus
            onChange={changeFunc}
         />
      </form>
    </div>
  )
}
return default InputForm;