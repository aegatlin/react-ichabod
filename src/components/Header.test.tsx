import { test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("with all props", async () => {
  render(<Header>anything</Header>);
  await screen.findByText("anything");
});

test("with no props", async () => {
  render(<Header />);
  await screen.findByText("header content");
});
