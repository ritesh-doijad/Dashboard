"use client"

import * as React from "react"
import {
  FileText,
  BookOpen,
  Link2,
  ExternalLink,
  Puzzle,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  MessageSquare,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function AbunSidebar() {
  const [articlesOpen, setArticlesOpen] = React.useState(true)

  return (
    <Sidebar className="border-r">
      {/* Sidebar Header */}
      <SidebarHeader className="px-4 py-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">abun</h1>

          {/* Site Selector */}
          <Select defaultValue="amazon.com">
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-pink-500" />
                <SelectValue placeholder="Select site" />
              </div>
            </SelectTrigger>
            <SelectContent className=" bg-white ">
              <SelectItem value="amazon.com">amazon.com</SelectItem>
              <SelectItem value="ebay.com">ebay.com</SelectItem>
              <SelectItem value="walmart.com">walmart.com</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="px-2">
        <SidebarMenu>
          {/* Articles Menu */}
          <Collapsible open={articlesOpen} onOpenChange={setArticlesOpen}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Articles</span>
                  </div>
                  {articlesOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>

            <CollapsibleContent>
              <SidebarMenuSub>
                {[
                  { label: "Create Article", color: "gray" },
                  { label: "Generated Articles", color: "blue" },
                  { label: "Keyword Projects", color: "gray" },
                  { label: "AI Keyword to Article", color: "gray" },
                  { label: "Steal Competitor Keyword", color: "gray" },
                  { label: "Import Keyword from GSC", color: "gray" },
                  { label: "Manual Keyword to Article", color: "gray" },
                  { label: "Bulk Keyword to Article", color: "gray" },
                  { label: "Longtail Keyword to Article", color: "gray" },
                  { label: "Article Settings", color: "gray" },
                ].map(({ label, color }) => (
                  <SidebarMenuSubItem key={label}>
                    <SidebarMenuSubButton className={`text-${color}-700`}>
                      {label}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>

          {/* Other Menu Items */}
          {[
            { label: "Auto Blog", icon: BookOpen },
            { label: "Internal Links", icon: Link2 },
            { label: "Free Backlinks", icon: ExternalLink },
            { label: "Integrations", icon: Puzzle },
            { label: "Subscription", icon: CreditCard },
            { label: "Affiliate Program", icon: Users },
            { label: "Help Center", icon: HelpCircle },
            { label: "Updates", icon: Bell },
            { label: "Live Chat Support", icon: MessageSquare },
            { label: "Profile", icon: User },
          ].map(({ label, icon: Icon }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton>
                <Icon className="h-4 w-4 text-blue-500" />
                <span>{label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
