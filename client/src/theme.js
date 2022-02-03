import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#9575cd",
      main: "#4527a0",
      dark: "#311b92",
      contrastText: "#ede7f6",
    },
    secondary: {
      light: "#ff80ab",
      main: "#ff4081",
      dark: "#f50057",
      contrastText: "#000",
    },
    openTitle: "#4a148c",
    protectedTitle: pink["400"],
    type: "light",
  },
});
export default theme;
