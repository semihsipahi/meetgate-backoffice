import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import React, { useState } from 'react';
import './SideBar.css';

function SideBar() {
  const [openMenu, setOpenMenu] = useState('');

  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? '' : menuName);
  };

  return (
    <aside className="soft-sidebar">
      <div className="sidebar-logo-area">
        <div className="sidebar-logo-icon">
          <PersonOutlineOutlinedIcon />
        </div>
        <h3 className="sidebar-logo-text">MeetGate</h3>
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-section">
        <button
          className={`sidebar-item ${openMenu === 'gorusmeler' ? 'active' : ''}`}
          onClick={() => handleMenuClick('gorusmeler')}
        >
          <div className="icon-box">
            <WorkspacesOutlinedIcon />
          </div>
          <span>Görüşmeler</span>
          <span className="chevron">
            {openMenu === 'gorusmeler' ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openMenu === 'gorusmeler' && (
          <ul className="sidebar-submenu">
            <li>Tüm Görüşmeler</li>
            <li>Görüşme Oluştur</li>
            <li>Hazır Görüşmeler</li>
          </ul>
        )}

        <button
          className={`sidebar-item ${openMenu === 'gorusmeSorulari' ? 'active' : ''}`}
          onClick={() => handleMenuClick('gorusmeSorulari')}
        >
          <div className="icon-box">
            <HelpCenterOutlinedIcon />
          </div>
          <span>Görüşme Soruları</span>
          <span className="chevron">
            {openMenu === 'gorusmeSorulari' ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openMenu === 'gorusmeSorulari' && (
          <ul className="sidebar-submenu">
            <li>Soru Kategorileri</li>
            <li>Soru Setleri</li>
            <li>Soru Setleri</li>
            <li>Sorular</li>
          </ul>
        )}

        <button
          className={`sidebar-item ${openMenu === 'cvSihirbazi' ? 'active' : ''}`}
          onClick={() => handleMenuClick('cvSihirbazi')}
        >
          <div className="icon-box">
            <ArticleOutlinedIcon />
          </div>
          <span>CV Sihirbazı</span>
          <span className="chevron">
            {openMenu === 'cvSihirbazi' ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openMenu === 'cvSihirbazi' && (
          <ul className="sidebar-submenu">
            <li>Kriter Setleri</li>
            <li>Davet Edilen Adaylar</li>
          </ul>
        )}

        <button
          className={`sidebar-item ${openMenu === 'chatbots' ? 'active' : ''}`}
          onClick={() => handleMenuClick('chatbots')}
        >
          <div className="icon-box">
            <SmartToyOutlinedIcon />
          </div>
          <span>ChatBots</span>
          <span className="chevron">
            {openMenu === 'chatbots' ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openMenu === 'chatbots' && (
          <ul className="sidebar-submenu">
            <li>Chat Bot Listesi</li>
            <li>Chat Bot Ekle</li>
          </ul>
        )}
        <button
          className={`sidebar-item ${openMenu === 'firmaBilgileri' ? 'active' : ''}`}
          onClick={() => handleMenuClick('firmaBilgileri')}
        >
          <div className="icon-box">
            <CorporateFareOutlinedIcon />
          </div>
          <span>Firma Bilgileri</span>
          <span className="chevron">
            {openMenu === 'firmaBilgileri' ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openMenu === 'firmaBilgileri' && (
          <ul className="sidebar-submenu">
            <li>Tüm Firmalar</li>
            <li>Tüm Kullanıcılar</li>
          </ul>
        )}

        <button
          className={`sidebar-item ${openMenu === 'hesapBilgileri' ? 'active' : ''}`}
          onClick={() => handleMenuClick('hesapBilgileri')}
        >
          <div className="icon-box">
            <AccountCircleOutlinedIcon />
          </div>
          <span>Hesap Bilgileri</span>
          <span className="chevron">
            {openMenu === 'hesapBilgileri' ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openMenu === 'hesapBilgileri' && (
          <ul className="sidebar-submenu">
            <li>Hesap Ayarları</li>
            <li>Şifre Değiştir</li>
          </ul>
        )}
      </div>
      <div className="sidebar-whatsapp">
        <button className="whatsapp-button">
          <WhatsAppIcon className="icon" />
          <span>Whatsapp Destek</span>
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
