import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SECONDARY_THEME_COLOR } from "../../../providers/theme/colors/colors";
import { ArrowRightAlt } from "@mui/icons-material";

export default function DirectorMsg() {
  return (
    <Box my={3}>
      <Grid container spacing={4} mt={0}>
        <Grid item md={6} lg={6} sm={12}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant="h4" fontWeight={"600"}>
                Director's Message
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                My dear young friends, I greet you most warmly and thank you for
                being friends of Christ and his Church! You are the present and
                the future of the Church. The Church has great hopes in you,
                because you bring energy, vitality and dreams for tomorrow. Many
                of you with a thirst for the Word of God and desire for greater
                holiness of life are drawn to Charismatic Conventions, Retreats,
                Seminars and other events. Quite of few with zeal for the
                proclamation of the Word of God are effectively using the modern
                means of communication such as Internet. You aware that “Rooted
                and Built Up in Christ, and Firm in the Faith” (cf. Col 2:7),
                transformed by faith, you are called to transform the world.
                Sadly, how can young people encounter those reference points in
                a society which is increasingly confused and unstable? Youth of
                today are looking for something more noble, more lofty and
              </Typography>
            </Box>
            <Box
              display={"flex"}
              mt={1}
              borderBottom={`3px solid ${SECONDARY_THEME_COLOR}`}
              width={"fit-content"}
              ml={2}
            >
              <Typography variant="body2" fontWeight={"600"}>
                Read more
              </Typography>
              <ArrowRightAlt />
            </Box>
            <Box mt={3} ml={2}>
              <Typography fontWeight={"600"}>
                Director Steevan Fernandes
              </Typography>
              <Typography>Bishop of udupi and Chairman</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid display={"flex"} item md={6} lg={6} sm={12}>
          <Box
            display={"flex"}
            height="100%"
            width={"100%"}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <img
              src={"https://kryc.org/img/Steevan_Fernandes.jpeg"}
              alt=""
              height={500}
              style={{ borderRadius: 15 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
