/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import InputForm from './InputForm';
import EduTemplate from './TemplateEdu';
import { handleChange, handleSubmit, handleAdd, handleEdit } from './HelperFuncs';
import uniqid from 'uniqid';

class DisplayEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eduInfo:    [],
      newEduInfo: {
        School:   '',
        Location: '',
        Degree:   '',
        Year:     '',
        baseID:   uniqid(),
      },
      display:    'form',
      editIndex:  'none',
    }
    this.baseFormState = this.state.newEduInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  componentDidMount() {
    if(localStorage.getItem('eduInfo')) {
      const eduInfo = JSON.parse(localStorage.getItem('eduInfo'));
      this.setState({ 
        eduInfo,
        display: 'text',
      });
    }
  }
  
  render() {
    const renderPage = () => {
      const { eduInfo, newEduInfo } = this.state;
      const { isPublished } = this.props;
      const eduInfoLabels = [['School', 'first'], ['Location', 'second'], 
                            ['Degree', 'fourth'], ['Year', 'third']];

      if (this.state.display === 'form') {
        return (
          <InputForm
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="eduInfo"
            sectionKey="newEduInfo"
            heading="Education"
            inputList={eduInfoLabels}
            details={newEduInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return (
          <EduTemplate
            eduData={eduInfo}
            infoType="eduInfo"
            editFunc={this.handleEdit}
            addFunc={this.handleAdd}
            sectionKey="newEduInfo" 
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

export default DisplayEducation;