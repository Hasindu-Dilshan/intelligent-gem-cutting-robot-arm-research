"use client"

import { useState } from "react"
import { TabletLayout } from "@/components/tablet-layout"
import { GemDashboard } from "@/components/gem-dashboard"
import { CutPlanning } from "@/components/cut-planning"
import { ArmControl } from "@/components/arm-control"
import { GemEvaluation } from "@/components/gem-evaluation"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <TabletLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="h-full">
        {activeTab === "dashboard" && <GemDashboard />}
        {activeTab === "identification" && (
          <div className="flex h-full items-center justify-center industrial-container">
            <p className="text-muted-foreground font-mono">LASER_SCAN_ID_MODULE: OFFLINE</p>
          </div>
        )}
        {activeTab === "planning" && <CutPlanning />}
        {activeTab === "control" && <ArmControl />}
        {activeTab === "evaluation" && <GemEvaluation />}
      </div>
    </TabletLayout>
  )
}
