import React, { useState } from "react";
import styled from "styled-components/macro";
import Wrapper from "./Wrapper";
import FabComp from "../../../../components/Fab";
import DrawerComp from "../../../../components/Drawer";
import FilterListIcon from "@mui/icons-material/FilterList";

const FabStyled = styled(FabComp)`
  position: fixed;
  right: ${(props) => props.theme.spacing(8)};
  bottom: ${(props) => props.theme.spacing(20)};
  z-index: 1;
`;

function SortingAndFilteringMobileSection({
  sortByValue,
  sortByOnChange,
  brandItems,
  brandByOnChange,
  modelItems,
  modelByOnChange,
}) {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, isOpen: open });
  };

  return (
    <React.Fragment>
      <FabStyled
        size="small"
        color="primary"
        aria-label="Edit"
        onClick={toggleDrawer(true)}
      >
        <FilterListIcon />
      </FabStyled>

      <DrawerComp
        anchor="right"
        open={state.isOpen}
        onClose={toggleDrawer(false)}
      >
        <Wrapper
          sortByValue={sortByValue}
          sortByOnChange={sortByOnChange}
          brandItems={brandItems}
          brandByOnChange={brandByOnChange}
          modelItems={modelItems}
          modelByOnChange={modelByOnChange}
        />
      </DrawerComp>
    </React.Fragment>
  );
}

export default SortingAndFilteringMobileSection;
