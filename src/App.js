import './App.css';
import React, { useState } from 'react';
import GenController from './components/GenController';
import ExpController from './components/ExpController';
import EduController from './components/EduControllerNew';

const App = () => {
  const [isPublished, setIsPublished] = useState(false);

  const toggleIsPublished = () => {
    setIsPublished(!isPublished);
  }

  const checkIfSaved = () => {
    const allBtns = document.getElementsByTagName("button");
    for(let btn of allBtns) {
      if(btn.textContent === 'Save') {
        alert("Please save all work before publishing");
        return;
      }
    };
  }

  const toggleResumeClass = () => {
    const resumePage = document.getElementById("resumePage");

    if(!isPublished) {
      resumePage.classList.add("pubResumePage");
    } else {
      resumePage.classList.remove("pubResumePage");
    }
  }

  const handlePublish = () => {
    checkIfSaved();
    toggleResumeClass();
    toggleIsPublished();
  }

  return (
    <div>
      <h1>ResuMaker</h1>
      <button 
        className='resumeBtn glass' 
        onClick={handlePublish}
        >{isPublished ? "Unpublish" : "Publish"}
      </button>

      <div id="resumePage">
        <GenController isPublished={isPublished} />
        <ExpController isPublished={isPublished} />
        <EduController isPublished={isPublished} />
      </div>
    </div>
  )
}
export default App;
