/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { 
      infoType, 
      inputType, 
      section, 
      changeFunc, 
      clickFunc } = this.props;

    return (
      <label>{this.props.inputLabel}:&nbsp;
        <input
          name={infoType}
          type={inputType}
          data-section={section}
          onChange={changeFunc}
          onClick={clickFunc}
        />
      </label>
    )
  }
}

export default Input;