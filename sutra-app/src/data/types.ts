export interface SutraChar {
  char: string
  pinyin: string | null
}

export interface SutraParagraph {
  id: string
  label: string | null
  chars: SutraChar[]
}

export interface SutraSection {
  id: string
  title: string
  paragraphs: SutraParagraph[]
}

export interface GlossaryItem {
  id: string
  chars: string
  pinyin: string
  definition: string
  category: string
}

export interface SutraData {
  id: string
  name: string
  translator: string
  source: string
  about: string
  sections: SutraSection[]
  glossary: GlossaryItem[]
}

/**
 * Helper to pair Chinese text characters with their pinyin.
 * Punctuation marks get null pinyin.
 */
const PUNCT_RE = /[：，。？、！""''\u201c\u201d\u2018\u2019\u300c\u300d\u300e\u300f（）；·．《》\s']/

export function p(text: string, pinyinStr: string): SutraChar[] {
  const chars = [...text]
  const pinyinList = pinyinStr.split(' ')
  const result: SutraChar[] = []
  let pi = 0
  let inParens = false
  for (const ch of chars) {
    if (ch === '（') inParens = true
    if (PUNCT_RE.test(ch)) {
      result.push({ char: ch, pinyin: null })
    } else if (inParens) {
      // Annotation text inside （） — no pinyin
      result.push({ char: ch, pinyin: null })
    } else {
      result.push({ char: ch, pinyin: pinyinList[pi] || null })
      pi++
    }
    if (ch === '）') inParens = false
  }
  return result
}
