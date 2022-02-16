/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import uniqid from "uniqid";
import Input from "./Input";
import Button from "./Button";
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
    const { inputList, submitFunc, infoType, sectionKey, heading, changeFunc } = this.props;

    const renderInputs = () => {
      const inputLabels = Object.keys(inputList);
      return(
        inputLabels.map(inputLabel => {
          const newKeyID = uniqid();
          const label = this.capitalizeFirst(inputLabel);
          return(
            <Input
              inputLabel={label}
              infoType={infoType}
              section={sectionKey}
              changeFunc={changeFunc}
              key={newKeyID}
            />
          )
        })
      )
    }

    return (
      <form onSubmit={submitFunc} name={infoType} data-section={sectionKey}>
        <h2>{heading}</h2>
        {renderInputs()}
        <Button type="submit" btnText="Save" section={sectionKey} />       
      </form>
    )
  }
}
export default InputForm;