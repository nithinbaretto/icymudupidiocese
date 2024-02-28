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
    fontFamily: "!Plus Jakarta Sans",
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
          boxShadow: "rgba(27, 0, 27, 0.15) 0px 2px 10px 0px",
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

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
