import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import { MemoryRouter } from "react-router";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});
