import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// No auth: use a shared guest user

async function getGuestUser() {
  const email = "guest@example.com";
  const username = "guest";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return existing;
  return prisma.user.create({ data: { email, username, passwordHash: "guest" } });
}

export async function POST(request: Request) {
  try {
    const guest = await getGuestUser();

    const { coinId, amount, type } = await request.json();
    if (!coinId || !amount || !type) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    if (amount <= 0) return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    if (type !== "buy" && type !== "sell") return NextResponse.json({ error: "Invalid type" }, { status: 400 });

    const coin = await prisma.coin.findUnique({ where: { id: coinId } });
    if (!coin) return NextResponse.json({ error: "Coin not found" }, { status: 404 });

    const user = guest;

    const cost = amount * coin.price;

    if (type === "buy") {
      if (user.walletBalance < cost) return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
      await prisma.$transaction([
        prisma.user.update({
          where: { id: user.id },
          data: { walletBalance: { decrement: cost } }
        }),
        prisma.trade.create({ data: { userId: user.id, coinId: coin.id, amount, type: "buy" } }),
        prisma.coin.update({ where: { id: coin.id }, data: { price: { increment: amount * 0.01 } } })
      ]);
    } else {
      const bought = await prisma.trade.aggregate({
        _sum: { amount: true },
        where: { userId: user.id, coinId: coin.id, type: "buy" }
      });
      const sold = await prisma.trade.aggregate({
        _sum: { amount: true },
        where: { userId: user.id, coinId: coin.id, type: "sell" }
      });
      const holdings = (bought._sum.amount ?? 0) - (sold._sum.amount ?? 0);
      if (holdings < amount) return NextResponse.json({ error: "Not enough holdings" }, { status: 400 });
      await prisma.$transaction([
        prisma.user.update({
          where: { id: user.id },
          data: { walletBalance: { increment: cost } }
        }),
        prisma.trade.create({ data: { userId: user.id, coinId: coin.id, amount, type: "sell" } }),
        prisma.coin.update({ where: { id: coin.id }, data: { price: { decrement: amount * 0.01 } } })
      ]);
    }

    return NextResponse.json({ success: true });
  } catch (_err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


