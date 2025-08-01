import { Link } from 'react-router-dom';
import { AppBar, Toolbar , Typography , Button } from '@mui/material';

export default function Navbar() {
  return (
      <AppBar position="static">
        <Toolbar sx={{bgcolor: '#b8860b'}}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            مبل خندان
          </Typography>
          <Button color="inherit" component={Link} to="/">
          <Typography variant='h6'>
            خانه
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/about">
          <Typography variant='h6'>
            درباره
          </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/contact">
          <Typography variant='h6'>
            ارتباط
          </Typography>
          </Button>
        </Toolbar>
      </AppBar>
  )}