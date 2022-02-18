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
      elemClass,
      section, 
      changeFunc, 
      clickFunc } = this.props;

    return (
      <div className={elemClass + " inputBox"}>
        {/* <label>{labelText}:&nbsp; */}
          <input
            type={inputType}
            placeholder={labelText}
            data-name={infoType}
            data-section={section}
            data-field={labelText}
            onChange={changeFunc}
            onClick={clickFunc}
            value={inputValue}
          />
        {/* </label> */}
      </div>
    )
  }
}

export default Input;