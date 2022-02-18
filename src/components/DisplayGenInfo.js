/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputForm from './InputForm';
import { handleChange, handleSubmit, handleEdit } from './HelperFuncs';
import '../styles/formStyles.css';

class DisplayGenInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: [],
      newGenInfo: {
        Name:     '',
        Address:  '',
        City:     '',
        State:    '',
        Zip:      '',
        Phone:    '',
        Email:    '',
      },
      isEditable: false,
      display: 'form',
    };
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  
  render() {
    const { genInfo, newGenInfo } = this.state;
    const genInfoLabels = [['Name', 'first widthMedium'], ['Address', 'fourth widthLarge'], ['City', 'fifth widthSmall'], ['State', 'sixth widthTiny'], ['Zip', 'seventh widthTiny'], ['Phone', 'second widthSmall'], ['Email', 'third widthMedium']];

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
          <InputForm 
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="genInfo"
            sectionKey="newGenInfo"
            heading="Basic Info"
            inputList={genInfoLabels}
            details={newGenInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return(
          <InputDisplay 
            details={genInfo} 
            editFunc={this.handleEdit}
            isOpen={this.state.isEditable}
            infoType="genInfo"
            sectionKey="newGenInfo"
            needsAddBtn={false}
          />
        )
      }
    }
    return (
      <div>
        {renderPage()}
      </div>
    )
  }
}

export default DisplayGenInfo;