import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { mockLoanApplications } from '../data/mockData';
import { LoanApplication } from '../types';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<LoanApplication[]>(mockLoanApplications);

  const handleApprove = (id: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'approved', approvalDate: new Date().toISOString() } : app
    ));
  };

  const handleReject = (id: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'rejected' } : app
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'success.main';
      case 'rejected':
        return 'error.main';
      case 'pending':
        return 'warning.main';
      case 'repaid':
        return 'info.main';
      default:
        return 'text.primary';
    }
  };

  const stats = {
    totalLoans: applications.length,
    totalRepaid: applications.filter(app => app.status === 'repaid').length,
    repaymentRate: Math.round(
      (applications.filter(app => app.status === 'repaid').length /
        applications.length) *
        100
    ),
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/revenue')}
          sx={{ color: '#000000' }}
        >
          View Revenue Summary
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Total Loans
          </Typography>
          <Typography variant="h4">RM {stats.totalLoans.toLocaleString()}</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Total Repaid
          </Typography>
          <Typography variant="h4">RM {stats.totalRepaid.toLocaleString()}</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Repayment Rate
          </Typography>
          <Typography variant="h4">{stats.repaymentRate}%</Typography>
        </Paper>
      </Box>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Loan Applications
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Borrower</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.id}</TableCell>
                  <TableCell>{application.borrower.name}</TableCell>
                  <TableCell>RM {application.amount.toLocaleString()}</TableCell>
                  <TableCell>{application.borrower.purpose}</TableCell>
                  <TableCell>
                    <Typography color={getStatusColor(application.status)}>
                      {application.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {application.status === 'pending' && (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => handleApprove(application.id)}
                          sx={{ mr: 1 }}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => handleReject(application.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AdminDashboard; 