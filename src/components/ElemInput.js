/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { 
      infoType, 
      sectionKey, 
      inputValue,
      inputType, 
      defaultText,
      elemClass,
      
      changeFunc, 
      clickFunc } = this.props;

    return (
      <div className={elemClass + " inputBox"}>
          <input
            type={inputType}
            data-name={infoType}
            data-section={sectionKey}
            data-field={defaultText}

            placeholder={defaultText}
            value={inputValue}

            onChange={changeFunc}
            onClick={clickFunc}
          />
      </div>
    )
  }
}

export default Input;