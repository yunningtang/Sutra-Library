# Sutra-Library

A minimal Buddhist sutra reading app. Read, count, learn.

├── types.ts
├── manifest.ts
├── pglm.ts          ← 大乘离文字普光明藏经（已完成）
├── heart.ts          ← 心经
├── eight.ts          ← 八大人觉经
├── amitabha.ts       ← 阿弥陀经
├── pumen.ts          ← 普门品
├── medicine.ts       ← 药师经
├── diamond.ts        ← 金刚经
├── puxian.ts         ← 行愿品
├── 42chapter.ts      ← 四十二章经
├── wuliang.ts        ← 无量寿经
├── dizang.ts         ← 地藏经
├── dabeizhou.ts      ← 大悲咒
├── lengyan-zhou.ts   ← 楞严咒
├── shizhou.ts        ← 十小咒
└── mengshan.ts       ← 蒙山施食仪

---

## What it does

Sutra Library is a focused tool for daily sutra recitation. It provides the text with pinyin annotations, a built-in glossary for Buddhist terminology, and a simple counter to track your practice. Nothing else.

## Features

**Read** — Full sutra text with per-character pinyin. Long-press any word for its definition, Sanskrit origin, and context. Adjust font size. Toggle pinyin on or off.

**Count** — Tap "complete" after each recitation and the app keeps a running total. A standalone bead counter is available for mantra practice.

**Learn** — Every sutra ships with a curated glossary of Buddhist terms, place names, and transliterations, each with pronunciation and brief explanation.

## Sutras

The app launches with one sutra and expands over time. Adding a new sutra requires only a JSON file — no code changes.

| Status | Sutra | Translator | Length |
|--------|-------|-----------|--------|
| Available | 大乘离文字普光明藏经 | Divākara (Tang) | ~2,200 chars |
| Planned | 般若波罗蜜多心经 | Xuánzàng (Tang) | ~260 chars |
| Planned | 金刚般若波罗蜜经 | Kumārajīva (Later Qin) | ~5,000 chars |
| Planned | 地藏菩萨本愿功德经 | Śikṣānanda (Tang) | ~12,000 chars |
| Planned | 药师琉璃光如来本愿功德经 | Xuánzàng (Tang) | ~5,000 chars |
| Planned | 佛说阿弥陀经 | Kumārajīva (Later Qin) | ~1,800 chars |

## Design principles

**Text is the interface.** No icons, no emoji, no illustrations. Hierarchy comes from font size, weight, color value, and whitespace alone.

**The sutra is the protagonist.** UI recedes. The reading experience has a warm parchment background (`#f7f5f0`), generous margins, and nothing competing for attention.

**No gamification.** No streaks, no badges, no daily quotes, no greeting banners. Just a plain number showing how many times you have read.

**Offline first.** All sutra content is bundled locally. Reading and counting work without a network. Login and sync happen silently when connectivity is available.

## Architecture

```
/data/sutras/
├── manifest.json        # sutra catalog
├── pglm.json            # 大乘离文字普光明藏经
├── heart.json           # 心经
├── diamond.json         # 金刚经
└── ...                  # add a file, add a sutra
```

Each sutra is a self-contained JSON file containing:

- Sectioned text (prelude → main → closing) with paragraph-level structure
- Per-character pinyin (manually verified for Buddhist pronunciation)
- Glossary entries with term, pinyin, definition, Sanskrit, and category

See `manifest.json` for the catalog schema and any individual sutra file for the full data format.

### Pinyin accuracy

Buddhist texts use non-standard readings that automated tools get wrong. These are manually corrected in the data:

| Term | Wrong | Correct | Note |
|------|-------|---------|------|
| 南无 | nán wú | ná mó | Sanskrit *namas* |
| 般若 | bān ruò | bō rě | Sanskrit *prajñā* |
| 迦叶 | jiā yè | jiā shè | Proper name |
| 那由他 | nà yóu tā | nà yóu tuō | Sanskrit *nayuta* |

## Screens

The app has three tabs — all text, no icons.

```
经库 (Library)  ·  计数 (Counter)  ·  我的 (Me)
```

**Library** — A list of sutra cards. Tap one to enter its detail page, then start reading.

**Reader** — Full-screen immersive reading. Pinyin above each character. Long-press for glossary popup. Scroll manually or enable auto-scroll. Tap "complete" at the end to log the recitation.

**Counter** — A large tappable circle for mantra counting. Haptic feedback on each tap. Set a target (default 108). Reset with confirmation.

**Me** — Login, reading history grouped by sutra, settings (font size, pinyin default, font family, auto-scroll speed, dark mode).

## Tech stack

| Layer | Choice | Note |
|-------|--------|------|
| Frontend | React Native or React H5 | Mobile-first, 375–414px baseline |
| State | Zustand | Lightweight |
| Storage | AsyncStorage / localStorage | Offline-first |
| Backend (optional) | Supabase or Firebase | Auth + sync |
| Auth | Phone + SMS code | Guest mode available |

All sutra data ships locally (each file < 100KB). Backend is only needed for cross-device sync after login.

## Running locally

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

## Adding a new sutra

1. Create a JSON file following the schema in any existing sutra file
2. Add an entry to `manifest.json` with `"status": "available"`
3. Done — no code changes needed

## Design tokens

```
Primary:          #5a9e7c
Light green:      #e8f5ee
Border green:     #b8dcc8
Text primary:     #2c2c2c
Text secondary:   #8a8a8a
Text muted:       #b0b0b0
Pinyin:           #999999
Border:           #e8e8e4
Page background:  #fafaf8
Reader background:#f7f5f0
Card background:  #ffffff
Border radius:    16px (cards), 28px (buttons), 12px (popups)
Font:             system (-apple-system, PingFang SC, Noto Sans SC)
Font (reader):    Noto Serif SC / STSong (optional serif mode)
```

## License

[MIT](LICENSE)

---

经库 · 读经 · 计数 · 查义

Library · Read · Count · Learn
