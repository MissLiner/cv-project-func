/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './ElemButton';
import '../styles/formStyles.css';
import Div from './ElemDiv';

class InputDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, isOpen, addFunc, sectionKey, needsAddBtn } = this.props;
    
    const renderAllDivs = () => {
      let keyID = 100;
      return (
        details.map(detail => {
          return (
            Object.entries(detail).map(entry => {
              keyID += 1;
              return(
                <Div 
                isOpen={isOpen}
                key={keyID}
                divText={entry[1]} /> 
              )
            })
          )
        })
      )
    }
    const addAddBtn = () => {
      if(needsAddBtn === true) {
        return <Button btnText="Add New" clickFunc={addFunc} section={sectionKey}></Button>
      }
    }

    return (
      <div>
        <div>
          {renderAllDivs()}
        </div>
        <Button btnText="Edit" clickFunc={editFunc}></Button>
        {addAddBtn()}
      </div>
    )
  }
}

export default InputDisplay;