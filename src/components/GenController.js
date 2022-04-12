/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import GenTemplate from './GenTemplate'; 
import InputForm from './InputForm';
import {  handleChange, 
          handleSubmit, 
          handleEdit,
          handleToggle,
        } from './HelperFuncsOld';
import uniqid from 'uniqid';

class GenController extends Component {
  constructor(props) {
    super(props);

    let storedGenInfo = [];
    let storedDisplay = 'form';

    if(localStorage.getItem('info')) {
      storedGenInfo = JSON.parse(localStorage.getItem('info'));
      storedDisplay = 'text';
    }
    this.state = {
      info:    storedGenInfo,
      newInfo: {
        Name:       '',
        Address:    '',
        City:       '',
        State:      '',
        Zip:        '',
        Phone:      '',
        Email:      '',
        baseID:     uniqid(),
      },
      display:      storedDisplay,
      hiddenClass:  "",
      editIndex:    'none',
    };

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleEdit = handleEdit.bind(this);
    this.handleToggle = handleToggle.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    const { info, newInfo } = this.state;
    const { isPublished } = this.props;

    const genInfoLabels = [ ['Name', 'first', 'text', '' ], 
                            ['Phone', 'second', 'tel', ''  ], 
                            ['Email', 'third', 'email', ''], 
                            ['Address', 'fourth', 'text', ''], 
                            ['City', 'fifth', 'text', ''], 
                            ['State', 'sixth', 'text', '2' ], 
                            ['Zip', 'seventh', 'text', '5' ],  
                          ];

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
          <InputForm 
            heading="Contact Info"
            infoType="info"
            sectionKey="newInfo"
            inputList={genInfoLabels}
            details={newInfo}
            

            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            toggleFunc={this.handleToggle}
            hiddenClass={this.state.hiddenClass}
            
            tabIndexStart="1"
          />
        )     
      }
      else if(this.state.display === 'text') {
        return(
          <GenTemplate 
            genData={info}
            editFunc={this.handleEdit}
            infoType="genInfo" 
            isPublished={isPublished}
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
export default GenController;