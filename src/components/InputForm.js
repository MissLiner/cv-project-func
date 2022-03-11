import React from 'react';
import '../App.css';

const InputForm = (props) => {
  const renderInputs = () => {
    return(
      <div key={inputName + keyID} className={inputOrder + "Form inputBox"}>
        <form key={props.infoType}
        data-name={props.infoType} 
        data-section={props.sectionKey}
        className={props.infoType + 'Form'} 
        onSubmit={props.submitFunc}
        >
          <h2 className="heading">{props.heading}</h2>
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
        </form>
      </div>
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
      className={props.infoType + 'Form'} 
      onSubmit={props.submitFunc}
      >
      <h2 className="heading">{props.heading}</h2>
      {renderInputs()}

      <div className='bottomForm'>
        <button 
          type="submit" 
          className="regularBtn" 
          data-section={props.sectionKey} 
          onClick={props.updateFunc}
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
    </form>
  )
}
export default InputForm;