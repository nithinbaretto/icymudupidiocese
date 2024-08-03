import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SECONDARY_THEME_COLOR } from "../../../../providers/theme/colors/colors";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <Box mt={4}>
      <Typography variant="h4" fontWeight={"600"}>
        About
      </Typography>
      <Typography variant="h5">Icym Udupi Diocese</Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">
          The Youth Commission is under the leadership of Most Rev. Dr. Gerald
          Isaac Lobo, Bishop of Udupi, and Rev. Fr. Steven Fernandes, Youth
          Director of the Diocese of Udupi. Currently, Fr. Steven Fernandes
          serves as the Secretary for the Youth Commission and oversees ICYM,
          YCS, and YSM. Mr. Melwyn Castelino and Mrs. Kavita D'Silva are the
          Animators for YCS, and Mrs. Sandra Lobo is the Animator for YSM. The
          Youth Commission office is located at ANUGRAHA Pastoral Centre,
          Kakkunje, Santhekatte. The Udupi Diocese as a whole is divided into 5
          Deaneries
        </Typography>
        <Box
          display={"flex"}
          mt={1}
          borderBottom={`3px solid ${SECONDARY_THEME_COLOR}`}
          width={"fit-content"}
          onClick={() => {}}
          sx={{ cursor: "pointer" }}
        >
          <Typography variant="body2" fontWeight={"600"}>
            Read more
          </Typography>
          <IconButton
            style={{ margin: 0, padding: 0 }}
            onClick={() => navigate("/about")}
          >
            <ArrowRightAlt />
          </IconButton>
        </Box>
      </Box>
      <Box mt={4} />
    </Box>
  );
}
