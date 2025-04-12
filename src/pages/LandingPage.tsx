import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  textAlign: 'center',
  background: 'linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8
      }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Waqf-Sukuk Qard Hassan Platform
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Empowering Communities Through Interest-Free Financing
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          width: '100%',
          maxWidth: 1200,
          mt: 4
        }}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" component="h3" gutterBottom>
              For Donors
            </Typography>
            <Typography variant="body1" paragraph>
              Contribute to sustainable development through Waqf-Sukuk investments. Your donations help create a positive impact in the community.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/donor')}
              sx={{ mt: 2 }}
            >
              Start Donating
            </Button>
          </StyledPaper>

          <StyledPaper elevation={3}>
            <Typography variant="h4" component="h3" gutterBottom>
              For Borrowers
            </Typography>
            <Typography variant="body1" paragraph>
              Access interest-free financing for your needs. Our platform connects you with donors who want to make a difference.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/borrower')}
              sx={{ mt: 2 }}
            >
              Apply for Loan
            </Button>
          </StyledPaper>
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Platform Impact
          </Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
            gap: 4,
            mt: 4
          }}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5">$1.2M</Typography>
              <Typography variant="body1">Total Funds Raised</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5">500+</Typography>
              <Typography variant="body1">Borrowers Helped</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5">95%</Typography>
              <Typography variant="body1">Repayment Rate</Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage; 