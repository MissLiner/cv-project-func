/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import uniqid from 'uniqid';
//import App from "App";

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <label key={uniqid()}>{this.props.inputLabel}:&nbsp;
        <input
          name={this.props.infoType}
          type={this.props.inputType}
          data-section={this.props.section}
          onChange={this.props.changeFunc}
          onClick={this.props.clickFunc}
          key={uniqid}
        />
      </label>
    )
  }
}

export default Input;