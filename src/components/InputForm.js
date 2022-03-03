/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "./ElemInput";
import Button from "./ElemButton";
import '../styles/formStyles.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { heading, 
            infoType, 
            sectionKey, 
            details, 
            inputList, 
            changeFunc, 
            submitFunc,
            updateFunc } = this.props;

    const renderInputs = () => {
      return(
        inputList.map((input, i) => {
          const keyID = i;
          const inputName = input[0];
          const inputOrder = input[1];
 
          return(
            <Input
              infoType={infoType}
              sectionKey={sectionKey}
              inputValue={details[inputName]}

              defaultText={inputName}
              elemClass={inputOrder + "Form"}
              elemType={inputList[i][2]}
              elemLength={inputList[i][3]}

              key={keyID}

              changeFunc={changeFunc}
            />
          )
        })
      )
    }

    return (
      <form 
        data-name={infoType} 
        data-section={sectionKey}
        className={infoType + 'Form'} 
        onSubmit={submitFunc} 
        >
        
        <h2 className="heading">{heading}</h2>
        
        {renderInputs()}
        
        <Button 
          type="submit" 
          order="bottomForm" 
          btnText="Save" 
          section={sectionKey} 
          updateFunc={updateFunc}
        />       
      </form>
    )
  }
}
export default InputForm;