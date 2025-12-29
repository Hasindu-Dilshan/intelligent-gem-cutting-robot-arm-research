"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Layout, Info, Calculator, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function CutPlanning() {
  const [cutType, setCutType] = useState("brilliant")
  const [angles, setAngles] = useState([34.5])
  const [depth, setDepth] = useState([61.8])

  return (
    <div className="grid h-full grid-cols-12 gap-8">
      {/* Left Column: Configuration */}
      <div className="col-span-12 space-y-8 lg:col-span-5">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-foreground text-background font-mono">STEP 01</Badge>
            <h2 className="text-xl font-black uppercase tracking-tight">Select Cut Geometry</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Brilliant", "Emerald", "Pear", "Princess"].map((type) => (
              <Button
                key={type}
                variant={cutType === type.toLowerCase() ? "default" : "outline"}
                className={`h-20 flex-col gap-2 border-2 text-xs font-bold uppercase transition-all ${
                  cutType === type.toLowerCase()
                    ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                    : ""
                }`}
                onClick={() => setCutType(type.toLowerCase())}
              >
                <Layout className="h-5 w-5" />
                {type}
              </Button>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge className="bg-foreground text-background font-mono">STEP 02</Badge>
            <h2 className="text-xl font-black uppercase tracking-tight">Technical Parameters</h2>
          </div>

          <div className="space-y-4 industrial-container bg-muted/30">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span>Crown Angle (°)</span>
                <span className="font-mono text-primary">{angles[0]}°</span>
              </div>
              <Slider value={angles} onValueChange={setAngles} max={45} min={20} step={0.1} className="py-4" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span>Total Depth (%)</span>
                <span className="font-mono text-primary">{depth[0]}%</span>
              </div>
              <Slider value={depth} onValueChange={setDepth} max={75} min={50} step={0.1} className="py-4" />
            </div>
          </div>
        </section>

        <section className="industrial-container bg-primary/10 border-primary">
          <div className="flex items-start gap-4">
            <div className="bg-primary p-2">
              <Info className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold uppercase text-sm">AI Recommendation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based on current inclusions at 4.2mm depth, the{" "}
                <span className="font-bold text-foreground">Emerald Cut</span> is recommended to maximize clarity and
                retain 82% of raw mass.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Visualization & Results */}
      <div className="col-span-12 space-y-8 lg:col-span-7">
        <div className="industrial-container relative aspect-square w-full bg-[#fdfdfd] overflow-hidden flex items-center justify-center">
          <div className="absolute top-4 left-4 font-mono text-[10px] text-muted-foreground uppercase">
            3D_GEOMETRY_PREVIEW // {cutType}
          </div>

          {/* Simulated 3D Wireframe using SVG */}
          <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 drop-shadow-2xl">
            <defs>
              <linearGradient id="facetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Table */}
            <path
              d="M70 60 L130 60 L150 80 L130 140 L70 140 L50 80 Z"
              fill="url(#facetGrad)"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            {/* Facets */}
            <line x1="70" y1="60" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
            <line x1="130" y1="60" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
            <line x1="150" y1="80" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="80" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
            {/* Grid overlay */}
            <g className="text-muted-foreground/20">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="currentColor" strokeWidth="0.2" />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={i} x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="currentColor" strokeWidth="0.2" />
              ))}
            </g>
          </svg>

          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button size="sm" variant="outline" className="h-8 text-[10px] uppercase font-bold border-2 bg-transparent">
              Rotate X
            </Button>
            <Button size="sm" variant="outline" className="h-8 text-[10px] uppercase font-bold border-2 bg-transparent">
              Rotate Y
            </Button>
          </div>
        </div>

        <div className="industrial-container bg-foreground text-background">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-lg font-black uppercase italic">
              <Calculator className="h-5 w-5 text-primary" /> Value Projection
            </h3>
            <span className="font-mono text-[10px] opacity-60 uppercase">Estimate*</span>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase opacity-60">Est. Final Value</p>
                <p className="text-3xl font-black tracking-tighter text-primary font-mono">$12,450.00</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase opacity-60">Value Increase</p>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <TrendingUp className="h-4 w-4" />
                  <span>+245.8%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 border-l border-white/20 pl-6">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="opacity-60">Mass Retention</span>
                <span>64.2%</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="opacity-60">Waste Mass</span>
                <span>1.52ct</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="opacity-60">Processing Time</span>
                <span>142m</span>
              </div>
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-foreground font-black uppercase italic tracking-widest shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                Execute Cut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
