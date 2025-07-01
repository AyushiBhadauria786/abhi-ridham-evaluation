export interface Transaction {
    id: string;
    type: 'expense' | 'income';
    amount: string;
    categories: string;
    description: string;
    date: string;
    notes: string;
}