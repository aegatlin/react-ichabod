import { ReactNode } from "react";

interface LinkProps {
  href?: string;
  children?: ReactNode;
}

export function Link({ href = "/", children = "link" }: LinkProps) {
  return (
    <a href={href} className="">
      {children}
    </a>
  );
}
