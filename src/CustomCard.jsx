import React from "react";
import { Box, Paper } from "@mui/material";
function CustomCard({ children, height, backgroundColor, minWidth, sx }) {
  return (
    <Box
      elevation={0}
      sx={{
        minWidth: minWidth,
        backgroundColor: backgroundColor,
        height: height,
        ...sx,
      }}
      borderRadius="15px"
      Flex="1"
    >
      {children}
    </Box>
  );
}

export default CustomCard;
