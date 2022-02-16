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
  
  emptyFields = (obj) => {
    Object.keys(obj).forEach(key => obj[key]='');
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
  handleAdd = () => {
    this.setState({
      display: 'form'
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