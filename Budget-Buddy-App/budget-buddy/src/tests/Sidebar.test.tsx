import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Sidebar from "../layouts/Sidebar";
import "@testing-library/jest-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logoutUser } from "../redux/authSlice";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual: any = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
    NavLink: vi.fn(({ to, children, style, ...rest }) => (
      <a
        href={to}
        style={typeof style === "function" ? style({ isActive: false }) : style}
        {...rest}
      >
        {children}
      </a>
    )),
  };
});

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
}));

vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock("../redux/authSlice", () => ({
  logoutUser: vi.fn(() => ({
    type: "auth/logoutUser",
    payload: {},
  })),
}));

describe("Sidebar", () => {
  const mockNavigate = vi.fn();
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as vi.Mock).mockReturnValue(mockNavigate);
    (useDispatch as vi.Mock).mockReturnValue(mockDispatch);
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("renders open sidebar with full content when isSidebarOpen is true", () => {
    render(<Sidebar isSidebarOpen={true} />);

    const sidebarElement = screen.getByRole("complementary");
    expect(sidebarElement).toHaveStyle("width: 250px");

    expect(screen.getByText("Finance")).toBeInTheDocument();
    expect(screen.getByText("Flow")).toBeInTheDocument();

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Add Transaction")).toBeInTheDocument();
    expect(screen.getByText("Transactions")).toBeInTheDocument();
    expect(screen.getByText("Budget")).toBeInTheDocument();
    expect(screen.getByText("Reports")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /logout/i }));

    expect(screen.getByAltText("wallet")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /dashboard/i })).toHaveAttribute(
      "href",
      "/dashboard"
    );
  });

  it("renders closed sidebar with some content when isSidebarOpen is false", () => {
    render(<Sidebar isSidebarOpen={false}  />);

    const sidebarElement = screen.getByRole("complementary");
    expect(sidebarElement).toHaveStyle("width: 100px");

    expect(screen.queryByText("Finance")).not.toBeInTheDocument();
    expect(screen.queryByText("Flow")).not.toBeInTheDocument();

    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
    expect(screen.queryByText("Add Transaction")).not.toBeInTheDocument();
    expect(screen.queryByText("Transactions")).not.toBeInTheDocument();
    expect(screen.queryByText("Budget")).not.toBeInTheDocument();
    expect(screen.queryByText("Reports")).not.toBeInTheDocument();
    expect(screen.queryByText("Contact")).not.toBeInTheDocument();
    expect(screen.queryByText("FAQ")).not.toBeInTheDocument();

    // expect(screen.getByRole("button", {name: /logout/i })).not.toBeInTheDocument;
    
    // const logoutButton = screen.getByRole("button");
    // expect(logoutButton).toBeInTheDocument();

    // expect(logoutButton).not.toHaveTextContent(/logout/i);

    expect(screen.getByAltText("wallet")).toBeInTheDocument();
  })

  it("dispatches logoutUser, navigate to /home, shows success toast on successful login", async () => {
    mockDispatch.mockReturnValue({
        unwrap: () => Promise.resolve(),
    });

    render(<Sidebar isSidebarOpen={true} />)

    const logoutButton = screen.getByRole("button", {name: /logout/i })
    fireEvent.click(logoutButton)

    await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(logoutUser).toHaveBeenCalled();
        expect (mockNavigate).toHaveBeenCalledWith("/home");
        expect(toast.success).toHaveBeenCalledWith("Logout Successful!", expect.any(Object));
        expect(toast.error).not.toHaveBeenCalled();    

    })

  })

  it("dispatches logoutUser, shows error toast message and logs error on failed logout", async () => {
    const error = new Error("Network error");
    mockDispatch.mockReturnValue({
        unwrap: () => Promise.reject(error),
    });

    render(<Sidebar isSidebarOpen={true} />)

    const logoutButton = screen.getByRole("button", {name: /logout/i });
    fireEvent.click(logoutButton);

    await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(logoutUser).toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(toast.error).toHaveBeenCalledWith("Logout failed.Please try again.");
        expect(toast.success).not.toHaveBeenCalled();
        expect(console.error).toHaveBeenCalledWith("Logout failed", error);
    })
  })

});
