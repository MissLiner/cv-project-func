import React from 'react';
import '../App.css';

const InputForm = (props) => {
  const [ info, submitFunc, changeFunc ] = props;
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
            data-name="genInfo"
            data-section="newGenInfo"
            data-field="Name"

            value={info[1]}
            tabIndex='0'
            autoFocus
            onChange={changeFunc}
         />
      </form>
    </div>
  )
}
return default InputForm;