/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
//import App from "App";

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <label>{this.props.inputLabel}:&nbsp;
        <input
          value={this.props.inputVal}
          name={this.props.keyName}
        />
      </label>
    )
  }
}

export default Input;