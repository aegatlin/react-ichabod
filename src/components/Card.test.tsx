import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("with all props", async () => {
  render(<Card classes="c-one">anything</Card>);
  const card = await screen.findByText("anything");
  expect(card.getAttribute("class")).toBe("c-one");
});

test("with no props", async () => {
  render(<Card />);
  await screen.findByText("card content");
});
