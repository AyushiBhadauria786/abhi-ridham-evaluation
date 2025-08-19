import Signup from "../pages/signup/Signup";
import { store } from "../redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as authSlice from "../redux/authSlice";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock("../../redux/authSlice", () => ({
  registerUser: vi.fn(),
}));

const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("Signup Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders Signup form", () => {
    renderWithProviders(<Signup />);
    expect(screen.getByLabelText(/full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/)).toBeInTheDocument();
    
    // const passwordInput = screen.getByText(/password/i);
    // screen.debug(passwordInput);
    // expect(screen.getByLabelText(/password/)).toBeInTheDocument();
  });
});

describe("Rendering", () => {
  it("renders the signup form with all required fields", () => {
    renderWithProviders(<Signup />);

    expect(screen.getByText("Finance Flow")).toBeInTheDocument();
    expect(screen.getByText("Join FinanceFlow!")).toBeInTheDocument();
    expect(
      screen.getByText("Create your account and start your financial journey")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
  });

  it("renders the wallet icon and header correctly", () => {
    renderWithProviders(<Signup />);

    expect(screen.getByTestId("AccountBalanceWalletIcon")).toBeInTheDocument();
    expect(screen.getByText("Finance Flow")).toBeInTheDocument();
  });

  
});

describe("Signup Componenet", () => {

    it("allows users to type into input fields", () => {
    renderWithProviders(<Signup />);

    const fullNameInput = screen.getByLabelText(
      /Full Name/i
    ) as HTMLInputElement;
    const emailInput = screen.getByLabelText(
      /Email Address/i
    ) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(
      /^Password$/i
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByLabelText(
      /^Confirm Password$/
    ) as HTMLInputElement;

    // screen.debug(confirmPasswordInput);

    fireEvent.change(fullNameInput, { target: { value: "Ridham Kansara" } });
    expect(fullNameInput.value).toBe("Ridham Kansara");

    fireEvent.change(emailInput, { target: { value: "ridhamtest@example.com" } });
    expect(emailInput.value).toBe("ridhamtest@example.com");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    expect(passwordInput.value).toBe("Password123!");

    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });
    expect(confirmPasswordInput.value).toBe("Password123!");
  });

   it('toggles password visibility for password fields', () => {
    renderWithProviders(<Signup />);

    const passwordInput = screen.getByLabelText(/^Password$/i) as HTMLInputElement;
    const confirmPasswordInput = screen.getByLabelText(/Confirm Password/) as HTMLInputElement;

    const togglePasswordButton = passwordInput.nextElementSibling as HTMLElement;
    const toggleConfirmPasswordButton = confirmPasswordInput.nextElementSibling as HTMLElement;

   
    expect(passwordInput.type).toBe('password');
    expect(confirmPasswordInput.type).toBe('password');


    fireEvent.click(togglePasswordButton);
    expect(passwordInput.type).toBe('text');

    
    fireEvent.click(toggleConfirmPasswordButton);
    expect(confirmPasswordInput.type).toBe('text');

   
    fireEvent.click(togglePasswordButton);
    expect(passwordInput.type).toBe('password');


    fireEvent.click(toggleConfirmPasswordButton);
    expect(confirmPasswordInput.type).toBe('password');
  });

})
