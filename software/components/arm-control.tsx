"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Zap, Terminal, AlertTriangle, Power, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RefreshCw } from "lucide-react"

export function ArmControl() {
  const [logs, setLogs] = useState<string[]>([
    "SYS_INIT: ARM_CONTROLLER_V1.2 STARTUP...",
    "CON_OK: ARDUINO_MEGA_2560 LINKED",
    "CAL_OK: SERVOS_HOME_POSITION_SET",
    "RDY: WAITING_FOR_GCODE_STREAM",
  ])

  const [jointAngles, setJointAngles] = useState({
    base: 90,
    shoulder: 45,
    elbow: 120,
    wrist: 180,
    gripper: 0,
  })

  // Simulate incoming G-code logs
  useEffect(() => {
    const interval = setInterval(() => {
      const gCodes = [
        "G1 X12.5 Y8.2 Z4.1 F150",
        "M03 S2500 (SPINDLE_START)",
        "G01 Z3.8 (FEED_CONTACT)",
        "G02 X15.0 Y10.0 R5.0",
      ]
      const randomCode = gCodes[Math.floor(Math.random() * gCodes.length)]
      setLogs((prev) => [...prev.slice(-9), `TX: ${randomCode}`])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid h-full grid-cols-12 gap-6">
      {/* Left: Telemetry & Joints */}
      <div className="col-span-12 space-y-6 lg:col-span-4">
        <div className="industrial-container bg-muted/20">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-black uppercase italic tracking-wider">
            <Zap className="h-4 w-4 text-primary" /> Axis Telemetry
          </h3>
          <div className="space-y-6">
            {Object.entries(jointAngles).map(([joint, angle]) => (
              <div key={joint} className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] uppercase font-bold">
                  <span>Joint_{joint}</span>
                  <span className="text-primary">{angle}°</span>
                </div>
                <Progress value={(angle / 180) * 100} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>

        <Card className="border-2 border-destructive bg-destructive/5 industrial-container">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="flex items-center gap-2 text-xs font-black uppercase text-destructive">
              <AlertTriangle className="h-4 w-4" /> Safety Protocols
            </CardTitle>
          </CardHeader>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase">
              <span>Collision Detection</span>
              <Badge variant="outline" className="text-emerald-500 border-emerald-500 bg-emerald-500/10">
                NOMINAL
              </Badge>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold uppercase">
              <span>Servo Temp</span>
              <span className="font-mono">38.4°C</span>
            </div>
            <Button
              variant="destructive"
              className="w-full h-12 font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              EMERGENCY STOP
            </Button>
          </div>
        </Card>
      </div>

      {/* Center: 3D Visualization Placeholder & Manual Controls */}
      <div className="col-span-12 space-y-6 lg:col-span-5">
        <div className="industrial-container aspect-square bg-foreground flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 left-4 font-mono text-[10px] text-background opacity-40 uppercase">
            LIVE_RENDER // KINEMATICS_SOLVER
          </div>

          {/* Schematic Robotic Arm Representation */}
          <div className="relative w-64 h-64 border border-background/20 rounded-full flex items-center justify-center">
            <div className="absolute bottom-0 w-32 h-4 bg-primary/40 mb-12" />
            <div className="w-1 h-32 bg-primary animate-pulse origin-bottom rotate-[30deg]" />
            <div className="w-1 h-24 bg-primary animate-pulse origin-bottom -rotate-[45deg] translate-y-[-120px] translate-x-[60px]" />

            {/* Target Marker */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 border border-primary animate-ping" />
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 px-4">
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur px-3 py-1.5 rounded text-[10px] font-mono text-background uppercase">
              <RefreshCw className="h-3 w-3" /> Auto-Correction: ON
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="industrial-container flex flex-col items-center justify-center gap-4 bg-muted/10">
            <div className="grid grid-cols-3 gap-2">
              <div />
              <Button size="icon" variant="outline" className="border-2 bg-transparent">
                <ArrowUp className="h-4 w-4" />
              </Button>
              <div />
              <Button size="icon" variant="outline" className="border-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-primary">
                <Power className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-2 bg-transparent">
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div />
              <Button size="icon" variant="outline" className="border-2 bg-transparent">
                <ArrowDown className="h-4 w-4" />
              </Button>
              <div />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Manual Override
            </span>
          </div>

          <div className="industrial-container space-y-3 bg-muted/10">
            <h4 className="text-[10px] font-black uppercase italic">Operational Modes</h4>
            <Button variant="default" className="w-full justify-start text-[10px] font-bold uppercase h-8">
              Full-Auto Cut
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-[10px] font-bold uppercase h-8 border-2 bg-transparent"
            >
              Semi-Auto Align
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-[10px] font-bold uppercase h-8 border-2 bg-transparent"
            >
              Manual Calibration
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Command Stream / Log */}
      <div className="col-span-12 lg:col-span-3">
        <Card className="h-full industrial-container bg-foreground text-background">
          <CardHeader className="p-0 pb-4 border-b border-background/20">
            <CardTitle className="flex items-center gap-2 text-xs font-black uppercase italic">
              <Terminal className="h-4 w-4 text-primary" /> Command_Stream
            </CardTitle>
          </CardHeader>
          <div className="mt-4 font-mono text-[9px] space-y-2 overflow-hidden">
            {logs.map((log, i) => (
              <div key={i} className={log.startsWith("TX:") ? "text-primary" : "opacity-60"}>
                {`> ${log}`}
              </div>
            ))}
            <div className="animate-pulse">_</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
