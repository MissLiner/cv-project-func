/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Div extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { isOpen, divKey, divText} = this.props;
    return (
      <div 
        contentEditable={isOpen}
        key={divKey}
        >
        {divText}
       </div>
    )
  }
}

export default Div;