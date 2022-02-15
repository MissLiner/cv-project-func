/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Button from './Button';
import '../styles/formStyles.css';

class ExpInfoDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, isOpen, addFunc } = this.props;

    const renderAllDivs = () => {
      return (
      details.map(detail => {
        return (
          <div>
            <div className="companyInfoBox">
              <div contentEditable={isOpen}>
                {detail.company}
              </div>
              <div contentEditable={isOpen}>
                {detail.location}
              </div>
            </div>
            <div contentEditable={isOpen}>
              {detail.startDate}-{detail.endDate}
            </div>
            <div contentEditable={isOpen}>
              {detail.highlights}
            </div>
          </div>
        )
      })
      )
    }

    return (
      <div>
        <div>
          {renderAllDivs()}
        </div>
        <Button btnText="Edit" clickFunc={editFunc}></Button>
        <Button btnText="Add Position" clickFunc={addFunc}></Button>
      </div>
    )
  }
}

export default ExpInfoDisplay;