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
    const { details, editFunc, addFunc, infoType, sectionKey, needsAddBtn, heading } = this.props;

    const renderAllDivs = () => {
      return(
        details.map((detail, i) => {
          const detailIndex = details.indexOf(detail);
          const keyID = detail.baseID + i;
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
        return <Button btnText="Add New" clickFunc={addFunc} sectionKey={sectionKey} key={infoType + 'add'}></Button>
      }
    }

    return (
      <div>
        <h2 className="heading">{heading}</h2>
        <div>
          {renderAllDivs()}
        </div>
        {addAddBtn()}
      </div>
    )
  }
}

export default InputDisplay;