import React from "react";
import InputBaseComp from "../InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div", {
  shouldForwardProp: (prop) => prop !== "searchWidthInPercent",
})((props) => ({
  position: "relative",
  borderRadius: props.theme.shape.borderRadius,
  backgroundColor: alpha(props.theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(props.theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: `${props.searchWidthInPercent}%`,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBaseComp)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // searchIcon'dan dikey dolgu + yazı tipi boyutu
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));

const SearchBox = ({ value, onChange, searchWidthInPercent }) => {
  return (
    <div style={{ display: "flex" }}>
      <Search
        searchWidthInPercent={
          searchWidthInPercent ? searchWidthInPercent : "100"
        }
      >
        <SearchIconWrapper>
          <SearchIcon fontSize="small" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Search>
    </div>
  );
};

export default SearchBox;
