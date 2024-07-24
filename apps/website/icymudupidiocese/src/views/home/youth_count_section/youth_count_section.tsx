import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import { SECONDARY_THEME_COLOR } from "../../../providers/theme/colors/colors";

export default function YouthCountSection() {
  return (
    <Box mt={5}>
      <Box>
        <Typography variant="h4" fontWeight={"600"}>
          Youth Engagement Metrics
        </Typography>
      </Box>
      <Grid container spacing={6} mt={1} mb={3}>
        <Grid item md={4} lg={4} sm={12} xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            border={`1px solid ${SECONDARY_THEME_COLOR}`}
            borderRadius={2}
            minHeight={200}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h5" fontWeight={"500"}>
                Total Youth Count
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">1000</Typography>
              {/* <CountUp  end={1000} /> */}
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} lg={4} sm={12} xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            border={`1px solid ${SECONDARY_THEME_COLOR}`}
            borderRadius={2}
            minHeight={200}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h5" fontWeight={"500"}>
                Active Youth Count
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">1000</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} lg={4} sm={12} xs={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            border={`1px solid ${SECONDARY_THEME_COLOR}`}
            borderRadius={2}
            minHeight={200}
          >
            <Box>
              <Typography variant="h5" fontWeight={"500"}>
                InActive Youth Count
              </Typography>
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
