/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from "./Input";
import Button from './Button';
import '../styles/formStyles.css';

class GenInfoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeFunc, submitFunc, formID, formKey } = this.props;

    return (
      <form id={formID} onSubmit={submitFunc} name={formKey}>
        <h2>General Info</h2>
        <Input inputLabel="Name" keyName='name' changeFunc={changeFunc} />
        <Input inputLabel="Address" keyName='address' changeFunc={changeFunc} />
        <div className="addressInfo">
          <Input inputLabel="City" keyName='city' changeFunc={changeFunc} />
          <Input inputLabel="State" keyName='state' changeFunc={changeFunc} />
          <Input inputLabel="Zip" keyName='zip' changeFunc={changeFunc} inputType="number" />
        </div>
        <div>
          <Input inputLabel="Phone" keyName='phone' inputType="number" changeFunc={changeFunc} />
          <Input inputLabel="Email" keyName='email' inputType="email" changeFunc={changeFunc} />
        </div>
        <Button type="submit" btnText="Save" />
      </form>
    )
  }
}
export default GenInfo;