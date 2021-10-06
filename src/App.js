import React from 'react';
import Weather from './Pages/Weather';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './style.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
      <Toolbar>
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Weather App
          </Typography>
      </Toolbar>
      </AppBar>
      <br/>
      <Container fixed>
        <Box>
          <Weather />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
