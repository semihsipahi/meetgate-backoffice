import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { StepContent } from '../../../pages/Meet/Creation/CreateMeet';
import StepNavigation, { STEPS } from '../Navigation/StepNavigation';

export default function StepLayout() {
  const [navigationStep, setNavigationStep] = useState('General');

  const handleNext = () => {
    const currentIndex = STEPS.findIndex((step) => step.key === navigationStep);
    if (currentIndex < STEPS.length - 1) {
      setNavigationStep(STEPS[currentIndex + 1].key);
    }
  };

  return (
    <Box sx={{ mt: '10px', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#F8FAFF',
            borderRadius: 3,
            p: 2,
            boxShadow: 1,
          }}
        >
          <StepNavigation setNavigationStep={setNavigationStep} />
        </Box>
        <Box
          sx={{
            backgroundColor: '#F8FAFF',
            borderRadius: 3,
            p: 2,
            boxShadow: 1,
          }}
        >
          <StepContent activeStep={navigationStep} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleNext}
              size="large"
              sx={{
                backgroundColor: '#0061FF',
                color: '#fff',
                borderRadius: '8px',
                textTransform: 'none',
              }}
            >
              Sonraki Adım
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
