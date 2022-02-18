/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "./ElemInput";
import Button from "./ElemButton";
// import uniqid from 'uniqid';
//import { countMaps } from './HelperFuncs';
import '../styles/formStyles.css';

class InputForm extends Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //     mapCounter: 0,
  //   }
  // this.countMaps = countMaps.bind(this);
  }

  render() {
    const { inputList, submitFunc, details, infoType, sectionKey, heading, changeFunc } = this.props;

    const renderInputs = () => {
      return(
        inputList.map((input, i) => {
          const keyID = i;
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
              key={keyID}
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