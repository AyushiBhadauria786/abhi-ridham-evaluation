import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import axios from "axios";
import AddTransaction from "../pages/AddTransaction";
import { ToastContainer } from "react-toastify";


const mockToastSuccess = vi.fn();
const mockToastError = vi.fn();

vi.mock("react-toastify", async (importActual) => {
  const actual: any = await importActual();
  return {
    ...actual,
    toast: {
      success: (...args) => mockToastSuccess(...args),
      error: (...args) => mockToastError(...args),
    },
  };
});

vi.mock("../hooks/useApi", () => ({	
  __esModule: true,
  default: vi.fn(() => ({
    data: [
      { id: "1", category: "Groceries", limit: 500 },
      { id: "2", category: "Rent", limit: 2000 },
    ],
    error: null,
    loading: false,
  })),
}));

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;	



describe("AddTransaction Component", () => {
  
  const fillForm = async () => {
    const user = userEvent.setup();

  
    await user.type(screen.getByLabelText(/amount/i), "150");

   
    await user.click(screen.getByRole('combobox', { name: /category/i }));
    await user.click(await screen.findByRole('option', { name: /groceries/i }));

   
    await user.type(
      screen.getByLabelText(/description/i),
      "Weekly grocery shopping"
    );

    
    const dateInput = screen.getByLabelText(/select a date/i);
    fireEvent.change(dateInput, { target: { value: "24/07/2025" } });
  };

  beforeEach(() => {
    render(
      <>
        <AddTransaction />
        <ToastContainer />
      </>
    );
  });
  
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the form with default values", () => {
    expect(screen.getByText(/add new transaction/i)).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /expense/i })).toBeChecked();
    expect(screen.getByRole("radio", { name: /income/i })).not.toBeChecked();
    expect(screen.getByLabelText(/amount/i)).toHaveValue(null);
    expect(screen.getByRole("button", { name: /add transaction/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
  });


  it("should populate categories from useApi and default values", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('combobox', { name: /category/i }));
    
    expect(await screen.findByRole('option', { name: /groceries/i })).toBeInTheDocument();
    expect(await screen.findByRole('option', { name: /rent/i })).toBeInTheDocument();
    
    expect(await screen.findByRole('option', { name: /salary/i })).toBeInTheDocument();
  });


  it("should display validation errors when submitting an empty form", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /add transaction/i }));

    expect(await screen.findByText("Amount is required")).toBeInTheDocument();
    expect(await screen.findByText("Please select a category")).toBeInTheDocument();
    expect(await screen.findByText("Description is required")).toBeInTheDocument();
    expect(await screen.findByText("Date is required")).toBeInTheDocument();

    expect(mockedAxios.post).not.toHaveBeenCalled();
  });

  it("should submit the form successfully with valid data", async () => {
    mockedAxios.post.mockResolvedValue({ data: { id: "new-tx-1" } });

    await fillForm();
    
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /add transaction/i }));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "http://localhost:3001/transactions",
        expect.objectContaining({
          type: "expense",
          amount: 150, 
          category: "Groceries",
          description: "Weekly grocery shopping",
          date: "2025-07-24", 
        })
      );
    });

  
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith("Transaction added successfully!", expect.any(Object));
    });

    expect(screen.getByLabelText(/amount/i)).toHaveValue(null);
    expect(screen.getByLabelText(/description/i)).toHaveValue("");
  });

  
  it("should show an error toast when the API call fails", async () => {
    
    mockedAxios.post.mockRejectedValue(new Error("API Error"));

    await fillForm();

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /add transaction/i }));

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith("Failed to add transaction. Please try again.", expect.any(Object));
    });

    expect(screen.getByLabelText(/amount/i)).toHaveValue(150);
    expect(screen.getByLabelText(/description/i)).toHaveValue("Weekly grocery shopping");
  });

  
  it("should clear all form fields when the clear button is clicked", async () => {
    const user = userEvent.setup();
    await fillForm(); 

    expect(screen.getByLabelText(/amount/i)).toHaveValue(150);
    expect(screen.getByLabelText(/description/i)).toHaveValue("Weekly grocery shopping");
    
    await user.click(screen.getByRole("button", { name: /clear/i }));

    expect(screen.getByLabelText(/amount/i)).toHaveValue(null);
    expect(screen.getByLabelText(/description/i)).toHaveValue("");
    expect(screen.getByRole('combobox', { name: /category/i })).toHaveValue(""); 
    expect(screen.getByRole("radio", { name: /expense/i })).toBeChecked(); 
  });
});
