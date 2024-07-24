import {
  Avatar,
  Box,
  Card,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { BrowserView, isMobile } from "react-device-detect";

import React from "react";
import {
  MAIN_THEME_COLOR,
  SECONDARY_THEME_COLOR,
} from "../../providers/theme/colors/colors";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import {
  ChevronLeft,
  ChevronLeftOutlined,
  ChevronRight,
  ChevronRightRounded,
  Close,
  KeyboardArrowDownOutlined,
  Menu,
} from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: "relative",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navItems: {
    name: string;
    path: string;
    scrollTo?: string;
    dropdownItems?: {
      name: string;
      path: string;
      innerLevelDropdown?: { name: string; path: string }[];
    }[];
  }[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    // {
    //   name: "Deanery & Parish",
    //   path: "",
    //   dropdownItems: [
    //     {
    //       name: "Kundapur Deanery",
    //       path: "",
    //       innerLevelDropdown: [
    //         { name: "Deanery Director & Commitee", path: "/parishes" },
    //         { name: "Parishes", path: "/parishes" },
    //       ],
    //     },
    //     {
    //       name: "Kallianpur Deanery",
    //       path: "/profile/edit",
    //       innerLevelDropdown: [
    //         { name: "Deanery Director & Commitee", path: "/parishes" },
    //         { name: "Parishes", path: "/parishes" },
    //       ],
    //     },
    //     {
    //       name: "Udupi Deanery",
    //       path: "/profile/edit",
    //       innerLevelDropdown: [
    //         { name: "Deanery Director & Commitee", path: "/parishes" },
    //         { name: "Parishes", path: "/parishes" },
    //       ],
    //     },
    //     {
    //       name: "Karkol Deanery",
    //       path: "/profile/edit",
    //       innerLevelDropdown: [
    //         { name: "Deanery Director & Commitee", path: "/parishes" },
    //         { name: "Parishes", path: "/parishes" },
    //       ],
    //     },
    //     {
    //       name: "Shirva Deanery",
    //       path: "",
    //       innerLevelDropdown: [
    //         { name: "Deanery Director & Commitee", path: "/parishes" },
    //         { name: "Parishes", path: "/parishes" },
    //       ],
    //     },
    //   ],
    // },
    { name: "News", path: "/news" },
    { name: "Dexco", path: "", scrollTo: "dexcoInfo" },
    { name: "Contact us", path: "", scrollTo: "contactus" },
  ];

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {
    console.log("called");

    var x = document.getElementById(id);
    if (x) {
      x.style.display = "block";
    }
  };

  const handlePopoverClose = (id: string) => {
    var x = document.getElementById(id);
    if (x) {
      x.style.display = "none";
    }
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  return (
    <Grid container mt={3}>
      <Grid item md={4} lg={4} sm={12}>
        <Box display={"flex"} alignItems={"center"}>
          <Box border="1px solid black" borderRadius={10} mx={isMobile ? 2 : 3}>
            <Avatar
              alt="icym logo"
              src="images/icons/icym_icon.jpg"
              sx={{ height: 50, width: 50 }}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={"600"}>
              Youth Commission Udupi
            </Typography>
          </Box>
        </Box>
      </Grid>
      {!isMobile && (
        <Grid
          display={"flex"}
          item
          md={7}
          lg={7}
          sm={11}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {navItems?.map((item) => {
            return (
              <Box
                ml={5}
                position="relative"
                onMouseLeave={() => handlePopoverClose(item?.name)}
              >
                <Link
                  to={item?.path}
                  style={{
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    handlePopoverOpen(e, item?.name);
                    let x = document.getElementById(item?.name + "underline");
                    if (x) {
                      x.style.display = "block";
                    }
                  }}
                  onMouseLeave={(e) => {
                    let x = document.getElementById(item?.name + "underline");
                    if (x) {
                      x.style.display = "none";
                    }
                  }}
                  onClick={() => {
                    if (item?.scrollTo) {
                      console.log(item);

                      const element = document.getElementById(item?.scrollTo);
                      element?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <Typography
                    display={"flex"}
                    color={
                      pathname === item?.path ? MAIN_THEME_COLOR : "#1B001B"
                    }
                    fontWeight={pathname === item?.path ? "600" : "500"}
                    textAlign="center"
                  >
                    {item?.name}

                    {item?.dropdownItems && (
                      <KeyboardArrowDownOutlined
                        fontSize="small"
                        sx={{ mt: 0.5 }}
                      />
                    )}
                  </Typography>
                  <Box
                    display={"none"}
                    id={item?.name + "underline"}
                    sx={{
                      width: "15px",
                      height: "4px",
                      backgroundColor: "primary.main",
                      margin: "auto",
                    }}
                  ></Box>
                </Link>
                {item?.dropdownItems && (
                  <Box
                    className="animated-dropdown-container"
                    display={"none"}
                    id={item?.name}
                    zIndex={999}
                    sx={{
                      px: 2,
                      flexDirection: "column",
                      position: "absolute",
                      top: 30,
                      left: -100,
                      minWidth: 250,
                      transition: "opacity .5s ease-out",
                    }}
                    width="100%"
                  >
                    <Box
                      id={item?.name}
                      sx={{
                        transform: "translateX(400%)",
                        width: "0",
                        height: "0",
                        borderBottom: "15px solid #ffffff",
                        borderLeft: "25px solid transparent",
                        borderRight: "15px solid transparent",
                      }}
                    />
                    {item?.dropdownItems.length !== 0 && (
                      <Card
                        elevation={10}
                        sx={{
                          display: "flex",
                          flex: 1,
                          px: 2,
                          flexDirection: "column",
                          py: 1,
                        }}
                      >
                        {item?.dropdownItems?.map((dropDownItem) => {
                          return (
                            <Box
                              display="flex"
                              width={"100%"}
                              sx={{
                                ":hover": {
                                  borderLeft: `3px solid ${SECONDARY_THEME_COLOR}`,
                                  backgroundColor: "#F1F2F4",
                                },
                              }}
                              onMouseEnter={(e) => {
                                let x = document.getElementById(
                                  dropDownItem?.name + "innerDropDown"
                                );
                                if (x) {
                                  x.style.display = "block";
                                }
                              }}
                              onMouseLeave={(e) => {
                                let x = document.getElementById(
                                  dropDownItem?.name + "innerDropDown"
                                );
                                if (x) {
                                  x.style.display = "none";
                                }
                              }}
                            >
                              <Link
                                to={dropDownItem?.path}
                                style={{
                                  textDecoration: "none",
                                  width: "100%",
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  pl={2}
                                  color={"#1B001B"}
                                  mt={1}
                                  mb={1}
                                >
                                  {dropDownItem?.name}
                                </Typography>
                              </Link>

                              <Box
                                display="none"
                                id={dropDownItem?.name + "innerDropDown"}
                                sx={{
                                  px: 2,
                                  flexDirection: "column",
                                  position: "absolute",
                                  top: 30,
                                  left: 220,
                                  minWidth: 250,
                                  transition: "opacity .5s ease-out",
                                }}
                              >
                                <Card
                                  elevation={10}
                                  sx={{
                                    display: "flex",
                                    px: 1,
                                    flexDirection: "column",
                                    py: 1,
                                  }}
                                >
                                  {dropDownItem?.innerLevelDropdown?.map(
                                    (item) => {
                                      return (
                                        <Link
                                          to={item?.path}
                                          style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                          }}
                                        >
                                          <Typography
                                            variant="body2"
                                            my={1}
                                            pl={2}
                                            sx={{
                                              cursor: "pointer",
                                              ":hover": {
                                                borderLeft: `3px solid ${SECONDARY_THEME_COLOR}`,
                                              },
                                            }}
                                          >
                                            {item?.name}
                                          </Typography>
                                        </Link>
                                      );
                                    }
                                  )}
                                </Card>
                              </Box>
                            </Box>
                          );
                        })}
                      </Card>
                    )}
                  </Box>
                )}
              </Box>
            );
          })}
        </Grid>
      )}

      {isMobile && (
        <Grid display={"flex"} item md={1} lg={1} sm={1}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <Menu />
          </IconButton>
        </Grid>
      )}
      <Main open={open}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <Close /> : <Close />}
            </IconButton>
          </DrawerHeader>
          <Box display={"flex"} flexDirection={"column"}>
            {navItems.map((item, index) => (
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                m={2}
              >
                <Box sx={{ borderBottom: `1px solid ${MAIN_THEME_COLOR}` }}>
                  <Link
                    to={item?.path}
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <Typography color={"#1B001B"}>{item?.name}</Typography>
                  </Link>
                </Box>
                <ChevronRightRounded />
              </Box>
            ))}
          </Box>
        </Drawer>
      </Main>
    </Grid>
  );
}
