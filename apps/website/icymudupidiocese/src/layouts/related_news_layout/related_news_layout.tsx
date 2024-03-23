import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface Props {}

function RelatedNewsLayout(props: PropsWithChildren) {
  const { children } = props;

  let relatedNews = [
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
    {
      id: 1,
      images:
        "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
      title: "Renovated air-conditioned Xavier Sabha Bhavan hall inaugurated",
    },
    {
      id: 1,
      images:
        "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
      title: "Renovated air-conditioned Xavier Sabha Bhavan hall inaugurated",
    },
    {
      id: 1,
      images:
        "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
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
    <Grid container spacing={3}>
      <Grid display={"flex"} item md={7} lg={7} sm={12}>
        {children}
      </Grid>
      <Grid item md={4} lg={4} sm={12}>
        <Box mt={4}>
          <Typography variant="h6">{"Top Stories"}</Typography>
          <Box borderBottom={"3px solid #77C3EC"} borderRadius={10} />
        </Box>
        <Box>
          {relatedNews?.map((item) => {
            return (
              <Box display={"flex"} mt={2}>
                <Card sx={{ borderBottom: "3px solid #77C3EC" }}>
                  <img
                    src={item?.images}
                    alt=""
                    height={80}
                    width={300}
                    style={{ objectFit: "cover" }}
                  />
                </Card>
                <Box ml={1}>
                  <Typography fontWeight={"600"}>
                    ಬೆಂಕಿ ಹಚ್ಚುತ್ತೇನೆಂದು ಅನ್ಯಕೋಮಿನ ಯುವಕನಿಂದ ಬೆದರಿಕೆ;
                    ಮೈಸೂರು-ಅಯೋಧ್ಯೆ ರೈಲು 2 ಗಂಟೆ ಸ್ಥಗಿತ!
                  </Typography>
                  <Typography variant="subtitle2">
                    By: Icym Udupi Deanery
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

export default RelatedNewsLayout;
