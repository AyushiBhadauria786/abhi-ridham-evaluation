import Reports from "../pages/Reports";
import useApi from "../hooks/useApi";
import { render, screen, waitFor } from "@testing-library/react";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { CustomBarTooltip } from "../pages/Reports";
import MyPieChart from "../components/Piechart";
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';



vi.mock('../hooks/useApi');
const mockedUseApi = useApi as jest.Mock;


vi.mock("recharts", async (importActual) => {
  const actual = await importActual();
  return {
    ...actual,
    BarChart: vi.fn(({ children }) => (
      <div data-testid="mock-bar-chart">{children}</div>
    )),
    LineChart: vi.fn(({ children }) => (
      <div data-testid="mock-line-chart">{children}</div>
    )),
    ResponsiveContainer: vi.fn(({ children }) => (
      <div data-testid="responsive-container">{children}</div>
    )),
  };
});

vi.mock('../components/Piechart', () => ({
  default: vi.fn(() => <div data-testid="my-pie-chart">Mock Pie Chart</div>),
}));

// vi.mock('../components/BudgetOverview', () => ({
//   default: vi.fn(() => <div data-testid="budget-overview">Mock Budget Overview</div>),
// }));

const mockTransactions = [
  {
    id: 1,
    date: "2025-07-10",
    amount: 1000,
    type: "income",
    category: "Salary",
  },
  {
    id: 2,
    date: "2025-07-15",
    amount: 200,
    type: "expense",
    category: "Groceries",
  },
  {
    id: 3,
    date: "2025-07-20",
    amount: 50,
    type: "expense",
    category: "Transport",
  },
  {
    id: 4,
    date: "2025-07-25",
    amount: 300,
    type: "expense",
    category: "Groceries",
  },
  {
    id: 5,
    date: "2025-07-01",
    amount: 500,
    type: "income",
    category: "Freelance",
  },

  {
    id: 6,
    date: "2025-06-05",
    amount: 800,
    type: "income",
    category: "Salary",
  },
  {
    id: 7,
    date: "2025-06-10",
    amount: 150,
    type: "expense",
    category: "Dining",
  },
  {
    id: 8,
    date: "2025-06-20",
    amount: 100,
    type: "expense",
    category: "Groceries",
  },

  {
    id: 9,
    date: "2025-05-01",
    amount: 700,
    type: "income",
    category: "Salary",
  },
  {
    id: 10,
    date: "2025-05-10",
    amount: 250,
    type: "expense",
    category: "Rent",
  },
];

describe("Reports Component", () => {
 const MOCK_DATE = new Date('2025-07-28T10:00:00Z');

  beforeAll(() => {
    vi.setSystemTime(MOCK_DATE); 
  });

  afterAll(() => {
    vi.useRealTimers(); 
  });

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseApi.mockReturnValue({
      data: mockTransactions,
      loading: false,
      error: null,
    });
  });

   it('should display an error message if data fetching fails', () => {
    const errorMessage = 'Failed to fetch transactions.';
    mockedUseApi.mockReturnValue({ data: null, loading: false, error: errorMessage });
    render(<Reports />);
    expect(screen.getByText(`Failed to load reports data: ${errorMessage}`)).toBeInTheDocument();
  });

  it('should render the main titles and section headers', async () => {
    render(<Reports />);
     await waitFor(() => {
      expect(screen.getByRole('heading', { name: /financial reports/i, level: 4 })).toBeInTheDocument();
      expect(screen.getByText(/comprehensive insights into your financial health/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /monthly overview/i, level: 6 })).toBeInTheDocument();
      expect(screen.getByText(/income, expenses, and savings over the last 3 months/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /spending by category/i, level: 6 })).toBeInTheDocument();
      expect(screen.getByText(/current month breakdown/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /spending trends/i, level: 6 })).toBeInTheDocument();
      expect(screen.getByText(/monthly spending pattern/i)).toBeInTheDocument();
    });
  });

it('should render BarChart with correct monthly summary data', async () => {
    render(<Reports />);

    await waitFor(() => {
      expect(BarChart).toHaveBeenCalledTimes(1);
      const barChartProps = (BarChart as vi.Mock).mock.calls[0][0];

      expect(barChartProps.data).toEqual([
        { name: 'May', Income: 700, Expenses: 250, Savings: 450 },
        { name: 'Jun', Income: 800, Expenses: 250, Savings: 550 },
        { name: 'Jul', Income: 1500, Expenses: 550, Savings: 950 },
      ]);

      expect(Bar).toHaveBeenCalledTimes(3);
      expect(Bar).toHaveBeenCalledWith(expect.objectContaining({ dataKey: 'Income', fill: '#3182CE' }), expect.any(Object));
      expect(Bar).toHaveBeenCalledWith(expect.objectContaining({ dataKey: 'Expenses', fill: '#E53E3E' }), expect.any(Object));
      expect(Bar).toHaveBeenCalledWith(expect.objectContaining({ dataKey: 'Savings', fill: '#48BB78' }), expect.any(Object));

      expect(XAxis).toHaveBeenCalledTimes(2);
      expect(YAxis).toHaveBeenCalledTimes(2);
      expect(Tooltip).toHaveBeenCalledTimes(2);
      expect(Legend).toHaveBeenCalledTimes(2);
    });
  });

  it('should render MyPieChart with correct category spending data', async () => {
    render(<Reports />);

    await waitFor(() => {
      expect(MyPieChart).toHaveBeenCalledTimes(1);
      const pieChartProps = (MyPieChart as vi.Mock).mock.calls[0][0];

      expect(pieChartProps.data).toEqual(expect.arrayContaining([
        expect.objectContaining({ name: 'Groceries', value: 500 }), 
        expect.objectContaining({ name: 'Transport', value: 50 }),
      ]));
      expect(pieChartProps.data).toHaveLength(2);
    });
  });

   it('should display "No expense data for this month" if category spending is empty', async () => {
    mockedUseApi.mockReturnValue({
      data: [{ id: 1, date: '2025-07-10', amount: 1000, type: 'income', category: 'Salary' }],
      loading: false,
      error: null,
    });
    render(<Reports />);

    await waitFor(() => {
      expect(screen.getByText('No expense data for this month.')).toBeInTheDocument();
      expect(screen.queryByTestId('my-pie-chart')).not.toBeInTheDocument();
    });
  });

it('should render LineChart with correct monthly expenses data', async () => {
    render(<Reports />);

    await waitFor(() => {
      expect(LineChart).toHaveBeenCalledTimes(1);
      const lineChartProps = (LineChart as vi.Mock).mock.calls[0][0];

      expect(lineChartProps.data).toEqual([
        { name: 'May', Income: 700, Expenses: 250, Savings: 450 },
        { name: 'Jun', Income: 800, Expenses: 250, Savings: 550 },
        { name: 'Jul', Income: 1500, Expenses: 550, Savings: 950 },
      ]);

      expect(Line).toHaveBeenCalledWith(expect.objectContaining({ dataKey: 'Expenses', stroke: '#8884d8' }), expect.any(Object));
      expect(XAxis).toHaveBeenCalledWith(expect.objectContaining({ dataKey: 'name' }), expect.any(Object));
    });
  });

  it('CustomBarTooltip should render correctly when active', () => {
    const payload = [
      { name: 'Income', value: 1500, fill: '#3182CE', dataKey: 'Income' },
      { name: 'Expenses', value: 550, fill: '#E53E3E', dataKey: 'Expenses' },
      { name: 'Savings', value: 950, fill: '#48BB78', dataKey: 'Savings' },
    ];
    const { getByText } = render(<CustomBarTooltip active={true} payload={payload} label={'Jul'} />);

    expect(getByText('Jul')).toBeInTheDocument();
    expect(getByText('Income: ₹1,500')).toBeInTheDocument();
    expect(getByText('Expenses: ₹550')).toBeInTheDocument();
    expect(getByText('Savings: ₹950')).toBeInTheDocument();
  });

  it('CustomBarTooltip should return null when not active', () => {
    const { container } = render(<CustomBarTooltip active={false} payload={[]} label={''} />);
    expect(container).toBeEmptyDOMElement();  
  });
});
