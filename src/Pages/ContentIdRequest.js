import React, {useState} from 'react'
import InputField from '../Component/InputField/InputField'
import ContentIdRequestTable from '../Component/Table/ContentIdRequestTable';

function ContentIdRequest() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Content Id Request</h2>
          <p>Requesting identification of content</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="UPC/EAN" value={name} onChange={handleNameChange} />
        <button className='btn mt-4'>Submit</button>
        </div>
      </div>
      <div className="table_content">
      <h2 className='mb-5'>All History</h2>
        <ContentIdRequestTable />
      </div>
    </div>
  )
}

export default ContentIdRequest
