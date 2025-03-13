import React, { useEffect } from 'react';
import DashboardLayout from '../../components/Common/Dashboard/DashboardLayout';
import { useSideBar } from '../../hooks/SideBar/SideBarContext';

function Blank() {
  const { setActiveMenu } = useSideBar();

  useEffect(() => {
    setActiveMenu('blank');
  }, [setActiveMenu]);

  return (
    <DashboardLayout>
      <h2>This is blank page on the meetgate-backoffice project.</h2>
      <div>asndaskjlnsadn</div>
    </DashboardLayout>
  );
}

export default Blank;
