/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import Button from './ElemButton';

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
        <div className='name bolded larger'>{headerData[0].Name}</div>
        <div className='address1'>{headerData[0].Address} | {headerData[0].City + ', ' + headerData[0].State + ' ' + headerData[0].Zip}</div>
        <div className='contacts'>{headerData[0].Email} | {headerData[0].Phone}</div>
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} />
      </div>
    )
  }
}
export default HeaderTemplate;