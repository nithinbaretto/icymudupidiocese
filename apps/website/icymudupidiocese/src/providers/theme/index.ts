import { createTheme } from "@mui/material";
import "@fontsource/ibm-plex-sans-devanagari";
import { MAIN_THEME_COLOR } from "./colors/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // light: "",
      main: MAIN_THEME_COLOR,
    },
    // secondary: {
    //   main: "",
    // },
    // background: {
    //   default: "",
    // },
    divider: MAIN_THEME_COLOR,
  },

  typography: {
    fontFamily: "IBM Plex Sans Devanagari, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: "body1",
        },
      },
    },
  },
});

export default theme;
