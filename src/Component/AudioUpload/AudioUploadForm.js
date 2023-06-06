import React, { useState } from "react";
import shortid from "shortid";
import UploadIcon from "../assets/icons/Upload.svg";

const AudioUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);

  const fileSizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const deleteSelectedFile = () => {
    setSelectedFile(null);
  };

  const uploadFile = async (e) => {
    e.preventDefault();

    // Reset form on submit
    e.target.reset();

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile({
          id: shortid.generate(),
          filename: selectedFile.name,
          fileAudio: reader.result,
          datetime: selectedFile.lastModifiedDate.toLocaleString("en-IN"),
          filesize: fileSizes(selectedFile.size),
        });
      };

      reader.readAsDataURL(selectedFile);

      setSelectedFile(null);
    } else {
      alert("Please select a file");
    }
  };

  const deleteFile = async () => {
    setFile(null);
  };

  return (
    <div className="fileupload-view">
      <div className="row justify-content-center p-0">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="kb-data-box">
                <form onSubmit={uploadFile}>
                  <div className="kb-file-upload">
                    <div className="file-upload-box">
                      <input
                        type="file"
                        id="fileupload"
                        className="file-upload-input"
                        onChange={handleInputChange}
                      />
                      <div className="img_Up_info">
                        <img src={UploadIcon} alt="" className="mb-2" />
                        <span>
                          Drag and drop or
                          <span className="file-link">Choose your audio file</span>
                        </span>
                        <span>- Format: .mp3, .wav</span>
                      </div>
                    </div>
                  </div>
                  <div className="kb-attach-box mb-3">
                    {selectedFile && selectedFile.name.match(/.(mp3|wav)$/i) ? (
                      <div className="audio-preview">
                        <audio controls>
                          <source src={URL.createObjectURL(selectedFile)} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ) : null}
                    {selectedFile && (
                      <div className="file-detail">
                        <h6>{selectedFile.name}</h6>
                        <p>
                          <span>Size: {fileSizes(selectedFile.size)}</span>
                          <span className="ml-2">
                            Modified Time: {selectedFile.lastModifiedDate.toLocaleString("en-IN")}
                          </span>
                        </p>
                        <div className="file-actions">
                          <button
                            type="button"
                            className="file-action-btn"
                            onClick={deleteSelectedFile}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="kb-buttons-box">
                    <button type="submit" className="btn">
                      Upload
                    </button>
                  </div>
                </form>
                {file && (
                  <div className="kb-attach-box">
                    <hr />
                    {file.filename.match(/.(mp3|wav)$/i) ? (
                      <div className="audio-preview">
                        <audio controls>
                          <source src={file.fileAudio} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ) : (
                      <div className="file-image">
                        <i className="far fa-file-audio"></i>
                      </div>
                    )}
                    <div className="file-detail">
                      <h6>{file.filename}</h6>
                      <p>
                        <span>Size: {file.filesize}</span>
                        <span className="ml-3">Modified Time: {file.datetime}</span>
                      </p>
                      <div className="file-actions">
                        <button className="file-action-btn" onClick={deleteFile}>
                          Delete
                        </button>
                        <a href={file.fileAudio} className="file-action-btn" download={file.filename}>
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioUploadForm;
