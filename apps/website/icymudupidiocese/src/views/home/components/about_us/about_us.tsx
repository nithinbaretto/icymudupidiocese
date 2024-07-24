import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SECONDARY_THEME_COLOR } from "../../../../providers/theme/colors/colors";

export default function AboutUs() {
  return (
    <Box mt={4}>
      <Typography variant="h4" fontWeight={"600"}>
        About
      </Typography>
      <Typography variant="h5">Icym Udupi Diocese</Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">
          Karnataka Regional Youth Commission (KRYC) is under the leadership of
          Karnataka Regional Catholic Bishop's Council (KRCBC). Most Rev. Dr.
          Peter Machado, Archbishop of Bangalore is the President of KRCBC and
          also the president of KRYC. It is one of the 22 Regional Commissions
          of the KRCBC. Most Rev. Dr. Henry D’Souza, Bishop of Bellary Diocese
          is the Chairman of the Karnataka Regional Youth Commission and Most
          Rev. Mar Joseph Arumachadath Bishop of Bhadravathi is the
          joint-chairman. At present Fr. Lourd Raj is the Secretary for KRCBC
          Youth Commission. He takes care ICYM, YCS/YSM, and MIJARC as Regional
          director and Chaplin as well. Sr. Magdalene Pakianathan VC serves as
          the Regional Youth Lady Animator. The Karnataka Regional Youth
          Commission office is placed in Karnataka Regional Pastoral Centre,
          Bangalore. The church in India as a whole is divided into 13 regions
          and the Karnataka state is one such region.
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
          <ArrowRightAlt />
        </Box>
      </Box>
      <Box mt={4} />
    </Box>
  );
}
