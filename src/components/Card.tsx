import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export function Card({ children = "card content" }: CardProps) {
  return <div className="">{children}</div>;
}
