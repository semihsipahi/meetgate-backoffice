import React from 'react';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';
import TableLayout from '../../../components/Common/Table/TableLayout';
import CreateAIQuestion from '../../../components/Question/AI-Steps/CreateAIQuestion';
import QuestionInfo from '../../../components/Question/Intro/QuestionIntro';

function CreateQuestion() {
  return (
    <DashboardLayout>
      <QuestionInfo />
      <TableLayout title="Sorular" />
      <CreateAIQuestion />
    </DashboardLayout>
  );
}

export default CreateQuestion;
