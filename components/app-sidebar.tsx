"use client"

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
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Users,
  Clock,
  Calendar,
  DollarSign,
  UserPlus,
  BarChart3,
  Brain,
  Settings,
  Building2,
  ChevronUp,
  User,
  TrendingUp,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    url: "/dashboard/employees",
    icon: Users,
  },
  {
    title: "Attendance",
    url: "/dashboard/attendance",
    icon: Clock,
  },
  {
    title: "Leave",
    url: "/dashboard/leave",
    icon: Calendar,
  },
  {
    title: "Payroll",
    url: "/dashboard/payroll",
    icon: DollarSign,
  },
  {
    title: "Recruitment",
    url: "/dashboard/recruitment",
    icon: UserPlus,
  },
  {
    title: "Performance",
    url: "/dashboard/performance",
    icon: BarChart3,
  },
  {
    title: "Career Growth",
    url: "/dashboard/career-growth",
    icon: TrendingUp,
  },
  {
    title: "Sentiment Analysis",
    url: "/dashboard/sentiment",
    icon: Heart,
  },
  {
    title: "AI Insights",
    url: "/dashboard/ai-optimization",
    icon: Brain,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  return (
    <Sidebar variant="inset" className="border-r border-slate-200">
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-2 py-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          {state === "expanded" && (
            <div>
              <h2 className="text-lg font-bold text-slate-900">HRMSPro</h2>
              <p className="text-xs text-slate-500">Enterprise Edition</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={state === "collapsed" ? item.title : undefined}
                  >
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  {state === "expanded" && (
                    <>
                      <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-medium">Admin User</span>
                        <span className="text-xs text-slate-500">admin@company.com</span>
                      </div>
                      <ChevronUp className="ml-auto w-4 h-4" />
                    </>
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
