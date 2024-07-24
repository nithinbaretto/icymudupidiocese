import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {}

function ComingSoon(props: Props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mb={4}
    >
      <img src="/images/coming_soon.svg" alt="" height={300} width={300} />
      <Box>
        <Typography variant="h4" fontWeight={500}>
          Coming Soon...
        </Typography>
      </Box>
    </Box>
  );
}

export default ComingSoon;
