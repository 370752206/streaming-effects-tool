import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Layers, Zap, Sparkles } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="h-10 w-10 text-purple-500" />,
      title: "特效模板生成",
      description: "输入文本描述，AI自动生成PixiJS代码，轻松创建专业级特效",
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-500" />,
      title: "绿幕抠像优化",
      description: "自动去除背景，保留主播形象，无需专业设备即可获得高质量效果",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-pink-500" />,
      title: "2D/3D素材生成",
      description: "根据关键词生成粒子/纹理，让您的直播画面更加生动",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "游戏数据实时联动",
      description: "自动捕捉游戏精彩时刻，触发相应特效，增强观众体验",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground mb-12 md:text-4xl">
          AI赋能的核心功能
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

