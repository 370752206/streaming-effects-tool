// app/api/auth/[...nextauth]/route.ts
import { authOptions } from "@/auth"; // 或根据实际路径调整 "../../../../auth"
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export const runtime = "nodejs";
