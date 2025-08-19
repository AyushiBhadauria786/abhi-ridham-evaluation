import Dashboard from "../pages/Dashboard";
import "@testing-library/jest-dom";
import useApi from "../hooks/useApi";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("../components/BalanceDisplayCard", () => ({
  default: vi.fn((props) => (
    <div data-testid="mock-balance-card" data-props={JSON.stringify(props)}>
      Balance card
    </div>
  )),
}));

vi.mock("../components/BudgetOverview", () => ({
  default: vi.fn((props) => (
    <div data-testid="mock-budget-overview" data-props={JSON.stringify(props)}>
      Budget Overview
    </div>
  )),
}));

vi.mock("../components/BudgetCategories", () => ({
  default: vi.fn((props) => (
    <div
      data-testid="mock-budget-categories"
      data-props={JSON.stringify(props)}
    >
      Budget Categories
    </div>
  )),
}));

vi.mock("../components/LastTransactions", () => ({
  default: vi.fn((props) => (
    <div
      data-testid="mock-last-transactions"
      data-props={JSON.stringify(props)}
    >
      Last Transactions
    </div>
  )),
}));

vi.mock("../hooks/useApi", () => ({
  default: vi.fn(),
}));

const mockTransactions = [
  {
    id: "t1",
    date: "2025-07-01",
    amount: 1000,
    type: "income",
    category: "Salary",
    description: "Monthly salary",
  },
  {
    id: "t2",
    date: "2025-07-05",
    amount: 50,
    type: "expense",
    category: "Food",
    description: "Groceries",
  },
  {
    id: "t3",
    date: "2025-07-10",
    amount: 200,
    type: "expense",
    category: "Rent",
    description: "July rent",
  },
  {
    id: "t4",
    date: "2025-07-12",
    amount: 30,
    type: "expense",
    category: "Food",
    description: "Restaurant",
  },
  {
    id: "t5",
    date: "2025-06-28",
    amount: 150,
    type: "expense",
    category: "Utilities",
    description: "June electricity",
  },
  {
    id: "t6",
    date: "2025-07-15",
    amount: 75,
    type: "expense",
    category: "Transport",
    description: "Fuel",
  },
  {
    id: "t7",
    date: "2025-07-14",
    amount: 120,
    type: "expense",
    category: "Shopping",
    description: "New shirt",
  },
  {
    id: "t8",
    date: "2025-07-13",
    amount: 500,
    type: "income",
    category: "Freelance",
    description: "Project payment",
  },
];

const mockBudgets = [
  { id: "b1", category: "Food", limit: 300 },
  { id: "b2", category: "Rent", limit: 800 },
  { id: "b3", category: "Utilities", limit: 100 },
  { id: "b4", category: "Transport", limit: 150 },
  { id: "b5", category: "Shopping", limit: 200 },
];

describe("Dashboard", () => {
  const mockDate = new Date();
  const originalDate = Date;

  afterAll(() => {
    global.Date = originalDate;
  });

  beforeEach(() => {
    vi.clearAllMocks();
    (useApi as vi.Mock).mockImplementation((url: string) => {
      if (url === "/transactions") {
        return { data: mockTransactions, loading: false };
      }
      if (url === "/budgets") {
        return { data: mockBudgets, loading: false };
      }
      return { data: null, loading: false };
    });
  });

  it("shows loading spinner when data is being fetched", () => {
    (useApi as vi.Mock).mockImplementation((url: string) => {
      if (url === "/transactions") {
        return { data: mockTransactions, loading: true };
      }
      if (url === "/budgets") {
        return { data: mockBudgets, loading: true };
      }
      return { data: null, loading: false };
    });

    render(<Dashboard />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.queryByText("Financial Overview")).not.toBeInTheDocument();
  });

  it("disables next month button when current month is displayed", async () => {
    render(<Dashboard />)

    const nextButton = screen.getByRole("button", {name: ">" });

    expect(nextButton).toBeDisabled();
    expect(nextButton).toHaveStyle("opacity: 0.5");
    expect(nextButton).toHaveStyle("pointer-events: none");

 

  })

});


