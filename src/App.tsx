import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/LandingPage';
import DonorDashboard from './pages/DonorDashboard';
import BorrowerPortal from './pages/BorrowerPortal';
import AdminDashboard from './pages/AdminDashboard';
import RevenueSummary from './pages/RevenueSummary';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd700',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffd700',
          color: '#000000',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000000' }}>
              Waqf-Sukuk Qard Hassan Platform
            </Typography>
            <Button color="inherit" component={Link} to="/" sx={{ color: '#000000' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/donor" sx={{ color: '#000000' }}>
              Donor
            </Button>
            <Button color="inherit" component={Link} to="/borrower" sx={{ color: '#000000' }}>
              Borrower
            </Button>
            <Button color="inherit" component={Link} to="/admin" sx={{ color: '#000000' }}>
              Admin
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/donor" element={<DonorDashboard />} />
            <Route path="/borrower" element={<BorrowerPortal />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/revenue" element={<RevenueSummary />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
