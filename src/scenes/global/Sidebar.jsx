import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import SidebarList from "../../components/SidebarList";

export default function Sidebar() {
  const [collapsed] = useState(false);
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
            height: "100%",
          },
        }}
      >
        <SidebarList />
      </Drawer>
    </Box>
  );
}
