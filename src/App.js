import './App.css';
import React, { useState } from 'react';
import GenController from './components/GenController';
import ExpController from './components/ExpController';
import EduController from './components/EduController';

const App = () => {
  const [isPublished, setIsPublished] = useState(false);

  const handleClear = () => {
    localStorage.clear();
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
          className='publishBtn glass' 
          onClick={handlePublish}
          >{isPublished ? "Unpublish" : "Publish"}
        </button>
        <button 
          className="clearBtn glass"
          onClick={handleClear}
          >Clear data
        </button>

      </div>

      <div id="resumePage">
        <GenController isPublished={isPublished} />
        <ExpController isPublished={isPublished} />
        <EduController isPublished={isPublished} />
      </div>
    </div>
  )
}
export default App;
