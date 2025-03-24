import {
  AppBar,
  Box,
  Button,
  Divider,
  Fade,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import arFlag from '../../../public/images/ar.png';
import enFlag from '../../../public/images/en.png';
import trFlag from '../../../public/images/tr.png';

export default function CustomAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [buttonWidth, setButtonWidth] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonWidth(event.currentTarget.offsetWidth);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const langOpen = Boolean(langAnchorEl);

  const handleLangClick = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangClose = () => {
    setLangAnchorEl(null);
  };

  const languages = [
    { code: 'tr', label: 'Tr', icon: trFlag },
    { code: 'ar', label: 'Ar', icon: arFlag },
    { code: 'en', label: 'En', icon: enFlag },
  ];

  const [selectedLang, setSelectedLang] = React.useState(languages[0]);

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    handleLangClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        p: '24px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'inherit',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#0061FF',
              borderRadius: '12px',
              height: '60px',
              textTransform: 'none',
              fontWeight: 500,
              px: 3,
              color: '#fff',
            }}
          >
            150 Kredi Mevcut
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            onClick={handleClick}
            sx={{
              display: 'flex',
              alignItems: 'center',

              px: 2,
              py: 1,
              gap: 1,
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/meetgate-logo.png"
                alt="Logo"
                style={{ width: '18px', height: '28px', marginRight: 2 }}
              />
            </Box>

            <Typography
              sx={{
                color: '#1f2937',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}
            >
              Kenan Sipahi
            </Typography>
            <ArrowDropDownIcon sx={{ color: '#6366F1', fontSize: '1.2rem' }} />
          </Box>

          <Box
            onClick={handleLangClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 0.5,
              py: 0.5,
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <img
              src={selectedLang.icon}
              alt="Language Icon"
              style={{ width: '20px', height: '20px' }}
            />
            <Typography
              sx={{
                color: '#1f2937',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}
            >
              {selectedLang.label}
            </Typography>
            <ArrowDropDownIcon sx={{ color: '#6366F1', fontSize: '1.2rem' }} />
          </Box>

          <Menu
            anchorEl={langAnchorEl}
            open={langOpen}
            onClose={handleLangClose}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: '12px',
                backgroundColor: '#F8FAFF',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                border: 'none',
                py: 1,
              },
            }}
          >
            {languages
              .filter((lang) => lang.code !== selectedLang.code)
              .map((lang) => (
                <MenuItem
                  key={lang.code}
                  onClick={() => handleLangSelect(lang)}
                >
                  <img
                    src={lang.icon}
                    alt="Language Icon"
                    style={{ width: '20px', height: '20px', marginRight: 8 }}
                  />
                  <Typography>{lang.label}</Typography>
                </MenuItem>
              ))}
          </Menu>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            PaperProps={{
              sx: {
                width: buttonWidth,
                mt: '-2px',
                borderRadius: '0 0 12px 12px',
                backgroundColor: '#F8FAFF',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                border: 'none',
                '& .MuiSvgIcon-root': {
                  color: '#1f2937',
                },
                '& .MuiMenuItem-root': {
                  fontSize: '0.88rem',
                  color: '#1f2937',
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountCircleOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Hesabıma Git" />
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Ayarlar" />
            </MenuItem>

            <Divider sx={{ my: 0.5 }} />

            <Typography
              variant="subtitle2"
              sx={{
                px: 2,
                py: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                color: '#1f2937',
                opacity: 0.6,
              }}
            >
              Diğer Hesaplar
            </Typography>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <BusinessIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Koç Holding" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <BusinessIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Koç Holding" />
            </MenuItem>

            <Divider sx={{ my: 0.5 }} />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Hesap Ekle" />
            </MenuItem>

            <MenuItem
              onClick={handleClose}
              sx={{
                '&&': {
                  color: '#F43F5E',
                },
                '&& .MuiSvgIcon-root': {
                  color: '#F43F5E',
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Çıkış Yap" />
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
