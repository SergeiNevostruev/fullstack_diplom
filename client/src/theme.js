import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";


const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#b2fef7",
      main: "#80cbc4",
      dark: "#4f9a94",
      contrastText: "#00695c",
    },
    secondary: {
      light: "#ffc1e3",
      main: "#f48fb1",
      dark: "#bf5f82",
      contrastText: "#000",
    },
    openTitle: "#3f4771",
    protectedTitle: pink["400"],
    type: "light",
  },
});
export default theme;
