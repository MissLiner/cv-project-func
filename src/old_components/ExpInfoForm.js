/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "../components/ElemInput";
import Button from "../components/ElemButton";
import '../styles/formStyles.css';

class ExpInfoForm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { submitFunc, formKey, changeFunc } = this.props;
    return (
      <form id="expInfoForm" onSubmit={submitFunc} name={formKey} data-section="newExpInfo">
        <div>
          <h2>Work History</h2>
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
        <Button type="submit" btnText="Save" section="newExpInfo" />       
      </form>
    )
  }
}
export default ExpInfoForm;