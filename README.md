🎶 MusicCoin Exchange

Stream it. Meme it. Coin it. 💸🎧

MusicCoin Exchange ain’t your regular crypto app — we turned your favorite artists into tradable tokens. Buy, sell, and trade artist coins like a fan turned trader. Their hype = your bag. 🚀

⚡ Features

Artist Coins: Every top music artist has a token you can buy or sell.

Live Popularity: Fetch top artists from Spotify API and see their popularity score.

Wallet & Portfolio: Track your balance and holdings like a mini stock market.

Fun Vibe: Dashboard with sleek UI using TailwindCSS + ShadCN UI.

Secure Auth: JWT authentication for safe signup/login.

🛠 Tech Stack

Frontend: Next.js 14 + React + TailwindCSS + ShadCN UI

Backend: Next.js API Routes (serverless)

Database: Prisma ORM + SQLite (Postgres optional for prod)

Auth: JWT + bcrypt

APIs: Spotify API (Top Artists)

Deployment: Vercel

🚀 Getting Started

Clone repo

git clone https://github.com/your-username/musiccoin-exchange.git
cd musiccoin-exchange


Install dependencies

npm install


Setup environment variables
Create a .env.local in the root:

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
JWT_SECRET=your_jwt_secret
DATABASE_URL="file:./dev.db"


Run Prisma migrations

npx prisma migrate dev --name init


Start dev server

npm run dev


Open http://localhost:3000
 to check it out.

🎨 Screenshots / Preview

(Add some screenshots of your dashboard, portfolio, and coins list here for the hype.)

💡 Future Ideas

Spotify Auth integration → show your personal top artists

Live coin price charts with animations

Apple Music section fully integrated

Leaderboards → “Top Music Traders”

⚠️ Note

Never push .env.local to GitHub! Keys should stay secret.

Deployment environment variables should be set in Vercel Dashboard.

🤘 Credits

Built with Next.js, Prisma, TailwindCSS, and a lotta vibes. Big love to Spotify for the API.
