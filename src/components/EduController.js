/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import InputForm from './InputForm';
import EduTemplate from './EduTemplate';
import { handleChange, handleSubmit, handleAdd, handleEdit, handleDelete, handleCancel } from './HelperFuncs';
import uniqid from 'uniqid';

class EduController extends Component {
  constructor(props) {
    super(props);

    let storedEduInfo = [];
    let storedDisplay = 'form';

    if(localStorage.getItem('eduInfo')) {
      storedEduInfo = JSON.parse(localStorage.getItem('eduInfo'));
      storedDisplay = 'text';
    }
    this.state = {
      eduInfo:    storedEduInfo,
      newEduInfo: {
        School:   '',
        Location: '',
        Degree:   '',
        Year:     '',
        baseID:   uniqid(),
      },
      display:    storedDisplay,
      editIndex:  'none',
    }
    this.baseFormState = this.state.newEduInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
    this.handleDelete = handleDelete.bind(this);
    this.handleCancel = handleCancel.bind(this);
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
            heading="Education"
            infoType="eduInfo"
            sectionKey="newEduInfo"
            inputList={eduInfoLabels}
            details={newEduInfo}

            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            cancelFunc={this.handleCancel}
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
            deleteFunc={this.handleDelete}
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

export default EduController;