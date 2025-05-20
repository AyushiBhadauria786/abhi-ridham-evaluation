import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FModal from "../component/Fmodal";
import { field } from "../component/Section";

const mockFields: field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    validation: { required: "Title is required" },
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    validation: { required: "Description is required" },
  },
];

describe("FModal Component", () => {
  const onCreate = vi.fn();
  const onClose = vi.fn();

  beforeEach(() => {
    onCreate.mockClear();
    onClose.mockClear();
  });

  it("renders modal with title and fields when open", () => {
    render(
      <FModal
        open={true}
        onClose={onClose}
        onCreate={onCreate}
        title="Test Modal"
        fields={mockFields}
      />
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  it("does not render modal content when closed", () => {
    render(
      <FModal
        open={false}
        onClose={onClose}
        onCreate={onCreate}
        title="Test Modal"
        fields={mockFields}
      />
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("shows validation error if submitted empty", async () => {
    render(
      <FModal
        open={true}
        onClose={onClose}
        onCreate={onCreate}
        title="Test Modal"
        fields={mockFields}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText("Title is required")).toBeInTheDocument();
      expect(screen.getByText("Description is required")).toBeInTheDocument();
    });

    expect(onCreate).not.toHaveBeenCalled();
  });

  it("calls onCreate and onClose with valid data and resets form", async () => {
    render(
      <FModal
        open={true}
        onClose={onClose}
        onCreate={onCreate}
        title="Test Modal"
        fields={mockFields}
      />
    );

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "My Title" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "My Description" },
    });

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(onCreate).toHaveBeenCalledWith({
        title: "My Title",
        description: "My Description",
      });
      expect(onClose).toHaveBeenCalled();
    });
  });

  it("calls onClose when clicking close button", () => {
    render(
      <FModal
        open={true}
        onClose={onClose}
        onCreate={onCreate}
        title="Test Modal"
        fields={mockFields}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "X" }));
    expect(onClose).toHaveBeenCalled();
  });
});
