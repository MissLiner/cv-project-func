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
    const { details, editFunc, addFunc, sectionKey, needsAddBtn } = this.props;
    
    const renderAllDivs = () => {
      let keyID = 100;
      return(
        details.map(detail => {
          keyID += 1;
          return(
            <InputDisplayDetail 
              detail={detail} 
              keyID={keyID} 
              editFunc={editFunc} />
          )
        })
      )
    }
    // const renderAllDivs = () => {
    //   let keyID = 100;
    //   details.map(detail => {
    //     const detailDiv = document.createElement('div');
    //     Object.entries(detail).forEach(entry => {
    //       keyID += 1;
    //       const entryDiv = <Div 
    //                         key={keyID}
    //                         divText={entry[1]} /> 
    //       detailDiv.appendChild(entryDiv);
    //     })
    //     Object.entries(detail).map(entry => {

    //       return(

    //           )
    //         })
    //       )
    //     })
    //   )
    // }
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
        {addAddBtn()}
      </div>
    )
  }
}

export default InputDisplay;