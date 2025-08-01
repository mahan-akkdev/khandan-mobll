import React from 'react';
import { Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import all images from assets
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';
import nine from '../assets/nine.jpg';
import ten from '../assets/ten.jpg';
import eleven from '../assets/eleven.jpg';
import twoelve from '../assets/twoelve.jpg';
import thirteen from '../assets/thirteen.jpg';
import fourteen from '../assets/fourteen.jpg';
import fifteen from '../assets/fifteen.jpg';

export default function Home() {
  const navigate = useNavigate();

  // Split images into two arrays (5 photos each)
  const topImages = [
    { img: one, route: '/First', label: 'Product Showcase' },
    { img: two, route: '/Two', label: 'Our Services' },
    { img: three, route: '/Three', label: 'About Us' },
    { img: four, route: '/Four', label: 'Contact' },
    { img: five, route: '/Five', label: 'Blog' },
    { img: eleven, route: '/Eleven', label: 'Blog' },
    { img: thirteen, route: '/Thirteen', label: 'Blog' },
    { img: fifteen, route: '/Fifteen', label: 'Blog' },
  ];

  const bottomImages = [
    { img: six, route: '/Six', label: 'Gallery' },
    { img: seven, route: '/Seven', label: 'Our Team' },
    { img: eight, route: '/Eight', label: 'Portfolio' },
    { img: nine, route: '/Nine', label: 'Testimonials' },
    { img: ten, route: '/Ten', label: 'FAQs' },
    { img: twoelve, route: '/Twoelve', label: 'FAQs' },
    { img: fourteen, route: '/Fourteen', label: 'FAQs' },
  ];

  const handleImageClick = (route) => {
    navigate(route);
  };

  // Shared slider styles
  const sliderStyles = { 
    display: 'flex',
    overflowX: 'auto',
    gap: 3,
    py: 3,
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };

  // Shared image container styles
  const imageContainerStyles = {
    flex: '0 0 auto',
    width: { xs: '70%', sm: '45%', md: '30%', lg: '22%' },
    height: { xs: '250px', sm: '280px', md: '320px' },
    scrollSnapAlign: 'start',
    cursor: 'pointer',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: 3,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: 6,
    },
  };

  // Shared image styles
  const imageStyles = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 }, py: 4 }}>
      {/* Top Slider (First 5 photos) */}
      <Box sx={{ mb: 5 }}>
        <Box sx={sliderStyles}>
          {topImages.map((image, index) => (
            <Box
              key={`top-${index}`}
              onClick={() => handleImageClick(image.route)}
              sx={imageContainerStyles}
            >
              <Box
                component="img"
                src={image.img}
                alt={image.label}
                sx={imageStyles}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom Slider (Last 5 photos) */}
      <Box>
        <Box sx={sliderStyles}>
          {bottomImages.map((image, index) => (
            <Box
              key={`bottom-${index}`}
              onClick={() => handleImageClick(image.route)}
              sx={imageContainerStyles}
            >
              <Box
                component="img"
                src={image.img}
                alt={image.label}
                sx={imageStyles}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}