"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

// 自定义 HoverCard 组件，基于 @radix-ui/react-hover-card 的 Root 组件
const HoverCard = HoverCardPrimitive.Root

// 自定义 HoverCardTrigger 组件，基于 @radix-ui/react-hover-card 的 Trigger 组件
const HoverCardTrigger = HoverCardPrimitive.Trigger

// 自定义 HoverCardContent 组件，基于 @radix-ui/react-hover-card 的 Content 组件，并添加了额外的样式和属性
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

// 导出自定义的 HoverCard, HoverCardTrigger 和 HoverCardContent 组件
export { HoverCard, HoverCardTrigger, HoverCardContent }