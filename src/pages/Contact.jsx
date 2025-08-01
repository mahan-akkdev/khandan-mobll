import React from 'react';
import { Typography, Container, Box, Paper, Divider } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          textAlign: 'center',
          borderRadius: '12px',
          background: 'linear-gradient(to right, #ffd64d, #ffdf88)',
          borderLeft: '4px solid #b8860b',
          maxWidth: '350px',
          width: '100%'
        }}
      >
        <Typography 
          variant="h5"
          sx={{ 
            mb: 3,
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          تماس با ما
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Phone sx={{ mr: 1, color: '#b8860b' }} />
          <Typography>
            تلفن: ۰۲۱-۸۸۵۶۴۲۳۱
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Phone sx={{ mr: 1, color: '#b8860b' }} />
          <Typography>
        همراه: ۰۹۳۰۷۶۰۰۶۸۰
          </Typography>
        </Box>
        
        <Divider sx={{ my: 2, backgroundColor: '#b8860b' }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Email sx={{ mr: 1, color: '#b8860b' }} />
          <Typography>
            ایمیل: info@sofa-irani.com
          </Typography>
        </Box>
        
        <Divider sx={{ my: 2, backgroundColor: '#b8860b' }} />
        
        <Box sx={{ display: 'flex', alignItems: 'flex-start', textAlign: 'right' }}>
          <LocationOn sx={{ mr: 1, mt: 0.5, color: '#b8860b' }} />
          <Typography>
            آدرس: تهران
          </Typography>
        </Box>
        
        <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic' }}>
          ساعت کاری: شنبه تا پنجشنبه ۹ صبح تا ۹ شب
        </Typography>
      </Paper>
    </Container>
  );
}