import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

export default function FinalOverview() {
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
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Neredeyse Tamamladın!
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Görüşme kurulumuna göz atın ve onaylayın!
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Mülakat Şekli
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Standart Mülakat
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Mülakat Türü
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Genel Yetenek - Genel Envanter
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: 2,
          p: 2,
          mb: 3,
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' }}>
          <Box
            component="img"
            src="/images/room-background.jpg"
            alt="Arka Plan"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />

          <Box
            component="img"
            src="/images/avatar-person.png"
            alt="Avatar"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: '60%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
          Görüşme Karşılama
        </Typography>
        <Typography variant="body1">
          Merhabalar, Meetgate Deneme Görüşmesine hoş geldiniz.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
          Görüşme Adı
        </Typography>
        <Typography variant="body1">İş Analizi</Typography>
      </Box>

      <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
          Görüşme Açıklaması
        </Typography>
        <Typography variant="body1">
          Meetgate Deneme ile ilgili görüşme
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Başlama Tarihi
          </Typography>
          <Typography variant="body1">15/15/2025</Typography>
        </Box>

        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Son Katılım Tarihi
          </Typography>
          <Typography variant="body1">15/15/2025</Typography>
        </Box>

        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Seçilen Sorular
          </Typography>
          <Typography variant="body1">5 Adet Soru Seçilmiştir</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Katılma Saati
          </Typography>
          <Typography variant="body1">15/15/2025</Typography>
        </Box>

        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Kimler Katılabilir
          </Typography>
          <Typography variant="body1">İsteyen Herkes Katılabilir</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Kayıt Durumu
          </Typography>
          <Typography variant="body1">Hayır, Kayıt Gerekli Değil</Typography>
        </Box>

        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#888', mb: 1 }}>
            Gönderim Durumu
          </Typography>
          <Typography variant="body1">Hayır, Gönderilmesin</Typography>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, p: 2 }}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Bu Görüşmeyi Oluşturmaya Onaylıyorum."
        />
      </Box>
    </Box>
  );
}
