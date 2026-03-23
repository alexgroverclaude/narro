import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";

// GET /api/waitlist — returns the current signup count
export async function GET() {
  try {
    const supabase = createServerClient();
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return NextResponse.json({ count: count ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

// POST /api/waitlist — adds an email to the waitlist
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body?.email ?? "").toString().toLowerCase().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      // Postgres unique violation
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You're already on the list! 🎉" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
