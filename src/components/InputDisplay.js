/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';
import InputDisplayDetail from './InputDisplayDetail';

class InputDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, addFunc, infoType, sectionKey, needsAddBtn } = this.props;
    
    const renderAllDivs = () => {
      let keyID = 100;
      return(
        details.map(detail => {
          keyID += 1;
          const detailIndex = details.indexOf(detail);
          return(
            <InputDisplayDetail 
              detail={detail} 
              keyID={keyID} 
              infoType={infoType}
              sectionKey={sectionKey}
              editFunc={editFunc}
              detailIndex={detailIndex} />
          )
        })
      )
    }
    const addAddBtn = () => {
      if(needsAddBtn === true) {
        return <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey}></Button>
      }
    }

    return (
      <div>
        <div>
          {renderAllDivs()}
        </div>
        {addAddBtn()}
      </div>
    )
  }
}

export default InputDisplay;