import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
import { useTranslation } from "react-i18next";
import { tokens } from "../theme";
import SidebarItem from "./SidebarItem";
export default function SidebarList(sx) {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [user, SetUser] = useState({
    name: "Samatha",
    image: "../../assets/picture.png",
    role: "Admin",
  });

  const menuItems = [
    { icon: <HomeOutlinedIcon />, text: t("Dashboard"), path: "/" },
  ];

  const dataItems = [
    { icon: <PeopleOutlinedIcon />, text: t("Workers"), path: "/workers" },
    { icon: <ContactsOutlinedIcon />, text: t("ApiForm"), path: "/apiForm" },
    { icon: <ReceiptOutlinedIcon />, text: t("Form"), path: "/form" },
  ];

  const pagesItems = [
    { icon: <PersonOutlinedIcon />, text: t("Profile"), path: "/profile" },
    {
      icon: <CalendarTodayOutlinedIcon />,
      text: t("Calendar"),
      path: "/calendar",
    },
    { icon: <HelpOutlineOutlinedIcon />, text: t("Help"), path: "/help" },
  ];
  const chartsItems = [
    { icon: <BarChartOutlinedIcon />, text: t("Barchart"), path: "/barchart" },
    {
      icon: <PieChartOutlineOutlinedIcon />,
      text: t("Piechart"),
      path: "/piechart",
    },
    { icon: <TimelineOutlinedIcon />, text: t("Timeline"), path: "/timeline" },
  ];

  
  return (
    <Box
      sx={{
        width: collapsed ? 60 : 250,
        backgroundColor: colors.primary[400],
        color: colors.grey[100],
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s",
        overflowY: "auto",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
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
          <Typography
            variant="body1"
            sx={{ textAlign: "start", m: "10px", color: colors.grey[200] }}
          >
            {t("Menu")}
          </Typography>
          <SidebarItem items={menuItems} collapsed={collapsed}/>
          <Typography
            variant="body1"
            sx={{ textAlign: "start", m: "10px", color: colors.grey[200] }}
          >
            {t("Data")}
          </Typography>
          <SidebarItem items={dataItems} collapsed={collapsed}/>
          <Typography
            variant="body1"
            sx={{ textAlign: "start", m: "10px", color: colors.grey[200] }}
          >
            {t("Pages")}
          </Typography>
          <SidebarItem items={pagesItems} collapsed={collapsed}/>

          <Typography
            variant="body1"
            sx={{ textAlign: "start", m: "10px", color: colors.grey[200] }}
          >
            {t("Charts")}
          </Typography>
          <SidebarItem items={chartsItems} collapsed={collapsed}/>
        </Box>
      </List>
    </Box>
  );
}
