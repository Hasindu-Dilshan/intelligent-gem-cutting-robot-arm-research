"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, BarChart3, ShieldCheck, Diamond, Zap, Microscope } from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from "recharts"

const evaluationData = [
  { subject: "Clarity", A: 90, fullMark: 100 },
  { subject: "Cut Precision", A: 95, fullMark: 100 },
  { subject: "Color Depth", A: 85, fullMark: 100 },
  { subject: "Symmetry", A: 88, fullMark: 100 },
  { subject: "Polish", A: 92, fullMark: 100 },
]

export function GemEvaluation() {
  return (
    <div className="grid h-full grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div className="industrial-container relative h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Holographic Gem Scan Visual */}
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 animate-pulse bg-primary/20 blur-3xl rounded-full" />
            <Diamond className="w-full h-full text-accent/60 drop-shadow-[0_0_25px_rgba(120,255,255,0.7)] animate-bounce duration-[3000ms]" />

            <div className="absolute inset-[-30px] border border-primary/40 rounded-full animate-[spin_8s_linear_infinite]" />
            <div className="absolute inset-[-50px] border border-accent/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
            <div className="absolute inset-[-70px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          </div>

          <div className="absolute top-6 left-6 space-y-2">
            <Badge
              variant="outline"
              className="bg-primary/20 text-primary-foreground border-primary/50 font-mono tracking-tighter"
            >
              AI_NEURAL_QUALITY_SCANNER_v4.2
            </Badge>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Evaluation_Metrics</h2>
          </div>

          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-accent/60 space-y-1">
            <p>X_AXIS: 142.052</p>
            <p>Y_AXIS: 88.291</p>
            <p>Z_AXIS: 42.001</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            { label: "Grade", value: "Triple Excellent", icon: ShieldCheck, color: "text-emerald-400" },
            { label: "Market Index", value: "+12.4%", icon: BarChart3, color: "text-primary" },
            { label: "Refraction", value: "2.417 η", icon: Zap, color: "text-accent" },
          ].map((stat, i) => (
            <div key={i} className="industrial-container bg-background/40">
              <stat.icon className={`h-5 w-5 mb-2 ${stat.color}`} />
              <p className="text-[10px] uppercase text-muted-foreground">{stat.label}</p>
              <p className="text-lg font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 space-y-6">
        <Card className="industrial-container h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-widest font-black">
              <Microscope className="h-4 w-4 text-accent" /> AI Grade Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-8">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={evaluationData}>
                  <PolarGrid stroke="var(--color-border)" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} stroke="none" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 10, fontWeight: 700 }}
                  />
                  <Radar
                    name="Evaluation"
                    dataKey="A"
                    stroke="var(--color-accent)"
                    fill="var(--color-accent)"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-primary" /> Expert Insights
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Final symmetry analysis indicates world-class precision. Proportions fall within the top 0.1% of
                  global standards for this cut style.
                </p>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold uppercase tracking-widest h-12">
                Generate Certificate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
