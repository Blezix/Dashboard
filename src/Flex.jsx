import React from "react";
import { Box } from "@mui/material";

function Flex({ children, height, width }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: height,
        width: width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default Flex;
