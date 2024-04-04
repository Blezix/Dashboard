import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider,Skeleton } from "@mui/material";
import { useState, useMemo, createContext } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard/index";
import RandomForm from "./scenes/RandomUserForm/index";
import Workers from "./scenes/Workers";
import PiechartsSite from "./scenes/PieChart";
import BarChartSite from "./scenes/BarChart";
/*import Team from './scenes/Team';
import Invoices from './scenes/Invoices';
import Contacts from './scenes/Contacts';
import Bar from './scenes/Bar';
import Form from './scenes/Form';
import Line from './scenes/Line';
import Pie from './scenes/Pie';
import FAQ from './scenes/FAQ';
import Geography from './scenes/Geography';
import Calendar from './scenes/calendar';
  */
import "./App.css";
import { Work } from "@mui/icons-material";

function App() {
  const [theme, colorMode] = useMode();
  const [loading,setLoading] = React.useState(true);

      React.useEffect(() => {
          setTimeout(() => {
              setLoading(false);
          }, 1500);
      });

      if (loading) {
          return (
              <Box flexShrink={1} width="100%" height="100%" >
                  <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
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
            <Router>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<RandomForm />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/piechart" element={<PiechartsSite/>}/>
                <Route path="/barchart" element={<BarChartSite/>}/>
                {/* Other routes */}
              </Routes>
            </Router>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
