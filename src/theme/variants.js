import merge from "deepmerge";
import { grey } from "@mui/material/colors";
import { THEMES } from "../utils/constants/themeConstant";

const customBlue = {
  50: "#e9f0fb",
  100: "#c8daf4",
  200: "#a3c1ed",
  300: "#7ea8e5",
  400: "#6395e0",
  500: "#4782da",
  600: "#407ad6",
  700: "#376fd0",
  800: "#2f65cb",
  900: "#2052c2 ",
};

const defaultVariant = {
  name: THEMES.DEFAULT.key,
  palette: {
    mode: "light",
    primary: {
      main: customBlue[700],
      contrastText: "#FFF",
    },
    secondary: {
      main: customBlue[500],
      contrastText: "#FFF",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFF",
    },
    border: {
      dialogInCard: "#E0E0E0",
    },
  },
  header: {
    color: "#FFFFFF",
    background: "#2A59FE",
    search: {
      color: grey[800],
    },
    indicator: {
      background: customBlue[600],
    },
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK.key,
  // Dark tema global renkler buraya eklenmeli
});

const variants = [defaultVariant, darkVariant];

export default variants;
