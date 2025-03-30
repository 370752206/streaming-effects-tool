"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, RotateCcw } from "lucide-react"

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demo" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white mb-12 md:text-4xl">特效演示</h2>
        <Tabs defaultValue="particles" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="particles" className="text-lg py-3">
              粒子特效
            </TabsTrigger>
            <TabsTrigger value="overlay" className="text-lg py-3">
              叠加特效
            </TabsTrigger>
            <TabsTrigger value="3d" className="text-lg py-3">
              3D特效
            </TabsTrigger>
          </TabsList>

          <TabsContent value="particles" className="mt-0">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xl">粒子特效演示</div>
                    {isPlaying && (
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(281,100%,50%)_0%,transparent_70%)] opacity-30 animate-pulse"></div>
                        <div className="absolute inset-0 overflow-hidden">
                          {Array.from({ length: 50 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute rounded-full bg-purple-500 opacity-70"
                              style={{
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 5 + 3}s linear infinite`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" /> 暂停
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" /> 播放
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsPlaying(false)}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> 重置
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overlay" className="mt-0">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xl">叠加特效演示</div>
                    {isPlaying && (
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/50 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold text-white animate-pulse">击杀！</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" /> 暂停
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" /> 播放
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsPlaying(false)}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> 重置
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="3d" className="mt-0">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xl">3D特效演示</div>
                    {isPlaying && (
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(202,100%,50%)_0%,transparent_70%)] opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 relative animate-spin-slow">
                            <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-50 animate-ping"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-70"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" /> 暂停
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" /> 播放
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsPlaying(false)}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> 重置
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

