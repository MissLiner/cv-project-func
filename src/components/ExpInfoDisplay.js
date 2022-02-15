/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './Button';
import '../styles/formStyles.css';

class ExpInfoDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, isOpen } = this.props;

    return (
      <div>
        <div id="companyInfoBox">
          <h2 contentEditable={isOpen}>{details.company}</h2>
          <div contentEditable={isOpen}>{details.location}</div>
        </div>
        <div>{details.startDate}-{details.endDate}</div>
        <div id="addressBox">
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

export default ExpInfoDisplay;