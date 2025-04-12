import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from '@mui/material';
import { 
  calculateRiskScore, 
  getPurposeScore, 
  getIncomeStabilityScore,
  calculateRepaymentHistoryScore 
} from '../utils/riskScoring';

const BorrowerPortal: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    monthlyIncome: '',
    purpose: '',
    loanAmount: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const riskScore = calculateRiskScore(
    getIncomeStabilityScore(formData.occupation),
    getPurposeScore(formData.purpose),
    calculateRepaymentHistoryScore(
      Number(formData.monthlyIncome) || 0,
      Number(formData.loanAmount) || 0
    )
  );

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Borrower Portal
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Loan Application Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gap: 2 }}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Monthly Income (RM)"
                name="monthlyIncome"
                type="number"
                value={formData.monthlyIncome}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Loan Purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Loan Amount (RM)"
                name="loanAmount"
                type="number"
                value={formData.loanAmount}
                onChange={handleChange}
                required
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit Application'}
              </Button>
            </Box>
          </form>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Risk Assessment
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Risk Score
              </Typography>
              <Typography variant="h4" color={riskScore >= 70 ? 'success.main' : 'error.main'}>
                {riskScore}%
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Eligibility Status
              </Typography>
              <Typography
                variant="h6"
                color={riskScore >= 70 ? 'success.main' : 'error.main'}
              >
                {riskScore >= 70 ? 'Eligible' : 'Not Eligible'}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Note: Risk score is calculated based on income stability, loan amount, purpose, and other factors.
              A score of 70% or higher is required for loan approval.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default BorrowerPortal; 