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
          name={this.props.keyName}
          type={this.props.inputType}
          data-section={this.props.section}
          onChange={this.props.changeFunc}
          onClick={this.props.clickFunc}
        />
      </label>
    )
  }
}

export default Input;