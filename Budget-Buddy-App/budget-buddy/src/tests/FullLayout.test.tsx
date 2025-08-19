import { render, screen } from "@testing-library/react";
import FullLayout from "../layouts/FullLayout";
import React from "react";
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "./Login.test";


vi.mock("../layouts/Sidebar", () => ({
    default: ({isSidebarOpen}: {isSidebarOpen: boolean}) => (
        <div data-testid="sidebar">Sidebar {isSidebarOpen ? "Open" : "Closed"}</div>
    )
}))


vi.mock("../layouts/DashboardHeader", () => ({
    default: ({ handleSidebarToggle } : {handleSidebarToggle: () => void}) => (
        <button onClick={handleSidebarToggle} data-testid="header-toggle">
            Toggle Sidebar
        </button>
    )
}))


vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        Outlet: () => <div data-testid="outlet">Outlet content</div>,
    };
});


describe("FullLayout", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("renders Sidebar, Header, and Outlet", () => {
        renderWithProviders(<FullLayout />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        expect(screen.getByTestId("header-toggle")).toBeInTheDocument();
        expect(screen.getByTestId("outlet")).toBeInTheDocument();
    });

    it("Shows 'Sidebar open' by default", () => {
        renderWithProviders(<FullLayout />);
        expect(screen.getByText(/Sidebar Open/i)).toBeInTheDocument();
    });

    it("toggles sidebar when header button click",async () => {
        const user = userEvent.setup();
        renderWithProviders(<FullLayout />);
        const toggleButton = screen.getByTestId("header-toggle");

        await user.click(toggleButton);
        expect(screen.getByText(/Sidebar Closed/i)).toBeInTheDocument();

        await user.click(toggleButton);
        expect(screen.getByText(/Sidebar Open/i)).toBeInTheDocument();
    });

    it("applies correct margin-left based on sidebar state", async () => {
        const user = userEvent.setup();
        renderWithProviders(<FullLayout />);
        const mainBox = screen.getByRole("main");

        expect(mainBox).toHaveStyle("margin-left: 250px")

        const toggleButton = screen.getByTestId("header-toggle");
        await user.click(toggleButton);
        expect(mainBox).toHaveStyle("margin-left: 100px");
    });
})