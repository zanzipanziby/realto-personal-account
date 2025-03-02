"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DefaultAvatar from "@/assets/DefaultAvatar.jpg";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src={DefaultAvatar.src} />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  );
}
