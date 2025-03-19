import { createContext, useContext, useState } from 'react';

const QuestionSetContext = createContext();

export const QuestionSetProvider = ({ children }) => {
  const [createStep, setCreateStep] = useState('Creation');
  const [createModalState, setCreateModalState] = useState(false);

  return (
    <QuestionSetContext.Provider
      value={{
        createModalState,
        setCreateModalState,
        createStep,
        setCreateStep,
      }}
    >
      {children}
    </QuestionSetContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestionSet = () => useContext(QuestionSetContext);
