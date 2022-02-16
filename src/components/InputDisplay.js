/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
//import uniqid from 'uniqid';
import Button from './ElemButton';
import '../styles/formStyles.css';
import Div from './ElemDiv';

class InputDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, isOpen, addFunc, sectionKey, infoType } = this.props;
    
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

    return (
      <div>
        <div>
          {renderAllDivs()}
        </div>
        <Button btnText="Edit" clickFunc={editFunc}></Button>
        <Button btnText="Add Position" clickFunc={addFunc} name={infoType}section={sectionKey}></Button>
      </div>
    )
  }
}

export default InputDisplay;