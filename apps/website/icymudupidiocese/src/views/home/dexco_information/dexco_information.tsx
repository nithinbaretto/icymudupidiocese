import { Avatar, Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { SECONDARY_THEME_COLOR } from "../../../providers/theme/colors/colors";

export default function DexcoInformation(this: any) {
  const [selectedTab, setSelectedTab] = useState(0);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  let itemList = [
    { id: 1, img: "https://www.kryc.org/img/Vileena_Gonsalves.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Yeshappa.jpg" },
    { id: 1, img: "https://www.kryc.org/img/AkwilKirijostFernandes.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Supriya_V.jpg" },
    { id: 1, img: "https://kryc.org/img/Steevan_Fernandes.jpeg" },
    { id: 1, img: "https://www.kryc.org/img/Ashley_Dsouza.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Vileena_Gonsalves.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Yeshappa.jpg" },
    { id: 1, img: "https://www.kryc.org/img/AkwilKirijostFernandes.jpg" },
    { id: 1, img: "https://www.kryc.org/img/Supriya_V.jpg" },
    { id: 1, img: "https://kryc.org/img/Steevan_Fernandes.jpeg" },
    { id: 1, img: "https://www.kryc.org/img/Ashley_Dsouza.jpg" },
  ];
  return (
    <Box mb={4} id="dexcoInfo">
      <Box mb={3}>
        <Typography variant="h4" fontWeight={"600"}>
          Youth Commission
        </Typography>
        <Typography variant="h5">Udupi Diocese</Typography>
      </Box>
      <Box mb={2}>
        <Tabs
          value={selectedTab}
          onChange={() => {}}
          aria-label="basic tabs example"
        >
          <Tab label="Icym Dexco" />
          <Tab label="Ycs Dexco" />
          <Tab label="Ysm Dexco" />
        </Tabs>
      </Box>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        // deviceType={this.props.deviceType}
        itemClass="carousel-item-padding-40-px"
      >
        {itemList?.map((v, index) => {
          return (
            <Card
              sx={{
                minHeight: 330,
                height: "100%",
                mr: 2,
                border: `1px solid ${SECONDARY_THEME_COLOR}`,
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
              >
                <Box display={"flex"} justifyContent={"center"} mt={2}>
                  <Avatar sx={{ height: 130, width: 130 }}>
                    <img src={v.img} alt="" />
                  </Avatar>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  mt={2}
                >
                  <Typography fontWeight={600}>Reena Fernandes</Typography>
                  <Typography variant="body2">Vice President</Typography>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Carousel>
    </Box>
  );
}
