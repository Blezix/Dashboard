import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Sidebar(sx) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);

  const list = () => (
    <Box
      sx={{
        width: collapsed ? 60 : 250,
        backgroundColor: colors.primary[400],
        color: colors.grey[100],
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s",
        ...sx,
      }}
    >
      <List>
        {collapsed ? (
          // Begin collapsed content
          <>
            <Box>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height:"40px"
                }}
                onClick={() => setCollapsed(!collapsed)}
              >
                <MenuOutlinedIcon />
              </ListItem>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItem>
            </Box>
          </>
          // End collapsed content
        ) : (
          // Begin not collapsed content
          <>
            <Box>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height:"40px"

                }}
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <MenuOutlinedIcon />
                ) : (
                  <>
                    <Typography variant="h3" color={colors.grey[100]}>
                      ADMINIS
                    </Typography>
                    <MenuOutlinedIcon />
                  </>
                )}
              </ListItem>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignContent: "center"
              }}
            >
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                key="menu"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Box>
          </>
          // End not collapsed content
        )}
      </List>
    </Box>
  );

  return (
    <Box>
      <Drawer
        variant="permanent"
        anchor="left"
        open={!collapsed}
        transitionDuration={200}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: "0",
            position: "relative",
            height: "100vh",
          },
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
}

export default Sidebar;