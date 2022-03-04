/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../App.css';
import InputForm from './InputForm';
import ExpTemplate from './TemplateExp';
import { handleChange, handleSubmit, handleAdd, handleEdit, handleDelete } from './HelperFuncs';
import uniqid from 'uniqid';

class DisplayExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expInfo:    [],
      newExpInfo: {
        Company:    '',
        Location:   '',
        Title:      '',
        StartDate:  '',
        EndDate:    '',
        Highlights: '',
        baseID:     uniqid(),
      },
      display:    'form',
      editIndex:  'none',
    }
    this.baseFormState = this.state.newExpInfo;

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleEdit = handleEdit.bind(this);
    this.handleDelete = handleDelete.bind(this);
  }
  componentDidMount() {
    if(localStorage.getItem('expInfo')) {
      const expInfo = JSON.parse(localStorage.getItem('expInfo'));
      this.setState({ 
        expInfo,
        display: 'text',
      });
    }
  }
  render() {
    const renderPage = () => {
      const { expInfo, newExpInfo } = this.state;
      const { isPublished } = this.props;
      const expInfoLabels = [['Company', 'first'], ['Location', 'second'], 
                            ['Title', 'fifth'], ['StartDate', 'third'], 
                            ['EndDate', 'fourth'], ['Highlights', 'sixth']];
   
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
          <ExpTemplate 
            expData={expInfo}
            infoType="expInfo"
            editFunc={this.handleEdit}
            addFunc={this.handleAdd}
            deleteFunc={this.handleDelete}
            sectionKey="newExpInfo" 
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

export default DisplayExperience;