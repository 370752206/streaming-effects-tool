"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

// 可折叠组件的根元素
const Collapsible = CollapsiblePrimitive.Root

// 触发可折叠组件展开或折叠的元素
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

// 可折叠组件的内容区域
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

// 导出可折叠组件、触发器和内容区域
export { Collapsible, CollapsibleTrigger, CollapsibleContent }