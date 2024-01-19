import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";
import Navbar from "../components/multibleComp/navbar/Navbar";
import GlobalStyle from "../components/GlobalStyle";
import PaperComp from "../components/Paper";
import { CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { spacing } from "@mui/system";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(PaperComp)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;
const DefaultLayout = ({ children }) => {
  const theme = useTheme();
  const horizontalPaddingCoefficient = useMediaQuery(theme.breakpoints.up("lg"))
    ? 12
    : 5;

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <AppContent>
        <Navbar
          layoutHorizontalPaddingCoefficient={horizontalPaddingCoefficient}
        />
        <MainContent p={horizontalPaddingCoefficient}>
          <>
            {children}
            <Outlet />
          </>
        </MainContent>
      </AppContent>
    </Root>
  );
};

export default DefaultLayout;
