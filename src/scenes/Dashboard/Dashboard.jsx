import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import Workers from "../Workers/Workers";
import PiechartsSite from "../PieChart/Piechart";
import BarChartSite from "../BarChart/Barchart";
import DataCard from "../../components/DataCard";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
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
          [theme.breakpoints.down("md")]: {
            flex: "1 1 90%",
            height: "30%",
          },
          [theme.breakpoints.up("md")]: {
            flex: "1 1 40%",
            height: "35%",
          },
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <DataCard
          sx={{ flex: "1 1 45%", height: "50%", borderRadius: "7px" }}
          title={t("Visitors")}
          data={Math.floor(Math.random() * 10000)}
          CardColor={colors.blueAccent[200]}
        />
        <DataCard
          sx={{ flex: "1 1 45%", height: "50%", borderRadius: "7px" }}
          title={t("Visitors")}
          data={Math.floor(Math.random() * 10000)}
          CardColor={colors.blueAccent[400]}
        />
        <DataCard
          sx={{ flex: "1 1 45%", height: "50%", borderRadius: "7px" }}
          title={t("Visitors")}
          data={Math.floor(Math.random() * 10000)}
          CardColor={colors.blueAccent[600]}
        />
        <DataCard
          sx={{ flex: "1 1 45%", height: "50%", borderRadius: "7px" }}
          title={t("Visitors")}
          data={Math.floor(Math.random() * 10000)}
          CardColor={colors.blueAccent[500]}
        />
      </Box>

      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            flex: "1 100%",
          },
          [theme.breakpoints.up("md")]: {
            flex: "1 55%",
          },
          height: "40%",
          display: "flex",
          borderRadius: "15px",
          gap: "10px",
          flexWrap: "wrap",
          flexDirection: "row",
          borderRadius: "10px",
          border: `1px solid`,
          borderColor: colors.grey[600],
        }}
      >
        <BarChartSite></BarChartSite>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            flex: "1 100%",
          },
          [theme.breakpoints.up("md")]: {
            flex: "1 45%",
          },
          height: "50%",
          display: "flex",
          minWidth: "20%",
          borderRadius: "15px",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Workers />
      </Box>
      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            flex: "1 100%",
          },
          [theme.breakpoints.up("md")]: {
            flex: "1 30%",
          },
          height: "50%",
          display: "flex",
          borderRadius: "15px",
          gap: "10px",
          flexWrap: "wrap",
          flexDirection: "row",
          borderRadius: "10px",
          border: `1px solid`,
          borderColor: colors.grey[600],
        }}
      >
        <PiechartsSite />
      </Box>
    </Box>
  );
}

