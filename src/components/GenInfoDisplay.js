/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './Button';
import '../styles/formStyles.css';

class GenInfoDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc } = this.props;

    return (
      <div>
        <h2>{details.name}</h2>
        <div id="address-box">
          <div>{details.address}</div>
          <div>
            <div>{details.city}</div>
            <div>{details.state}</div>
            <div>{details.zip}</div>
          </div>
          <div>
            <div>{details.phone}</div>
            <div>{details.email}</div>
          </div>
        </div>
        <Button btnText="Edit" section="genInfoLocked" clickFunc={editFunc}></Button>
      </div>
    )
  }
}

export default GenInfoDisplay;