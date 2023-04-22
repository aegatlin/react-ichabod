import { test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("Card component", async () => {
  render(<Card>anything</Card>);
  await screen.findByText("anything");
});

test("card with no props", async () => {
  render(<Card />);
  await screen.findByText("card content");
});
