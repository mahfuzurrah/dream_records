// ReleaseAudio.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditAssets from "../Component/Tabs/EditAssets";
import Release from "../Component/Tabs/Release";
import ReleaseDate from "../Component/Tabs/ReleaseDate";
import Submission from "../Component/Tabs/Submission";

const steps = [
  { title: "Release", component: <Release /> },
  { title: "Edit Assets", component: <EditAssets /> },
  { title: "Release Date", component: <ReleaseDate /> },
  { title: "Submission", component: <Submission /> },
];

function ReleaseAudio() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / (steps.length - 1)) * 100);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress(((currentStep - 1) / (steps.length - 1)) * 100);
    }
  };

  return (
    <div className="releaseaudio">
      <h1>{steps[currentStep].title}</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <hr />
      <div className="steps">{steps[currentStep].component}</div>
      <hr />
      <div className="btn_area">
        <button
          className="btn"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>
        {currentStep === steps.length - 1 ? (
          <Link to="/all-release">
            <button className="btn">Submit</button>
          </Link>
        ) : (
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ReleaseAudio;
