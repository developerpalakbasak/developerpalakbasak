import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Contact from "@/models/Contact";

/**
 * POST /api/contact
 * Handles contact form submissions and saves them into MongoDB.
 */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide all required fields: name, email, subject, and message.",
        },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Create and save new contact entry in MongoDB
    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to submit contact message.";
    console.error("API /api/contact POST error:", error);
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Fetches all received contact messages sorted by newest first.
 */
export async function GET() {
  try {
    await dbConnect();

    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to retrieve messages.";
    console.error("API /api/contact GET error:", error);
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
