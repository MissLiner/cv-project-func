/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';

class GenInfoDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, isOpen } = this.props;

    return (
      <div>
        <h2 contentEditable={isOpen}>{details.name}</h2>
        <div id="address-box">
          <div contentEditable={isOpen}>{details.address}</div>
          <div>
            <div contentEditable={isOpen}>{details.city}</div>
            <div contentEditable={isOpen}>{details.state}</div>
            <div contentEditable={isOpen}>{details.zip}</div>
          </div>
          <div>
            <div contentEditable={isOpen}>{details.phone}</div>
            <div contentEditable={isOpen}>{details.email}</div>
          </div>
        </div>
        <Button btnText="Edit" section="genInfoOpen" clickFunc={editFunc}></Button>
      </div>
    )
  }
}

export default GenInfoDisplay;