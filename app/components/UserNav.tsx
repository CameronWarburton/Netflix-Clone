"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserNav() {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const user = session?.user;

  const initial = user?.name
    ? user.name[0]
    : user?.email
    ? user.email[0].toUpperCase()
    : "?";

  const displayName = user?.name
    ? user.name
    : user?.email
    ? user.email.split("@")[0]
    : "Guest";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src={user?.image || "https://ytkkvvxpjshqbchomwcx.supabase.co/storage/v1/object/public/user%20image/avatar.png"} />
            <AvatarFallback className="rounded-sm">
              {initial}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {isLoading ? (
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Loading...</p>
              <p className="text-xs leading-none text-muted-foreground">
                Loading...
              </p>
            </div>
          </DropdownMenuLabel>
        ) : (
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{displayName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email || "No email"}
              </p>
            </div>
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
