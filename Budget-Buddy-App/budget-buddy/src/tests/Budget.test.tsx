import Budget from "../pages/Budget";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useApi from "../hooks/useApi";

vi.mock("../hooks/useApi");
const mockedUseApi = vi.mocked(useApi);

const mockBudgets = [
  { id: 1, name: "Groceries", limit: 300, currentSpent: 200 },
  { id: 2, name: "Utilities", limit: 150, currentSpent: 100 },
];

describe("Budget Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseApi.mockReturnValue({
        data: mockBudgets,
        loading: false,
        error: null,
        refetch: vi.fn(),
    });
  });

 it('should render the title and "Add Category" button', async () => {
    render(<Budget />);
    expect(await screen.findByText('Manage Budget Categories')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add category/i })).toBeInTheDocument();
  });

  it('should render the budget table with correct headers and data', async () => {
    render(<Budget />);

     await screen.findByText('Your Categories');

    expect(screen.getByRole("columnheader", { name: /category name/i })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: /monthly limit/i })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: /actions/i })).toBeInTheDocument();

  
    // expect(await screen.findByText('Groceries')).toBeInTheDocument();
    expect(screen.getByText('₹300')).toBeInTheDocument();

    // expect(await screen.findByText('Utilities')).toBeInTheDocument();
    expect(screen.getByText('₹150')).toBeInTheDocument();
  });
});