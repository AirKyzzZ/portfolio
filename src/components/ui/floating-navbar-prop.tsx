"use client"

import React from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Home, Briefcase, User, Mail, FileCode } from "lucide-react"

export function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <FileCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}