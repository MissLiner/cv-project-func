/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import '../styles/formStyles.css';
import InputForm from './InputForm';
import { handleChange } from './HelperFuncs';

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
    this.handleChange = handleChange.bind(this);
  }
  
  emptyFields = (stateObj) => {
    const clearedObj = Object.keys(stateObj).forEach(key => stateObj[key]='');
    return clearedObj;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      display: "text",
    })
    const arrayKey = e.target.name;
    const objKey = e.target.dataset.section;
    let resetObj = this.state[objKey];
    let newArray = this.state[arrayKey];
    newArray = newArray.concat(resetObj);
    
    this.setState({
      [arrayKey]: newArray,
    })

    // this.emptyFields(resetObj);
    // this.setState({
    //   [objKey]: resetObj,
    // })
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
  handleAdd = (e) => {
    const newInfo = e.target.dataset.section;
    const emptyState = this.emptyFields(newInfo);
    this.setState({
      display: 'form',
      [newInfo]: emptyState
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
            section="newExpInfo"
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