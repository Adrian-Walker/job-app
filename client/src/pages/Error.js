import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h2>Not Found</h2>
        <p>This Page Cannot Be Found</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
