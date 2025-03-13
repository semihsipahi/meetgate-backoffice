import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import React, { useEffect, useState } from 'react';
import arFlag from '../../assets/ar.png';
import enFlag from '../../assets/en.png';
import kocLogo from '../../assets/koc.jpg';
import trFlag from '../../assets/tr.png';
import './AppBar.css';

function LanguageMenu() {
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'Tr',
    flag: trFlag,
  });
  const languages = [
    { code: 'En', flag: enFlag },
    { code: 'Ar', flag: arFlag },
    { code: 'Tr', flag: trFlag },
  ];
  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };
  const availableLanguages = languages.filter(
    (lang) => lang.code !== selectedLanguage.code
  );
  return (
    <div className="language-menu">
      <div className="language-container">
        <LanguageOutlinedIcon className="language-icon" />
        <span className="language-text">{selectedLanguage.code}</span>
        <KeyboardArrowDownOutlinedIcon className="language-arrow" />
      </div>
      <div className="language-dropdown">
        {availableLanguages.map((lang) => (
          <div
            key={lang.code}
            className="language-item"
            onClick={() => handleLanguageSelect(lang)}
          >
            <img
              src={lang.flag}
              alt={`${lang.code} Flag`}
              className="flag-icon"
            />
            <span className="language-text">{lang.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileMenu() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div
      className="profile-menu"
      onMouseEnter={() => setOpenProfile(true)}
      onMouseLeave={() => setOpenProfile(false)}
    >
      <div className="profile-container">
        <div className="avatar-circle">
          <PersonOutlineOutlinedIcon className="avatar-icon" />
        </div>
        <span className="profile-name">Kenan Sipahi</span>
        <KeyboardArrowDownOutlinedIcon
          className="arrow-icon"
          style={{ transform: openProfile ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      <div
        className="profile-dropdown"
        style={{
          transform: openProfile ? 'scaleY(1)' : 'scaleY(0)',
          opacity: openProfile ? 1 : 0,
          pointerEvents: openProfile ? 'auto' : 'none',
        }}
      >
        <div className="dropdown-item">
          <AccountCircleOutlinedIcon className="dropdown-item-icon" />
          <span>Hesabıma Git</span>
        </div>
        <div className="dropdown-item">
          <SettingsOutlinedIcon className="dropdown-item-icon" />
          <span>Ayarlar</span>
        </div>
        <div className="dropdown-separator"></div>
        <span className="dropdown-title">Diğer Hesaplar</span>
        <div className="dropdown-item">
          <img src={kocLogo} alt="Koç Holding" className="account-logo" />
          <span>Koç Holding</span>
        </div>
        <div className="dropdown-item">
          <img src={kocLogo} alt="Koç Holding" className="account-logo" />
          <span>Koç Holding</span>
        </div>
        <div className="dropdown-item">
          <img src={kocLogo} alt="Koç Holding" className="account-logo" />
          <span>Koç Holding</span>
        </div>
        <div className="dropdown-separator"></div>
        <div className="dropdown-item">
          <AddCircleOutlineOutlinedIcon className="dropdown-item-icon" />
          <span>Hesap Ekle</span>
        </div>
      </div>
    </div>
  );
}

function AppBar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };
  return (
    <header className={`app-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="app-bar-left">
        <div className="hamburger" onClick={toggleSidebar}>
          <MenuIcon />
        </div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="#">
            Dashboards
          </Link>
          <Link color="inherit" href="#">
            Default
          </Link>
        </Breadcrumbs>
      </div>
      <div className="app-bar-right">
        <NotificationsNoneOutlinedIcon className="icon" />
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <LightModeOutlinedIcon className="icon" />
          ) : (
            <DarkModeOutlinedIcon className="icon" />
          )}
        </button>
        {/* Yer Değişikliği: Profil menüsü önce, dil menüsü sonra */}
        <ProfileMenu />
        <LanguageMenu />
      </div>
    </header>
  );
}

export default AppBar;
