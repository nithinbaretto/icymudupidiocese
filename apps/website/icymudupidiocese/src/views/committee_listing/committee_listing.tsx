import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import { Link } from "react-router-dom";
import RelatedNewsLayout from "../../layouts/related_news_layout/related_news_layout";

interface Props {}

function CommitteeListing(props: Props) {
  const {} = props;

  let itemList = [
    { id: 1, img: "https://www.kryc.org/img/Vileena_Gonsalves.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Yeshappa.jpg" },
    { id: 1, img: "https://www.kryc.org/img/AkwilKirijostFernandes.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Supriya_V.jpg" },
  ];

  return (
    <MainLayout>
      <RelatedNewsLayout>
        <Box>
          <Box mt={2}>
            <Typography variant="h5" fontWeight={"500"}>
              Deanery Committee
            </Typography>
          </Box>
          <Grid container>
            <Box my={2}>
              {itemList?.map((item) => {
                return (
                  <Grid item md={12} lg={12} sm={12}>
                    <Box mt={1}>
                      <Link to="/">
                        <Typography>
                          Kundapura Deanery Executive Committee : 2021-22
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
          </Grid>
        </Box>
      </RelatedNewsLayout>
    </MainLayout>
  );
}

export default CommitteeListing;
