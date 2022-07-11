import React from "react";
import Landing from "./pages/Landing.js";
import styled from "styled-components";

const Button = styled.button`
  background-color: yellow;
  color: green;
`;

function App() {
  return (
    <div>
      <h1>New App</h1>
      <Landing />
    </div>
  );
}

export default App;
