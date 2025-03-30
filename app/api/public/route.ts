import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface PublicApiResponse {
  message: string;
  timestamp: string;
  status: "success" | "error";
  path?: string;
}

export const GET = async (req: NextRequest) => {
  try {
    const response: PublicApiResponse = {
      message: "这是一个公开API端点",
      timestamp: new Date().toISOString(),
      status: "success",
      path: req.nextUrl.pathname,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("公开API处理失败:", error);
    return NextResponse.json(
      {
        message: "服务器内部错误",
        timestamp: new Date().toISOString(),
        status: "error",
      },
      { status: 500 }
    );
  }
};
