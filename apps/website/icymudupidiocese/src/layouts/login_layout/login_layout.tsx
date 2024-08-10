import { useTheme } from "@emotion/react";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function LoginLayout({ children }: PropsWithChildren) {
  const theme = useTheme();
  let images = [
    {
      id: 1,
      img: "/images/banner_one.jpg",
    },
  ];
  return (
    <Box display="flex" flexDirection="row" width={"100%"} height="100vh">
      <Grid
        container
        display="flex"
        flexDirection="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12} mb={1} width="100%">
          <Box display="flex" flexDirection={"column"} mx={2}>
            <Box
              display="flex"
              mt={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <img
                src="/images/icons/icym_icon.jpg"
                alt=""
                height={150}
                width={150}
              />
            </Box>
            <Box
              display="flex"
              mt={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography variant="body1" color="#637381">
                Youth Commission Udupi
              </Typography>
            </Box>

            {children}
          </Box>
        </Grid>

        <Grid item lg={6} md={6}>
          {images.map((image) => {
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
                      width: "80vh",
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
        </Grid>
      </Grid>
    </Box>
  );
}
