import * as React from "react";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box,Skeleton } from "@mui/material";
import axios from "axios";
function PiechartsSite(sx) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading,setLoading] = React.useState(true);

  React.useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1500);
  });

  if (loading) {
      return (
          <Box flexShrink={1} width="100%" height="100%">
              <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
          </Box>
      );
  }
  const data = [
    { id: 0, label: 'Biali', value: 400, color: colors.blueAccent[600] }, // Corrected id, label typo
    { id: 1, label: 'Czarni', value: 300, color: colors.blueAccent[800] },
    { id: 2, label: 'Zołci', value: 300, color: colors.blueAccent[200] },
    { id: 3, label: 'Wybuchowi', value: 200, color: colors.blueAccent[400] },
  ];

  const series = {
    data: data.map(item => ({
        ...item,
        value: item.value * 2, 
      })),
      outerRadius: "90%",
      cx: '50%', 
      cy: '50%'
  }
  return (
    <Box flexShrink={1}
        width="100%"
        height="100%"

    >
        
    <PieChart
      series={[series]}
   
    />
    </Box>
  );
}

export default PiechartsSite;
