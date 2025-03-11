import React, { useState } from "react";
import "./SideBar.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function SideBar() {
  const [openGorusmeler, setOpenGorusmeler] = useState(false);
  const [openGorusmeSorulari, setOpenGorusmeSorulari] = useState(false);
  const [openCvSihirbazi, setOpenCvSihirbazi] = useState(false);
  const [openChatbots, setOpenChatbots] = useState(false);
  const [openFirmaBilgileri, setOpenFirmaBilgileri] = useState(false);
  const [openHesapBilgileri, setOpenHesapBilgileri] = useState(false);

  return (
    <aside className="soft-sidebar">
      {/* Üst Logo Alanı */}
      <div className="sidebar-logo-area">
        <div className="sidebar-logo-icon">
          <PersonOutlineOutlinedIcon/>
        </div>
        <h3 className="sidebar-logo-text">MeetGate</h3>
      </div>

      <hr className="sidebar-divider" />

      {/* Menü Bölümü */}
      <div className="sidebar-section">
        {/* Görüşmeler */}
        <button
          className={`sidebar-item ${openGorusmeler ? "active" : ""}`}
          onClick={() => setOpenGorusmeler(!openGorusmeler)}
        >
          <div className="icon-box">
            <WorkspacesOutlinedIcon />
          </div>
          <span>Görüşmeler</span>
          <span className="chevron">
            {openGorusmeler ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openGorusmeler && (
          <ul className="sidebar-submenu">
            <li>Tüm Görüşmeler</li>
            <li>Görüşme Oluştur</li>
            <li>Hazır Görüşmeler</li>
          </ul>
        )}

        {/* Görüşme Soruları */}
        <button
          className={`sidebar-item ${openGorusmeSorulari ? "active" : ""}`}
          onClick={() => setOpenGorusmeSorulari(!openGorusmeSorulari)}
        >
          <div className="icon-box">
            <HelpCenterOutlinedIcon />
          </div>
          <span>Görüşme Soruları</span>
          <span className="chevron">
            {openGorusmeSorulari ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openGorusmeSorulari && (
          <ul className="sidebar-submenu">
            <li>Soru Kategorileri</li>
            <li>Soru Setleri</li>
            <li>Soru Setleri</li>
            <li>Sorular</li>
          </ul>
        )}

        {/* CV Sihirbazı */}
        <button
          className={`sidebar-item ${openCvSihirbazi ? "active" : ""}`}
          onClick={() => setOpenCvSihirbazi(!openCvSihirbazi)}
        >
          <div className="icon-box">
            <ArticleOutlinedIcon />
          </div>
          <span>CV Sihirbazı</span>
          <span className="chevron">
            {openCvSihirbazi ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openCvSihirbazi && (
          <ul className="sidebar-submenu">
            <li>Kriter Setleri</li>
            <li>Davet Edilen Adaylar</li>
          </ul>
        )}

        {/* ChatBots */}
        <button
          className={`sidebar-item ${openChatbots ? "active" : ""}`}
          onClick={() => setOpenChatbots(!openChatbots)}
        >
          <div className="icon-box">
            <SmartToyOutlinedIcon />
          </div>
          <span>ChatBots</span>
          <span className="chevron">
            {openChatbots ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openChatbots && (
          <ul className="sidebar-submenu">
            <li>Chat Bot Listesi</li>
            <li>Chat Bot Ekle</li>
          </ul>
        )}

        {/* Firma Bilgileri */}
        <button
          className={`sidebar-item ${openFirmaBilgileri ? "active" : ""}`}
          onClick={() => setOpenFirmaBilgileri(!openFirmaBilgileri)}
        >
          <div className="icon-box">
            <CorporateFareOutlinedIcon />
          </div>
          <span>Firma Bilgileri</span>
          <span className="chevron">
            {openFirmaBilgileri ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openFirmaBilgileri && (
          <ul className="sidebar-submenu">
            <li>Tüm Firmalar</li>
            <li>Tüm Kullanıcılar</li>
          </ul>
        )}

        {/* Hesap Bilgileri */}
        <button
          className={`sidebar-item ${openHesapBilgileri ? "active" : ""}`}
          onClick={() => setOpenHesapBilgileri(!openHesapBilgileri)}
        >
          <div className="icon-box">
            <AccountCircleOutlinedIcon />
          </div>
          <span>Hesap Bilgileri</span>
          <span className="chevron">
            {openHesapBilgileri ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </span>
        </button>
        {openHesapBilgileri && (
          <ul className="sidebar-submenu">
            <li>Hesap Ayarları</li>
            <li>Şifre Değiştir</li>
          </ul>
        )}
      </div>

      {/* Whatsapp Destek Butonu */}
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
