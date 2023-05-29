import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ImageUploadForm from "../Component/ImageUpload/ImageUploadForm";
import InputField from "../Component/InputField/InputField";

function EditPrimaryArtist() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/primary_artist_manage");
  };

    const [name, setName] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Edit Primary Artist</h2>
          <p>Update main soloist</p>
        </div>
        <div className="btn_area">
          <div className="btn" onClick={handleButtonClick}>
            Submit
          </div>
          <div className="btn_s" onClick={handleButtonClick}>
            Cancel
          </div>
        </div>
      </div>
      <div className="edit_container">
        <div className="row">
          <div className="col-lg-12">
            <div className="upload_area">
              <ImageUploadForm />
            </div>
            <div className="input_group mt-4">
              <div className="item">
              <InputField label="Full Name" value={name} onChange={handleNameChange}/>
              <InputField label="Instagram Id" value={name} onChange={handleNameChange}/>
              </div>
              <div className="item">
              <InputField label="Spotify Id" value={name} onChange={handleNameChange}/>
              <InputField label="Apple Id" value={name} onChange={handleNameChange}/>
              </div>
              <div className="item">
              <InputField label="Facebook URL" value={name} onChange={handleNameChange}/>
              <InputField label="YouTube Channel URL" value={name} onChange={handleNameChange}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPrimaryArtist;
