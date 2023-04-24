import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
  classes?: string;
}

export function Header({
  children = "header content",
  classes = "",
}: HeaderProps) {
  return <header className={classes}>{children}</header>;
}
