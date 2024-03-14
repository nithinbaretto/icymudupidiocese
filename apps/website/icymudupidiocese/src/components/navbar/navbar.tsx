import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import {
  MAIN_THEME_COLOR,
  SECONDARY_THEME_COLOR,
} from "../../providers/theme/colors/colors";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const { pathname } = useLocation();

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
    //   name: "Deanery News",
    //   path: "",
    //   dropdownItems: [
    //     { name: "Kundapur Deanery", path: "/profile/edit" },
    //     { name: "Kallianpur Deanery", path: "/profile/edit" },
    //     { name: "Udupi Deanery", path: "/profile/edit" },
    //     { name: "Karkol Deanery", path: "/profile/edit" },
    //     { name: "Kundapur Deanery", path: "/profile/edit" },
    //   ],
    // },
    {
      name: "Deanery & Parish",
      path: "",
      dropdownItems: [
        {
          name: "Kundapur Deanery",
          path: "",
          innerLevelDropdown: [
            { name: "Deanery Director & Commitee", path: "/parishes" },
            { name: "Parishes", path: "/parishes" },
          ],
        },
        {
          name: "Kallianpur Deanery",
          path: "/profile/edit",
          innerLevelDropdown: [
            { name: "Deanery Director & Commitee", path: "/parishes" },
            { name: "Parishes", path: "/parishes" },
          ],
        },
        {
          name: "Udupi Deanery",
          path: "/profile/edit",
          innerLevelDropdown: [
            { name: "Deanery Director & Commitee", path: "/parishes" },
            { name: "Parishes", path: "/parishes" },
          ],
        },
        {
          name: "Karkol Deanery",
          path: "/profile/edit",
          innerLevelDropdown: [
            { name: "Deanery Director & Commitee", path: "/parishes" },
            { name: "Parishes", path: "/parishes" },
          ],
        },
        {
          name: "Shirva Deanery",
          path: "",
          innerLevelDropdown: [
            { name: "Deanery Director & Commitee", path: "/parishes" },
            { name: "Parishes", path: "/parishes" },
          ],
        },
      ],
    },
    { name: "News", path: "/profile" },
    { name: "Dexco", path: "", scrollTo: "dexcoInfo" },
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
                onClick={() => {
                  if (item?.scrollTo) {
                    console.log(item);

                    const element = document.getElementById("dexcoInfo");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                <Typography
                  color={
                    pathname?.includes(item?.name.toLowerCase()) ||
                    item?.name === "Home"
                      ? MAIN_THEME_COLOR
                      : "#1B001B"
                  }
                  fontWeight={
                    pathname?.includes(item?.name?.toLowerCase()) ||
                    item?.name === "Home"
                      ? "600"
                      : "500"
                  }
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
                              style={{ textDecoration: "none", width: "100%" }}
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
    </Grid>
  );
}
