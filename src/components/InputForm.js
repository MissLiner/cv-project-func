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
    const { submitFunc, details, infoType, sectionKey, heading, changeFunc } = this.props;

    const renderInputs = () => {
      const inputLabels = Object.keys(details)
      let newKeyID = 0;
      return(
        inputLabels.map(inputLabel => {
          newKeyID += 1;
          const label = this.capitalizeFirst(inputLabel);
          return(
            <Input
              inputLabel={label}
              stateProperty={inputLabel}
              stateValue={details[inputLabel]}
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