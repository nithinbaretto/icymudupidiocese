import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { MAIN_THEME_COLOR } from "../../providers/theme/colors/colors";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  let navItems: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/profile" },
    { name: "Profile", path: "/profile" },
    { name: "Trending", path: "/profile" },
    { name: "Programmes", path: "/profile" },
  ];
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
            <Box ml={5}>
              <Button onClick={() => navigate(item?.path)}>
                <Typography
                  fontSize={"18px"}
                  color={item?.name === "Home" ? MAIN_THEME_COLOR : "#1B001B"}
                  fontWeight={item?.name === "Home" ? "600" : "500"}
                  textAlign="center"
                >
                  {item?.name}
                </Typography>
              </Button>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
