"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Settings, Shield, Cpu, Activity, LogOut, Sparkles } from "lucide-react"

interface TabletLayoutProps {
  children: React.ReactNode
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function TabletLayout({ children, activeTab, setActiveTab }: TabletLayoutProps) {
  const menuItems = [
    { id: "dashboard", icon: Activity, label: "Dashboard" },
    { id: "identification", icon: Shield, label: "Gem ID" },
    { id: "planning", icon: Cpu, label: "Cut Planning" },
    { id: "evaluation", icon: Sparkles, label: "Gem Evaluation" }, // Added Gem Evaluation tab
    { id: "control", icon: Settings, label: "Robot Control" },
  ]

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-background/40 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-6">
        <div className="mb-10 px-4 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-primary/20">
            <Cpu className="text-white" size={24} />
          </div>
          <h1 className="hidden md:block font-bold text-lg tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GEMCUT AI
          </h1>
          <p className="hidden md:block text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            SLIIT AIMS RESEARCH
          </p>
        </div>

        <nav className="flex-1 w-full px-3 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center justify-center md:justify-start gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                activeTab === item.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <item.icon
                size={22}
                className={cn(
                  "shrink-0",
                  activeTab === item.id ? "animate-pulse" : "group-hover:scale-110 transition-transform",
                )}
              />
              <span className="hidden md:block font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto w-full px-3 space-y-2 border-t border-white/10 pt-6">
          <button className="w-full flex items-center justify-center md:justify-start gap-4 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
            <LogOut size={22} />
            <span className="hidden md:block font-medium">System Shutdown</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Status Bar */}
        <header className="h-16 border-b border-white/10 bg-card/50 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">System Online</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="text-xs text-muted-foreground uppercase tracking-widest">
              Robot: <span className="text-foreground">ARM-X1 ACTIVE</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Current Time</p>
              <p className="font-mono text-xs">2025-12-29 14:42:05</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          {children}
        </div>
      </main>
    </div>
  )
}
