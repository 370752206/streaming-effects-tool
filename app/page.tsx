import Hero from "@/components/hero"
import Features from "@/components/features"
import GameIntegration from "@/components/game-integration"
import DemoSection from "@/components/demo-section"
import AIWorkshop from "@/components/ai-workshop"
import { Toaster } from "@/components/ui/toaster"

// 主页组件
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Toaster />
      <Hero />
      <Features />
      <GameIntegration />
      <AIWorkshop />
      <DemoSection />
    </main>
  )
}