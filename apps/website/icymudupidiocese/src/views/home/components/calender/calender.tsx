import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SECONDARY_THEME_COLOR } from "../../../../providers/theme/colors/colors";
import { ArrowRightAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Calender() {
  const navigate = useNavigate();
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
                Reserve an Event
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                Welcome to the Reserve an Event section! This feature is
                designed to help you seamlessly book and manage dates for
                upcoming parish, deanery, and diocese-level events. By reserving
                your event dates here, you ensure that no other events will
                clash with your scheduled programs. This calendar is an
                essential tool to promote better coordination and planning
                across all youth activities in our community.
              </Typography>
              {/* <Typography mt={2} fontWeight={600}>
                How It Works:
              </Typography>
              <Box display={"flex"} mt={1} flexDirection={"row"}>
                <Typography fontWeight={600}>Select a Date:</Typography>
                <Typography ml={1}>
                  Browse the calendar and choose an available date for your
                  event.
                </Typography>
              </Box>
              <Box display={"flex"} mt={1} flexDirection={"row"}>
                <Typography fontWeight={600}>Book Your Slot :</Typography>
                <Typography ml={1}>
                  Reserve the date by providing the necessary event details.
                </Typography>
              </Box>
              <Box display={"flex"} mt={1} flexDirection={"row"}>
                <Typography fontWeight={600}>Avoid Conflicts :</Typography>
                <Typography ml={1}>
                  Once a date is booked, it will be blocked, preventing others
                  from scheduling events on the same day. This system fosters
                  better communication and organization, ensuring that every
                  event gets the attention and participation it deserves. Start
                  planning and reserve your event today!
                </Typography>
              </Box> */}
            </Box>
            <Box
              display={"flex"}
              mt={1}
              borderBottom={`3px solid ${SECONDARY_THEME_COLOR}`}
              width={"fit-content"}
              onClick={() =>
                window.open(
                  "https://eventbb.bookbetter.app/getCalendar/66ac820589dbe9e46d1afb74",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              sx={{ cursor: "pointer" }}
              ml={2}
            >
              <Typography variant="body2" fontWeight={"600"}>
                Click here to Reserve an Event
              </Typography>
              <ArrowRightAlt />
            </Box>
          </Box>
        </Grid>
        <Grid display={"flex"} item md={6} lg={6} sm={12} xs={12}>
          <Box
            display={"flex"}
            height="100%"
            width={"100%"}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Box
              component="img"
              src="/images/icons/booking.png"
              alt=""
              sx={{
                borderRadius: 2,
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: { xs: "auto", sm: "auto", md: "auto", lg: "100%" },
                maxHeight: { xs: "none", md: "100%" },
                maxWidth: { xs: "none", md: "100%" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Calender;
