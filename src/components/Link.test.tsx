import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Link } from "./Link";
import userEvent from "@testing-library/user-event";

test("Link component", async () => {
  render(<Link href="/away">away</Link>);
  const link = await screen.findByRole("link", { name: "away" });
  expect(link.hasAttribute("href")).toBe(true);
  expect(link.getAttribute("href")).toBe("/away");
});

test("link with no props", async () => {
  render(<Link />);
  const link = await screen.findByRole("link", { name: "link" });
  expect(link.hasAttribute("href")).toBe(true);
  expect(link.getAttribute("href")).toBe("/");
});
