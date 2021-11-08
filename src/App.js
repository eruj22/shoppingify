import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import RightPreview from "./components/RightPreview";
import styled from "styled-components";
import { GlobalStyles } from "./utils/global";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navigation />
      <Outlet />
      <RightPreview />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default App;
