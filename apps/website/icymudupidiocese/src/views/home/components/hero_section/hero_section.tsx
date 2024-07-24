import { Box, Button } from "@mui/material";
import React from "react";
import theme from "../../../../providers/theme";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style.css";

export default function HeroSection() {
  let items = [
    {
      name: "Carousel 1",
      img: "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
    },
    {
      name: "Carousel 1",
      img: "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
    },
    {
      name: "Carousel 1",
      img: "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
    },
    {
      name: "Carousel 1",
      img: "https://image.roku.com/w/rapid/images/meta-image/888fce38-b734-4262-acdf-c7028be9f591.jpg",
    },
  ];
  return (
    <Box mt={2}>
      <Carousel
        autoPlay={true}
        dynamicHeight={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        interval={2000}
        renderItem={(children) => {
          return <Box mb={6}>{children}</Box>;
        }}
        renderIndicator={(onClick, isSelected) => {
          return (
            <Box
              display="inline-block"
              mx={0.2}
              mt={10}
              sx={{
                borderRadius: 8,
                width: isSelected ? 24 : 8,
                transition: "all 1s",
                height: 8,
                backgroundColor: isSelected
                  ? theme.palette.primary.main
                  : "white",
                border: `1px solid ${theme.palette.primary.main}`,
                mr: 2,
              }}
            />
          );
        }}
      >
        {items.map((image) => {
          return (
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  "& ::before": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 50,
                    height: 50,
                    borderTopRightRadius: 50,
                    boxShadow: "-15px -15px 0 15px #fff",
                  },
                }}
              >
                <img
                  style={{
                    height: "80vh",
                    width: "100%",
                    borderRadius: 20,
                    objectFit: "cover",
                  }}
                  src={image.img}
                  alt=""
                />
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}
