"use client"

import React from "react"
import { FloatingNav } from "@/components/ui/Navbar/floating-navbar"
import { Home, Briefcase, User, Mail, FileCode } from "lucide-react"

export function FloatingNavBar() {
  const navItems = [
    {
      name: "Accueil",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Expériences",
      link: "#timeline",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Compétences",
      link: "#projects",
      icon: <FileCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projets",
      link: "#skills",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}