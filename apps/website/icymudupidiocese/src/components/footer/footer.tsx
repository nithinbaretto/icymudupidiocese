import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  LocationOnOutlined,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

export default function Footer() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      sx={{ backgroundColor: "#1A202C" }}
      id="contactus"
      p={isMobile ? 2 : 0}
    >
      <Grid container justifyContent={"center"} sx={{ py: 4 }}>
        <Grid item md={10} lg={10} sm={12}>
          <Box display={"flex"} alignItems={"center"}>
            <Box border="1px solid black" borderRadius={10} mr={3}>
              <Avatar
                alt="icym logo"
                src="images/icons/icym_icon.jpg"
                sx={{ height: 50, width: 50, objectFit: "fill" }}
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={"600"} color="#ffffff">
                Youth Commission Udupi
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item md={10} lg={10} sm={12} xs={12}>
          <Grid container>
            <Grid item md={4} lg={4} sm={12} xs={12} mt={4}>
              <Box>
                <Typography variant="h6" fontWeight={"600"} color="#ffffff">
                  Contact Us
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  mt={3}
                >
                  <Box>
                    <EmailOutlined sx={{ color: "#ffffff" }} />
                  </Box>
                  <Box ml={4}>
                    <Typography variant="subtitle1" color="#ffffff">
                      For advertising and sales enquiries :
                    </Typography>
                    <Typography variant="h6" color="#ffffff">
                      icymudupidiocese@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  mt={2}
                >
                  <Box>
                    <Phone sx={{ color: "#ffffff" }} />
                  </Box>
                  <Box ml={4}>
                    <Typography variant="subtitle1" color="#ffffff">
                      Engage With Us :
                    </Typography>
                    <Typography variant="h6" color="#ffffff">
                      7406411821
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12} mt={4}>
              <Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  mt={isMobile ? 2 : 6}
                >
                  <Box>
                    <LocationOnOutlined sx={{ color: "#ffffff" }} />
                  </Box>
                  <Box ml={4}>
                    <Typography variant="subtitle1" color="#ffffff">
                      Find Us :
                    </Typography>
                    <Typography variant="h6" color="#ffffff">
                      {"Bishop's House Udupi Karnataka, 576101, India"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2} lg={2} sm={12} xs={12} mt={isMobile ? 6 : 4}>
              <Box>
                <Typography variant="h6" fontWeight={"600"} color="#ffffff">
                  Follow us On
                </Typography>
                <Box display={"flex"} flexDirection={"row"} mt={2}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={35}
                    width={35}
                    borderRadius={20}
                    sx={{
                      backgroundColor: "#F5E6F5",
                    }}
                    justifyContent={"center"}
                  >
                    <FacebookOutlined />
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={35}
                    width={35}
                    borderRadius={20}
                    sx={{
                      backgroundColor: "#F5E6F5",
                    }}
                    justifyContent={"center"}
                    ml={2}
                  >
                    <WhatsApp />
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    height={35}
                    width={35}
                    borderRadius={20}
                    sx={{
                      backgroundColor: "#F5E6F5",
                    }}
                    justifyContent={"center"}
                    ml={2}
                  >
                    <Instagram />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2} lg={2} sm={12} xs={12} mt={4}>
              <Box>
                <Typography variant="h6" fontWeight={"600"} color="#ffffff">
                  Quick links
                </Typography>
                <Box display={"flex"} flexDirection={"column"} mt={2}>
                  <Typography
                    variant="h6"
                    borderBottom={2}
                    color="#ffffff"
                    width="fit-content"
                  >
                    Home
                  </Typography>

                  <Typography
                    variant="h6"
                    borderBottom={2}
                    color="#ffffff"
                    width="fit-content"
                    mt={1}
                  >
                    About
                  </Typography>

                  {/* <Typography
                    variant="h6"
                    borderBottom={2}
                    color="#ffffff "
                    width="fit-content"
                    mt={1}
                  >
                    Programmes
                  </Typography>

                  <Typography
                    variant="h6"
                    borderBottom={2}
                    color="#ffffff"
                    width="fit-content"
                    mt={1}
                  >
                    Trending
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid md={12} lg={12} sm={12} xs={12}>
          <Box
            mt={4}
            display="flex"
            borderBottom={"1px solid #ffffff"}
            width={"100%"}
          />
          <Grid container mb={3}>
            <Grid item md={1} lg={1} sm={12} />
            <Grid item md={5} lg={5} sm={12}>
              <Box mt={4}>
                <Typography variant="subtitle1" color="#ffffff">
                  © 2023 Youth Commission Udupi All Rights Reserved
                </Typography>
              </Box>
            </Grid>
            <Grid
              display={"flex"}
              item
              md={5}
              lg={5}
              sm={10}
              xl={5}
              justifyContent={isMobile ? "flex-start" : "end"}
            >
              <Box display={"flex"} mt={4}>
                <Typography variant="subtitle1" color="#ffffff">
                  Privacy policy |
                </Typography>
                <Typography variant="subtitle1" color="#ffffff" ml={1}>
                  Terms and condition
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
