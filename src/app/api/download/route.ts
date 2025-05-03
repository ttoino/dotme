import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { cvData } = await req.json();

  const res = await fetch("http://localhost:5050/generate_pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cvData }),
  });

  if (!res.ok) {
    return new NextResponse("Failed to fetch PDF", { status: 500 });
  }

  const blob = await res.blob();
  const buffer = await blob.arrayBuffer();

  return new NextResponse(Buffer.from(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="generated.pdf"',
    },
  });
}