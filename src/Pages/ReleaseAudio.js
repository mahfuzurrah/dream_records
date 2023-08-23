import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Release from "../Component/Tabs/Release";
import EditAssets from "../Component/Tabs/EditAssets";
import ReleaseDate from "../Component/Tabs/ReleaseDate";
import Submission from "../Component/Tabs/Submission";
import { BiCheck } from "react-icons/bi";

const steps = [
  { title: 'Release', component: <Release /> },
  { title: 'Edit Assets', component: <EditAssets /> },
  { title: 'Release Date', component: <ReleaseDate /> },
  { title: 'Submission', component: <Submission /> },
];

function ReleaseAudio() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="releaseaudio_page">
      <div className="tab-navigation">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`tab ${index === currentStep ? 'active' : ''}`}
            onClick={() => handleStepChange(index)}>
            <BiCheck className='icons'/>
            {step.title}
          </div>
        ))}
      </div>
      <div className="steps">
        {steps[currentStep].component}
      </div>
      <div className="btn_area">
        <button className='btn' onClick={() => handleStepChange(currentStep - 1)} disabled={currentStep === 0}>Back</button>
        {currentStep === steps.length - 1 ? (
          <Link to="/all-release">
            <button className='btn'>Submit</button>
          </Link>
        ) : (
          <button className='btn' onClick={() => handleStepChange(currentStep + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default ReleaseAudio;
