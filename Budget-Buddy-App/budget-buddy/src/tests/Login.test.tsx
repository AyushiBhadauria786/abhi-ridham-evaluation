import { beforeEach, describe, expect, it, vi } from "vitest";
import LoginPage from "../pages/Login";
import { store } from "../redux/store";
import { toast } from "react-toastify";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as authSlice from "../redux/authSlice";

vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

export const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("LoginPage", () => {
  const mockLoginUser = vi.spyOn(authSlice, "loginUser");

  beforeEach(() => {
    mockLoginUser.mockClear();
  });

  it("renders login form", () => {
    renderWithProviders(<LoginPage />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/)).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    renderWithProviders(<LoginPage />);

    const passwordInput = screen.getByLabelText(/password/);
    const toggleButton = screen.getByLabelText(/toggle password visibility/i);

    screen.debug(passwordInput);

    expect(passwordInput).toHaveAttribute("type", "button");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "button");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "button");
  });

  it("shows validation errors when fields are empty", async () => {
    renderWithProviders(<LoginPage />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("calls loginUser and navigates on successful login", async () => {
    mockLoginUser.mockReturnValueOnce

    renderWithProviders(<LoginPage />);
  })


});
