import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Question from '../../../assets/Icons/question.svg';

export const STEPS = [
  {
    title: 'Genel Bilgiler',
    subtitle: 'Görüşme Detayları',
    key: 'General',
  },
  {
    title: 'Aday Değerlendirme',
    subtitle: 'Aday Değerlendirmeleri',
    key: 'CandidateEvaluation',
  },
  {
    title: 'Soru Seti Belirleme',
    subtitle: 'Sorular ve Cevapları',
    key: 'TargetQuestionSet',
  },
  {
    title: 'Analiz Ağırlıkları',
    subtitle: 'Puanlama Önceliği',
    key: 'AnalyseWeight',
  },
  {
    title: 'Özet',
    subtitle: 'Onay',
    key: 'Summary',
  },
];

export default function StepNavigation({ setNavigationStep }) {
  const [activeStep, setActiveStep] = useState(STEPS[0].key);

  const handleStepChange = (stepKey) => {
    setActiveStep(stepKey);
    if (setNavigationStep) {
      setNavigationStep(stepKey);
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: '#FFFFF',
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Görüşme Adımları
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Adımları Tamamlayarak Görüşme Oluşturun!
      </Typography>

      <List disablePadding>
        {STEPS.map((step) => {
          const isActive = activeStep === step.key;
          return (
            <ListItemButton
              key={step.key}
              onClick={() => handleStepChange(step.key)}
              sx={{
                mb: 2,
                borderRadius: '10px',
                backgroundColor: isActive ? '#0061FF' : '#F8FAFF',
                color: isActive ? '#fff' : '#000',
                '&:hover': {
                  backgroundColor: isActive ? '#0061FF' : '#E6F0FF',
                },
                transition: 'background-color 0.3s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isActive ? '#fff' : '#0061FF',
                }}
              >
                <img
                  src={Question}
                  alt="Question Icon"
                  style={{ width: '30px', height: '30px' }}
                />
              </ListItemIcon>
              <ListItemText
                primary={step.title}
                secondary={step.subtitle}
                secondaryTypographyProps={{
                  sx: { color: isActive ? '#fff' : 'text.secondary' },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
