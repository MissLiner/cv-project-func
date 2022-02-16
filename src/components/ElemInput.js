/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { 
      stateProperty, 
      stateValue,
      inputType, 
      section, 
      changeFunc, 
      clickFunc } = this.props;

    return (
      <label>{this.props.inputLabel}:&nbsp;
        <input
          name={stateProperty}
          type={inputType}
          data-section={section}
          onChange={changeFunc}
          onClick={clickFunc}
          value={stateValue}
        />
      </label>
    )
  }
}

export default Input;