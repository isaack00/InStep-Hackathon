"use client"

import * as React from "react"

import { NavMain } from "~/components/nav-main"
import { NavProjects } from "~/components/nav-projects"
import { NavUser } from "~/components/nav-user"
import { TeamSwitcher } from "~/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, Code, Code2, BookAIcon } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Isaac",
    email: "isaac.katsaros@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "InStep Team 1",
      logo: (
        <GalleryVerticalEndIcon
        />
      ),
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: " AI API Call Spaces",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "History",
          url: "/personal",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "AI Models Usage",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: [
        {
          title: "ChatGPT",
          url: "#",
        },
        {
          title: "Gemini",
          url: "#",
        },
        {
          title: "Claude",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: (
        <BookOpenIcon
        />
      ),
      items: [
        {
          title: "What is AIncentive",
          url: "#",
        },
        {
          title: "Optimising a Usage",
          url: "#",
        },
        {
          title: "How benefits work",
          url: "#",
        },
      
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "APRA Compliance Platform",
      url: "/dashboard",
      icon: (
        <Code
        />
      ),
    },
    {
      name: "Autonomous Runbook Generator",
      url: "#",
      icon: (
        <BookAIcon
        />
      ),
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
      
        <NavProjects projects={data.projects} />
          <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
