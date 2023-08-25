import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { MdAudiotrack } from "react-icons/md"; // Using the audio icon

const AudioUploadForm = () => {
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [buttonText, setButtonText] = useState("Upload Audio");
  const [audioFileName, setAudioFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setIsLoading(true);
      const audioURL = URL.createObjectURL(file);

      // Simulating upload delay (you can replace this with your actual upload process)
      setTimeout(() => {
        setUploadedAudio(audioURL);
        setButtonText("Replace Audio");
        setAudioFileName(file.name);
        setIsLoading(false); // Stop loading
      }, 1500);
    }
  };

  const handleUploadClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  return (
    <div className="audio_upload_form">
      <Dropzone onDrop={handleDrop} accept="audio/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} id="fileInput" />
            {uploadedAudio ? (
              <div className="uploaded-audio">
                <MdAudiotrack className="icons" />
                <p>{audioFileName}</p>
              </div>
            ) : (
              <div className="upload-placeholder">
                <MdAudiotrack className="icons" />
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <div className="upload-button-container">
        <button onClick={handleUploadClick} className="btn mt-3" disabled={isLoading}>
          {isLoading ? "Uploading..." : buttonText}
        </button>
      </div>
    </div>
  );
};

export default AudioUploadForm;
