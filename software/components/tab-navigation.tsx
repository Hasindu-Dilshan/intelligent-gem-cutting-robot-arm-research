"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scan, Scissors, Settings, Monitor } from "lucide-react"
import { GemDashboard } from "@/components/gem-dashboard"
import { CutPlanning } from "@/components/cut-planning"
import { ArmControl } from "@/components/arm-control"

export function TabNavigation() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex h-full flex-col">
      <div className="border-b border-border bg-card px-6">
        <TabsList className="h-14 w-full justify-start gap-2 rounded-none border-0 bg-transparent p-0">
          <TabsTrigger
            value="dashboard"
            className="gap-2 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            <Monitor className="h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            value="identification"
            className="gap-2 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            <Scan className="h-4 w-4" />
            Gem Identification
          </TabsTrigger>
          <TabsTrigger
            value="cutting"
            className="gap-2 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            <Scissors className="h-4 w-4" />
            Cut Planning
          </TabsTrigger>
          <TabsTrigger
            value="control"
            className="gap-2 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            <Settings className="h-4 w-4" />
            Arm Control
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <TabsContent value="dashboard" className="m-0 h-full">
          <GemDashboard />
        </TabsContent>
        <TabsContent value="identification" className="m-0 h-full">
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">Gem identification content will be added next</p>
          </div>
        </TabsContent>
        <TabsContent value="cutting" className="m-0 h-full">
          <CutPlanning />
        </TabsContent>
        <TabsContent value="control" className="m-0 h-full">
          <ArmControl />
        </TabsContent>
      </div>
    </Tabs>
  )
}
