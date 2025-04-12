export interface Donor {
  id: string;
  name: string;
  email: string;
  amount: number;
  date: string;
}

export interface Borrower {
  id: string;
  name: string;
  occupation: string;
  purpose: string;
  loanAmount: number;
  riskScore: number;
  status: 'pending' | 'approved' | 'rejected' | 'repaid';
  applicationDate: string;
}

export interface LoanApplication {
  id: string;
  borrower: Borrower;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'repaid';
  applicationDate: string;
  approvalDate?: string;
  repaymentDate?: string;
}

export interface FundFlow {
  id: string;
  type: 'donation' | 'sukuk' | 'loan' | 'repayment' | 'recycled';
  amount: number;
  date: string;
  description: string;
} 