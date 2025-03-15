import { ReactNode } from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function PersonalAccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar />

      <main className={"container mx-auto px-4 py-3"}>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
