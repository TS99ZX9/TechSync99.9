import { Layers } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-cyan-500 rounded-md blur-[20px] opacity-50 animate-pulse"></div>
          <div className="relative bg-slate-950 rounded-md flex items-center justify-center h-full border border-cyan-500/50">
            <Layers className="h-8 w-8 text-cyan-400" />
          </div>
        </div>

        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          TechSync99
        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  )
}
