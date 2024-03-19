import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useMemo, createContext } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard/index";
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

function App() {
  const [theme, colorMode] = useMode();
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
