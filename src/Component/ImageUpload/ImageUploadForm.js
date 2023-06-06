import React, { useState } from "react";
import shortid from "shortid";
import UploadIcon from "../assets/icons/Upload.svg";

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [files, setFiles] = useState([]);

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
        setFileInfo({
          id: shortid.generate(),
          filename: file.name,
          fileimage: reader.result,
          datetime: file.lastModifiedDate.toLocaleString("en-IN"),
          filesize: filesizes(file.size),
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteFile = () => {
    setSelectedFile(null);
    setFileInfo(null);
  };

  const handleDeleteFile = (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const result = files.filter((data) => data.id !== id);
      setFiles(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileInfo) {
      setFiles((prevFiles) => [...prevFiles, fileInfo]);
      // Reset the form
      deleteFile();
    } else {
      alert("Please select an image file");
    }
  };

  return (
    <div>
      <div className="fileupload-view">
        <div className="row justify-content-center p-0">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="kb-data-box">
                  <form onSubmit={handleSubmit}>
                    <div className="kb-file-upload">
                      <div className="file-upload-box">
                        <input
                          type="file"
                          id="fileupload"
                          className="file-upload-input"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                        <div className="img_Up_info">
                          <img src={UploadIcon} alt="" className="mb-2" />
                          <span>
                            Drag and drop or
                            <span className="file-link">Choose your file</span>
                          </span>
                          <span>- Size: 3000*3000px</span>
                          <span>- Format: .jpeg</span>
                        </div>
                      </div>
                    </div>
                    {selectedFile && (
                      <div className="kb-attach-box mb-3">
                        <div className="file-atc-box">
                          <div className="file-image">
                            <img src={selectedFile} alt="" />
                          </div>
                          <div className="file-detail">
                            <h6>{fileInfo.filename}</h6>
                            <p>
                              <span>Size: {fileInfo.filesize}</span>
                              <span className="ml-2">
                                Modified Time: {fileInfo.datetime}
                              </span>
                            </p>
                            <div className="file-actions">
                              <button
                                type="button"
                                className="file-action-btn"
                                onClick={deleteFile}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="kb-buttons-box">
                      <button type="submit" className="btn">
                        Upload
                      </button>
                    </div>
                  </form>
                  {files.length > 0 && (
                    <div className="kb-attach-box">
                      <hr />
                      {files.map((data) => {
                        const { id, filename, fileimage, datetime, filesize } = data;
                        return (
                          <div className="file-atc-box" key={id}>
                            <div className="file-image">
                              <img src={fileimage} alt="" />
                            </div>
                            <div className="file-detail">
                              <h6>{filename}</h6>
                              <p>
                                <span>Size: {filesize}</span>
                                <span className="ml-3">
                                  Modified Time: {datetime}
                                </span>
                              </p>
                              <div className="file-actions">
                                <button
                                  className="file-action-btn"
                                  onClick={() => handleDeleteFile(id)}
                                >
                                  Delete
                                </button>
                                <a
                                  href={fileimage}
                                  className="file-action-btn"
                                  download={filename}
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;
