import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Transactions from "../pages/Transactions";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import * as useApiModule from "../hooks/useApi";
import axios from "axios";
import useApi from "./__mocks__/useApi";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual: any = await importOriginal();
  return {
    ...actual, 
    useNavigate: () => mockNavigate,
  };
});

vi.mock("axios");

vi.mock("../hooks/useApi");

// Sample transaction data
const mockTransactions = [
  {
    id: 1,
    description: "Test Salary",
    category: "Salary",
    amount: 1000,
    type: "income",
    date: "2023-12-01",
  },
  {
    id: 2,
    description: "Groceries",
    category: "Food",
    amount: 200,
    type: "expense",
    date: "2023-12-03",
  },
];

describe("Transaction Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useApiModule.default as vi.Mock).mockClear();
  });

  it("shows loading state", () => {
     (useApiModule.default as vi.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: vi.fn(),
    });


    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

   it("shows error state", () => {
    (useApiModule.default as vi.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: "Server Error",
      refetch: vi.fn(),
    });

    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    expect(screen.getByText(/failed to load transactions/i)).toBeInTheDocument();
  });

  it("navigates to add transaction page when button is clicked", async () => {
    (useApiModule.default as vi.Mock).mockReturnValue({
      data: mockTransactions,
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );
    
    const addButton = screen.getByRole('button', { name: /add transaction/i });
    await userEvent.click(addButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/add-transaction');
  });

});
