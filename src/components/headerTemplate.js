/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../styles/formStyles.css';

class HeaderTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      headerData,
    } = this.props;
    return (
      <div>
        <div className='name'>{headerData[0]}</div>
        <div className='address1'>{headerData[1]}</div>
        <div className='address2'>{headerData[2] + ', ' + headerData[3] + ' ' + headerData[3]}</div>
        <div className='contacts'>{headerData[4] + ' ~ ' + headerData[5]}</div>
      </div>
    )
  }
}
export default HeaderTemplate;