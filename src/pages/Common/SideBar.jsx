import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';

const sidebarItems = [
  {
    label: 'Görüşmeler',
    key: 'gorusmeler',
    icon: <WorkspacesOutlinedIcon />,
    subItems: ['Tüm Görüşmeler', 'Görüşme Oluştur', 'Hazır Görüşmeler'],
  },
  {
    label: 'Görüşme Soruları',
    key: 'gorusmeSorulari',
    icon: <HelpCenterOutlinedIcon />,
    subItems: ['Soru Setleri', 'Sorular'],
  },
  {
    label: 'CV Sihirbazı',
    key: 'cvSihirbazi',
    icon: <ArticleOutlinedIcon />,
    subItems: ['Kriter Setleri', 'Davet Edilen Adaylar'],
  },
  {
    label: 'ChatBots',
    key: 'chatbots',
    icon: <SmartToyOutlinedIcon />,
    subItems: ['Chat Bot Listesi', 'Chat Bot Ekle'],
  },
  {
    label: 'Firma Bilgileri',
    key: 'firmaBilgileri',
    icon: <CorporateFareOutlinedIcon />,
    subItems: ['Tüm Firmalar', 'Tüm Kullanıcılar'],
  },
  {
    label: 'Hesap Bilgileri',
    key: 'hesapBilgileri',
    icon: <AccountCircleOutlinedIcon />,
    subItems: ['Hesap Ayarları', 'Şifre Değiştir'],
  },
];

export default function SideBar() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState('');

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleMenuClick = (menuKey) => {
    setOpenMenu((prev) => (prev === menuKey ? '' : menuKey));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerOpen ? 260 : 70,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerOpen ? 260 : 70,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: drawerOpen ? 'space-between' : 'center',
          p: 2,
        }}
      >
        {drawerOpen && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/meetgate-logo.png"
              alt="Logo"
              style={{ width: '24px', height: '36px', marginRight: 10 }}
            />
            <Typography variant="h6">Meetgate</Typography>
          </Box>
        )}
        <IconButton onClick={handleDrawerToggle}>
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {sidebarItems.map((item) => {
          const isOpen = openMenu === item.key;
          return (
            <Box key={item.key}>
              <ListItemButton
                sx={{
                  height: 60,
                  justifyContent: drawerOpen ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => handleMenuClick(item.key)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {drawerOpen && <ListItemText primary={item.label} />}
                {drawerOpen &&
                  (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </ListItemButton>
              {drawerOpen && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                    {item.subItems.map((subItem) => (
                      <ListItemButton key={subItem}>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
      <Divider />

      <List>
        <ListItemButton
          sx={{ justifyContent: drawerOpen ? 'initial' : 'center' }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: drawerOpen ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <WhatsAppIcon />
          </ListItemIcon>
          {drawerOpen && <ListItemText primary="Whatsapp Destek" />}
        </ListItemButton>
      </List>
    </Drawer>
  );
}
