import { Divider, Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";
import BaseLayout from "../base/base_layout";
import Navbar from "../../components/navbar/navbar";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <BaseLayout>
      <Grid container justifyContent={"center"}>
        <Grid item md={10} lg={10} sm={12}>
          <Navbar />
        </Grid>
        <Grid item md={12} lg={12} sm={12}>
          <Divider sx={{ mt: 2 }} />
        </Grid>

        <Grid item md={10} lg={10} sm={12}>
          {children}
        </Grid>
        <Grid item md={10} lg={10} sm={12}>
          {/* <Typography>Footer</Typography> */}
        </Grid>
      </Grid>
    </BaseLayout>
  );
}
