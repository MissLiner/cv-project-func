/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';
import Div from './ElemDiv';
// import uniqid from 'uniqid';
//import { countMaps } from './HelperFuncs';

class InputDisplayDetail extends Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //     mapCounter: 0,
  //   }
  // this.countMaps = countMaps.bind(this);
  }
  render() {
    const { detail, detailIndex, infoType, sectionKey, editFunc, keyID } = this.props;
  
    const renderDiv = () => {
      return (
        Object.entries(detail).map((entry, i) => {
          const subKeyID = keyID + i;
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
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} sectionKey={sectionKey} arrIndex={detailIndex} key={detail.baseID + 'b1'}></Button>
      </div>
    )
  }
}
export default InputDisplayDetail;