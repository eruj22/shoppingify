import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./pages/Navigation";
import RightPreview from "./pages/RightPreview";
import styled from "styled-components";
import { GlobalStyles } from "./utils/global";

// TODO: in mobile hide right size and show on btn click

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navigation />
      <Outlet />
      <RightPreview className="rightPreview" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
`;

export default App;
