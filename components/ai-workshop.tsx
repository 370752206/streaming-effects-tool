"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

// AIWorkshop 组件用于生成特效代码
export default function AIWorkshop() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const { toast } = useToast()

  // handleGenerate 处理生成特效代码的逻辑
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "请输入特效描述",
        description: "请描述您想要的特效，AI将为您生成代码",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // 模拟AI生成过程
    setTimeout(() => {
      const sampleCode = `
// PixiJS 特效代码示例
const app = new PIXI.Application({ 
  backgroundColor: 0x000000,
  transparent: true 
});
document.body.appendChild(app.view);

// 创建粒子容器
const particleContainer = new PIXI.ParticleContainer();
app.stage.addChild(particleContainer);

// 粒子设置
const particleCount = 100;
const particles = [];

// 初始化粒子
for (let i = 0; i < particleCount; i++) {
  const particle = PIXI.Sprite.from('particle.png');
  particle.anchor.set(0.5);
  particle.x = Math.random() * app.screen.width;
  particle.y = Math.random() * app.screen.height;
  particle.alpha = Math.random() * 0.5 + 0.5;
  particle.scale.set(Math.random() * 0.5 + 0.5);
  particle.direction = Math.random() * Math.PI * 2;
  particle.speed = Math.random() * 2 + 1;
  particleContainer.addChild(particle);
  particles.push(particle);
}

// 动画循环
app.ticker.add(() => {
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    particle.x += Math.cos(particle.direction) * particle.speed;
    particle.y += Math.sin(particle.direction) * particle.speed;
    
    // 边界检查
    if (particle.x < 0) particle.x = app.screen.width;
    if (particle.x > app.screen.width) particle.x = 0;
    if (particle.y < 0) particle.y = app.screen.height;
    if (particle.y > app.screen.height) particle.y = 0;
  }
});
      `
      setGeneratedCode(sampleCode)
      setIsGenerating(false)
      toast({
        title: "特效代码已生成",
        description: "您可以复制代码并在您的直播软件中使用",
      })
    }, 2000)
  }

  return (
    <section id="ai-workshop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground mb-12 md:text-4xl">AI特效工坊</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">描述您想要的特效</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="例如：当我击杀敌人时，屏幕上出现红色粒子爆炸效果，持续3秒"
                className="h-64 bg-gray-800 border-gray-700 text-white"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    生成中...
                  </>
                ) : (
                  "生成PixiJS代码"
                )}
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">生成的PixiJS代码</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="h-64 overflow-auto rounded-md bg-gray-800 p-4 text-sm text-gray-300">
                {generatedCode || "// 代码将在这里显示"}
              </pre>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(generatedCode)
                  toast({
                    title: "代码已复制",
                    description: "您可以将代码粘贴到您的项目中",
                  })
                }}
                variant="outline"
                className="w-full border-gray-700 text-white hover:bg-gray-800"
                disabled={!generatedCode}
              >
                复制代码
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}