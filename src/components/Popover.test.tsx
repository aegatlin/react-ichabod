import { jest, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Popover } from "./Popover";
import userEvent from "@testing-library/user-event";

function setup() {
  return {
    user: userEvent.setup(),
  };
}

test("with all props", async () => {
  const { user } = setup();
  const onClickMock = jest.fn();

  render(
    <Popover>
      <Popover.Button onClick={onClickMock} classes="class-one">
        popover button
      </Popover.Button>
      <Popover.Panel classes="class-two">popover panel content</Popover.Panel>
    </Popover>
  );

  const button = screen.getByRole("button", { name: "popover button" });
  expect(button.getAttribute("class")).toBe("class-one");
  expect(screen.queryByText("popover panel content")).toBeNull();
  await user.click(button);
  expect(onClickMock).toHaveBeenCalledWith({ state: "opening" });
  const popover = screen.getByText("popover panel content");
  expect(popover.getAttribute("class")).toBe("class-two");
  await user.click(button);
  expect(onClickMock).toHaveBeenCalledWith({ state: "closing" });
  expect(screen.queryByText("popover panel content")).toBeNull();
});

test("with disabled", async () => {
  const { user } = setup();
  const onClickMock = jest.fn();

  render(
    <Popover>
      <Popover.Button disabled={true} onClick={onClickMock}>
        popover button
      </Popover.Button>
      <Popover.Panel>popover panel content</Popover.Panel>
    </Popover>
  );

  const button = screen.getByRole("button", { name: "popover button" });
  expect(screen.queryByText("popover panel content")).toBeNull();
  await user.click(button);
  expect(onClickMock).not.toHaveBeenCalled();
  expect(screen.queryByText("popover panel content")).toBeNull();
});

test("with no props", async () => {
  const { user } = setup();

  render(
    <Popover>
      <Popover.Button />
      <Popover.Panel />
    </Popover>
  );

  const button = screen.getByRole("button", { name: "button" });
  expect(screen.queryByText("panel content")).toBeNull();
  await user.click(button);
  screen.getByText("panel content");
  await user.click(button);
  expect(screen.queryByText("popover panel content")).toBeNull();
});
