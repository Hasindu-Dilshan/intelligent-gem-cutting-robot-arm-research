"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scan, Weight, Box, Target, History, Play, RotateCw, Maximize2 } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from "recharts"

// Mock data for the sensor charts
const sensorData = [
  { time: "10:00", stability: 98, vibration: 0.2 },
  { time: "10:05", stability: 97, vibration: 0.5 },
  { time: "10:10", stability: 99, vibration: 0.1 },
  { time: "10:15", stability: 95, vibration: 0.8 },
  { time: "10:20", stability: 98, vibration: 0.3 },
  { time: "10:25", stability: 99, vibration: 0.1 },
]

export function GemDashboard() {
  return (
    <div className="grid h-full grid-cols-12 gap-6 animate-in fade-in duration-1000">
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8">
        <Card className="relative flex-1 overflow-hidden border-white/10 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl shadow-primary/10">
          <CardHeader className="absolute top-0 right-0 left-0 z-10 flex flex-row items-center justify-between bg-gradient-to-b from-black/90 to-transparent p-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="font-mono text-xs font-medium tracking-wider text-white">LIVE_FEED: CAM_01_PRIMARY</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="border-accent/50 bg-accent/10 text-accent font-mono">
                NEBULA_SCAN_ACTIVE
              </Badge>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-white/70 hover:text-white">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <div className="relative flex h-full min-h-[400px] items-center justify-center bg-[url('/high-tech-industrial-microscope-view-of-a-rough-ge.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-black/20" />

            {/* CV Bounding Box - Upgraded to Neon */}
            <div className="relative h-48 w-48 border border-accent/40 shadow-[0_0_20px_rgba(120,255,255,0.2)]">
              <div className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-accent" />
              <div className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-accent" />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-accent" />

              <div className="absolute -top-8 left-0 flex items-center gap-1.5 bg-accent/20 backdrop-blur-md border border-accent/30 px-2 py-0.5 text-[10px] font-bold text-accent rounded">
                <Target className="h-3 w-3" /> OBJECT_ID: SL-442
              </div>
            </div>

            {/* Scanning Scanline Effect - Upgraded to Cyan */}
            <div className="absolute top-0 left-0 h-2 w-full animate-[scan_4s_linear_infinite] bg-gradient-to-r from-transparent via-accent/60 to-transparent blur-sm" />
          </div>

          <CardContent className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/90 to-transparent p-8">
            <div className="grid grid-cols-3 gap-8 items-end">
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Classification</p>
                <p className="font-bold text-xl text-accent drop-shadow-sm">Blue Sapphire</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Est. Weight</p>
                <p className="font-bold text-xl text-primary drop-shadow-sm">4.28 Carats</p>
              </div>
              <div className="space-y-1 text-right">
                <Button className="bg-primary hover:bg-primary/90">
                  <Scan className="mr-2 h-4 w-4" /> Start Analysis
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          <div className="industrial-container bg-background/40">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Stability Index
              </CardTitle>
            </CardHeader>
            <CardContent className="h-32 p-0 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sensorData}>
                  <defs>
                    <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.7 0.25 320)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="oklch(0.7 0.25 320)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="stability"
                    stroke="oklch(0.7 0.25 320)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorStability)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </div>
          <div className="industrial-container bg-background/40">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Vibration Monitor (RMS)
              </CardTitle>
            </CardHeader>
            <CardContent className="h-32 p-0 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sensorData}>
                  <Line
                    type="monotone"
                    dataKey="vibration"
                    stroke="oklch(0.75 0.2 190)"
                    strokeWidth={3}
                    dot={{ fill: "oklch(0.75 0.2 190)", r: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </div>
        </div>
      </div>

      <div className="col-span-12 space-y-6 lg:col-span-4">
        <div className="industrial-container bg-background/40">
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <Box className="h-4 w-4 text-primary" /> Gem Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 mt-4">
              {[
                { label: "Origin", value: "Ratnapura, Sri Lanka", icon: Target },
                { label: "Color Saturation", value: "High (Vivid)", icon: RotateCw },
                { label: "Clarity (AI Est)", value: "VS1", icon: Box },
                { label: "Current Mass", value: "0.856g", icon: Weight },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </div>
                  <span className="font-mono text-xs font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="industrial-container flex-1 bg-background/40">
          <Card className="flex-1 border-border/50 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <History className="h-4 w-4 text-primary" /> Scan History
              </CardTitle>
              <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase">
                Clear
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 mt-4">
              {[
                { id: "SL-441", type: "Ruby", weight: "2.1ct", time: "14m ago", status: "Cut Complete" },
                { id: "SL-440", type: "Sapphire", weight: "5.4ct", time: "1h ago", status: "Stored" },
                { id: "SL-439", type: "Tourmaline", weight: "3.2ct", time: "3h ago", status: "Refinement" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-foreground">{item.id}</span>
                      <Badge variant="outline" className="h-4 px-1 text-[9px]">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {item.time} • {item.weight}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-primary">
                    <Play className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </div>
  )
}
