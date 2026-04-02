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
