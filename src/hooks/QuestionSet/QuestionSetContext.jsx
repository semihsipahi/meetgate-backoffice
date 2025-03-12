import { createContext, useContext, useState } from 'react';

const QuestionSetContext = createContext();

export const QuestionSetProvider = ({ children }) => {
  const [createModalState, setCreateModalState] = useState(false);

  return (
    <QuestionSetContext.Provider
      value={{ setCreateModalState, createModalState }}
    >
      {children}
    </QuestionSetContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestionSet = () => useContext(QuestionSetContext);
