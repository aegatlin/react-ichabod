import { test, expect, jest } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

function setup() {
  return {
    user: userEvent.setup(),
  };
}

test("Button component", async () => {
  const { user } = setup();

  const mock = jest.fn();
  render(<Button onClick={mock}>click me</Button>);
  const button = await screen.findByRole("button", { name: "click me" });
  await user.click(button);
  expect(mock).toHaveBeenCalled();
});

test("disabled button", async () => {
  const { user } = setup();

  const mock = jest.fn();
  render(
    <Button disabled onClick={mock}>
      click me
    </Button>
  );
  const button = await screen.findByRole("button", { name: "click me" });
  await user.click(button);
  expect(mock).not.toHaveBeenCalled();
});

test("button with no props", async () => {
  const { user } = setup();

  render(<Button />);
  const button = await screen.findByRole("button", { name: "button" });
  await user.click(button);
});
