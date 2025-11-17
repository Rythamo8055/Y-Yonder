"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, MessageSquare, UserCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: LayoutGrid },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/profile", label: "Profile", icon: UserCircle },
];

export function DockNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider delayDuration={0}>
        <nav className="flex items-end h-16 p-2 gap-2 rounded-2xl border border-border/20 bg-background/50 backdrop-blur-lg shadow-lg">
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-2",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground scale-110 -translate-y-2"
                      : "bg-transparent text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground"
                  )}
                  // Prevent 404s on uncreated pages
                  onClick={(e) => {
                    if (item.href !== '/') e.preventDefault();
                  }}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>
    </div>
  );
}
