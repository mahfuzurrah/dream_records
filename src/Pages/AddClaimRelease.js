import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from '../Component/InputField/InputField'
import AddClaimReleaseTable from '../Component/Table/AddClaimReleaseTable';

function AddClaimRelease() {
  const [name, setName] = useState('');
  const [UPCEAN, setUPCEAN] = useState('');
  const [lableName, setLableName] = useState('');
  const [lableNameT, setLableNameT] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleUPCEANChange = (event) => {
    setUPCEAN(event.target.value);
  };
  const handleLableChange = (event) => {
    setLableName(event.target.value);
  };
  const handleLableTChange = (event) => {
    setLableNameT(event.target.value);
  };

  const notify = () => toast("Information Submitted");

  return (
    <>
      <div className='yt-ex-bg'>
      <div className="section_title">
        <div className="text_area">
          <h2>Add Claim Release</h2>
          <p>The benefits of an add claim release</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="URL" star="*" type="text" value={name} onChange={handleNameChange} />
        <InputField label="UPC/EAN" star="*" type="text" value={UPCEAN} onChange={handleUPCEANChange} />
        <InputField label="Lable Name (Who send a claim)" star="*" type="text" value={lableName} onChange={handleLableChange} />
        <InputField label="Lable Name (Who received a claim)" star="*" type="text" value={lableNameT} onChange={handleLableTChange} />
        <button className="btn mt-4" onClick={notify}>
            Submit <ToastContainer position="top-center" />
          </button>
        </div>
      </div>
    </div>
    <div className="table_content">
        <h2 className='mb-5'>All History</h2>
        <AddClaimReleaseTable />
      </div>
    </>
  )
}

export default AddClaimRelease
