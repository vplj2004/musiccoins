import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// No auth: read portfolio of the shared guest user

async function getGuestUser() {
  const email = "guest@example.com";
  const username = "guest";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return existing;
  return prisma.user.create({ data: { email, username, passwordHash: "guest" } });
}

export async function GET() {
  try {
    const guest = await getGuestUser();

    const trades = await prisma.trade.findMany({
      where: { userId: guest.id },
      include: { coin: true },
      orderBy: { createdAt: "desc" }
    });

    const coins = await prisma.coin.findMany();
    const holdings: Record<string, { coinId: string; symbol: string; amount: number }> = {};
    for (const t of trades) {
      const key = t.coinId;
      if (!holdings[key]) holdings[key] = { coinId: t.coinId, symbol: t.coin.symbol, amount: 0 };
      holdings[key].amount += t.type === "buy" ? t.amount : -t.amount;
    }

    return NextResponse.json({ trades, holdings: Object.values(holdings), coins });
  } catch (_err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


