import React, {useState} from 'react'
import InputField from '../Component/InputField/InputField'
import SearchBar from '../Component/SearchBar/SearchBar';
import AddClaimReleaseTable from '../Component/Table/AddClaimReleaseTable';

function AddClaimRelease() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Add Claim Release</h2>
          <p>The benefits of an add claim release</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="URL" star="*" type="text" value={name} onChange={handleNameChange} />
        <InputField label="UPC/EAN" star="*" type="text" value={name} onChange={handleNameChange} />
        <button className='btn mt-4'>Submit</button>
        </div>
      </div>
      <div className="table_content">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar/>
        </div>
        <AddClaimReleaseTable />
      </div>
    </div>
  )
}

export default AddClaimRelease
