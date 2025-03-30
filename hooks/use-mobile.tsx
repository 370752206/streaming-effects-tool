import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // 定义一个状态来存储是否为移动设备
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // 监听窗口大小变化，以确定当前设备是否为移动设备
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // 返回一个布尔值，表示当前设备是否为移动设备
  return !!isMobile
}