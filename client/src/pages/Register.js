import { initial } from "lodash";
import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault(e.target);
    console.log(e.target);
  };

  const [values, setValues] = useState(initialState);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
