export interface Transaction {
  id: string;
  type: "expense" | "income";
  amount: string;
  category: string;
  description: string;
  date: string;
  notes?: string;
}

export interface BalanceCardItem {
  heading: string;
  logo: any;
  balance: number | string;
  description: string;
  color: string;
}

export interface BudgetCategoryData {
  category: string;
  spend: number;
  budget: number;
}

export interface PieChartData {
  name: string;
  value: number;
}

export interface Budget {
  id: number | string;
  category: string;
  limit: number;
}

export interface User {
    id: number | string;
    fullName: string;
    email: string;
    password?: string;
}