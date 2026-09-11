import { NextResponse } from "next/server";
import { client } from "@/sanity/client";
import type { BookingFormData } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: BookingFormData = await request.json();

    if (!body.name || !body.phone || !body.eventDate || !body.eventType) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, telefone, data e tipo de evento." },
        { status: 400 },
      );
    }

    const booking = {
      _type: "booking",
      name: body.name,
      email: body.email || undefined,
      phone: body.phone,
      eventDate: body.eventDate,
      eventType: body.eventType,
      guestCount: body.guestCount,
      message: body.message,
      status: "pending",
      createdAt: new Date().toISOString(),
      ...(body.packageId && client
        ? {
            packageRef: {
              _type: "reference",
              _ref: body.packageId,
            },
          }
        : {}),
    };

    if (client && process.env.SANITY_API_WRITE_TOKEN) {
      await client.create(booking);
    }

    // Log booking when Sanity is not configured (development/demo mode)
    if (!client || !process.env.SANITY_API_WRITE_TOKEN) {
      console.log("[Festavida Booking]", JSON.stringify(booking, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Não foi possível processar a reserva." }, { status: 500 });
  }
}
