import React from 'react';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';
import StepLayout from '../../../components/Question/AI-Steps/Layout/Layout';
import QuestionInfo from '../../../components/Question/Intro/QuestionIntro';

function CreateQuestion() {
  return (
    <DashboardLayout>
      <QuestionInfo />
      <StepLayout />
    </DashboardLayout>
  );
}

export default CreateQuestion;
