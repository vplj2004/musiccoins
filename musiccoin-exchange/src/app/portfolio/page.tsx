"use client";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function PortfolioPage() {
  const token = useMemo(() => (typeof window !== "undefined" ? localStorage.getItem("token") : null), []);
  const [trades, setTrades] = useState<any[]>([]);
  const [holdings, setHoldings] = useState<any[]>([]);

  useEffect(() => {
    if (!token) return;
    axios
      .get("/api/portfolio", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setTrades(res.data.trades);
        setHoldings(res.data.holdings);
      })
      .catch(() => {});
  }, [token]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Your Portfolio</h1>

        <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/10">
          <h2 className="font-semibold mb-2">Holdings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {holdings.map((h) => (
              <div key={h.coinId} className="bg-black/30 rounded p-3 border border-white/10">
                <div className="text-sm text-white/70">{h.symbol}</div>
                <div className="text-lg font-semibold">{h.amount.toFixed(2)} coins</div>
              </div>
            ))}
            {holdings.length === 0 && <div className="text-white/70">No holdings yet</div>}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/10">
          <h2 className="font-semibold mb-2">Recent Trades</h2>
          <div className="space-y-2">
            {trades.map((t) => (
              <div key={t.id} className="flex items-center justify-between bg-black/30 rounded p-3 border border-white/10">
                <div className="text-white/80">{t.coin.symbol}</div>
                <div className={t.type === "buy" ? "text-emerald-400" : "text-rose-400"}>{t.type.toUpperCase()}</div>
                <div>{t.amount.toFixed(2)}</div>
                <div className="text-white/60 text-sm">{new Date(t.createdAt).toLocaleString()}</div>
              </div>
            ))}
            {trades.length === 0 && <div className="text-white/70">No trades yet</div>}
          </div>
        </div>
      </div>
    </div>
  );
}


