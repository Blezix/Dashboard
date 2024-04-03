import * as React from "react";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import axios from "axios";
function PiechartsSite(sx) {
  const [rows, setRows] = useState([]);
  const pieParams = { height: 200, margin: { right: 5 } };
  const palette = ['red', 'blue', 'green'];
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = [
    { id: 0, label: 'Biali', value: 400, color: colors.blueAccent[600] }, // Corrected id, label typo
    { id: 1, label: 'Czarni', value: 300, color: colors.blueAccent[800] },
    { id: 2, label: 'Zołci', value: 300, color: colors.blueAccent[200] },
    { id: 3, label: 'Wybuchowi', value: 200, color: colors.greenAccent[400] },
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
