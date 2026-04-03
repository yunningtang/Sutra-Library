import type { SutraData } from './types'

function p(text: string, pinyinStr: string): { char: string; pinyin: string | null }[] {
  const chars = [...text]
  const pinyins = pinyinStr.split(' ')
  let pi = 0
  return chars.map((c) => {
    const isPunctuation = /[：，。？、！""''（）；·\s]/.test(c)
    if (isPunctuation) {
      return { char: c, pinyin: null }
    }
    return { char: c, pinyin: pinyins[pi++] || null }
  })
}

export const heart: SutraData = {
  id: 'heart',
  name: '般若波罗蜜多心经',
  translator: '唐三藏法师玄奘奉诏译',
  source: '《乾隆大藏经》般若部',
  about: '此经为般若经典之精要，以二百六十字浓缩六百卷《大般若经》之核心，阐明"色即是空，空即是色"之般若空慧，为汉传佛教流传最广的经典之一。',
  sections: [
    {
      id: 'prelude',
      title: '起诵仪',
      paragraphs: [
        {
          id: 'pre01',
          label: '香赞',
          chars: p(
            '炉香乍爇，法界蒙熏，诸佛海会悉遥闻，随处结祥云，诚意方殷，诸佛现全身。',
            'lú xiāng zhà ruò fǎ jiè méng xūn zhū fó hǎi huì xī yáo wén suí chù jié xiáng yún chéng yì fāng yīn zhū fó xiàn quán shēn'
          ),
        },
        {
          id: 'pre02',
          label: '南无香云盖菩萨摩诃萨（三称）',
          chars: p(
            '南无香云盖菩萨摩诃萨',
            'ná mó xiāng yún gài pú sà mó hē sà'
          ),
        },
        {
          id: 'pre03',
          label: '开经偈',
          chars: p(
            '无上甚深微妙法，百千万劫难遭遇，我今见闻得受持，愿解如来真实义。',
            'wú shàng shèn shēn wēi miào fǎ bǎi qiān wàn jié nán zāo yù wǒ jīn jiàn wén dé shòu chí yuàn jiě rú lái zhēn shí yì'
          ),
        },
      ],
    },
    {
      id: 'main',
      title: '正文',
      paragraphs: [
        {
          id: 'p001',
          label: null,
          chars: p(
            '观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。',
            'guān zì zài pú sà xíng shēn bō rě bō luó mì duō shí zhào jiàn wǔ yùn jiē kōng dù yī qiè kǔ è'
          ),
        },
        {
          id: 'p002',
          label: null,
          chars: p(
            '舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。',
            'shè lì zǐ sè bù yì kōng kōng bù yì sè sè jí shì kōng kōng jí shì sè shòu xiǎng xíng shí yì fù rú shì'
          ),
        },
        {
          id: 'p003',
          label: null,
          chars: p(
            '舍利子，是诸法空相，不生不灭，不垢不净，不增不减。',
            'shè lì zǐ shì zhū fǎ kōng xiàng bù shēng bù miè bù gòu bù jìng bù zēng bù jiǎn'
          ),
        },
        {
          id: 'p004',
          label: null,
          chars: p(
            '是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界。',
            'shì gù kōng zhōng wú sè wú shòu xiǎng xíng shí wú yǎn ěr bí shé shēn yì wú sè shēng xiāng wèi chù fǎ wú yǎn jiè nǎi zhì wú yì shí jiè'
          ),
        },
        {
          id: 'p005',
          label: null,
          chars: p(
            '无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。',
            'wú wú míng yì wú wú míng jìn nǎi zhì wú lǎo sǐ yì wú lǎo sǐ jìn wú kǔ jí miè dào wú zhì yì wú dé'
          ),
        },
        {
          id: 'p006',
          label: null,
          chars: p(
            '以无所得故，菩提萨埵，依般若波罗蜜多故，心无挂碍，无挂碍故，无有恐怖，远离颠倒梦想，究竟涅槃。',
            'yǐ wú suǒ dé gù pú tí sà duǒ yī bō rě bō luó mì duō gù xīn wú guà ài wú guà ài gù wú yǒu kǒng bù yuǎn lí diān dǎo mèng xiǎng jiū jìng niè pán'
          ),
        },
        {
          id: 'p007',
          label: null,
          chars: p(
            '三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。',
            'sān shì zhū fó yī bō rě bō luó mì duō gù dé ā nòu duō luó sān miǎo sān pú tí'
          ),
        },
        {
          id: 'p008',
          label: null,
          chars: p(
            '故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。',
            'gù zhī bō rě bō luó mì duō shì dà shén zhòu shì dà míng zhòu shì wú shàng zhòu shì wú děng děng zhòu néng chú yī qiè kǔ zhēn shí bù xū'
          ),
        },
        {
          id: 'p009',
          label: null,
          chars: p(
            '故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。',
            'gù shuō bō rě bō luó mì duō zhòu jí shuō zhòu yuē jiē dì jiē dì bō luó jiē dì bō luó sēng jiē dì pú tí sà pó hē'
          ),
        },
      ],
    },
    {
      id: 'closing',
      title: '结诵仪',
      paragraphs: [
        {
          id: 'cls01',
          label: '补阙真言（三遍）',
          chars: p(
            '南无喝啰怛那·哆罗夜耶·佉啰佉啰·俱住俱住·摩啰摩啰·虎啰·吽·贺贺·苏怛拿·吽·泼抹拿·娑婆诃·',
            'ná mó hē là dá nà duō luó yè yē qū là qū là jù zhù jù zhù mó là mó là hǔ là hōng hè hè sū dá ná hōng pō mò ná suō pó hē'
          ),
        },
        {
          id: 'cls02',
          label: '补阙圆满真言（三遍）',
          chars: p(
            '唵·呼嚧呼嚧·社曳穆契·莎诃·',
            'ǎn hū lū hū lū shè yì mù qì suō hē'
          ),
        },
        {
          id: 'cls03',
          label: '普回向真言（三遍）',
          chars: p(
            '唵·娑麼啰·娑麼啰·弭麼曩·萨嚩诃·摩诃斫迦啰嚩吽·',
            'ǎn suō mó là suō mó là mǐ mó nǎng sà wá hē mó hē zhuó jiā là wá hōng'
          ),
        },
        {
          id: 'cls04',
          label: '（合掌三称）',
          chars: p(
            '南无佛 南无法 南无僧',
            'ná mó fó ná mó fǎ ná mó sēng'
          ),
        },
        {
          id: 'cls05',
          label: '（合掌三称）',
          chars: p(
            '南无本师释迦牟尼佛',
            'ná mó běn shī shì jiā móu ní fó'
          ),
        },
        {
          id: 'cls06',
          label: '（合掌三称）',
          chars: p(
            '南无观世音菩萨摩诃萨',
            'ná mó guān shì yīn pú sà mó hē sà'
          ),
        },
        {
          id: 'cls07',
          label: '（合掌三称）',
          chars: p(
            '南无护法诸天菩萨',
            'ná mó hù fǎ zhū tiān pú sà'
          ),
        },
        {
          id: 'cls08',
          label: '回向偈（一遍）',
          chars: p(
            '愿以此功德，庄严佛净土，上报四重恩，下济三途苦，若有见闻者，悉发菩提心，尽此一报身，同生极乐国。十方三世一切佛·一切菩萨摩诃萨·摩诃般若波罗蜜·',
            'yuàn yǐ cǐ gōng dé zhuāng yán fó jìng tǔ shàng bào sì chóng ēn xià jì sān tú kǔ ruò yǒu jiàn wén zhě xī fā pú tí xīn jìn cǐ yī bào shēn tóng shēng jí lè guó shí fāng sān shì yī qiè fó yī qiè pú sà mó hē sà mó hē bō rě bō luó mì'
          ),
        },
        {
          id: 'cls09',
          label: '三皈依（一遍）',
          chars: p(
            '自皈依佛，当愿众生，体解大道，发无上心；自皈依法，当愿众生，深入经藏，智慧如海；自皈依僧，当愿众生，统理大众，一切无碍。和南圣众。',
            'zì guī yī fó dāng yuàn zhòng shēng tǐ jiě dà dào fā wú shàng xīn zì guī yī fǎ dāng yuàn zhòng shēng shēn rù jīng zàng zhì huì rú hǎi zì guī yī sēng dāng yuàn zhòng shēng tǒng lǐ dà zhòng yī qiè wú ài hé nán shèng zhòng'
          ),
        },
      ],
    },
  ],
  glossary: [
    {
      id: 'boruo',
      chars: '般若',
      pinyin: 'bō rě',
      definition: '梵文 prajñā 音译，意为智慧，特指超越世俗的佛智。',
      category: '名相',
    },
    {
      id: 'boluomiduo',
      chars: '波罗蜜多',
      pinyin: 'bō luó mì duō',
      definition: '梵文 pāramitā 音译，意为到彼岸、究竟圆满。',
      category: '名相',
    },
    {
      id: 'guanzizai',
      chars: '观自在',
      pinyin: 'guān zì zài',
      definition: '观世音菩萨的另一译名，意为观察自在。',
      category: '称谓',
    },
    {
      id: 'shelizi',
      chars: '舍利子',
      pinyin: 'shè lì zǐ',
      definition: '佛十大弟子之一舍利弗，智慧第一。梵文 Śāriputra 音译。',
      category: '称谓',
    },
    {
      id: 'wuyun',
      chars: '五蕴',
      pinyin: 'wǔ yùn',
      definition: '色、受、想、行、识五种聚合，构成众生身心的五种要素。',
      category: '名相',
    },
    {
      id: 'putisaduo',
      chars: '菩提萨埵',
      pinyin: 'pú tí sà duǒ',
      definition: '菩萨的全称，梵文 Bodhisattva 音译。',
      category: '称谓',
    },
    {
      id: 'niepan',
      chars: '涅槃',
      pinyin: 'niè pán',
      definition: '梵文 Nirvāṇa 音译，意为寂灭、圆寂，超越生死轮回的境界。',
      category: '名相',
    },
    {
      id: 'anouduoluo',
      chars: '阿耨多罗三藐三菩提',
      pinyin: 'ā nòu duō luó sān miǎo sān pú tí',
      definition: '梵文 Anuttara-samyak-saṃbodhi 音译，意为无上正等正觉。',
      category: '名相',
    },
    {
      id: 'jiedi',
      chars: '揭谛',
      pinyin: 'jiē dì',
      definition: '梵文 gate 音译，意为去、度过。',
      category: '名相',
    },
    {
      id: 'namo',
      chars: '南无',
      pinyin: 'ná mó',
      definition: '梵文 namas 音译，意为归命、敬礼。',
      category: '仪轨用语',
    },
  ],
}
