/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type,
            btnKey,
            order,
            value,
            infoType,
            sectionKey,
            arrIndex,
            clickFunc,
            btnText } = this.props;
    return (
      <button
        type={type}
        key={btnKey}
        className={order}
        value={value}
        data-name={infoType}
        data-section={sectionKey}
        data-arrindex={arrIndex}
        onClick={clickFunc}
      >{btnText}</button>
    )
  }
}

export default Button;