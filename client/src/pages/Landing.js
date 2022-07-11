import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} className="logo" alt="jobify" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Usher Raymond IV (born October 14, 1978) is an American R&B singer.
            He was born in Dallas, Texas, but raised in Chattanooga, Tennessee,
            until moving to Atlanta, Georgia. At the age of 12, his mother put
            him in local singing competitions before catching the attention of a
            music A&R from LaFace Records. He released his self-titled debut
            album Usher (1994), and rose to fame in the late 1990s with the
            release of his second album My Way (1997). It spawned his first U.S.
            Billboard Hot 100 number-one single "Nice & Slow", and the top-two
            singles "You Make Me Wanna..." and "My Way". His third album, 8701
            (2001), produced the number-one singles "U Remind Me" and "U Got It
            Bad", as well as the top-three single "U Don't Have to Call". It
            sold eight million copies worldwide and won his first two Grammy
            Awards as Best Male R&B Vocal Performance in 2002 and 2003.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main img" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
