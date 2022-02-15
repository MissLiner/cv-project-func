/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import ExpInfoForm from './ExpInfoForm';
import ExpInfoDisplay from './ExpInfoDisplay';
import '../styles/formStyles.css';

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

    const arrayKey = e.target.name;
    const newObjKey = e.target.dataset.section;
    let resetObj = this.state[newObj];
    const newArray = this.state[arrayKey].concat(resetObj);
    resetFields(resetObj);

    this.setState({
      display: 'text',
      [arrayKey]: newArray,
      [newObjKey]: resetObj,
    })
    // this.setState({
    //   newExpInfo: {
    //     company:    '',
    //     location:   '',
    //     title:      '',
    //     startDate:  '',
    //     endDate:    '',
    //     highlights: '',
    //   }
    // })
  }
  handleEdit = () => {
    if(this.state.editable === true) {
      this.setState({
        editable: false 
      })
    }
    else if(this.state.editable === false) {
      this.setState({
        editable: true 
      })
    }
  }
  render() {
    const { expInfo } = this.state;

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
            <ExpInfoForm
              changeFunc={this.handleChange} 
              submitFunc={this.handleSubmit}
            />
        )     
      }
      else if(this.state.display === 'text') {
        return(
          <div>
            <ExpInfoDisplay
              details={expInfo} 
              editFunc={this.handleEdit}
              isOpen={this.state.isEditable}
            />
          </div>
        )
      }
    }
    return (
        {renderPage}
    )
  }
}

export default DisplayExpInfo;