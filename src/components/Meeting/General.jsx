import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

const cardsData = [
  {
    title: 'Standart Mülakat',
    time: '(15dk)',
    icon: (
      <img
        src="/images/meetgate-logo.png"
        alt="Logo"
        style={{ width: '18px', height: '24px' }}
      />
    ),
  },
  {
    title: 'Video Mülakat',
    time: '(10dk)',
    icon: <VideocamIcon fontSize="medium" />,
  },
  {
    title: 'Whatsapp Mülakat',
    time: '(8dk)',
    icon: <WhatsAppIcon fontSize="medium" />,
  },
  {
    title: 'Sesli Mülakat',
    time: '(8dk)',
    icon: <MicIcon fontSize="medium" />,
  },
];

export default function InterviewSelection() {
  const [interviewType, setInterviewType] = useState(
    'Genel Yetenek - Genel Envanter'
  );
  const handleInterviewTypeChange = (event) => {
    setInterviewType(event.target.value);
  };

  const [selectedInterviewShape, setSelectedInterviewShape] = useState(
    cardsData[0].title
  );

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Mülakatınız Nasıl Olmalı?
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
        Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tutulduğu görüşmelerdir.
      </Typography>

      <Typography variant="subtitle1" mb={1}>
        Mülakat Türü Seçiniz
      </Typography>
      <Select
        value={interviewType}
        onChange={handleInterviewTypeChange}
        fullWidth
        sx={{
          backgroundColor: '#F8FAFF',
          borderRadius: '12px',
          p: 1,
          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        }}
      >
        <MenuItem value="Genel Yetenek - Genel Envanter">
          Genel Yetenek - Genel Envanter
        </MenuItem>
        <MenuItem value="Diğer Seçenek 1">Diğer Seçenek 1</MenuItem>
        <MenuItem value="Diğer Seçenek 2">Diğer Seçenek 2</MenuItem>
      </Select>

      <Typography variant="subtitle1" mt={3} mb={1}>
        Mülakat Şekli Seçiniz
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
        }}
      >
        {cardsData.map((card, index) => {
          const isSelected = selectedInterviewShape === card.title;

          return (
            <Box
              key={index}
              onClick={() => setSelectedInterviewShape(card.title)}
              sx={{
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                height: 70,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                backgroundColor: isSelected ? '#0061FF' : '#F8FAFF',
                color: isSelected ? '#fff' : '#000',
                border: isSelected
                  ? '2px solid #0061FF'
                  : '2px solid transparent',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <input
                  type="radio"
                  name="interviewShape"
                  checked={isSelected}
                  onChange={() => setSelectedInterviewShape(card.title)}
                  style={{
                    width: 18,
                    height: 18,
                    margin: 0,
                    cursor: 'pointer',
                  }}
                />
                {React.isValidElement(card.icon) && card.icon.type.muiName
                  ? React.cloneElement(card.icon, {
                      style: {
                        color: isSelected ? '#fff' : '#000',
                      },
                    })
                  : card.icon}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
              </Box>

              <Typography variant="body2">{card.time}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
