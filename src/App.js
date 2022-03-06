import './App.css';
import React, { useState } from 'react';
import GenController from './components/GenController';
import ExpController from './components/ExpController';
import EduController from './components/EduController';

function App() {
  const [isPublished, setIsPublished] = useState(false);

  const toggleIsPublished = () => {
    setIsPublished(!isPublished);
  }

  function handlePublish(e) {
    const resumePage = document.getElementById("resumePage");
    const allBtns = document.getElementsByTagName("button");

    if(isPublished === false) {
      for(let btn of allBtns) {
        if(btn.textContent === 'Save') {
          alert("Please save all work before publishing");
          return;
        }
      };
      resumePage.classList.add("pubResumePage");
      toggleIsPublished();
    } else {
      resumePage.classList.remove("pubResumePage");
      toggleIsPublished();
    }
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
