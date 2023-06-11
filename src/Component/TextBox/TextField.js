import React from 'react';

const TextField = ({ label, star, value, onChange, type }) => {
  const inputId = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='mt-3 text_box'>
      <label htmlFor={inputId} className='mb-2' key={inputId}>
        {label} <span className='input_star'>{star}</span>
      </label>
      <textarea cols="30" rows="5" id={inputId} type={type} value={value} onChange={onChange} required />
    </div>
  );
};

export default TextField;
