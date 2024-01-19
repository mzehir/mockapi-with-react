import * as React from "react";
import styled, { withTheme } from "styled-components";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import GridComp from "../../Grid";
import TitleSection from "./sections/TitleSection";
import SearchBoxSection from "./sections/SearchBoxSection";
import NavbarRightSection from "./sections/NavbarRightSection";

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

const Navbar = ({ layoutHorizontalPaddingCoefficient }) => {
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <CustomToolbar spacingCoefficient={layoutHorizontalPaddingCoefficient}>
          <GridComp container alignItems="center">
            <GridComp item xs={2}>
              <TitleSection />
            </GridComp>

            <GridComp item xs={8}>
              <SearchBoxSection />
            </GridComp>

            <GridComp item xs={2}>
              <NavbarRightSection />
            </GridComp>
          </GridComp>
        </CustomToolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
