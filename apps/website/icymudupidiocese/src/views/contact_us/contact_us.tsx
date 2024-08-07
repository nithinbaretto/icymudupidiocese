import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import { MAIN_THEME_COLOR } from "../../providers/theme/colors/colors";

interface Props {}

function ContactUs(props: Props) {
  const {} = props;

  return (
    <MainLayout>
      <Box mb={5} mt={2}>
        <Typography variant="h5" fontWeight={"600"} textAlign={"center"}>
          Contact us
        </Typography>
        <Grid container>
          <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
            <Typography variant="body1" mt={4}>
              Fr.Steevan Fernandes,
              <br /> Anugraha Pastoral Center,
              <br /> Kukkunje, Santhekatte P.O, <br />
              Udupi - 576105,
              <br />
              Karnataka, <br />
              India
            </Typography>
            <Box display={"flex"} mt={2}>
              <Typography fontWeight={600}>Phone no.: </Typography>
              <Typography ml={1}>9945733168</Typography>
            </Box>
            <Box display={"flex"}>
              <Typography fontWeight={600}>Email:</Typography>
              <Typography ml={1}>icymudupidiocese@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
            <Box
              mt={3}
              height={"100%"}
              sx={{ border: `1px solid ${MAIN_THEME_COLOR}`, borderRadius: 3 }}
            >
              <iframe
                style={{ borderRadius: 30 }}
                title="map"
                width={"100%"}
                height="100%"
                frameBorder={0}
                src={
                  "https://maps.google.com/maps/?q=13.3776153,74.7472716&t=&z=15&ie=UTF8&iwloc=&output=embed"
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
}

export default ContactUs;
