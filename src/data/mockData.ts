import { Donor, Borrower, LoanApplication, FundFlow } from '../types';

export const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'Ahmad Ali',
    email: 'ahmad@example.com',
    amount: 5000,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Binti Yusuf',
    email: 'sarah@example.com',
    amount: 3000,
    date: '2024-01-20'
  }
];

export const mockBorrowers: Borrower[] = [
  {
    id: '1',
    name: 'Mohammed Hassan',
    occupation: 'Small Business Owner',
    purpose: 'Business Expansion',
    loanAmount: 2000,
    riskScore: 76,
    status: 'approved',
    applicationDate: '2024-01-16'
  },
  {
    id: '2',
    name: 'Fatimah Abdullah',
    occupation: 'Teacher',
    purpose: 'Education',
    loanAmount: 1500,
    riskScore: 85,
    status: 'pending',
    applicationDate: '2024-01-21'
  }
];

export const mockLoanApplications: LoanApplication[] = [
  {
    id: '1',
    borrower: mockBorrowers[0],
    amount: 2000,
    status: 'approved',
    applicationDate: '2024-01-16',
    approvalDate: '2024-01-17'
  },
  {
    id: '2',
    borrower: mockBorrowers[1],
    amount: 1500,
    status: 'pending',
    applicationDate: '2024-01-21'
  }
];

export const mockFundFlows: FundFlow[] = [
  {
    id: '1',
    type: 'donation',
    amount: 5000,
    date: '2024-01-15',
    description: 'Initial donation from Ahmad Ali'
  },
  {
    id: '2',
    type: 'sukuk',
    amount: 4500,
    date: '2024-01-16',
    description: 'Sukuk investment from donations'
  },
  {
    id: '3',
    type: 'loan',
    amount: 2000,
    date: '2024-01-17',
    description: 'Loan disbursement to Mohammed Hassan'
  }
]; 