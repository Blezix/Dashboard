import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider, Skeleton } from "@mui/material";
import { useState, useMemo, createContext } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard/Dashboard";
import ApiForm from "./scenes/ApiForm/ApiForm";
import Workers from "./scenes/Workers/Workers";
import PiechartsSite from "./scenes/PieChart/Piechart";
import BarChartSite from "./scenes/BarChart/Barchart";
import MyFrom from "./scenes/Form/Form";

import "./App.css";

function App() {
  const [theme, colorMode] = useMode();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
      <Box flexShrink={1} width="100%" height="100%">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          className="App"
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Router>
            <Sidebar />

            <Box
              className="content"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ApiForm" element={<ApiForm />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/piechart" element={<PiechartsSite />} />
                <Route path="/form" element={<MyFrom />} />
                <Route path="/barchart" element={<BarChartSite />} />
              </Routes>
            </Box>
          </Router>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
