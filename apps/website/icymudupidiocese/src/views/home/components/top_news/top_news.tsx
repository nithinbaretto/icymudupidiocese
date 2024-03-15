import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SECONDARY_THEME_COLOR } from "../../../../providers/theme/colors/colors";
import { ArrowRightAlt } from "@mui/icons-material";

interface Props {}

function TopNews() {
  let news = [
    {
      id: 1,
      title:
        "T20 World Cup 2024: Ricky Ponting eagerly awaits India vs Pakistan clash in New York",
    },
    {
      id: 1,
      title:
        "T20 World Cup 2024: Ricky Ponting eagerly awaits India vs Pakistan clash in New York",
    },
    {
      id: 1,
      title:
        "T20 World Cup 2024: Ricky Ponting eagerly awaits India vs Pakistan clash in New York",
    },
    {
      id: 1,
      title:
        "T20 World Cup 2024: Ricky Ponting eagerly awaits India vs Pakistan clash in New York",
    },
    {
      id: 1,
      title:
        "T20 World Cup 2024: Ricky Ponting eagerly awaits India vs Pakistan clash in New York",
    },
    {
      id: 1,
      title:
        "T20 World Cup 2024: Ricky Ponting eagerly awaits India vs Pakistan clash in New York",
    },
  ];

  return (
    <Box>
      <Box mb={2} display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h4" fontWeight={"600"}>
          Top news
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
            View all
          </Typography>
          <ArrowRightAlt />
        </Box>
      </Box>

      <Box
        display={"flex"}
        position={"relative"}
        mt={2}
        borderRadius={2}
        sx={{ backgroundColor: "#09084F" }}
        minHeight={250}
      >
        <Grid container spacing={3} py={4}>
          {news?.map((item, index) => {
            return (
              <Grid item md={4} lg={4} sm={12} sx={{ mb: 1 }}>
                <Box display={"flex"} mx={2}>
                  <Avatar sx={{ backgroundColor: "#333260" }}>
                    <Typography color="#F48407">{index + 1}</Typography>
                  </Avatar>
                  <Link to={""} style={{ textDecoration: "none" }}>
                    <Box ml={2}>
                      <Typography color="#ffffff">{item?.title}</Typography>
                    </Box>
                  </Link>
                </Box>
                <Box
                  display={"flex"}
                  height={2}
                  sx={{
                    backgroundColor: "#3D3C6C",
                  }}
                  mt={4}
                  mx={3}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default TopNews;
