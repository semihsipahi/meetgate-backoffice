import { Box, Typography } from '@mui/material';
import React from 'react';
import DashboardLayout from '../../../components/Common/Dashboard/DashboardLayout';
import CandidateEvaluation from '../../../components/Meeting/CandidateEvaluation';
import General from '../../../components/Meeting/general';
import StepLayout from '../../../components/Meeting/Layout/Layout';
import Summary from '../../../components/Meeting/summary';
import TargetQuestionSet from '../../../components/Meeting/TargetQuestionSet';
import QuestionInfo from '../../../components/Question/Intro/QuestionIntro';

export function StepContent({ activeStep }) {
  switch (activeStep) {
    case 'General':
      return (
        <Box>
          <General />
        </Box>
      );
    case 'CandidateEvaluation':
      return (
        <Box>
          <CandidateEvaluation />
        </Box>
      );
    case 'TargetQuestionSet':
      return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Soru Seti Belirleme
          </Typography>
          <Typography variant="body1">
            Bu adımda kullanılacak soru seti seçilir.
          </Typography>
        </Box>
      );
    case 'AnalyseWeight':
      return (
        <Box>
          <TargetQuestionSet />
        </Box>
      );
    case 'Summary':
      return (
        <Box>
          <Summary />
        </Box>
      );
    default:
      return (
        <Box>
          <Typography variant="h5">Adım bulunamadı</Typography>
        </Box>
      );
  }
}

export default function CreateMeet() {
  return (
    <DashboardLayout>
      <QuestionInfo />
      <StepLayout />
    </DashboardLayout>
  );
}
