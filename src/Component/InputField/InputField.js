import React from 'react';

const InputField = ({ label, value, onChange }) => {
  return (
    <div className='mt-3'>
      <label className='mb-2'>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
