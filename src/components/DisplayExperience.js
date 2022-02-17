/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import '../styles/formStyles.css';
import InputForm from './InputForm';
//import _ from 'lodash';
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
    this.baseFormState = this.state.newExpInfo;
    this.handleChange = handleChange.bind(this);
  }
  

  handleSubmit = (e) => {
    e.preventDefault();

    const arrayKey = e.target.name;
    const objKey = e.target.dataset.section;
    let newArray = [];
    newArray = newArray.concat(this.state[arrayKey]);
    newArray = newArray.concat(this.state[objKey]);
    // let resetObj = this.state[objKey];
    // const resetObjKeys = Object.keys(resetObj);
    console.log(this.state[objKey]);
    
    this.setState({
      [arrayKey]: newArray,
      //[objKey]: resetObj,
      display: "text",
    })
    

      // , () => { 
      //   console.log("All done")
        // resetObj = this.emptyFields(resetObj);
        // for(let resetObjKey of resetObjKeys) {
        //   this.setState({
        //     [this.state[objKey]]: {
        //       ...this.state[objKey],
        //       [resetObjKey]: '',
        //     }
          
        //[objKey]: resetObj
        //})
      // }
  };
  // componentDidUpdate(prevProps, prevState) {
  //   if(this.state.expInfo !== prevState.expInfo) {
  //     console.log('comparison worked!');
  //     let resetObj = this.state.newExpInfo;
  //     resetObj = this.emptyFields(resetObj);
  //     this.setState({
  //       newExpInfo: resetObj,
  //     })
  //   }
  // };
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