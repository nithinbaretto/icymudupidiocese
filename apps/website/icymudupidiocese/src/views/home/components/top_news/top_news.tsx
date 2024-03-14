import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
      <Typography variant="h4" fontWeight={"600"}>
        Top news
      </Typography>

      <Box
        display={"flex"}
        position={"relative"}
        mt={2}
        borderRadius={2}
        sx={{ backgroundColor: "#09084F" }}
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
        <Box display={"flex"}>
          <Box
            top={0}
            position={"absolute"}
            zIndex={99999}
            sx={{ backgroundColor: "#FF951F" }}
          >
            sdf
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopNews;
