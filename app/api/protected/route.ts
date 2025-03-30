import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = auth(async (req) => {
  if (!req.auth) {
    return NextResponse.json(
      { error: "未授权" },
      { status: 401 }
    )
  }

  // 获取当前用户数据
  const user = await prisma.user.findUnique({
    where: { id: req.auth.user?.id }
  })

  return NextResponse.json(user)
})
