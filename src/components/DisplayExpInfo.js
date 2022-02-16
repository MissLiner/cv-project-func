/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import '../styles/formStyles.css';
import InputForm from './InputForm';

class DisplayExpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newExpInfo: {
        company:    '',
        location:   '',
        title:      '',
        startDate:  '',
        endDate:    '',
        highlights:    '',
      },
      expInfo: [],
      isEditable: false,
      display: 'form',
    }
  }
  handleChange = (e) => {
    const editObj = e.target.dataset.section;
    const editKey = e.target.name;
    const newValue = e.target.value;
  
    this.setState({
      [editObj]: {
        ...this.state[editObj],
        [editKey]: newValue,
      }
    })
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
    const { expInfo, newExpInfo } = this.state;

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="expInfo"
            sectionKey="newExpInfo"
            heading="Experience"
            inputList={newExpInfo}
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