import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  classes?: string;
}

export function Card({ children = "card content", classes = "" }: CardProps) {
  return <div className={classes}>{children}</div>;
}
