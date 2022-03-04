/* eslint-disable no-useless-constructor */
import './App.css';
import React, { Component } from 'react';
import './App.css';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducation';
import DisplayGenInfo from './components/DisplayGenInfo';
import Button from './components/ElemButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
    }
    this.handlePublish = this.handlePublish.bind(this);
  }
  handlePublish(e) {
    if(this.state.isPublished === false) {
      e.target.textContent = "Unpublish";
      this.setState({
        isPublished: true
      })
    } else {
      e.target.textContent = "Publish";
      this.setState({
        isPublished: false
      })
    }
  }

  render() {
    const { isPublished } = this.state;
    const { handlePublish } = this.props;
    return (
      <div>
        <h1>ResumeMaker</h1>
        <Button btnText='Publish' order='resumeBtn glass' clickFunc={handlePublish} />
        <DisplayGenInfo isPublished={isPublished} />
        <DisplayExperience isPublished={isPublished} />
        <DisplayEducation isPublished={isPublished} />
      </div>
    )
  }
};

export default App;
