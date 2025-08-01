import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import five from '../assets/five.jpg';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <Paper 
        elevation={3}
        sx={{
          p: 3,
          textAlign: 'center',
          borderRadius: '12px',
          background: 'linear-gradient(to right, #ffd64dff, #ffdf88ff)',
          borderLeft: '4px solid #b8860b',
          maxWidth: '350px',
          width: '100%'
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '1.1rem',
            lineHeight: '2',
            textAlign: 'center',
            color: '#333',
            fontWeight: 500
          }}
        >
          گروه تولیدی مبلمان خندان تولید کننده مبلمان کلاسیک . راحتی مدرن مکانیزه و مبلمان مینیمال و جهیزیه عروس با بیش از دو دهه سابقه و فعالیت در زمینه صنایع چوبی و مبلمان . عضویت در اتحادیه درودگران شهرستان البرز 
        </Typography>
      </Paper>
    </Container>
  );
}