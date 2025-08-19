import DashboardHeader from "../layouts/DashboardHeader";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
}));

describe("DashboardHeader", () => {
  beforeEach(() => {
    (useLocation as vi.Mock).mockReturnValue({ pathname: "/" });
    (useSelector as vi.mock).mockReturnValue({ user: null });
  });
  it("renders the dashboard header with default title and username when no user data and root path", () => {
    render(<DashboardHeader handleSidebarToggle={() => {}} />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();

    expect(screen.getByText("User")).toBeInTheDocument();

    expect(screen.getByText("U")).toBeInTheDocument();
  });

  it("displays correct page name based on pathname", () => {
    (useLocation as vi.Mock).mockReturnValue({ pathname: "/my-profile" });

    render(<DashboardHeader handleSidebarToggle={() => {}} />);

    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  });

  it("displays the user's fullName and vthe first letter when user data is available", () => {
    (useSelector as vi.Mock).mockReturnValue({
      user: { fullName: "Ridham Kansara" },
    });
    render(<DashboardHeader handleSidebarToggle={() => {}} />);

    expect(screen.getByText("Ridham Kansara")).toBeInTheDocument();

    expect(screen.getByText("R")).toBeInTheDocument();
  });

  it("handleSidebarToggle called when the menu icon button clicked", () => {
    const mockHandleSidebarToggle = vi.fn();

    render(<DashboardHeader handleSidebarToggle={mockHandleSidebarToggle} />);

    const menuButton = screen.getByRole("button", { name: /menu/i });

    screen.debug(menuButton);

    fireEvent.click(menuButton);

    expect(mockHandleSidebarToggle).toHaveBeenCalledTimes(1);
  });

  it("displays 'Member' text for the user role", () => {
    render(<DashboardHeader handleSidebarToggle={() => {}} />);
    expect(screen.getByText("Member")).toBeInTheDocument();
  });
});
