import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEFAULT_COINS = [
  { name: "Taylor Swift", symbol: "TSWIFT", price: 10 },
  { name: "Drake", symbol: "DRAKE", price: 8 },
  { name: "BTS", symbol: "BTS", price: 12 },
  { name: "Billie Eilish", symbol: "BILLIE", price: 9 }
];

export async function GET() {
  try {
    const count = await prisma.coin.count();
    if (count === 0) {
      await prisma.coin.createMany({ data: DEFAULT_COINS });
    }
    const coins = await prisma.coin.findMany({ orderBy: { symbol: "asc" } });
    return NextResponse.json({ coins });
  } catch (_err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


