import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tokens } from "../theme";
import { ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";

export default function SidebarItem({ items, collapsed }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return items.map((item) => (
    <Link
      to={item.path}
      style={{ textDecoration: "none", color: colors.grey[200] }}
    >
      <ListItem
        key={item.path}
        button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItemIcon
          sx={{ justifyContent: collapsed ? "center" : "space-between" }}
        >
          {item.icon}
        </ListItemIcon>
        {!collapsed && <ListItemText primary={item.text} />}
      </ListItem>
    </Link>
  ));
}
