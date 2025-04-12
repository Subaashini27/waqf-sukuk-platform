import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueProjects = [
  {
    name: "Waqf Farm",
    revenue: 100000,
    impact: "Supports 20 farmers with tools and seeds"
  },
  {
    name: "Waqf Rental Housing",
    revenue: 80000,
    impact: "Funds scholarships for 15 students"
  },
  {
    name: "Waqf Clinics",
    revenue: 50000,
    impact: "Covers medication for 50 patients"
  }
];

const reserveGrowthData = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 22000 },
  { month: "Apr", value: 30000 },
  { month: "May", value: 38000 }
];

const RevenueSummary: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Revenue Summary
      </Typography>

      {/* Reserve Fund Growth Chart */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Reserve Fund Growth
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={reserveGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#ffd700" name="Reserve Fund (RM)" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {/* Revenue Projects Grid */}
      <Typography variant="h6" gutterBottom>
        Revenue-Generating Projects
      </Typography>
      <Grid container spacing={3}>
        {revenueProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                RM {project.revenue.toLocaleString()}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {project.impact}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RevenueSummary; 