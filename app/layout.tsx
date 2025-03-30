import type React from "react"
import "@/app/globals.css" // 导入全局样式表
import type { Metadata } from "next" // 导入 Next.js 的 Metadata 类型
import { Inter } from "next/font/google" // 从 Next.js 的 Google 字体库中导入 Inter 字体
import { ThemeProvider } from "@/components/theme-provider" // 导入主题提供者组件
import Header from "@/components/header" // 导入头部组件
import Footer from "@/components/footer" // 导入底部组件

// 定义 Inter 字体，使用拉丁字符子集
const inter = Inter({ subsets: ["latin"] })

// 导出页面元数据
export const metadata: Metadata = {
  title: "AI驱动的直播间特效工具",
  description: "为英雄联盟和七日世界游戏主播打造的智能特效平台",
    generator: 'v0.dev'
}

// 根布局组件，包裹整个应用
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}