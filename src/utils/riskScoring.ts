export const calculateRiskScore = (
  incomeStability: number,
  purposeScore: number,
  repaymentHistory: number
): number => {
  return Math.round(
    0.4 * incomeStability + 0.3 * purposeScore + 0.3 * repaymentHistory
  );
};

export const getPurposeScore = (purpose: string): number => {
  const purposeScores: { [key: string]: number } = {
    'Business Expansion': 80,
    'Education': 90,
    'Healthcare': 85,
    'Home Improvement': 75,
    'Debt Consolidation': 70,
    'Other': 60
  };
  
  return purposeScores[purpose] || 60;
};

export const getIncomeStabilityScore = (occupation: string): number => {
  const occupationScores: { [key: string]: number } = {
    'Government Employee': 90,
    'Teacher': 85,
    'Small Business Owner': 75,
    'Private Sector Employee': 80,
    'Freelancer': 70
  };
  
  return occupationScores[occupation] || 70;
};

export const calculateRepaymentHistoryScore = (
  monthlyIncome: number,
  loanAmount: number
): number => {
  // Calculate debt-to-income ratio
  const debtToIncomeRatio = loanAmount / (monthlyIncome * 12);
  
  // Score based on debt-to-income ratio
  if (debtToIncomeRatio <= 0.2) {
    return 90; // Very low risk
  } else if (debtToIncomeRatio <= 0.4) {
    return 80; // Low risk
  } else if (debtToIncomeRatio <= 0.6) {
    return 70; // Moderate risk
  } else if (debtToIncomeRatio <= 0.8) {
    return 60; // High risk
  } else {
    return 50; // Very high risk
  }
}; 