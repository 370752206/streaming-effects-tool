import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    message: "这是一个公开API端点",
    timestamp: new Date().toISOString(),
  });
};
