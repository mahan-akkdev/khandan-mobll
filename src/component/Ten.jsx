import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ten from '../assets/ten.jpg';

export default function Two() {
  const persianDescription = `
  این کاناپه لوکس با طراحی مدرن و راحتی بی‌نظیر، انتخابی ایده‌آل برای منازل و دفاتر مدرن است.
  ویژگی‌های کلیدی:
  - قاب چوبی با دوام
  - روکش پارچه‌ای ضد لک
  - پرکننده فوم اورتوپدیک
  - مناسب برای استفاده روزمره
  ابعاد: 220 × 90 × 75 سانتی‌متر
  `;

  return (
    <Container maxWidth="xl" sx={{ 
      px: { xs: 2, sm: 3 }, 
      py: 4,
      direction: 'rtl',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column', // Always column (mobile layout)
        gap: 4,
        alignItems: 'center',
      }}>
        {/* Image Section */}
        <Box sx={{
          flex: 1,
          minWidth: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
        }}>
          <Box
            component="img"
            src={ten}
            alt="کاناپه مدرن"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* Description Section */}
        <Box sx={{
          flex: 1,
          textAlign: 'right',
        }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold',
          }}>
            کاناپه مدرن مبل خندان
          </Typography>
          
          <Typography variant="body1" paragraph sx={{
            whiteSpace: 'pre-line',
            lineHeight: 2,
            fontSize: '1rem',
          }}>
            {persianDescription}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" color="text.secondary">
              قیمت: ۱۲,۹۰۰,۰۰۰ تومان
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Back Button */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          component={Link} to="/" 
          sx={{
            padding: '10px 25px',
            backgroundColor: '#b8860b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block',
            fontSize: '1rem',
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Box>
    </Container>
  );
}
