import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SECONDARY_THEME_COLOR } from "../../../../providers/theme/colors/colors";

export default function TrendingNews() {
  let news = [
    {
      id: 1,
      images:
        "https://www.udupidiocese.in/images/melwy/udupidiocese200000002258_1.jpg",
      title: "Renovated air-conditioned Xavier Sabha Bhavan hall inaugurated",
    },
    {
      id: 1,
      images:
        "https://www.udupidiocese.in/images/melwy/udupidiocese200000002258_1.jpg",
      title: "Renovated air-conditioned Xavier Sabha Bhavan hall inaugurated",
    },
    {
      id: 1,
      images:
        "https://www.udupidiocese.in/images/melwy/udupidiocese200000002258_1.jpg",
      title: "Renovated air-conditioned Xavier Sabha Bhavan hall inaugurated",
    },
    {
      id: 1,
      images:
        "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
      title: "Renovated air-conditioned Xavier Sabha Bhavan hall inaugurated",
    },
  ];
  return (
    <Box mb={6} mt={8}>
      <Box mb={2} display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h4" fontWeight={"600"}>
          Latest news
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
            View all news
          </Typography>
          <ArrowRightAlt />
        </Box>
      </Box>
      <Grid container spacing={3}>
        {news.map((item) => {
          return (
            <Grid item md={4} lg={4} sm={12}>
              <Card>
                <Box>
                  <img
                    src={item?.images}
                    alt=""
                    width={"100%"}
                    height={250}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <Typography fontWeight={"600"} mx={2} color="#000000">
                    {item?.title}
                  </Typography>
                </Link>
                <Box borderBottom={"4px solid #77C3EC"} mt={1} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
