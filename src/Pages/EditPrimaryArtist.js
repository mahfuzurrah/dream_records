import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploadForm from "../Component/ImageUpload/ImageUploadForm";
import InputField from "../Component/InputField/InputField";

function EditPrimaryArtist() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/primary_artist_manage");
  };

  const [name, setName] = useState('');
  const [instagramId, setInstagramId] = useState('');
  const [spotifyId, setSpotifyId] = useState('');
  const [appleId, setAppleId] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleInstagramIdChange = (event) => {
    setInstagramId(event.target.value);
  };

  const handleSpotifyIdChange = (event) => {
    setSpotifyId(event.target.value);
  };

  const handleAppleIdChange = (event) => {
    setAppleId(event.target.value);
  };

  const handleFacebookUrlChange = (event) => {
    setFacebookUrl(event.target.value);
  };

  const handleYoutubeUrlChange = (event) => {
    setYoutubeUrl(event.target.value);
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
                <InputField
                  label="Full Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <InputField
                  label="Instagram Id"
                  value={instagramId}
                  onChange={handleInstagramIdChange}
                />
              </div>
              <div className="item">
                <InputField
                  label="Spotify Id"
                  value={spotifyId}
                  onChange={handleSpotifyIdChange}
                />
                <InputField
                  label="Apple Id"
                  value={appleId}
                  onChange={handleAppleIdChange}
                />
              </div>
              <div className="item">
                <InputField
                  label="Facebook URL"
                  value={facebookUrl}
                  onChange={handleFacebookUrlChange}
                />
                <InputField
                  label="YouTube Channel URL"
                  value={youtubeUrl}
                  onChange={handleYoutubeUrlChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPrimaryArtist;
