import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";

/**
 * GET /api
 * Health check endpoint verifying MongoDB database connectivity.
 */
export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to connect to database";
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to MongoDB",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
