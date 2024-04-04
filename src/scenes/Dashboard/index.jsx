import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import Workers from "../Workers";
import PiechartsSite from "../PieChart";
import BarChartSite from "../BarChart";
function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      p="20px"
      display="flex"
      sx={{
        flex: 1,
        width: "100%",
        height: "90%",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.down('md')]: {
            flex: "1 1 100%",

          },
          [theme.breakpoints.up('md')]: {
            flex: "1 1 40%",
          },
          height: "40%",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{ flex: "1 1 45%", borderRadius: "15px" }}
          bgcolor={colors.grey[200]}
        ></Box>
        <Box
          sx={{ flex: "1 1 45%", borderRadius: "15px" }}
          bgcolor={colors.grey[200]}
        ></Box>
        <Box
          sx={{ flex: "1 1 45%", borderRadius: "15px" }}
          bgcolor={colors.grey[200]}
        ></Box>
        <Box
          sx={{ flex: "1 1 45%", borderRadius: "15px" }}
          bgcolor={colors.grey[200]}
        ></Box>
      </Box>

      <Box
        sx={{
          [theme.breakpoints.down('md')]: {
            flex: "1 100%",

          },
          [theme.breakpoints.up('md')]: {
            flex: "1 55%",
          },
          height: "40%",
          display: "flex",
          borderRadius: "15px",
          gap: "10px",
          flexWrap: "wrap",
          flexDirection: "row",
          borderRadius: "10px", // Example border radius
          border: `1px solid`, 
          borderColor: colors.grey[600]
        }}
      >
        <BarChartSite></BarChartSite>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.down('md')]: {
            flex: "1 100%",

          },
          [theme.breakpoints.up('md')]: {
            flex: "1 45%",
          },
          height: "50%",
          display: "flex",
          minWidth:"20%",
          borderRadius: "15px",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Workers></Workers>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.down('md')]: {
            flex: "1 100%",

          },
          [theme.breakpoints.up('md')]: {
            flex: "1 30%",
          },
          height: "50%",
          display: "flex",
          borderRadius: "15px",
          gap: "10px",
          flexWrap: "wrap",
          flexDirection: "row",
          borderRadius: "10px", // Example border radius
          border: `1px solid`, 
          borderColor: colors.grey[600]
        }}
      >
        <PiechartsSite></PiechartsSite>
      </Box>
    </Box>
  );
}

export default Dashboard;
