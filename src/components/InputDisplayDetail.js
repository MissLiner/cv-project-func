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
    const { keyID, detail, editFunc } = this.props;
    const renderDiv = () => {
      return (
        Object.entries(detail).map(entry => {
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
        <Button btnText="Edit" clickFunc={editFunc}></Button>
      </div>
    )
  }
}
export default InputDisplayDetail;