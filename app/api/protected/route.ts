import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface UserResponse {
  id?: string;
  name?: string;
  email?: string;
  error?: string;
}

export const GET = auth(async (req: NextRequest) => {
  if (!req.auth) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  try {
    // 获取当前用户数据
    const user = await prisma.user.findUnique({
      where: { id: req.auth.user?.id },
    });

    if (!user) {
      return NextResponse.json({ error: "用户不存在" }, { status: 404 });
    }

    const response: UserResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("获取用户数据失败:", error);
    return NextResponse.json({ error: "服务器内部错误" }, { status: 500 });
  }
});
