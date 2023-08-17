import React, {useState} from 'react'
import InputField from '../Component/InputField/InputField'
import ContentIdRequestTable from '../Component/Table/ContentIdRequestTable';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContentIdRequest() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

    const notify = () => toast("Information Submitted");
  return (
    <>
      <div className="yt-ex-bg">
      <div className="section_title">
        <div className="text_area">
          <h2>Content Id Request</h2>
          <p>Requesting identification of content</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="UPC/EAN" value={name} star="*" onChange={handleNameChange} />
        <button className="btn mt-4" onClick={notify}>
            Submit <ToastContainer position="top-center" />
          </button>
        </div>
      </div>
      </div>
      <div className="table_content">
      <h2 className='mb-5'>All History</h2>
        <ContentIdRequestTable />
      </div>
    </>
  )
}

export default ContentIdRequest
