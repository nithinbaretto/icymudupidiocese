import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { MAIN_THEME_COLOR } from "../../providers/theme/colors/colors";
import { Link } from "react-router-dom";

export default function Navbar() {
  let navItems: {
    name: string;
    path: string;
    dropdownItems?: { name: string; path: string }[];
  }[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/profile" },
    {
      name: "Profile",
      path: "",
      dropdownItems: [
        { name: "Edit", path: "/profile/edit" },
        { name: "Settings", path: "/profile/settings" },
      ],
    },
    { name: "Trending", path: "/profile" },
    { name: "Programmes", path: "/profile" },
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
  return (
    <Grid container mt={3}>
      <Grid item md={4} lg={4} sm={12}>
        <Box display={"flex"} alignItems={"center"}>
          <Box border="1px solid black" borderRadius={10} mr={3}>
            <Avatar
              alt="icym logo"
              src="images/icons/icym_icon.jpg"
              sx={{ height: 50, width: 50 }}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={"600"}>
              ICYM Udupi Diocese
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        display={"flex"}
        item
        md={8}
        lg={8}
        sm={12}
        justifyContent={"center"}
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
                style={{ textDecoration: "none" }}
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
              >
                <Typography
                  fontSize={"18px"}
                  color={item?.name === "Home" ? MAIN_THEME_COLOR : "#1B001B"}
                  fontWeight={item?.name === "Home" ? "600" : "500"}
                  textAlign="center"
                >
                  {item?.name}
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
                  display={"none"}
                  id={item?.name}
                  zIndex={999}
                  sx={{
                    px: 2,
                    flexDirection: "column",
                    position: "absolute",
                    top: 30,
                    right: -50,
                    minWidth: 200,
                    transition: "opacity .5s ease-out",
                    // height:
                    //   document.getElementById("Profile")?.style.display ===
                    //   "block"
                    //     ? 0
                    //     : 0,
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
                      borderLeft: "15px solid transparent",
                      borderRight: "15px solid transparent",
                    }}
                  />
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
                    {item.dropdownItems?.map((dropDownItem) => {
                      return (
                        <Box display="flex" width={"100%"} mt={1} mb={1}>
                          <Link
                            to={dropDownItem?.path}
                            style={{ textDecoration: "none", width: "100%" }}
                          >
                            <Typography
                              variant="body2"
                              fontSize={"18px"}
                              color={"#1B001B"}
                            >
                              {dropDownItem?.name}
                            </Typography>
                          </Link>
                        </Box>
                      );
                    })}
                  </Card>
                </Box>
              )}
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
