import { NextResponse } from "next/server";
import { authOptions } from "@/auth";
import prisma from "@/lib/prisma";

export const GET = authOptions.handlers.GET(async (req) => {
  if (!req.auth) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.auth.user?.id },
    });

    if (!user) {
      return NextResponse.json({ error: "用户不存在" }, { status: 404 });
    }

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("获取用户数据失败:", error);
    return NextResponse.json({ error: "服务器内部错误" }, { status: 500 });
  }
});
