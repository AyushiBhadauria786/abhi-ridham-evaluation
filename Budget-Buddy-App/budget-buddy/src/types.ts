export interface Transaction {
    id: string;
    type: 'expense' | 'income';
    amount: string;
    category: string;
    description: string;
    date: string;
    notes: string;
}


export interface BalanceCardItem {
    heading: string;
    logo: string;
    balance: number;
    description: string;
}


export interface BudgetCategoryData {
    name: string;
    value: number;
    budget: number
}

export interface PieChartData {
    id: string;
    value: number;
    label: string;
}