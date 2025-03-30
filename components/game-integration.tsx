import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function GameIntegration() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white mb-12 md:text-4xl">
          游戏数据源AI处理方案
        </h2>
        <Tabs defaultValue="lol" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="lol" className="text-lg py-3">
              英雄联盟
            </TabsTrigger>
            <TabsTrigger value="sevendays" className="text-lg py-3">
              七日世界
            </TabsTrigger>
          </TabsList>
          <TabsContent value="lol" className="mt-0">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">LCU API 实时数据</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-purple-500 items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        Python脚本自动捕获游戏事件
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-purple-500 items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        击杀、助攻、死亡等事件触发特效
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-purple-500 items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        WebSocket实时推送数据到直播间
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="英雄联盟数据集成演示"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sevendays" className="mt-0">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">游戏日志文件分析</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-blue-500 items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        LangChain实时关键词提取
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-blue-500 items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        自动识别游戏进度和重要事件
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-blue-500 items-center justify-center text-white text-xs">
                          ✓
                        </span>
                        根据游戏情境智能推荐特效
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="七日世界数据集成演示"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

