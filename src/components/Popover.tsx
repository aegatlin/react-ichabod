import { ReactNode, createContext, useContext, useState } from "react";

const IsOpenContext = createContext(false);
const ToggleOpenContext = createContext(() => {});

function useIsOpen() {
  return useContext(IsOpenContext);
}

function useToggleOpen() {
  return useContext(ToggleOpenContext);
}

function Root({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IsOpenContext.Provider value={isOpen}>
      <ToggleOpenContext.Provider value={() => setIsOpen(!isOpen)}>
        {children}
      </ToggleOpenContext.Provider>
    </IsOpenContext.Provider>
  );
}

interface ButtonProps {
  children?: ReactNode;
  onClick?: (_: { state: "opening" | "closing" }) => void;
  classes?: string;
  disabled?: boolean;
}

function Button({
  children = "button",
  onClick = () => {},
  classes = "",
  disabled = false,
}: ButtonProps) {
  const isOpen = useIsOpen();
  const toggleOpen = useToggleOpen();

  // toggleOpen should come first because it is better user experience
  const handleClick = () => {
    toggleOpen();
    onClick({ state: isOpen ? "closing" : "opening" });
  };

  return (
    <button disabled={disabled} onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}

interface PanelProps {
  children?: ReactNode;
  classes?: string;
}

function Panel({ children = "panel content", classes = "" }: PanelProps) {
  const isOpen = useIsOpen();
  if (!isOpen) return null;
  return <div className={classes}>{children}</div>;
}

/**
 * # Popover
 *
 * A popover is a generic dropdown or menu.
 *
 * Popover is the container component, and Popover.Button toggles open
 * Popover.Panel.
 *
 * ## Notes
 *
 * ## Example
 *
 * ```js
 * <Popover>
 *  <Popover.Button onClick={() => ...}>click me</Popover.Button>
 *  <Popover.Panel>in here you can put anything, really</Popover.Panel>
 * <Popover>
 * ```
 */
export const Popover = Object.assign(Root, {
  /**
   * # Popover Button
   */
  Button,
  /**
   * # Popover Panel
   *
   * ## Notes
   *
   * Popover.Panel should not need any classes. It is recommended to use it as
   * an unstyled container div. A `classes` prop is still provided, just not
   * recommended.
   */
  Panel,
});
