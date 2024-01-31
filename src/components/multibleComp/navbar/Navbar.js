import * as React from "react";
import styled, { withTheme } from "styled-components";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";

import GridComp from "../../Grid";
import TitleSection from "./sections/TitleSection";
import SearchBoxSection from "./sections/SearchBoxSection";
import NavbarRightSection from "./sections/NavbarRightSection";
import { customBreakpoints } from "../../../theme/breakpoints";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
  border-bottom: 1px solid gray;
`;

const CustomToolbar = styled(Toolbar).withConfig({
  shouldForwardProp: (prop) => prop !== "spacingCoefficient",
})`
  padding-left: ${(props) => props.theme.spacing(props.spacingCoefficient)};
  padding-right: ${(props) => props.theme.spacing(props.spacingCoefficient)};
  min-height: 40px;
`;

const mobileBreakpoint = customBreakpoints.mobileBreakpointMax;

const Navbar = ({ layoutHorizontalPaddingCoefficient }) => {
  const { windowWidth } = WindowResizeUseContext();

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <CustomToolbar spacingCoefficient={layoutHorizontalPaddingCoefficient}>
          <GridComp container alignItems="center">
            <GridComp item xs={windowWidth <= mobileBreakpoint ? 5 : 2}>
              <TitleSection />
            </GridComp>

            {windowWidth > mobileBreakpoint && (
              <GridComp item xs={8}>
                <SearchBoxSection />
              </GridComp>
            )}

            <GridComp item xs={windowWidth <= mobileBreakpoint ? 7 : 2}>
              <NavbarRightSection />
            </GridComp>
          </GridComp>
        </CustomToolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
