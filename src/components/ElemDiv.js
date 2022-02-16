/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Div extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { isOpen, divText} = this.props;
    return (
      <div 
        contentEditable={isOpen}
        >
        {divText}
       </div>
    )
  }
}

export default Div;