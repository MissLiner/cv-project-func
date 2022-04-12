import './App.css';
import React, { useState } from 'react';
import GenController from './components/GenController';
import ExpController from './components/ExpController';
import EduController from './components/EduController';

const App = () => {
  const [isPublished, setIsPublished] = useState(false);
  const [remount, setRemount] = useState(0);

  const handleClear = () => {
    localStorage.clear();
    setRemount(remount + 1);
  }
  const toggleIsPublished = () => {
    setIsPublished(!isPublished);
  }

  const checkIfSaved = () => {
    const allBtns = document.getElementsByTagName("button");
    for(let btn of allBtns) {
      if(btn.textContent === 'Save') {
        alert("Please save all work before publishing");
        return false;
      }
    };
    return true;
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
    const isSaved = checkIfSaved();
    if(!isSaved) {
      return;
    } else {
      toggleResumeClass();
      toggleIsPublished();
    }
  }

  return (
    <div>
      <div className="App-header">
        <h1 className="App-title">ResumeMaker</h1>
        <button 
          className='publish-btn glass' 
          onClick={handlePublish}
          >{isPublished ? "Unpublish" : "Publish"}
        </button>
        <button 
          className="clear-btn glass"
          onClick={handleClear}
          >Clear data
        </button>

      </div>

      <div id="resumePage">
        <GenController isPublished={isPublished} remount={remount} />
        <ExpController isPublished={isPublished} remount={remount} />
        <EduController isPublished={isPublished} remount={remount} />
      </div>
    </div>
  )
}
export default App;
