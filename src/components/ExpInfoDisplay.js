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
        <h2>Work History</h2>
        <div id="companyInfoBox">
          <div contentEditable={isOpen}>{details.company}</div>
          <div contentEditable={isOpen}>{details.location}</div>
        </div>
        <div contentEditable={isOpen}>{details.startDate}-{details.endDate}</div>
        <div contentEditable={isOpen}>{details.highlights}</div>

        <Button btnText="Edit" section="expInfoOpen" clickFunc={editFunc}></Button>
      </div>
    )
  }
}

export default ExpInfoDisplay;