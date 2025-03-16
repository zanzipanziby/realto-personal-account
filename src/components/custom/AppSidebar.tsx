"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PackageOpen,
  PencilRuler,
  Wrench,
  ChevronUp,
  LogOut,
} from "lucide-react";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserAvatar } from "@/components/custom/UserAvatar";

export function AppSidebar() {
  const user = {
    username: "John Doe",
  };
  const sidebarItems: SidebarItem[] = [
    {
      title: "Дизайн-проект",
      url: "design",
      icon: <PencilRuler />,
    },
    {
      title: "Комплектация",
      url: "equipment",
      icon: <PackageOpen />,
    },
    {
      title: "Ремонт под ключ",
      url: "repair",
      icon: <Wrench />,
    },
  ];
  const pathname = usePathname().split("/").at(-1);
  console.log(pathname);

  const renderSidebarGroup = (item: SidebarItem) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        isActive={item.title === pathname}
        className={`text-xl h-12`}
      >
        <Link href={item.url}>
          {item.icon}
          <span className={item.url === pathname ? "font-bold" : "font-medium"}>
            {item.title}
          </span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{sidebarItems.map(renderSidebarGroup)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className={`text-xl h-13 gap-4`}>
                  <UserAvatar />
                  <span>{user.username}</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem
                  className={`text-xl h-13 gap-4 cursor-pointer`}
                >
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

type SidebarItem = {
  title: string;
  url: string;
  icon: ReactElement;
};
