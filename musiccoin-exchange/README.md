MusicCoin Exchange – trade artist coins.

Setup

1. Create `.env` with:

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="change_me_in_prod"
```

2. Install deps

```
npm install
```

3. Prisma migrate and generate

```
npx prisma migrate dev --name init
```

4. Run dev server

```
npm run dev
```

Routes

- GET `/api/coins` – list coins (lazy seeds default coins)
- POST `/api/auth/signup` – { username, email, password }
- POST `/api/auth/login` – { email, password }
- POST `/api/trade` – { coinId, amount, type } (Bearer token)
- GET `/api/portfolio` (Bearer token)

Deploy

- Push to GitHub and deploy to Vercel. Set `DATABASE_URL` and `JWT_SECRET` env vars in Vercel.

Stack

- Next.js 14 App Router, TailwindCSS v4, shadcn/ui
- Prisma ORM + SQLite (dev)
- JWT Auth with bcrypt
- Axios on frontend
