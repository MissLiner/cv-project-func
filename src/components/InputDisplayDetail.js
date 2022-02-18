/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';
import Div from './ElemDiv';

class InputDisplayDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { keyID, detail, detailIndex, infoType, sectionKey, editFunc } = this.props;
    let subKeyID = (keyID + 1) * 100;
    const renderDiv = () => {
      return (
        Object.entries(detail).map(entry => {
          subKeyID += 1;
          return(
            <Div 
            key={subKeyID}
            divText={entry[1]} /> 
          )
        })
      )
  }
    return(
      <div>
        {renderDiv()}
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} sectionKey={sectionKey} arrIndex={detailIndex}></Button>
      </div>
    )
  }
}
export default InputDisplayDetail;