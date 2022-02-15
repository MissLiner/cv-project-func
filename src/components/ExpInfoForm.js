/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "./Input";
import Button from "./Button";

class ExpInfoForm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { submitFunc, formKey, changeFunc } = this.props;
    return (
      <form id="expInfoForm" onSubmit={submitFunc} name={formKey}>
        <div>
          <Input 
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
        />
        <Button type="submit" text="Save" />       
      </form>
    )
  }
}
export default ExpInfoForm;