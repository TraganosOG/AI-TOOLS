# Creator AI Tools – Vertical AI Tools Directory

A complete, production-ready Next.js 15 website for an **AI Tools Directory focused on Content Creators**.

## Features

- Clean, modern, fully responsive design
- 25 real AI tools with ratings, pros/cons, pricing, features
- Categories: Writing, Video, Image, Audio, SEO, Productivity
- Individual tool review pages optimized for affiliates
- Comparison table
- SEO-ready (metadata, static generation)
- Easy to update: all tools live in one TypeScript file
- Affiliate link placeholders ready for your IDs

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Deploy (recommended free options)

### Vercel (easiest)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Deploy. Done. You get a free `.vercel.app` URL and can add a custom domain later.

### Netlify / Cloudflare Pages
Same idea: connect the Git repo and deploy.

## How to add your affiliate links

Open `src/data/tools.ts` and replace every `YOUR_AFFILIATE_ID` (or the full URL) with your real affiliate links from:

- Jasper
- Copy.ai
- Writesonic
- Surfer SEO
- Pictory
- Synthesia
- ElevenLabs
- etc.

Most of these programs pay **20–45% recurring** commissions.

## How to add / update tools

Edit `src/data/tools.ts`.  
The structure is simple. After changing the file, the site updates automatically on the next build.

## Suggested next steps for passive income

1. Register for the affiliate programs of the tools you feature
2. Replace the placeholder affiliate URLs
3. Deploy to Vercel
4. Buy a domain (e.g. `creatoraitools.com` or `bestaiforcreators.com`) and connect it
5. Submit the site to Google Search Console
6. Optionally add a simple blog section later for more SEO traffic
7. Use AI (Claude / GPT) on a schedule to research new tools and update the JSON/TS file

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Static generation for all tool & category pages

Built to be easy for AI agents to maintain in the future.
