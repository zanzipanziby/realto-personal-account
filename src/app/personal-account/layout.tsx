import { ReactNode } from "react";
import Header from "@/components/custom/header";

export default function PersonalAccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
