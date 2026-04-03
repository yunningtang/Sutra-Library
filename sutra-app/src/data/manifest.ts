export interface SutraManifestItem {
  id: string
  name: string
  translator: string
  translatorFull: string
  charCount: number
  status: 'available' | 'coming_soon'
}

export const manifest: SutraManifestItem[] = [
  {
    id: 'pglm',
    name: '大乘离文字普光明藏经',
    translator: '唐 · 地婆诃罗',
    translatorFull: '唐中天竺三藏法师地婆诃罗奉敕译',
    charCount: 2200,
    status: 'available',
  },
  {
    id: 'heart',
    name: '般若波罗蜜多心经',
    translator: '唐 · 玄奘',
    translatorFull: '唐三藏法师玄奘奉诏译',
    charCount: 260,
    status: 'available',
  },
  {
    id: 'diamond',
    name: '金刚般若波罗蜜经',
    translator: '姚秦 · 鸠摩罗什',
    translatorFull: '姚秦天竺三藏鸠摩罗什译',
    charCount: 5000,
    status: 'available',
  },
  {
    id: 'yaoshi',
    name: '药师琉璃光如来本愿功德经',
    translator: '唐 · 玄奘',
    translatorFull: '唐三藏法师玄奘奉诏译',
    charCount: 5000,
    status: 'available',
  },
  {
    id: 'dizang',
    name: '地藏菩萨本愿功德经',
    translator: '唐 · 实叉难陀',
    translatorFull: '唐于阗国三藏沙门实叉难陀译',
    charCount: 12000,
    status: 'coming_soon',
  },
]
