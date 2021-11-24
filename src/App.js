import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./pages/Navigation";
import RightPreview from "./pages/RightPreview";
import styled from "styled-components";
import { GlobalStyles } from "./utils/global";
import { useAppContext } from "./context/context";
import { useWindowDimensions } from "./utils/functions";

function App() {
  const { openSidebar } = useAppContext();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1200) {
      openSidebar();
    }
    // eslint-disable-next-line
  }, []);

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
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
`;

export default App;
