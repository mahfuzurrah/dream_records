import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Component/InputField/InputField";
import PasswordInput from "../Component/InputField/PasswordInput";
import LogIn_img from "../Component/assets/img/LogIn_img.jpeg";

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
    <div className="logIn_page">
      <div className="log_container">
        <div className="lgoIn_img">
          <img src={LogIn_img} alt="" />
        </div>
        <div className="logIn_from">
          <h1><span className="aaab">Welcome to</span> <br /> Dream Records!</h1>
          <form action="" className="input_form">
            <InputField
              label="User Name or Email"
              value={name}
              star="*"
              onChange={handleNameChange}
            />
            <PasswordInput
              label="Password"
              value={pass}
              star="*"
              onChange={handlepassChange}
            />
            <div className="btn_area">
            <Link to="#" className="mt-3 forget">
              Forget your password?
            </Link>
            <Link to="/dashboard" className="mt-3">
              <button className="btn">Log In</button>
            </Link>
            </div>
          </form>
          <p className="copy_R">© 2023 ALL RLGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
