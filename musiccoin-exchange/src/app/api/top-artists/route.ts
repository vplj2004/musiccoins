import { NextResponse } from "next/server";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || "";
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || "";

const SPOTIFY_ARTIST_IDS = [
  // Taylor Swift, Drake, BTS, Billie Eilish
  "06HL4z0CvFAxyc27GXpf02",
  "3TVXtAsR1Inumwj472S9r4",
  "3Nrfpe0tUJi4K4DXYWgMUX",
  "6qqNVTkY8uBg9cP3Jd7DAH"
];

async function getSpotifyAccessToken(): Promise<string | null> {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) return null;
  const creds = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");
  const resp = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: `Basic ${creds}` },
    body: new URLSearchParams({ grant_type: "client_credentials" })
  });
  if (!resp.ok) return null;
  const data = await resp.json();
  return data.access_token as string;
}

export async function GET() {
  try {
    const token = await getSpotifyAccessToken();
    let spotify: Array<{ id: string; name: string; popularity: number; image?: string }> = [];
    if (token) {
      const resp = await fetch(`https://api.spotify.com/v1/artists?ids=${SPOTIFY_ARTIST_IDS.join(",")}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (resp.ok) {
        const data = await resp.json();
        spotify = (data.artists || []).map((a: any) => ({
          id: a.id,
          name: a.name,
          popularity: a.popularity,
          image: a.images?.[0]?.url
        }));
      }
    }

    // Apple Music: requires developer token. Returning empty for now.
    const apple: Array<{ id: string; name: string; popularity?: number; image?: string }> = [];

    return NextResponse.json({ spotify, apple });
  } catch (_err) {
    return NextResponse.json({ spotify: [], apple: [] }, { status: 200 });
  }
}


