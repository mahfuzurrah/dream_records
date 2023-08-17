import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from '../Component/InputField/InputField'
import ArtistChannelRequestTable from '../Component/Table/ArtistChannelRequestTable';

function ArtistchannelRequest() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const notify = () => toast("Information Submitted");

  return (
    <div>
      <div className="yt-ex-bg">
      <div className="section_title">
        <div className="text_area">
          <h2>Artist Channel Request</h2>
          <p>Promote and share your artistry</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="Channel Link" value={name} onChange={handleNameChange} />
        <InputField label="Topic Link" value={name} onChange={handleNameChange} />
        <InputField label="UPC1" value={name} onChange={handleNameChange} />
        <InputField label="UPC2" value={name} onChange={handleNameChange} />
        <InputField label="UPC3" value={name} onChange={handleNameChange} />
        <button className="btn mt-4" onClick={notify}>
            Submit <ToastContainer position="top-center" />
          </button>
        </div>
      </div>
      </div>
      <div className="table_content">
        <h2 className='mb-5'>All History</h2>
        <ArtistChannelRequestTable />
      </div>
    </div>
  )
}

export default ArtistchannelRequest
