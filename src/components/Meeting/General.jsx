import MicIcon from '@mui/icons-material/Mic';
import PersonIcon from '@mui/icons-material/Person';
import VideocamIcon from '@mui/icons-material/Videocam';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function InterviewSelection() {
  const [interviewType, setInterviewType] = useState(
    'Genel Yetenek - Genel Envanter'
  );

  const handleInterviewTypeChange = (event) => {
    setInterviewType(event.target.value);
  };

  const cardsData = [
    {
      title: 'Standart Mülakat',
      time: '(15dk)',
      icon: <PersonIcon fontSize="medium" />,
      bgColor: '#0061FF',
      textColor: '#FFFFFF',
    },
    {
      title: 'Video Mülakat',
      time: '(10dk)',
      icon: <VideocamIcon fontSize="medium" />,
      bgColor: '#F8FAFF',
      textColor: '#000000',
    },
    {
      title: 'Whatsapp Mülakat',
      time: '(8dk)',
      icon: <WhatsAppIcon fontSize="medium" />,
      bgColor: '#F8FAFF',
      textColor: '#000000',
    },
    {
      title: 'Sesli Mülakat',
      time: '(8dk)',
      icon: <MicIcon fontSize="medium" />,
      bgColor: '#F8FAFF',
      textColor: '#000000',
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Mülakatınız Nasıl Olmalı?
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tutulduğu görüşmelerdir.
      </Typography>

      <Typography variant="subtitle1" mb={1} fontWeight="bold">
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

      <Typography variant="subtitle1" mt={3} mb={1} fontWeight="bold">
        Mülakat Şekli Seçiniz
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {cardsData.map((card, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: card.bgColor,
              color: card.textColor,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              height: 70,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {card.icon}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {card.title}
              </Typography>
            </Box>
            <Typography variant="body2">{card.time}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
