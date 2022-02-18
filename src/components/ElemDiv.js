/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Div extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { divText} = this.props;
    return (
      <div>
        {divText}
       </div>
    )
  }
}

export default Div;