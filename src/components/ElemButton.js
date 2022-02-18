/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        type={this.props.type}
        className={this.props.order}
        value={this.props.value}
        data-name={this.props.infoType}
        data-section={this.props.sectionKey}
        onClick={this.props.clickFunc}
      >{this.props.btnText}</button>
    )
  }
}

export default Button;