import React, { useState } from "react";
import shortid from "shortid";
import UploadIcon from "../assets/icons/Upload.svg";

const ImageUploadForm = () => {
  const [selectedfile, setSelectedFile] = useState([]);
  const [Files, setFiles] = useState([]);

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        setSelectedFile((prevValue) => {
          return [
            ...prevValue,
            {
              id: shortid.generate(),
              filename: e.target.files[i].name,
              fileimage: reader.result,
              datetime:
                e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
              filesize: filesizes(e.target.files[i].size),
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      setSelectedFile(result);
    } else {
      // alert('No');
    }
  };

  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit
    e.target.reset();
    if (selectedfile.length > 0) {
      for (let index = 0; index < selectedfile.length; index++) {
        setFiles((prevValue) => {
          return [...prevValue, selectedfile[index]];
        });
      }
      setSelectedFile([]);
    } else {
      alert("Please select a file");
    }
  };

  const DeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = Files.filter((data) => data.id !== id);
      setFiles(result);
    } else {
      // alert('No');
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
                  <form onSubmit={FileUploadSubmit}>
                    <div className="kb-file-upload">
                      <div className="file-upload-box">
                        <input
                          type="file"
                          id="fileupload"
                          className="file-upload-input"
                          onChange={InputChange}
                          multiple
                        />
                        <div className="img_Up_info">
                          <img src={UploadIcon} alt="" className="mb-2" />
                          <span>
                            Drag and drop or
                            <span className="file-link">Choose your files</span>
                          </span>
                          <span>- Size: 3000*3000px</span>
                          <span>- Format: .jpeg</span>
                        </div>
                      </div>
                    </div>
                    <div className="kb-attach-box mb-3">
                      {selectedfile.map((data, index) => {
                        const {
                          id,
                          filename,
                          fileimage,
                          datetime,
                          filesize,
                        } = data;
                        return (
                          <div className="file-atc-box" key={id}>
                            {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                              <div className="file-image">
                                <img src={fileimage} alt="" />
                              </div>
                            ) : (
                              <div className="file-image">
                                <i className="far fa-file-alt"></i>
                              </div>
                            )}
                            <div className="file-detail">
                              <h6>{filename}</h6>
                              <p>
                                <span>Size : {filesize}</span>
                                <span className="ml-2">
                                  Modified Time : {datetime}
                                </span>
                              </p>
                              <div className="file-actions">
                                <button
                                  type="button"
                                  className="file-action-btn"
                                  onClick={() => DeleteSelectFile(id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="kb-buttons-box">
                      <button type="submit" className="btn">
                        Upload
                      </button>
                    </div>
                  </form>
                  {Files.length > 0 ? (
                    <div className="kb-attach-box">
                      <hr />
                      {Files.map((data, index) => {
                        const {
                          id,
                          filename,
                          fileimage,
                          datetime,
                          filesize,
                        } = data;
                        return (
                          <div className="file-atc-box" key={index}>
                            {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                              <div className="file-image">
                                {" "}
                                <img src={fileimage} alt="" />
                              </div>
                            ) : (
                              <div className="file-image">
                                <i className="far fa-file-alt"></i>
                              </div>
                            )}
                            <div className="file-detail">
                              <h6>{filename}</h6>
                              <p>
                                <span>Size : {filesize}</span>
                                <span className="ml-3">
                                  Modified Time : {datetime}
                                </span>
                              </p>
                              <div className="file-actions">
                                <button
                                  className="file-action-btn"
                                  onClick={() => DeleteFile(id)}
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
                  ) : (
                    ""
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
