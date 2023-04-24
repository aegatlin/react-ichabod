import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children = "header content" }: HeaderProps) {
  return <header>{children}</header>;
}
