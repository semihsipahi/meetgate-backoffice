import React, { useEffect } from 'react';
import DashboardLayout from '../../components/Common/Dashboard/DashboardLayout';
import TableLayout from '../../components/Common/Table/TableLayout';
import { useSideBar } from '../../hooks/SideBar/SideBarContext';

function Blank() {
  const { setActiveMenu } = useSideBar();

  useEffect(() => {
    setActiveMenu('blank');
  }, [setActiveMenu]);

  return (
    <DashboardLayout>
      <TableLayout title="Soru Kategorileri" />
    </DashboardLayout>
  );
}

export default Blank;
