/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';
import Div from './ElemDiv';
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
    const { detail, detailIndex, infoType, sectionKey, editFunc } = this.props;
    
    const renderDiv = () => {
      return (
        Object.entries(detail).map(entry => {
          //this.countMaps();
          //const keyID = this.state.mapCounter;
          return(
            <Div 
            key={keyID}
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