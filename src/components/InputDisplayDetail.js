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
    const { infoType, 
            sectionKey,
            detail, 
            detailIndex, 
            editFunc, 
            keyID,
            inputList,
           } = this.props;
  
    const renderDiv = () => {
      return (
        Object.entries(detail).map((entry, i) => {
          const subKeyID = keyID + i;
          if(entry[0] !== "baseID") {
            return(
              <Div 
              key={subKeyID}
              divText={entry[1]}
              elemClass={inputList[i][1]} /> 
            )
          } else {
            return null;
          }
        })
      )
  }
    return(
      <div key={detail.baseID} className={infoType + "Display infoDisplay"}>  
        {renderDiv()}
        <Button btnText="Edit" clickFunc={editFunc} infoType={infoType} sectionKey={sectionKey} arrIndex={detailIndex} key={detail.baseID + 'b1'} order="bottom"></Button>
      </div>
    )
  }
}
export default InputDisplayDetail;