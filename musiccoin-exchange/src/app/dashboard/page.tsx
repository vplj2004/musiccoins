"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Artist = { id: string; name: string; popularity?: number; image?: string };

export default function DashboardPage() {
  const [spotify, setSpotify] = useState<Artist[]>([]);
  const [apple, setApple] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/top-artists")
      .then((res) => {
        setSpotify(res.data.spotify || []);
        setApple(res.data.apple || []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Top Artists</h1>

        <section className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Spotify</h2>
          {loading ? (
            <div className="text-white/70">Loading…</div>
          ) : spotify.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {spotify.map((a) => (
                <div key={a.id} className="bg-black/30 rounded p-3 border border-white/10 flex items-center gap-3">
                  {a.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.image} alt={a.name} className="w-12 h-12 rounded object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded bg-white/10" />)
                  }
                  <div className="flex-1">
                    <div className="font-semibold">{a.name}</div>
                    {typeof a.popularity === "number" && (
                      <div className="text-white/70 text-sm">Popularity: {a.popularity}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white/70">No data available</div>
          )}
        </section>

        <section className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Apple Music</h2>
          {apple.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {apple.map((a) => (
                <div key={a.id} className="bg-black/30 rounded p-3 border border-white/10">
                  <div className="font-semibold">{a.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white/70">Connect Apple Music API to show charts.</div>
          )}
        </section>
      </div>
    </div>
  );
}


