"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"
import { User, PlusSquare, Rss, Compass, MessageSquare, MoreHorizontal } from "lucide-react"

const navItems = [
  {
    name: "Profile",
    href: "/",
    icon: User,
    color: "text-pink-500",
  },
  {
    name: "Create",
    href: "/create",
    icon: PlusSquare,
  },
  {
    name: "Feed",
    href: "/feed",
    icon: Rss,
  },
  {
    name: "Discover",
    href: "/discover",
    icon: Compass,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    name: "More",
    href: "/more",
    icon: MoreHorizontal,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r hidden md:block">
      <div className="h-full flex flex-col py-6">
        <div className="px-6 mb-8">
          <h1 className="text-2xl font-bold">DIVAS</h1>
        </div>

        <nav className="space-y-1 px-3 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                pathname === item.href ? "bg-gray-100" : "hover:bg-gray-50",
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  pathname === item.href && item.name === "Profile" ? item.color : "text-gray-500",
                )}
              />
              <span className={cn(pathname === item.href && item.name === "Profile" ? "text-pink-500" : "")}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
