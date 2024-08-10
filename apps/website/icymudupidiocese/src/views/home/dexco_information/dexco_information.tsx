import { Avatar, Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useRef, useState } from "react";
import { SECONDARY_THEME_COLOR } from "../../../providers/theme/colors/colors";
import { isMobile } from "react-device-detect";

export default function DexcoInformation(this: any) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabSlideIndexes, setTabSlideIndexes] = useState([0, 0, 0]);
  const carouselsRef = useRef<Carousel>(null);
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
  let icym_dexco = [
    {
      id: 1,
      img: "/images/godwin.jpeg",
      name: "Godwin Mascarenhas",
      post: "President",
    },
    {
      id: 2,
      img: "/images/riya.jpeg",
      name: "Riya Aranha",
      post: "Secretary",
    },
    {
      id: 3,
      img: "/images/mervin.jpeg",
      name: "Mervin Lawrence D Almeida",
      post: "Vice President",
    },
    {
      id: 4,
      img: "/images/siona.jpg",
      name: "Jane Siona Dsouza",
      post: "Joint Secretary / Youcat Incharge",
    },
    {
      id: 5,
      img: "/images/playson.jpeg",
      name: "Playson Dsouza",
      post: "P.R.O",
    },
    {
      id: 6,
      img: "/images/rouvin.jpg",
      name: "Rouvin Francis Pereira",
      post: "Treasurer",
    },
    {
      id: 7,
      img: "/images/mecnel.jpeg",
      name: "Mecnel Rodrigues",
      post: "Sports / Cultural / Liturgy Incharge",
    },

    {
      id: 8,
      img: "/images/ashley.jpg",
      name: "Ashley D'souza",
      post: "Regional Secretary",
    },
    {
      id: 9,
      img: "/images/glanish.jpeg",
      name: "Glanis Joyal Monteiro",
      post: "Regional Representative",
    },
    {
      id: 10,
      img: "/images/evan.jpeg",
      name: "Evan Jude Dsouza",
      post: "President, Shirva Deanery",
    },
    {
      id: 11,
      img: "/images/lloyd.jpg",
      name: "Lloyd Cornelio",
      post: "President, Kallianpur Deanery",
    },
    {
      id: 12,
      img: "/images/jostan.jpg",
      name: "Joston Dsilva",
      post: "President, Karkala Deanery",
    },
    {
      id: 13,
      img: "/images/shiney_udupi_deanery_president.jpg",
      name: "Shiney Alva",
      post: "President, Udupi Deanery",
    },
    {
      id: 14,
      img: "/images/nithin.jpg",
      name: "Nithin Baretto",
      post: "President, Kundapur Deanery",
    },
  ];

  let ycs_dexco = [
    {
      id: 3,
      img: "/images/animator_1.jpeg",
      name: "Azil Melwyn Castelino",
      post: "Animator",
    },
    {
      id: 4,
      img: "/images/animator_2.jpg",
      name: "Jenviv Kavitha Cutinho",
      post: "Animator",
    },
    {
      id: 1,
      img: "/images/dexco_president.jpg",
      name: "Joshwa Herald Fernandes",
      post: "President",
    },

    {
      id: 13,
      img: "/images/harshith_fernandes.jpeg",
      name: "Harshith Fernandes",
      post: "Male Vice President",
    },
    {
      id: 14,
      img: "/images/melisha_noronha.jpeg",
      name: "Melisha Noronha",
      post: "Female Vice President",
    },
    {
      id: 2,
      img: "/images/secretary_.jpg",
      name: "Preeshal Onisia Dmello",
      post: "Secretary",
    },
    {
      id: 14,
      img: "/images/cadence.jpeg",
      name: "Cadence Latonia D’Souza",
      post: "Joint Secretary",
    },
    {
      id: 11,
      img: "/images/treasurer.jpg",
      name: "Meghan Diya Mendonca",
      post: "Treasurer",
    },
    {
      id: 10,
      img: "/images/P.R.O.jpg",
      name: "Calvin Crasta",
      post: "P.R.O",
    },
    {
      id: 13,
      img: "/images/youcat_incharge.jpg",
      name: "Livia Syna Mendonca",
      post: "Youcat Incharge",
    },
    {
      id: 6,
      img: "/images/yuvagaaz_co_editor.jpeg",
      name: "Reshal Dsouza",
      post: "Yuvagaaz Co Editor",
    },

    {
      id: 5,
      img: "/images/caltural_liturgy_incharge.jpg",
      name: "Jeshma Dsouza",
      post: "Cultural & Liturgy Incharge",
    },
    {
      id: 6,
      img: "/images/caltural_liturgy_secretary.jpg",
      name: "Jiya Antonia Cutinho",
      post: "Cultural & Liturgy Secretary",
      place: "YCS / YSM Karnataka",
    },
    {
      id: 13,
      img: "/images/flavian.jpeg",
      name: "Flavian Mendonca",
      post: "EXCO Member",
      place: "YCS / YSM Karnataka Regional RT",
    },
    {
      id: 13,
      img: "/images/anson.jpeg",
      name: "Anson Nazareth",
      post: "YCS / YSM NATIONAL PRESIDENT",
    },
    {
      id: 7,
      img: "/images/kallianpur_deanery_president.jpg",
      name: "Ishney Fernandes",
      post: "Kallianpur Deanery President",
    },
    {
      id: 8,
      img: "/images/karkala_deanery_president.jpg",
      name: "Chris Ronak Dantis",
      post: "Karkal Deanery President",
    },
    {
      id: 9,
      img: "/images/kundapur_deanery_president.jpg",
      name: "Rayan Lobo",
      post: "Kundapur Deanery President",
    },
    {
      id: 12,
      img: "/images/udupi_deanery_president.jpg",
      name: "Glaren Rayan Dsouza",
      post: " Udupi Deanery President",
    },
    {
      id: 12,
      img: "/images/shirva_deanery_president.jpeg",
      name: "Sweedal Mendonca",
      post: "Shirva Deanery President",
    },
  ];

  let ysm_dexco = [
    {
      id: 9,
      img: "/images/ysm/sandra_lobo_animator.jpg",
      name: "Mrs.Sandra Lobo",
      post: "Animator",
    },
    {
      id: 1,
      img: "/images/ysm/saanvi_president.jpeg",
      name: "Ms.Saanvi",
      post: "President",
    },
    {
      id: 3,
      img: "/images/ysm/abhijith_vice_president.jpeg",
      name: "Mr.Abhijith",
      post: "Vice President",
    },
    {
      id: 4,
      img: "/images/ysm/yajna_vice_president.jpeg",
      name: "Ms.Yajna",
      post: "Vice President",
    },
    {
      id: 2,
      img: "/images/ysm/austin_nazareth_secretary.jpg",
      name: "Mr.Austin Nazareth",
      post: "Secretary",
    },
    {
      id: 8,
      img: "/images/ysm/vaishnavi_goonkar_joint_secreatry.jpeg",
      name: "Ms.Vaishnavi goonkar",
      post: "Joint Secretary",
    },
    {
      id: 6,
      img: "/images/ysm/ekta_treasurer.jpeg",
      name: "Ms.Ekta",
      post: "Treasurer",
    },
    {
      id: 5,
      img: "/images/ysm/adhvithi_pro.jpeg",
      name: "Ms.Adhvithi",
      post: "P.R.O",
    },
    {
      id: 7,
      img: "/images/ysm/praneetha_cultural_secretary.jpeg",
      name: "Ms.Praneetha",
      post: "Cultural Secretary",
    },
  ];

  interface item {
    id: number;
    img: string;
    name: string;
    post: string;
    place?: string;
  }

  const cardInfo = ({ item }: { item: item }) => {
    return (
      <Card
        sx={{
          minHeight: 330,
          height: "100%",
          mr: isMobile ? 0 : 2,
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
              <img
                src={item.img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Avatar>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={2}
          >
            <Typography fontWeight={600}>{item?.name}</Typography>
            <Typography
              mx={1}
              variant="body2"
              style={{ whiteSpace: "pre-wrap" }}
              textAlign={"center"}
            >
              {item?.post}
            </Typography>
            <Typography
              mx={1}
              variant="body2"
              style={{ whiteSpace: "pre-wrap" }}
              textAlign={"center"}
            >
              {item?.place}
            </Typography>
          </Box>
        </Box>
      </Card>
    );
  };

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    carouselsRef?.current?.goToSlide(0, false);
  }, [selectedTab]);

  function renderCompBasedOnTab() {
    switch (selectedTab) {
      case 0:
        return icym_dexco?.map((item: item, index) => cardInfo({ item: item }));
      case 1:
        return ycs_dexco?.map((item: item, index) => cardInfo({ item: item }));
      case 2:
        return ysm_dexco?.map((item: item, index) => cardInfo({ item: item }));
    }
  }

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
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Icym Dexco" />
          <Tab label="Ycs Dexco" />
          <Tab label="Ysm Dexco" />
        </Tabs>
      </Box>
      <Carousel
        ref={carouselsRef}
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
        // autoPlay
        afterChange={(previousSlide, { currentSlide }) => {
          setTabSlideIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[selectedTab] = currentSlide;
            return newIndexes;
          });
        }}
      >
        {renderCompBasedOnTab()}
      </Carousel>
    </Box>
  );
}
