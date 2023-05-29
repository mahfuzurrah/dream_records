import React, {useState} from 'react'
import InputField from '../Component/InputField/InputField'
import SearchBar from '../Component/SearchBar/SearchBar';
import ArtistChannelRequestTable from '../Component/Table/ArtistChannelRequestTable';

function ArtistchannelRequest() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
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
        <button className='btn mt-4'>Submit</button>
        </div>
      </div>
      <div className="table_content">
        <div className="table_title">
          <p>Show 4 entries</p>
          <SearchBar/>
        </div>
        <ArtistChannelRequestTable />
      </div>
    </div>
  )
}

export default ArtistchannelRequest
