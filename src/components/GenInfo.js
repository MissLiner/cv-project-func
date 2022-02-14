/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
//import App from "App";
import Input from "./Input";
import Button from './Button';

class GenInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:     '',
      address:  '',
      city:     '',
      state:    '',
      zip:      '',
    };
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  render() {
    return (
      <form>
        <h2>General Info</h2>
        <Input inputLabel="Name" keyName='name' inputVal={this.state.name} />
        <Input inputLabel="Address" keyName='address' inputVal={this.state.address} />
        <Input inputLabel="City" keyName='city' inputVal={this.state.city} />
        <Input inputLabel="State" keyName='state' inputVal={this.state.state} />
        <Input inputLabel="Zip" keyName='zip' inputVal={this.state.zip} />
        <Button type="submit" btnText="Submit" />
      </form>
    )
  }
}
export default GenInfo;