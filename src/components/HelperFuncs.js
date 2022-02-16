/* eslint-disable no-useless-constructor */
// import React from 'react';
// import DisplayExperience from './DisplayExperience';

export function handleChange(e) {
  //React.memo(() => {
    const editObj = e.target.dataset.section;
    const editKey = e.target.name;
    const newValue = e.target.value;

    this.setState({
      [editObj]: {
        ...this.state[editObj],
        [editKey]: newValue,
      }
    })
  //})
}