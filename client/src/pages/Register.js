import React, { useState, useEffect } from "react";
// import { Logo } from "..components/";
import Wrapper from "../assets/wrappers/RegisterPage";

function Register() {
  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault(e.target);
  };
  
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        fuck
      </form>
    </Wrapper>
  );
}

export default Register;
