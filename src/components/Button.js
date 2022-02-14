/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
//import App from "App";

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        type={this.props.type}
        value={this.props.value}
        dataset-section={this.props.section}
        onClick={this.props.clickFunc}
      >{this.props.btnText}</button>
    )
  }
}

export default Button;