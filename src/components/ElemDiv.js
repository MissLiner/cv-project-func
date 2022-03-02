/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Div extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { divText, elemClass} = this.props;
    return (
      <div className={elemClass}>
        {divText}
       </div>
    )
  }
}

export default Div;