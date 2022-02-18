/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "./ElemInput";
import Button from "./ElemButton";
import '../styles/formStyles.css';

class InputForm extends Component {
  constructor(props) {
    super(props)
  }
  capitalizeFirst = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }
  render() {
    const { inputList, submitFunc, details, infoType, sectionKey, heading, changeFunc, infoTypeID } = this.props;

    const renderInputs = () => {
      let newKeyID = infoTypeID;
      
      return(
        inputList.map(input => {
          newKeyID += 1;
          const inputName = input[0];
          const inputOrder = input[1];
 
          return(
            <Input
              infoType={infoType}
              inputValue={details[inputName]}
              labelText={inputName}
              elemClass={inputOrder}
              section={sectionKey}
              changeFunc={changeFunc}
              key={newKeyID}
            />
          )
        })
      )
    }

    return (
      <form onSubmit={submitFunc} className={infoType + 'Form'} data-name={infoType} data-section={sectionKey}>
        <h2 className="heading">{heading}</h2>
        {renderInputs()}
        <Button type="submit" order="bottom" btnText="Save" section={sectionKey} />       
      </form>
    )
  }
}
export default InputForm;