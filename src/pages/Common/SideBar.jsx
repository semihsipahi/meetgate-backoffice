import {
  ChevronLeft as ChevronLeftIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import BotIcon from '../../../src/assets/Icons/bot.svg';
import Company from '../../../src/assets/Icons/company.svg';
import CyberSecurity from '../../../src/assets/Icons/cyber-security.svg';
import Meeting from '../../../src/assets/Icons/meeting.svg';
import People from '../../../src/assets/Icons/people.svg';
import Question from '../../../src/assets/Icons/question.svg';

const sidebarItems = [
  {
    label: 'Görüşmeler',
    key: 'gorusmeler',
    icon: (
      <img
        src={Meeting}
        alt="Meeting"
        style={{ width: '30px', height: '30px' }}
      />
    ),
    subItems: ['Tüm Görüşmeler', 'Görüşme Oluştur', 'Hazır Görüşmeler'],
  },
  {
    label: 'Görüşme Soruları',
    key: 'gorusmeSorulari',
    icon: (
      <img
        src={Question}
        alt="Question Icon"
        style={{ width: '30px', height: '30px' }}
      />
    ),
    subItems: ['Soru Setleri', 'Sorular'],
  },
  {
    label: 'CV Sihirbazı',
    key: 'cvSihirbazi',
    icon: (
      <img
        src={People}
        alt="People"
        style={{ width: '30px', height: '30px' }}
      />
    ),
    subItems: ['Kriter Setleri', 'Davet Edilen Adaylar'],
  },
  {
    label: 'ChatBots',
    key: 'chatbots',
    icon: (
      <img
        src={BotIcon}
        alt="Bot Icon"
        style={{ width: '30px', height: '30px' }}
      />
    ),
    subItems: ['Chat Bot Listesi', 'Chat Bot Ekle'],
  },
  {
    label: 'Firma Bilgileri',
    key: 'firmaBilgileri',
    icon: (
      <img
        src={Company}
        alt="Company"
        style={{ width: '30px', height: '30px' }}
      />
    ),
    subItems: ['Tüm Firmalar', 'Tüm Kullanıcılar'],
  },
  {
    label: 'Hesap Bilgileri',
    key: 'hesapBilgileri',
    icon: (
      <img
        src={CyberSecurity}
        alt="Cyber Security"
        style={{ width: '30px', height: '30px' }}
      />
    ),
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

  const getIconFilter = (isActive) =>
    drawerOpen && isActive ? 'brightness(0) invert(1)' : 'none';

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerOpen ? 260 : 70,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerOpen ? 280 : 70,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          backgroundColor: '#F8FAFF',
          borderRight: '1px solid #e0e0e0',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: drawerOpen ? 'space-between' : 'center',
          p: 4,
        }}
      >
        {drawerOpen && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/meetgate-logo.png"
              alt="Logo"
              style={{ width: '24px', height: '36px', marginRight: 10 }}
            />
            <Typography variant="h4" noWrap>
              Meetgate
            </Typography>
          </Box>
        )}
        <IconButton onClick={handleDrawerToggle}>
          {drawerOpen ? (
            <ChevronLeftIcon />
          ) : (
            <img
              src="/images/meetgate-logo.png"
              alt="Logo"
              style={{ width: '24px', height: '36px' }}
            />
          )}
        </IconButton>
      </Box>
      <Divider sx={{ width: drawerOpen ? '90%' : '80%', mx: 'auto' }} />
      <List sx={{ px: 1, mt: 2 }}>
        {sidebarItems.map((item) => {
          const isActive = openMenu === item.key;
          const backgroundColor = drawerOpen
            ? isActive
              ? '#0061FF'
              : '#ECEEF5'
            : 'transparent';
          const textColor = drawerOpen ? (isActive ? '#FFF' : '#000') : '#000';
          const isOpen = openMenu === item.key;

          return (
            <Box key={item.key} sx={{ mb: 2, mx: 1 }}>
              <Box
                onClick={() => handleMenuClick(item.key)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: drawerOpen ? 'flex-start' : 'center',
                  cursor: 'pointer',
                  borderRadius: drawerOpen ? '12px' : '0px',
                  backgroundColor,
                  color: textColor,
                  height: 70,
                  px: drawerOpen ? 2 : 0,
                  py: drawerOpen ? 2 : 0,
                  '&:hover': {
                    backgroundColor: drawerOpen
                      ? isActive
                        ? '#0061FF'
                        : 'rgba(0, 97, 255, 0.1)'
                      : 'transparent',
                  },
                  transition: 'background-color 0.2s ease',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 1 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                  }}
                >
                  {React.cloneElement(item.icon, {
                    style: {
                      ...item.icon.props.style,
                      filter: getIconFilter(isActive),
                    },
                  })}
                </ListItemIcon>
                {drawerOpen && (
                  <ListItemText
                    primary={item.label}
                    sx={{
                      whiteSpace: 'nowrap',
                      fontWeight: 500,
                      fontSize: '1rem',
                    }}
                  />
                )}
                {drawerOpen &&
                  (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </Box>
              {drawerOpen && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <Box
                    component="ul"
                    sx={{
                      textAlign: 'center',
                      listStyleType: 'none',
                      m: 0,
                      p: 0,
                    }}
                  >
                    {item.subItems.map((subItem) => (
                      <Box
                        component="li"
                        key={subItem}
                        sx={{
                          fontSize: '0.90rem',
                          color: '#6B7280',
                          cursor: 'pointer',
                          mt: '8px',
                          p: '8px',
                          '&:hover': { color: '#0061FF' },
                        }}
                      >
                        {subItem}
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>

      <Box sx={{ pt: 12, display: 'flex', justifyContent: 'center' }}>
        <Box
          component="button"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: drawerOpen ? 'flex-start' : 'center',
            whiteSpace: 'nowrap',
            backgroundColor: '#25d366',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: drawerOpen ? '0.8rem 1rem' : 0,
            width: 'auto',
            height: drawerOpen ? '60px' : 50,
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.85rem',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#1ebe5c',
            },
          }}
        >
          <WhatsAppIcon
            sx={{
              mr: drawerOpen ? 1 : 0,
              fontSize: drawerOpen ? '1.5rem' : '2rem',
            }}
          />
          {drawerOpen && 'Whatsapp Destek'}
        </Box>
      </Box>
    </Drawer>
  );
}
