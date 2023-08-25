import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";

const ImageUploadForm = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [buttonText, setButtonText] = useState("Upload Cover");
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadClick = async (e) => {
    // Trigger the hidden input element
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsLoading(true);

      try {
        const imageURL = URL.createObjectURL(file);

        // Simulate upload delay (replace this with your actual upload process)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setUploadedPhoto(imageURL);
        setButtonText("Replace Cover");
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="image_upload_form cover_upload">
      <input
        type="file"
        accept="image/jpeg, image/png"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="dropzone">
        {uploadedPhoto ? (
          <img
            src={uploadedPhoto}
            alt="Uploaded"
            className="uploaded-image"
          />
        ) : (
          <div className="upload-placeholder" onClick={handleUploadClick}>
            <BsCamera className="icons" />
          </div>
        )}
      </div>
      <div className="upload-button-container">
        <button
          className="btn"
          disabled={isLoading}
          onClick={handleUploadClick}
        >
          {isLoading ? "Uploading..." : buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageUploadForm;
