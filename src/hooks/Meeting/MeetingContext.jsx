import { createContext, useContext, useState } from 'react';

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const [createStep, setCreateStep] = useState('Creation');

  return (
    <MeetingContext.Provider
      value={{
        createStep,
        setCreateStep,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMeeting = () => useContext(MeetingContext);
