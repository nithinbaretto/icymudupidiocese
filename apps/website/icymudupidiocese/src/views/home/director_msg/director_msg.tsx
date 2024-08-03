import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SECONDARY_THEME_COLOR } from "../../../providers/theme/colors/colors";
import { ArrowRightAlt } from "@mui/icons-material";

export default function DirectorMsg() {
  return (
    <Box my={3}>
      <Grid container spacing={4} mt={0}>
        <Grid item md={6} lg={6} sm={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h4" fontWeight={"600"}>
                Director's Message
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                “Welcome to the Udupi Diocese Youth Page” As the Youth Director
                of the Udupi Diocese, I am thrilled to connect with all our
                vibrant and dynamic youth. Here, you'll find updates and
                information about our active movements: ICYM (Indian Catholic
                Youth Movement), YCS (Young Catholic Students), and YSM (Young
                Students Movement).These movements are dedicated to empowering
                young people, fostering faith, and promoting social justice and
                community service. Our goal is to provide a platform for growth,
                learning, and active participation in the Church and society.
                Explore our site to learn more about upcoming events,
                activities, and opportunities to get involved. Let's work
                together to make a positive impact and build a strong,
                supportive youth community. Feel free to reach out if you have
                any questions or suggestions. We look forward to your
                participation and contribution.
              </Typography>
              <Typography mt={2}>Blessings,</Typography>
            </Box>
            {/* <Box
              display={"flex"}
              mt={1}
              borderBottom={`3px solid ${SECONDARY_THEME_COLOR}`}
              width={"fit-content"}
              ml={2}
            >
              <Typography variant="body2" fontWeight={"600"}>
                Read more
              </Typography>
              <ArrowRightAlt />
            </Box> */}
            <Box mt={3} ml={2}>
              <Typography fontWeight={"600"}>Fr Steven Fernandes</Typography>
              <Typography>Youth Director, Diocese of Udupi</Typography>
              <Typography></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid display={"flex"} item md={6} lg={6} sm={12} xs={12}>
          <Box
            display={"flex"}
            height="100%"
            width={"100%"}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <img
              src={"https://kryc.org/img/Steevan_Fernandes.jpeg"}
              alt=""
              height={400}
              style={{ borderRadius: 15 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
