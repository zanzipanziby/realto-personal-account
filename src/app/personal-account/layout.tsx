import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/AppSidebar";
import { Container } from "@/components/custom/Container";

export default function PersonalAccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={"container mx-auto px-4 py-3"}>
        <SidebarTrigger />
        <Container>{children}</Container>
      </main>
    </SidebarProvider>
  );
}
