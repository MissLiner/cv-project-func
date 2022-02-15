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
    const { inputList, submitFunc, formKey, sectionKey, heading, changeFunc } = this.props;

    const renderInputs = () => {
      const inputLabels = inputList.keys();
      return(
        inputLabels.map(key => {
          const label = this.capitalizeFirst(key);
          return(
            <Input
              inputLabel={label}
              keyName={formKey}
              section={sectionKey}
              changeFunc={changeFunc}  
              inputKey={uniqid()}
            />
          )
        })
      )
    }
    return (
      <form onSubmit={submitFunc} name={formKey} data-section={sectionKey}>
          <h2>{heading}</h2>
          {renderInputs()}
          {/* <Input 
            inputLabel="Company"
            keyName="company"
            section="newExpInfo"
            changeFunc={changeFunc}
          />
          <Input 
            inputLabel="Location"
            keyName="location"
            section="newExpInfo"
            changeFunc={changeFunc}
          />
        </div>
        <div>
          <Input
            inputLabel="Start Date"
            keyName="startDate"
            section="newExpInfo"
            changeFunc={changeFunc}
          />
          <Input
            inputLabel="End Date"
            keyName="endDate"
            section="newExpInfo"
            changeFunc={changeFunc}
          />
        </div>
        <Input
          inputLabel="Highlights"
          keyName="highlights"
          section="newExpInfo"
          changeFunc={changeFunc}
        /> */}
        <Button type="submit" btnText="Save" section={sectionKey} />       
      </form>
    )
  }
}
export default InputForm;