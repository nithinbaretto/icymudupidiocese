import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar();

export default function TopLoader() {
  const location = useLocation();

  useEffect(() => {
    progress.start(); // Start the progress bar
    setTimeout(() => {
      progress.finish();
    }, 2000);
  }, [location]);
  return null;
}
