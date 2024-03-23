import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./style.css";
import RelatedNewsLayout from "../../layouts/related_news_layout/related_news_layout";

export default function ParishListing() {
  let parish = [
    { name: "Kundapura", id: 1 },
    { name: "Koteshwara", id: 1 },
    { name: "Kandlur", id: 1 },
    { name: "Gangolli", id: 1 },
    { name: "Basrur", id: 1 },
    { name: "Byndoor", id: 1 },
    { name: "Padukone", id: 1 },
    { name: "Pius nagar", id: 1 },
    { name: "Trasi", id: 1 },
  ];
  return (
    <MainLayout>
      <RelatedNewsLayout>
        <Box
          display={"flex"}
          flexDirection={"column"}
          mt={4}
          mb={6}
          minHeight={300}
        >
          <Box borderLeft={"3px solid #77C3EC"}>
            <Typography variant="h5" fontWeight={"500"} pl={2}>
              Kundapur Deanery Parishes
            </Typography>
          </Box>
          <Grid container spacing={3} mt={2}>
            {parish?.map((item) => {
              return (
                <Grid item md={6} lg={6} sm={12}>
                  <Link
                    to="/parishes/parish"
                    style={{ textDecoration: "none" }}
                  >
                    <Card>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        borderLeft={"3px solid #77C3EC"}
                        px={2}
                      >
                        <Typography py={2}>{item?.name}</Typography>
                        <ArrowForwardIosOutlined
                          sx={{ justifyContent: "flex-end" }}
                        />
                      </Box>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </RelatedNewsLayout>
    </MainLayout>
  );
}
