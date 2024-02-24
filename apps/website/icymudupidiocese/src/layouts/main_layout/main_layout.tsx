import { Box, Divider, Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";
import BaseLayout from "../base/base_layout";
import Navbar from "../../components/navbar/navbar";
import { MAIN_THEME_COLOR } from "../../providers/theme/colors/colors";
import Footer from "../../components/footer/footer";
import Breadcrumb from "../../components/breadcrumbs/breadcrubm";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <BaseLayout>
      <Grid container>
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 9999,
            height: 90,
            backgroundColor: "#ffffff",
          }}
          borderBottom={`1px solid ${MAIN_THEME_COLOR}`}
        >
          <Grid md={1} lg={1} />
          <Grid item md={10} lg={10} sm={12}>
            <Navbar />
          </Grid>
          <Grid md={1} lg={1} />
        </Box>
        <Grid md={1} lg={1} />
        <Grid item md={10} lg={10} sm={12} mt={12}>
          <Breadcrumb />
          {children}
        </Grid>
        <Grid md={1} lg={1} />
        <Grid item md={12} lg={12} sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </BaseLayout>
  );
}
