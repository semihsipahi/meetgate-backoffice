import React from "react";
import "./AppBar.css";

/* MUI (Material UI) ikonları (npm install @mui/icons-material) */
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function AppBar() {
  return (
    <header className="app-bar">
      {/* Sol kısım: Breadcrumbs + Sayfa başlığı */}
      <div className="app-bar-left">
        <div className="breadcrumbs">
          <span>Dashboards</span>
          <span>/</span>
          <span>Default</span>
        </div>
        <h2 className="page-title">Default</h2>
      </div>

      {/* Sağ kısım: Arama kutusu, Sign in butonu, ikonlar */}
      <div className="app-bar-right">
        {/* Arama kutusu */}
        <div className="search-box">
          <SearchOutlinedIcon className="search-icon" />
          <input type="text" placeholder="Type here..." />
        </div>

        {/* Sign in butonu */}
        <button className="sign-in">Sign in</button>

        {/* Bildirim ve Profil ikonları */}
        <NotificationsNoneOutlinedIcon className="icon" />
        <PersonOutlineOutlinedIcon className="icon" />
      </div>
    </header>
  );
}

export default AppBar;
