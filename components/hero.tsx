import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-background py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(281,100%,50%)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(202,100%,50%)_0%,transparent_70%)]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">AI驱动的直播间特效工具</h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
          为英雄联盟和七日世界游戏主播打造的智能特效平台，让您的直播更具互动性和观赏性
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <Link href="#features">探索功能</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-gray-800">
            <Link href="#demo">查看演示</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

