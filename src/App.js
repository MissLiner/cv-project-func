import './App.css';
import React, { useState } from 'react';
import DisplayExperience from './components/DisplayExperience';
import DisplayEducation from './components/DisplayEducationNew';
import DisplayGenInfo from './components/DisplayGenInfo';
import Button from './components/ElemButton';

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
      e.target.textContent = "Publish";
      toggleIsPublished();
    }
  }
  return (
    <div>
      <h1>ResuMaker</h1>
      <Button 
        btnText='Publish' 
        order='resumeBtn glass' 
        clickFunc={handlePublish}
        />
      <div id="resumePage">
        <DisplayGenInfo isPublished={isPublished} />
        <DisplayExperience isPublished={isPublished} />
        <DisplayEducation isPublished={isPublished} />
      </div>
    </div>
  )
}
export default App;
