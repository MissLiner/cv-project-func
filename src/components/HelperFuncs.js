/* eslint-disable no-useless-constructor */
//import React, { Component } from 'react';

export function handleChange(e) {
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