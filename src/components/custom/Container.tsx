import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className={"mt-6"}>{children}</div>;
};
