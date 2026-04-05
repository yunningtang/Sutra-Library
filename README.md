# 经库 Sutra Library

A minimal Buddhist sutra reading app. Read, count, learn.

**Live:** [sutra-library.vercel.app](https://sutra-library.vercel.app)

---

## Features

**Read** — Full sutra text with per-character pinyin annotations. Long-press any term for its definition, Sanskrit origin, and context. Adjust font size and font family. Toggle pinyin on or off. Scroll position is remembered between sessions.

**Count** — Tap "complete" after each recitation to track your practice. A standalone bead counter is available for mantra counting with haptic feedback.

**Learn** — Every sutra includes a curated glossary of Buddhist terms, transliterations, and proper names with pronunciation and explanation.

**Sync** — Sign in with Google or email to sync reading progress, settings, and profile across devices via Supabase.

## Sutras

| Sutra | Translator | Characters |
|-------|-----------|------------|
| 般若波罗蜜多心经 | 唐 · 玄奘 | 260 |
| 佛说疗痔病经 | 唐 · 义净 | 426 |
| 大乘离文字普光明藏经 | 唐 · 地婆诃罗 | 1,956 |
| 药师琉璃光如来本愿功德经 | 唐 · 玄奘 | 4,967 |
| 金刚般若波罗蜜经 | 姚秦 · 鸠摩罗什 | 5,169 |
| 地藏菩萨本愿功德经 | 唐 · 实叉难陀 | 17,394 |

All sutra source text (Markdown + PDF) is available in the [`sutras/`](sutras/) directory.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Frontend | React 19 + TypeScript + Vite 8 |
| Routing | React Router 7 (HashRouter) |
| State | Zustand 5 with persist middleware |
| Auth | Supabase (Google OAuth + email/password) |
| Database | Supabase PostgreSQL (JSONB) |
| Hosting | Vercel |

## Project Structure

```
sutra-app/
├── src/
│   ├── components/    # Layout, Icons
│   ├── data/          # Sutra JSON data + manifest
│   ├── pages/         # All page components
│   └── store/         # Zustand stores (useStore, useAuth)
├── public/            # PWA manifest, icons
└── index.html
sutras/                # Source sutra text (Markdown + PDF)
```

## Running Locally

```bash
cd sutra-app
npm install
npm run dev
```

For cloud sync, create a `.env` file in `sutra-app/`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Adding a New Sutra

1. Create a TypeScript data file in `src/data/` following the existing format
2. Add a lazy import in `src/pages/SutraDetailPage.tsx`
3. Add an entry to `src/data/manifest.ts`

Each sutra file contains:
- Sectioned text (prelude, main body, closing)
- Per-character pinyin (manually verified for Buddhist pronunciation)
- Glossary entries with term, pinyin, definition, Sanskrit, and category

### Pinyin Notes

Buddhist texts use non-standard readings:

| Term | Standard | Buddhist | Origin |
|------|----------|----------|--------|
| 南无 | nán wú | ná mó | Sanskrit *namas* |
| 般若 | bān ruò | bō rě | Sanskrit *prajñā* |
| 迦叶 | jiā yè | jiā shè | Proper name |

## License

[MIT](LICENSE)

---

经库 · 读经 · 计数 · 查义
