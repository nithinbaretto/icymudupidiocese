import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import { Box, Grid, Typography } from "@mui/material";
import { MAIN_THEME_COLOR } from "../../providers/theme/colors/colors";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

export default function AboutUs() {
  const directors = [
    {
      id: 1,
      name: "Rev. Fr Larry Pinto",
      post: "ICYM-YCS Director",
      img: "/images/placeholder.jpg",
      deanery: " Karkal Deanery",
    },
    {
      id: 2,
      name: "Rev. Fr Roy Lobo",
      post: "ICYM-YCS Director",
      img: "/images/placeholder.jpg",
      deanery: " Karkal Deanery",
    },
    {
      id: 3,
      name: "Rev. Fr Anil DSilva",
      post: "ICYM Director",
      img: "/images/placeholder.jpg",
      deanery: "Kallianpur Deanery",
    },
    {
      id: 4,
      name: "Rev. Fr Oliver Nazreth",
      post: "YCS Director",
      img: "/images/placeholder.jpg",
      deanery: " Kallianpur Deanery",
    },
    {
      id: 5,
      name: " Rev. Fr Arnold Dsouza",
      post: "ICYM Director",
      img: "/images/placeholder.jpg",
      deanery: " Shirva Deanery",
    },
    {
      id: 6,
      name: " Rev. Fr Arnold Dsouza",
      post: "ICYM Director",
      img: "/images/directors/shirva_icym_director.jpeg",
      deanery: " Shirva Deanery",
    },
    {
      id: 7,
      name: "Rev. Fr Ronson Dsouza",
      post: "Ycs Director",
      img: "/images/directors/shirva_ycs_director.jpg",
      deanery: "Shirva Deanery",
    },
    {
      id: 8,
      name: "Rev. Fr Ronson Dsouza",
      post: "ICYM Director",
      img: "/images/placeholder.jpg",
      deanery: "Udupi Deanery",
    },
    {
      id: 9,
      name: "Rev. Fr Rajesh Pasanna",
      post: "Ycs Director",
      img: "/images/placeholder.jpg",
      deanery: "Udupi Deanery",
    },
  ];
  return (
    <MainLayout>
      <Box mt={2} mb={4}>
        <Typography variant="h5" fontWeight={"600"} textAlign={"center"}>
          Youth Commission Udupi
        </Typography>
        <Typography variant="body1" mt={4}>
          The Youth Commission is under the leadership of Most Rev. Dr. Gerald
          Isaac Lobo, Bishop of Udupi, and Rev. Fr. Steven Fernandes, Youth
          Director of the Diocese of Udupi. Currently, Fr. Steven Fernandes
          serves as the Secretary for the Youth Commission and oversees ICYM,
          YCS, and YSM. Mr. Melwyn Castelino and Mrs. Kavita D'Silva are the
          Animators for YCS, and Mrs. Sandra Lobo is the Animator for YSM. The
          Youth Commission office is located at ANUGRAHA Pastoral Centre,
          Kakkunje, Santhekatte.
          <br /> The Udupi Diocese as a whole is divided into 5 Deaneries
        </Typography>
        <Typography variant="h6" mt={2}>
          <Typography variant="body1" fontWeight={600}>
            The 5 Deaneries and Directors are:
          </Typography>
          {/* 1. Karkal Deanery - Rev. Fr Larry Pinto
          <br />
          2. Kallianpur Deanery - Rev. Fr Anil DSilva - ICYM Director - Rev. Fr
          Oliver Nazreth - YCS Director <br /> 3. Kundapura Deanery - Rev. Fr
          Roy Lobo <br /> 4. Shirva Deanery - Rev. Fr Arnold
          Dsouza ( ICYM Director) Rev. Fr Ronson Dsouza (YCS Director) <br /> 5.
          Udupi Deanery - Rev. Fr Ronson Dsouza ( ICYM Director) Rev. Fr Rajesh
          Pasanna (YCS Director). */}
        </Typography>
        <Grid justifyContent={"center"} container spacing={2} mt={1}>
          {directors?.map((item) => {
            return (
              <Grid item md={3} sm={6} lg={3} xs={12} xl={2}>
                <Box
                  p={1}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  sx={{
                    border: `2px solid ${MAIN_THEME_COLOR}`,
                    borderRadius: 1,
                    width: "100%",
                  }}
                >
                  <img
                    src={item?.img}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 10,
                      aspectRatio: 1,
                    }}
                  />
                  <Typography mt={1} variant="subtitle2">
                    {item?.name}
                  </Typography>
                  <Typography variant="subtitle1">{item?.post}</Typography>
                  <Typography variant="subtitle1">{item?.deanery}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box display={"flex"} flexDirection={"column"} mt={3}>
          <Typography variant="body1" fontWeight={600}>
            The Diocese has :
          </Typography>

          <Box display={"flex"} alignItems={"center"}>
            <KeyboardDoubleArrowRight />
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{
                border: `2px solid ${MAIN_THEME_COLOR}`,
                borderRadius: 1,
              }}
              height={"fit-content"}
              py={0.3}
              mx={1}
              mt={1}
            >
              <Typography variant="button" mx={1}>
                46 ICYM units
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <KeyboardDoubleArrowRight />
            <Box
              sx={{
                border: `2px solid ${MAIN_THEME_COLOR}`,
                borderRadius: 1,
              }}
              height={"fit-content"}
              py={0.3}
              mx={1}
              my={1}
            >
              <Typography variant="button" mx={1}>
                30 active YSM schools
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <KeyboardDoubleArrowRight />
            <Box
              sx={{
                border: `2px solid ${MAIN_THEME_COLOR}`,
                borderRadius: 1,
              }}
              height={"fit-content"}
              py={0.3}
              mx={1}
            >
              <Typography variant="button" mx={1}>
                46 ICYM units
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography variant="body1" fontWeight={600} mt={2}>
          YOUTH COMMISSION VISION: Educated and united catholic youth for
          Christian leadership
        </Typography>
        <Typography variant="body1" fontWeight={600} mt={2}>
          MISSION: To form catholic youth as value based leaders in the society.
          To motivate the youth to work for the development of the society.
        </Typography>
      </Box>
    </MainLayout>
  );
}
