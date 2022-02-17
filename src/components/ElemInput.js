/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { 
      infoType, 
      inputValue,
      inputType, 
      labelText,
      labelClass,
      section, 
      changeFunc, 
      clickFunc } = this.props;

    return (
      <label>{labelText}:&nbsp;
        <input
          type={inputType}
          className={labelClass}
          data-name={infoType}
          data-section={section}
          data-field={labelText}
          onChange={changeFunc}
          onClick={clickFunc}
          value={inputValue}
        />
      </label>
    )
  }
}

export default Input;