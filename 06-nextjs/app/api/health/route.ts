import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        status: "success",
        message: "Next.js Docker application is healthy",
    });
}

// docker run -d --name nextjs-app -p 3000:3000 nextjs-app