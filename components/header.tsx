"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                直播特效AI
              </span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  功能
                </Link>
              </li>
              <li>
                <Link href="#ai-workshop" className="text-gray-300 hover:text-white transition-colors">
                  AI工坊
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-300 hover:text-white transition-colors">
                  演示
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">开始使用</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#features"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  功能
                </Link>
              </li>
              <li>
                <Link
                  href="#ai-workshop"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI工坊
                </Link>
              </li>
              <li>
                <Link
                  href="#demo"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  演示
                </Link>
              </li>
              <li className="pt-4">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">开始使用</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

