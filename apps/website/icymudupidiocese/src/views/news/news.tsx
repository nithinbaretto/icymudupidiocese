import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import ComingSoon from "../components/coming_soon/coming_soon";

export default function News() {
  let newsDetails = {
    id: "News",
    type: "Sports",
    parish: "Kundapura",
    deanery: "Kundapura",
    parishId: 1,
    deaneryId: 1,
    newsTitle:
      "ಕ್ರಿಕೆಟ್ ಮೈದಾನದಲ್ಲಿ ಕುಸಿದು ಬಿದ್ದ ಕರ್ನಾಟಕ ವೇಗಿ ಕೆ ಹೊಯ್ಸಳ ಸಾವು, ತಂಡಕ್ಕೆ ಆಘಾತ!",
    subtitle:
      "ಕರ್ನಾಟಕ ಕ್ರಿಕೆಟ್‌ಗೆ ಆಘಾತ ಎದುರಾಗಿದೆ. ಯುವ  ವೇಗಿ ಕೆ ಹೊಯ್ಸಳ ಮೈದಾನದಲ್ಲಿ ಕುಸಿದು ಬಿದ್ದು ಮೃತಪಟ್ಟ ಘಟನೆ ನಡೆದಿದೆ.ಏಜಿಸ್ ಸೌತ್ ಝೋನ್ ಟೂರ್ನಿ ವೇಳೆ ಈ ಘಟನೆ ನಡೆದಿದೆ.",
    description:
      "ಬೆಂಗಳೂರು(ಫೆ.22) ದಿಢೀರ್ ಕುಸಿದು ಬಿದ್ದು ಮೃತಪಡುತ್ತಿರುವವರ ಸಂಖ್ಯೆ ಇತ್ತೀಚನ ವರ್ಷಗಳಲ್ಲಿ ಹೆಚ್ಚಾಗುತ್ತಿದೆ. ಇದೀಗ ಕರ್ನಾಟಕದ ಯುವ ಕ್ರಿಕೆಟಿಗ ಕೆ ಹೊಯ್ಸಳ ಮೈದಾನದಲ್ಲೇ ಕುಸಿದು ಬಿದ್ದು ಮೃತಪಟ್ಟ ಘಟನೆ ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಡೆದಿದೆ. ಏಜಿಸ್ ಸೌತ್  ಝೋನ್ ಟೂರ್ನಿ ನಡುವೆ ಈ ದುರ್ಘಟನೆ ನಡೆದಿದ್ದು, ಕರ್ನಾಟಕ ತಂಡಕ್ಕೆ ತೀವ್ರ ಆಘಾತವಾಗಿದೆ. ಇತ್ತ ಕೆ ಹೊಯ್ಸಳ ಪೋಷಕರು ಆಕ್ರಂದನ ಮುಗಿಲು ಮುಟ್ಟಿದೆ.<br><br> ಕುಟುಂಬಸ್ಥರು, ಆಪ್ತರು ಹಾಗೂ ಅಭಿಮಾನಿಗಳು ಶೋಕ ಸಾಗರದಲ್ಲಿ ಮುಳುಗಿದ್ದಾರೆ. ಏಜಿಸ್ ಸೌತ್ ಝೋನ್ ಟೂರ್ನಿಯಲ್ಲಿ ಇಂದು ಕರ್ನಾಟಕ ತಂಡ, ತಮಿಳುನಾಡು ವಿರುದ್ದ ಹೋರಾಟ ನಡೆಸಿತ್ತು. ರೋಚಕ ಪಂದ್ಯದಲ್ಲಿ ಕೆ ಹೊಯ್ಸಳ ಅದ್ಬುತ ಬೌಲಿಂಗ್ ಪ್ರದರ್ಶನ ನೀಡಿದ್ದರು. ಈ ಪಂದ್ಯದಲ್ಲಿ ತಮಿಳುನಾಡು ತಂಡವನ್ನು ಮಣಿಸಿದ ಕರ್ನಾಟಕ ಸಂಭ್ರಮಾಚರಣೆ ನಡೆಸಿತ್ತು. ಗೆಲುವಿನ ಬಳಿಕ ಮೈದಾನದಲ್ಲಿ ಆಟಾಗಾರರು, ಕೋಚ್, ಸಹಾಯಕ ಸಿಬ್ಬಂದಿ ಸೇರಿದ್ದರು.<br><br><br> ಈ ಪಂದ್ಯದ ಗೆಲುವಿನ ಕಾರಣ ಹಾಗೂ ಮುಂದಿನ ಪಂದ್ಯಕ್ಕೆ ಬೇಕಾದ ತಯಾರಿಗಳ ಕುರಿತು ಕೋಟ್ ಹಾಗೂ ಇತರರು ಕೆಲ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ್ದರು. ಮೈದಾನದಲ್ಲಿ ತಂಡದ ಜೊತೆ ನಿಂತು ಸಲಹೆ ಕೇಳುತ್ತಿದ್ದ ಕೆ ಹೊಯ್ಸಳ ಏಕಾಏಕಿ ಕುಸಿದು ಬಿದ್ದಿದ್ದಾರೆ. ಕೆ ಹೊಯ್ಸಳ ಕೆಲವೇ ಕ್ಷಣಗಲ್ಲಿ ಪ್ರಜ್ಞಾಹೀನಾ ಸ್ಥಿತಿಗೆ ತಲುಪಿದ್ದಾರೆ. ಮೈದಾನದಲ್ಲಿದ್ದ ವೈದ್ಯರ ತಂಡ ಸ್ಥಳಕ್ಕೆ ಧಾವಿಸಿ ಪರಿಶೀಲನೆ ನಡೆಸಿ ತುರ್ತು ಚಿಕಿತ್ಸೆ ನೀಡಿದ್ದಾರೆ. ಇದೇ ವೇಳೆ ಆ್ಯಂಬುಲೆನ್ಸ್ ಮೂಲಕ ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆಗೆ ವೇಗಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ. ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆ ವೈದ್ಯರು ತಪಾಸನೆ ನಡೆಸಿ, ಯುವ ಕ್ರಿಕೆಟಿಗ ಕೆ ಹೊಯ್ಸಳ ಮೃತಪಟ್ಟಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿದ್ದಾರೆ. ಹೃದಯಾಘಾತದಿಂದ ಕೆ ಹೊಯ್ಸಳ ಮೃತಪಟ್ಟಿರುವುದಾಗಿ ವೈದ್ಯರು ಹೇಳಿದ್ದಾರೆ. ವೈದ್ಯರು ನೀಡಿದ ವರದಿ ಕರ್ನಾಟಕ ತಂಡವನ್ನೇ ಬೆಚ್ಚಿ ಬೀಳಿಸಿತ್ತು. ತಮಿಳುನಾಡು ವಿರುದ್ಧ ಉತ್ತಮ ಬೌಲಿಂಗ್ ಸಂಘಟಿಸಿದ್ದ ಯುವ ಕ್ರಿಕೆಟಿಗ, ತಮ್ಮ ಜೊತೆಗೆ ಸಂಭ್ರಮಾಚರಣೆ ಮಾಡಿದ್ದ ಕ್ರಿಕೆಟಿಗ ಇನ್ನಿಲ್ಲ ಅನ್ನೋದನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗದ ಪರಿಸ್ಥಿತಿ ನಿರ್ಮಾಣವಾಗಿದೆ. ಇತ್ತ ಕೆ ಹೊಯ್ಸಳನನ್ನು ಆಸ್ಪತ್ರೆ ಸಾಗಿಸುವ ಮಧ್ಯೆ ಕುಟುಂಬಸ್ಥರಿಗೆ ಮಾಹಿತಿ ನೀಡಲಾಗಿತ್ತು. ಇತ್ತ ಕುಟುಂಬಸ್ಥರು ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆಗೆ ದೌಡಾಯಿಸಿದ್ದರು. ಅಷ್ಟರಲ್ಲೇ ಕೆ ಹೊಯ್ಸಳ ಪ್ರಾಣ ಪಕ್ಷಿ ಹಾರಿಹೋಗಿದೆ",
    lastUpdated: "Last updated: February 22, 2024 11:37 pm",
  };

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
    <MainLayout>
      <ComingSoon />
      {/* <Grid container justifyContent={"center"} spacing={3}>
        <Grid
          display={"flex"}
          justifyContent={"flex-end"}
          flexDirection={"column"}
          item
          md={7}
          lg={7}
          sm={12}
        >
          <Box display={"flex"} justifyContent={"end"} mt={4} width={"100%"}>
            <Typography variant="h4">{newsDetails?.newsTitle}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h6">{newsDetails?.subtitle}</Typography>
          </Box>

          <Box mt={4}>
            <Box display={"flex"} mb={2}>
              <Box
                width={"fit-content"}
                border="1px solid black"
                borderRadius={10}
                mr={3}
              >
                <Avatar
                  alt="icym logo"
                  src="images/icons/icym_icon.jpg"
                  sx={{ height: 50, width: 50 }}
                />
              </Box>
              <Box>
                <Typography fontWeight={"600"}>Icym Udupi Diocese</Typography>
                <Typography variant="body2">
                  {newsDetails?.lastUpdated}
                </Typography>
              </Box>
            </Box>

            <Card>
              <img
                src="https://www.udupidiocese.in/images/melwy/udupidiocese200000002258_1.jpg"
                alt=""
                style={{ objectFit: "contain", width: "100%" }}
              />
            </Card>
          </Box>
          <Box mt={2}>
            <Typography
              dangerouslySetInnerHTML={{ __html: newsDetails?.description }}
            />
          </Box>
        </Grid>
        <Grid item md={4} lg={4} sm={12}>
          <Box mt={4}>
            <Typography variant="h6">{"Related Stories"}</Typography>
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
      </Grid> */}
    </MainLayout>
  );
}
