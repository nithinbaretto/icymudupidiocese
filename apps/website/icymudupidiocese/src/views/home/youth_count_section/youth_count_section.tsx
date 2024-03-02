import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

export default function YouthCountSection() {
  return (
    <Box mt={5}>
      <Box>
        <Typography variant="h4" fontWeight={"600"}>
          Youth Engagement Metrics
        </Typography>
      </Box>
      <Grid container spacing={3} mt={1} mb={3}>
        <Grid item md={4} lg={4} sm={12}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box>
              <Typography variant="h5">Total Youth Count</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">1000</Typography>
              {/* <CountUp  end={1000} /> */}
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} lg={4} sm={12}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box>
              <Typography variant="h5">Active Youth Count</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">1000</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} lg={4} sm={12}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box>
              <Typography variant="h5">InActive Youth Count</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">1000</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
