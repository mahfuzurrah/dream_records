import React, { useState } from "react";

const SecondaryBtn = ({ label, onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <button className={`btn_s mt-3 ${loading ? "loading" : ""}`} onClick={handleClick} disabled={loading}>
      {loading ? "Loading..." : label}
      {loading && <div className="loading-spinner"></div>}
    </button>
  );
};

export default SecondaryBtn;
