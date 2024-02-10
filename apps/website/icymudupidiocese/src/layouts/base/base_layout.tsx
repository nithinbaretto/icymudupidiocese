import { Box, CssBaseline } from "@mui/material";
import React, { PropsWithChildren } from "react";
import TopLoader from "../../components/top_loader/top_loader";

interface BaseLayoutProps {}

export default function BaseLayout({
  children,
}: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Box>
      <CssBaseline />
      <TopLoader />
      {children}
    </Box>
  );
}
