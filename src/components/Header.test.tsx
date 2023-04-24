import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("with all props", async () => {
  render(<Header classes="class-one">anything</Header>);
  const header = await screen.findByText("anything");
  expect(header.getAttribute("class")).toBe("class-one");
});

test("with no props", async () => {
  render(<Header />);
  await screen.findByText("header content");
});
