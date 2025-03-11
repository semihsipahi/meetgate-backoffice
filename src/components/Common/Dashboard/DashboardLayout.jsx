import React from 'react';
import AppBar from '../../../pages/Common/AppBar';
import SideBar from '../../../pages/Common/SideBar';

function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sol tarafta Sidebar */}
      <SideBar />

      {/* Sağ tarafta üstte AppBar, altında içerik */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar />
        <div style={{ padding: '1rem' }}>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
