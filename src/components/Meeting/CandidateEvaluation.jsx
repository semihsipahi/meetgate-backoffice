import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import backgroundImage from '../../../public/images/background-image.jpeg';

export default function CandidateEvaluationWithAvatar() {
  const [meetingName, setMeetingName] = useState(
    'Art Director Ön Görüşme Mülakat'
  );
  const [participantLimit, setParticipantLimit] = useState('Sınırsız');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleMeetingNameChange = (event) => {
    setMeetingName(event.target.value);
  };

  const handleLimitChange = (event) => {
    setParticipantLimit(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setMeetingDescription(value);
    setCharCount(value.length);
  };

  return (
    <Box sx={{ pb: 4 }}>
      <Box
        sx={{
          backgroundColor: '#F8FAFF',
          borderRadius: 2,
          p: 3,
          maxWidth: 600,
          width: '100%',
          mx: 'auto',
          mt: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Aday Değerlendirme
        </Typography>

        <Typography variant="body2" sx={{ mb: 3 }}>
          Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
          belirli bir puanlamaya tabulduğu görüşmelerdir.
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Görüşme Adı
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={meetingName}
          onChange={handleMeetingNameChange}
          sx={{ mb: 2 }}
        />

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Katılımcı Limiti
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select value={participantLimit} onChange={handleLimitChange}>
            <MenuItem value="Sınırsız">Sınırsız</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Görüşme Açıklaması
        </Typography>
        <Box sx={{ position: 'relative', mb: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={meetingDescription}
            onChange={handleDescriptionChange}
            inputProps={{ maxLength: 100 }}
          />

          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              color: '#888',
            }}
          >
            {100} / {charCount}
          </Typography>
        </Box>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Aday Yetkinlikleri
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value="Kenan SİPAHİ"
          InputProps={{ readOnly: true }}
        />
      </Box>

      <AvatarSelection />

      <AvatarLanguageBox />

      <BackgroundSelectionBox />

      <AvatarPreviewBox />

      <DetailsBox />
    </Box>
  );
}

function AvatarSelection() {
  const avatars = [
    { id: 1, name: 'Avatar 1', src: 'https://i.pravatar.cc/100?img=1' },
    { id: 2, name: 'Avatar 2', src: 'https://i.pravatar.cc/100?img=2' },
    { id: 3, name: 'Avatar 3', src: 'https://i.pravatar.cc/100?img=3' },
    { id: 4, name: 'Avatar 4', src: 'https://i.pravatar.cc/100?img=4' },
    { id: 5, name: 'Avatar 5', src: 'https://i.pravatar.cc/100?img=5' },
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(1);

  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        p: 3,
        maxWidth: 600,
        width: '100%',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Avatar Seçin
      </Typography>

      <Typography variant="body2" sx={{ mb: 3 }}>
        Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tabulduğu görüşmelerdir.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        {avatars.map((avatar) => (
          <Box
            key={avatar.id}
            onClick={() => setSelectedAvatar(avatar.id)}
            sx={{
              cursor: 'pointer',
              width: 90,
              height: 120,
              borderRadius: 2,
              backgroundColor:
                selectedAvatar === avatar.id ? '#1A1A1A' : '#333333',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor:
                  selectedAvatar === avatar.id ? '#1A1A1A' : '#444444',
              },
            }}
          >
            <Box
              component="img"
              src={avatar.src}
              alt={avatar.name}
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                mb: 1,
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: '#fff', textAlign: 'center' }}
            >
              {avatar.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 3 }}>
        {avatars.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor:
                index + 1 === selectedAvatar ? '#0061FF' : '#D3D3D3',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function AvatarLanguageBox() {
  const [selectedLanguage, setSelectedLanguage] = useState('Türkçe');

  const languages = [
    'Türkçe',
    'İngilizce (Amerikan)',
    'Rusça',
    'Fransızca',
    'Almanca',
    'Arapça',
    'Otomatik Algıla',
  ];

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      setSelectedLanguage(newLanguage);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        p: 3,
        maxWidth: 600,
        width: '100%',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Avatar Dili
      </Typography>

      <Typography variant="body2" sx={{ mb: 3 }}>
        Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tabulduğu görüşmelerdir.
      </Typography>

      <ToggleButtonGroup
        value={selectedLanguage}
        exclusive
        onChange={handleLanguageChange}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {languages.map((lang) => (
          <ToggleButton
            key={lang}
            value={lang}
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              backgroundColor:
                selectedLanguage === lang ? '#0061FF' : '#F8FAFF',
              color: selectedLanguage === lang ? '#FFFFFF' : '#000000',
              border: '1px solid #F8FAFF',

              '&:hover': {
                backgroundColor:
                  selectedLanguage === lang ? '#0051D4' : '#ECECEC',
              },
              '&.Mui-selected': {
                borderColor: '#0061FF',
              },
              px: 3,
              py: 1,
            }}
          >
            {lang}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}

function BackgroundSelectionBox() {
  const backgrounds = [
    {
      id: 1,
      name: 'Mavi Arkaplan',
      src: backgroundImage,
    },
    {
      id: 1,
      name: 'Mavi Arkaplan',
      src: backgroundImage,
    },
    {
      id: 1,
      name: 'Mavi Arkaplan',
      src: backgroundImage,
    },
  ];

  const [selectedBg, setSelectedBg] = useState(1);

  const handleSelect = (id) => {
    setSelectedBg(id);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        p: 3,
        maxWidth: 600,
        width: '100%',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Arkaplan Seçin
      </Typography>

      <Typography variant="body2" sx={{ mb: 3 }}>
        Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tabulduğu görüşmelerdir.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        {backgrounds.map((bg) => (
          <Box
            key={bg.id}
            onClick={() => handleSelect(bg.id)}
            sx={{
              cursor: 'pointer',
              width: 300,
              height: 180,
              borderRadius: 2,
              overflow: 'hidden',
              border:
                selectedBg === bg.id
                  ? '3px solid #0061FF'
                  : '3px solid transparent',
              transition: 'border-color 0.3s',
              '&:hover': {
                borderColor: selectedBg === bg.id ? '#0051D4' : '#A0A0A0',
              },
            }}
          >
            <Box
              component="img"
              src={bg.src}
              alt={bg.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 3 }}>
        {backgrounds.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: index + 1 === selectedBg ? '#0061FF' : '#D3D3D3',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function AvatarPreviewBox() {
  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        p: 3,
        maxWidth: 600,
        width: '100%',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Avatar Önizlemesini Göster
        </Typography>

        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: '#0061FF',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <VisibilityIcon />
        </Box>
      </Box>
    </Box>
  );
}

function DetailsBox() {
  const [startDate, setStartDate] = useState('15/15/2025');
  const [endDate, setEndDate] = useState('15/15/2025');
  const [timerOption, setTimerOption] = useState('Evet');

  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        p: 3,
        maxWidth: 600,
        width: '100%',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Detaylar
      </Typography>

      <Typography variant="body2" mb={3}>
        Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tabulduğu görüşmelerdir.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr auto' },
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Başlangıç Tarihi"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
        />

        <TextField
          label="Bitiş Tarihi"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            backgroundColor: '#0061FF',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0051D4',
            },
          }}
        >
          Süresiz
        </Button>
      </Box>

      <Typography variant="subtitle2" mb={1}>
        Zamanlayıcı aç
      </Typography>
      <RadioGroup
        row
        value={timerOption}
        onChange={(e) => setTimerOption(e.target.value)}
      >
        <FormControlLabel
          value="Evet"
          control={<Radio />}
          label="Evet, Açılsın"
        />
        <FormControlLabel
          value="Hayır"
          control={<Radio />}
          label="Hayır, Açılmasın"
        />
      </RadioGroup>
    </Box>
  );
}
