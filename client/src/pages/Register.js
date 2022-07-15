import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";

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
        <FormRow
          type="text"
          name="Name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type="email"
          name="E-mail"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="Password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
