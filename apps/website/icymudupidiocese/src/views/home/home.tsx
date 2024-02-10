import { Grid, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import HeroSection from "./components/hero_section/hero_section";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
    </MainLayout>
  );
}
