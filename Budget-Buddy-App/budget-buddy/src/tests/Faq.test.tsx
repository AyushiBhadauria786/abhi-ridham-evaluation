import Faq from "../pages/Faq";
import useApi from "../hooks/useApi";
import { afterEach, describe, it, expect, vi ,beforeEach} from "vitest";

import "@testing-library/jest-dom";
import {  MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


vi.mock("../hooks/useApi");
const mockedUseApi = useApi as jest.Mock;

const mockFaqData = [
  {
    id: 1,
    title: "Getting Started",
    faqs: [
      {
        id: 101,
        question: "How do I create an account?",
        answer: "You can sign up using email address on the registration page.",
        keywords: ["signup", "register", "account"],
      },
      {
        id: 102,
        question: "What is the dashboard for?",
        answer: "The dashboard gives you an overview of finances.",
        keywords: ["summary", "overview"],
      },
    ],
  },
  {
    id: 2,
    title: "Transactions",
    faqs: [
      {
        id: 201,
        question: "How do I add a new transaction?",
        answer: "Navigate to the 'Add Transaction' page and fill out the form.",
        keywords: ["expense", "income", "add"],
      },
    ],
  },
];

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Faq />
    </MemoryRouter>
  );
};

describe("Faq Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should display a loading spinner while data is being fetched", () => {
    mockedUseApi.mockReturnValue({ data: null, loading: true, error: null });
    renderComponent();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should display error message if data fetching fails", () => {
    const errorMessage = "Failed to load data";
    mockedUseApi.mockReturnValue({
      data: null,
      loading: false,
      error: errorMessage,
    });
    renderComponent();
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  describe("when data is loaded successfully", () => {
    beforeEach(() => {
      mockedUseApi.mockReturnValue({
        data: mockFaqData,
        loading: false,
        error: null,
      });
      renderComponent();
    });

    it("should render the title and search bar", () => {
      expect(
        screen.getByText("Frequently Asked Questions")
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Search FAQ...")).toBeInTheDocument();
    });

    it("should display all FAQ sections and questions initially", () => {
      expect(screen.getByText("Getting Started")).toBeInTheDocument();
      expect(screen.getByText("Transactions")).toBeInTheDocument();

      expect(
        screen.getByText("How do I create an account?")
      ).toBeInTheDocument();
      expect(
        screen.getByText("What is the dashboard for?")
      ).toBeInTheDocument();
      expect(
        screen.getByText("How do I add a new transaction?")
      ).toBeInTheDocument();
    });

    it("should filter FAQs based on a search query matching a question", async () => {
      const user = userEvent.setup();
      const searchInput = screen.getByPlaceholderText("Search FAQ...");

      await user.type(searchInput, "dashboard");

      expect(screen.getByText("Getting Started")).toBeInTheDocument();
      expect(
        screen.getByText("What is the dashboard for?")
      ).toBeInTheDocument();

      expect(
        screen.queryByText("How do I create an account?")
      ).not.toBeInTheDocument();
      expect(screen.queryByText("Transactions")).not.toBeInTheDocument();
    });

    it("should filter FAQs based on a search query matching an answer", async () => {
      const user = userEvent.setup();
      const searchInput = screen.getByPlaceholderText("Search FAQ...");
      
      await user.type(searchInput, "email address");

      expect(screen.getByText("Getting Started")).toBeInTheDocument();
      expect(screen.getByText("How do I create an account?")).toBeInTheDocument();
      expect(screen.queryByText("What is the dashboard for?")).not.toBeInTheDocument();
    });

      it("should filter FAQs based on a search query matching a keyword", async () => {
      const user = userEvent.setup();
      const searchInput = screen.getByPlaceholderText("Search FAQ...");
      
      await user.type(searchInput, "income");

      expect(screen.getByText("Transactions")).toBeInTheDocument();
      expect(screen.getByText("How do I add a new transaction?")).toBeInTheDocument();
      expect(screen.queryByText("Getting Started")).not.toBeInTheDocument();
    });

    it("sholuld be case-incensitive when searching", async () => {
        const user = userEvent.setup();
        const searchInput = screen.getByPlaceholderText("Search FAQ...");

        await user.type(searchInput,"SIGNUP");

        expect(screen.getByText("Getting Started")).toBeInTheDocument();
        expect(screen.getByText("How do I create an account?")).toBeInTheDocument();
        expect(screen.queryByText("What is the dashboard for?")).not.toBeInTheDocument();
    })

    it("should display a 'No results found' message for non-matching queries", async () => {
        const user = userEvent.setup();
        const searchInput = screen.getByPlaceholderText("Search FAQ...");

        await user.type(searchInput,"xyznonexistentquery");

        expect(screen.getByText("No results found")).toBeInTheDocument();
        expect(screen.queryByText("Getting Started")).not.toBeInTheDocument();
        expect(screen.queryByText("Transactions")).not.toBeInTheDocument();
    })

    it("should restore all FAQs when the search query is cleared", async () => {
        const user = userEvent.setup();
        const searchInput = screen.getByPlaceholderText("Search FAQ...");

        await user.type(searchInput, "dashboard");
        expect(screen.queryByText("How do I create an account?")).not.toBeInTheDocument();

        await user.clear(searchInput);

        expect(screen.getByText("How do I create an account?")).toBeInTheDocument();
        expect(screen.getByText("What is the dashboard for?")).toBeInTheDocument();
        expect(screen.getByText("How do I add a new transaction?")).toBeInTheDocument();
    });

    it("should render the contact support section with a NavLink", () => {
        expect(screen.getByText("Still have questions?")).toBeInTheDocument();
        const contactLink = screen.getByRole('link', { name: /contact support/i });
        expect(contactLink).toBeInTheDocument();
        expect(contactLink).toHaveAttribute('href', '/contact');
    });

  });
});
