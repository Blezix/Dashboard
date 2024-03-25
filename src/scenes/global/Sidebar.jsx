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
  const [user,SetUser] = useState({
    name: "Samatha",
    image: "../../assets/picture.png",
    role: "Admin",
  });

  const menuItems = [
    { icon: <HomeOutlinedIcon />, text: "Dashboard", path: "/dashboard" },
  ];

  const dataItems = [
    { icon: <PeopleOutlinedIcon />, text: "People", path: "/people" },
    { icon: <ContactsOutlinedIcon />, text: "Contacts", path: "/contacts" },
    { icon: <ReceiptOutlinedIcon />, text: "Receipts", path: "/receipts" },
  ];
  const PagesItems = [
    { icon: <PersonOutlinedIcon />, text: "Profile", path: "/profile" },
    {
      icon: <CalendarTodayOutlinedIcon />,
      text: "Calendar",
      path: "/calendar",
    },
    { icon: <HelpOutlineOutlinedIcon />, text: "Help", path: "/help" },
  ];
  const ChartsItems = [
    { icon: <BarChartOutlinedIcon />, text: "Bar Chart", path: "/bar-chart" },
    {
      icon: <PieChartOutlineOutlinedIcon />,
      text: "Pie Chart",
      path: "/pie-chart",
    },
    { icon: <TimelineOutlinedIcon />, text: "Timeline", path: "/timeline" },
  ];
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
        <Box>
          <ListItem
            button
            key="home"
            sx={{
              display: "flex",
              justifyContent: collapsed ? "center" : "space-between",
              height: "40px",
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
        {!collapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="User-Profile-picture"
                width="100px"
                height="100px"
                src={user.image}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                {user.name}
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                {user.role}
              </Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          {menuItems.map((item, index) => (
            //    <Link to={item.path} key={index}>
            <ListItem
              key="menu"
              button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: collapsed ? "center" : "space-between",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
            //   </Link>
          ))}
          <Typography
            variant="body1"
            color={colors.grey[200]}
            sx={{
              textAlign: "start",
              m: "10px",
            }}
          >
            {collapsed ? "" : "Data"}
          </Typography>
          {dataItems.map((item, index) => (
            //    <Link to={item.path} key={index}>
            <ListItem
              key="data"
              button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: collapsed ? "center" : "space-between",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
            //    </Link>
          ))}
          <Typography
            variant="body1"
            color={colors.grey[200]}
            sx={{
              textAlign: "start",
              m: "10px",
            }}
          >
            {collapsed ? "" : "Pages"}
          </Typography>
          {PagesItems.map((item, index) => (
            //    <Link to={item.path} key={index}>
            <ListItem
              key="pages"
              button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: collapsed ? "center" : "space-between",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
            //    </Link>
          ))}
          <Typography
            variant="body1"
            color={colors.grey[200]}
            sx={{
              textAlign: "start",
              m: "10px",
            }}
          >
            {collapsed ? "" : "Charts"}
          </Typography>
          {ChartsItems.map((item, index) => (
            //    <Link to={item.path} key={index}>
            <ListItem
              key="charts"
              button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: collapsed ? "center" : "space-between",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
            //    </Link>
          ))}
        </Box>
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
