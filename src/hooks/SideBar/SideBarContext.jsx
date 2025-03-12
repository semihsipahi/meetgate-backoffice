import { createContext, useContext, useState } from 'react';

const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <SideBarContext.Provider value={{ setActiveMenu, activeMenu }}>
      {children}
    </SideBarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSideBar = () => useContext(SideBarContext);
