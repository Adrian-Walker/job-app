import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";

function Error() {
  return (
    <Wrapper>
      <div>
        <img />
        <h2>Not Found</h2>
        <p>error txt</p>
      </div>
    </Wrapper>
  );
}

export default Error;
