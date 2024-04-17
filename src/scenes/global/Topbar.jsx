import { useState, useContext } from "react";
import {
  Box,
  IconButton,
  useTheme,
  InputBase,
} from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from 'react-i18next';
export default function Topbar(width, sx) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  



  return (
    <Box
      width={width}
      sx={{ ...sx }}
      display="flex"
      justifyContent="space-between"
      p={2}
    >
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
      <IconButton type="button"
        sx={{fontWeight:"300", color: colors.grey[200]  }}
        onClick={() => {
          if(i18n.language === 'en') {
            i18n.changeLanguage('pl');
            setLanguage('pl');
          } else {
            i18n.changeLanguage('en');
            setLanguage('en');
            
        }
        console.log(i18n.language)
      } 
        }>
          {t('Language')}
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton
          type="button"
          onClick={colorMode.toggleColorMode}
          sx={{ p: 1 }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
      </Box>
    </Box>
  );
}

