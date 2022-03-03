/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';

class HeaderTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      headerData,
      editFunc,
      infoType,
    } = this.props;

    return (
      <div className='resumeHeader resume'>
        <div className='name'>{headerData[0].Name}</div>
        <div className='address1'>{headerData[0].Address}</div>
        <div className='address2'>{headerData[0].City + ', ' + headerData[0].State + ' ' + headerData[0].Zip}</div>
        <div className='contacts'>{headerData[0].Phone + ' ~ ' + headerData[0].Email}</div>
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} />
      </div>
    )
  }
}
export default HeaderTemplate;