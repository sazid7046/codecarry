import { createMuiTheme } from "@material-ui/core/styles";

const arcWhite =  "#FFFFFF";
const arcGreenish = "#00A0A6";

export default createMuiTheme({
  palette: {
    common: {
      white: arcWhite,
      greenish: arcGreenish
    },
    primary: {
      main: arcWhite
    },
    secondary: {
      main: arcGreenish
    }
  },
  typography: {
    tab: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 700,
      fontSize: "16px",
      color: "#494949",
      textTransform:" capitalize"
    },
    button: {
      textTransform: "none",
      borderColor: "#0d6efd",
      '&:hover': {
        background: 'none',
    },
    }
  }
});
