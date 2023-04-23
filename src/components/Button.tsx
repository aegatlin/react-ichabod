import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  classes?: string;
}

export function Button({
  children = "button",
  onClick = () => {},
  disabled = false,
  classes = "",
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
