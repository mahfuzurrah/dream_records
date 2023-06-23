import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Component/InputField/InputField";
import logIn_logo from "../Component/assets/img/Logo.svg";

function LogIn() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlepassChange = (event) => {
    setPass(event.target.value);
  };
  return (
    <div className="logIn_from">
      <div className="logIn_logo mb-5">
        <img src={logIn_logo} alt="" />
        <h1>Dream Records</h1>
      </div>
      <form action="" className="input_form">
        <InputField
          label="User Name"
          value={name}
          star="*"
          onChange={handleNameChange}
        />
        <InputField
          label="Password"
          value={pass}
          star="*"
          onChange={handlepassChange}
        />
        <Link to="#" className="mt-3">
          Forget your password?
        </Link>
        <Link to="/dashboard" className="mt-3">
          <button className="btn">Log In</button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
