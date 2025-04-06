import { NextResponse } from "next/server"

export const GET = () => {
  return NextResponse.json({ message: "测试成功" })
}
