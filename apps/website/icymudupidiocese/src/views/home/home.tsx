import React from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import HeroSection from "./components/hero_section/hero_section";
import AboutUs from "./components/about_us/about_us";
import TrendingNews from "./components/trending_news/trending_news";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutUs />
      <TrendingNews />
    </MainLayout>
  );
}
