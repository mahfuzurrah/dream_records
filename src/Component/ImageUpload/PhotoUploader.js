import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { BsCamera } from "react-icons/bs";

const PhotoUploader = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedPhoto(imageURL);
    }
  };

  return (
    <div className="photo_uploader">
      <Dropzone onDrop={handleDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {uploadedPhoto ? (
              <img
                src={uploadedPhoto}
                alt="Uploaded"
                className="uploaded-image"
              />
            ) : (
              <BsCamera className="icons"/>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default PhotoUploader;
