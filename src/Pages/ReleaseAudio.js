import React from "react";
import { useNavigate } from 'react-router-dom';

function ReleaseAudio() {
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/audio_submission');
  };

  return (
    <>
      <div className="section_title">
        <div className="text_area">
          <h1>Release Information</h1>
          <p>Details About the Upcoming Release</p>
        </div>
        <div className="btn_area">
          <div className="btn" onClick={handleButtonClick}>Submit</div>
        </div>
      </div>
    </>
  );
}

export default ReleaseAudio;
