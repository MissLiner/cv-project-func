/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import HeaderTemplate from './headerTemplate';
import InputDisplay from './InputDisplay';
import InputForm from './InputForm';
import { handleChange, handleSubmit, handleEdit } from './HelperFuncs';
import uniqid from 'uniqid';
import '../styles/formStyles.css';

class DisplayGenInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo:    [],
      newGenInfo: {
        Name:       '',
        Address:    '',
        City:       '',
        State:      '',
        Zip:        '',
        Phone:      '',
        Email:      '',
        baseID:     uniqid(),
      },
      display:    'form',
      editIndex:  'none',
    };
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  
  render() {
    const { genInfo, newGenInfo } = this.state;
    const { updateFunc } = this.props;
    const genInfoLabels = [ ['Name', 'first', 'text'], ['Phone', 'second', 'tel' ], 
                            ['Email', 'third', 'email'], ['Address', 'fourth', 'text'], 
                            ['City', 'fifth', 'text'], ['State', 'sixth', 'text', '2'], 
                            ['Zip', 'seventh', 'text', '5'],  
                          ];

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
          <InputForm 
            heading=""
            infoType="genInfo"
            sectionKey="newGenInfo"
            inputList={genInfoLabels}
            details={newGenInfo}

            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            updateFunc={updateFunc}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return(
          <HeaderTemplate headerData={genInfo} />
          // <InputDisplay 
          //   heading=""
          //   infoType="genInfo"
          //   sectionKey="newGenInfo"
          //   inputList={genInfoLabels}
          //   details={genInfo} 

          //   needsAddBtn={false}

          //   editFunc={this.handleEdit}
          // />
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

export default DisplayGenInfo;