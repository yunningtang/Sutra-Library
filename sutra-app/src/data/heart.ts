import type { SutraData } from './types'
import { p } from './types'

export const heart: SutraData = {
  id: 'heart',
  name: '般若波罗蜜多心经',
  translator: '唐三藏法师玄奘奉诏译',
  source: '《乾隆大藏经》般若部',
  about: '此经为般若经典之精要，以二百六十字浓缩六百卷《大般若经》之核心，阐明\u201c色即是空，空即是色\u201d之般若空慧，为汉传佛教流传最广的经典之一。',
  sections: [
    {
      id: 'main',
      title: '正文',
      paragraphs: [
        {
          id: 'p001',
          label: null,
          chars: p(
            '观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。',
            'guān zì zài pú sà xíng shēn bō rě bō luó mì duō shí zhào jiàn wǔ yùn jiē kōng dù yī qiē kǔ è'
          ),
        },
        {
          id: 'p002',
          label: null,
          chars: p(
            '舍利子，色不异空，空不异色，色即是空，空即是色。受想行识，亦复如是。',
            'shè lì zǐ sè bù yì kōng kōng bù yì sè sè jí shì kōng kōng jí shì sè shòu xiǎng xíng shí yì fù rú shì'
          ),
        },
        {
          id: 'p003',
          label: null,
          chars: p(
            '舍利子，是诸法空相，不生不灭，不垢不净，不增不减。',
            'shè lì zǐ shì zhū fǎ kōng xiāng bù shēng bù miè bù gòu bù jìng bù zēng bù jiǎn'
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
            '无无明，亦无无明尽，乃至无老死，亦无老死尽。',
            'wú wú míng yì wú wú míng jìn nǎi zhì wú lǎo sǐ yì wú lǎo sǐ jìn'
          ),
        },
        {
          id: 'p006',
          label: null,
          chars: p(
            '无苦集灭道，无智亦无得，以无所得故。',
            'wú kǔ jí miè dào wú zhì yì wú dé yǐ wú suǒ dé gù'
          ),
        },
        {
          id: 'p007',
          label: null,
          chars: p(
            '菩提萨埵，依般若波罗蜜多故，心无挂碍。无挂碍故，无有恐怖，远离颠倒梦想，究竟涅槃。',
            'pú tí sà duǒ yī bō rě bō luó mì duō gù xīn wú guà ài wú guà ài gù wú yǒu kǒng bù yuǎn lí diān dǎo mèng xiǎng jiū jìng niè pán'
          ),
        },
        {
          id: 'p008',
          label: null,
          chars: p(
            '三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。',
            'sān shì zhū fó yī bō rě bō luó mì duō gù dé ā nuò duō luó sān miǎo sān pú tí'
          ),
        },
        {
          id: 'p009',
          label: null,
          chars: p(
            '故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒。能除一切苦，真实不虚。',
            'gù zhī bō rě bō luó mì duō shì dà shén zhòu shì dà míng zhòu shì wú shàng zhòu shì wú děng děng zhòu néng chú yī qiē kǔ zhēn shí bù xū'
          ),
        },
        {
          id: 'p010',
          label: null,
          chars: p(
            '故说般若波罗蜜多咒。即说咒曰：',
            'gù shuō bō rě bō luó mì duō zhòu jí shuō zhòu yuē'
          ),
        },
        {
          id: 'p011',
          label: null,
          chars: p(
            '揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。',
            'jiē dì jiē dì bō luó jiē dì bō luó sēng jiē dì pú tí sà pó hē'
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
