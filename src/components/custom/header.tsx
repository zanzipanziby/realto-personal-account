"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/custom/UserAvatar";

interface HeaderProps {
  username?: string;
}

export default function Header({ username = "John Doe" }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    // In a real app, you would clear authentication state/cookies here
    // Then redirect to login page
    router.push("/auth/login");
  };

  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <UserAvatar />
          <span className="font-medium text-lg">{username}</span>
        </div>

        <Button
          variant="ghost"
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <span>Logout</span>
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
