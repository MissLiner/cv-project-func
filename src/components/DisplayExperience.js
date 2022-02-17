/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import '../styles/formStyles.css';
import InputForm from './InputForm';
//import _ from 'lodash';
import { handleChange, handleSubmit } from './HelperFuncs';

class DisplayExpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expInfo: [],
      newExpInfo: {
        company:    '',
        location:   '',
        title:      '',
        startDate:  '',
        endDate:    '',
        highlights:    '',
      },
      isEditable: false,
      display: 'form',
    }
    this.baseFormState = this.state.newExpInfo;
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }
  


  handleEdit = () => {
    if(this.state.isEditable === true) {
      this.setState({
        editable: false 
      })
    }
    else if(this.state.isEditable === false) {
      this.setState({
        editable: true 
      })
    }
  }
  emptyFields = (resetKey) => {
    this.setState({ 
      [resetKey]: this.baseFormState 
    });
  }

  handleAdd = (e) => {
    const resetObjKey = e.target.dataset.section;
    this.emptyFields(resetObjKey);
    this.setState({
      display: 'form',
    })
  }
 
  render() {
    const renderPage = () => {
      const { expInfo, newExpInfo } = this.state;
      const expInfoLabels = ['company', 'location', 'title', 'startDate', 'endDate', 'highlights'];
     
      if(this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="expInfo"
            sectionKey="newExpInfo"
            heading="Experience"
            inputList={expInfoLabels}
            details={newExpInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return (
          <InputDisplay
            details={expInfo} 
            editFunc={this.handleEdit}
            isOpen={this.state.isEditable}
            addFunc={this.handleAdd}
            infoType="expInfo"
            sectionKey="newExpInfo"
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

export default DisplayExpInfo;