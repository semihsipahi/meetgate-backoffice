import { Box, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

/**
 * DonutChart:
 *  - color: Dolu kısmın rengi (örnek: #0061FF)
 *  - percentage: Gösterilecek yüzde (0-100)
 *  - label: Grafiğin altında yazacak metin (örnek: "Soru - Cevap Analizi")
 */
function DonutChart({ color, percentage, label }) {
  const donutSize = 120; // Donut çapı (px)
  const ringThickness = 16; // Halka kalınlığı
  const trackColor = '#ECECEC'; // Boş kısım rengi

  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Dış halka (conic-gradient ile) */}
      <Box
        sx={{
          position: 'relative',
          width: donutSize,
          height: donutSize,
          borderRadius: '50%',
          background: `conic-gradient(${color} 0% ${percentage}%, ${trackColor} ${percentage}% 100%)`,
          mx: 'auto',
        }}
      >
        {/* İç boşluk (halka efekti) */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: donutSize - ringThickness * 2,
            height: donutSize - ringThickness * 2,
            borderRadius: '50%',
            backgroundColor: '#F8FAFF',
          }}
        />
        {/* Ortadaki yüzde metni */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            %{percentage}
          </Typography>
        </Box>
      </Box>
      {/* Alt etiket */}
      <Typography variant="body2" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function InteractiveAnalysisBalance() {
  // Slider değeri (0-100 arası)
  const [progress, setProgress] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setProgress(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        p: 3,
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
      }}
    >
      {/* Slider ve metinlerin bulunduğu kutu */}
      <Box
        sx={{
          backgroundColor: '#F8FAFF',
          borderRadius: 2,
          p: 3,
          mb: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Analiz Türü ve Dengesi
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Katılımcıların, değerlendirme sorularına verdikleri cevaplar üzerinden
          belirli bir puanlamaya tabulduğu görüşmelerdir.
        </Typography>
        <Slider
          value={progress}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2">%{progress}</Typography>
          <Typography variant="body2">%{100 - progress}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" fontWeight="medium">
            Soru - Cevap Analizi
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            Yetkinlik Bazlı Analiz
          </Typography>
        </Box>
      </Box>

      {/* Donut grafiklerin bulunduğu ayrı kutu */}
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: 2,
          p: 3,
        }}
      >
        <Box sx={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
          <DonutChart
            color="#0061FF"
            percentage={progress}
            label="Soru - Cevap Analizi"
          />
          <DonutChart
            color="#9C00FF"
            percentage={100 - progress}
            label="Yetkinlik Bazlı Analiz"
          />
        </Box>
      </Box>
    </Box>
  );
}
