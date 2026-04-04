import type { SutraData } from './types'
import { p } from './types'

export const yaoshi: SutraData = {
  id: 'yaoshi',
  name: '药师琉璃光如来本愿功德经',
  translator: '唐三藏法师玄奘奉诏译',
  source: '《大正藏》第十四册 No.450',
  about: '《药师琉璃光如来本愿功德经》，简称《药师经》，唐玄奘译。经中叙述药师佛于因地修行时所发十二大愿，愿为众生解除疾苦、消灾延寿，并介绍药师净土及十二药叉大将护法之事。',
  sections: [
    {
      id: 'prelude',
      title: '起诵仪',
      paragraphs: [
        {
          id: 'prelude_p001',
          label: '诵经警文',
          chars: p(
            '1. 未诵前，漱口，澡手。当净三业，若三业无亏，则百福俱集。三业者，身、口、意也。端身正坐，如对圣容，则身业净也。口无杂言，断诸嬉笑，则口业净也。意不散乱，屏息万缘，则意业净也。',
            ''
          ),
        },
        {
          id: 'prelude_p002',
          label: null,
          chars: p(
            '2. 未诵前，已诵后，俱要对圣像前合掌三礼。如无佛像，对经、对空礼拜亦可。',
            ''
          ),
        },
        {
          id: 'prelude_p003',
          label: '香赞（一遍）',
          chars: p(
            '炉香乍爇．法界蒙薰．诸佛海会悉遥闻．随处结祥云．诚意方殷．诸佛现全身。',
            'lú xiāng zhà ruò fǎ jiè méng xūn zhū fó hǎi huì xī yáo wén suí chù jié xiáng yún chéng yì fāng yīn zhū fó xiàn quán shēn'
          ),
        },
        {
          id: 'prelude_p004',
          label: null,
          chars: p(
            '南無香云盖菩萨摩诃萨（合掌三称）',
            'ná mó xiāng yún gài pú sà mó hē sà'
          ),
        },
        {
          id: 'prelude_p005',
          label: '净口业真言（三遍）',
          chars: p(
            '唵．修唎修唎．摩诃修唎．修修唎．萨婆诃．',
            'ōng xiū lì xiū lì mó hē xiū lì xiū xiū lì sà pó hē'
          ),
        },
        {
          id: 'prelude_p006',
          label: '净三业真言（三遍）',
          chars: p(
            '唵．娑嚩．婆嚩秫驮．娑嚩达摩娑嚩．婆嚩秫度憾．',
            'ōng suō wǎ pó wǎ shú tuó suō wǎ dá mó suō wǎ pó wǎ shú dù hàn'
          ),
        },
        {
          id: 'prelude_p007',
          label: '安土地真言（三遍）',
          chars: p(
            '南無三满哆．母驮喃．唵度噜度噜．地尾．娑婆诃．',
            'ná mó sān mǎn duō mǔ tuó nán ōng dù lū dù lū dì wěi suō pó hē'
          ),
        },
        {
          id: 'prelude_p008',
          label: '普供养真言（三遍）',
          chars: p(
            '唵．誐誐曩．三婆嚩．韈日啰斛．',
            'ōng yé yé nǎng sān pó wǎ fá zǐ là hòng'
          ),
        },
        {
          id: 'prelude_p009',
          label: '奉请十二药叉大将（一遍）',
          chars: p(
            '奉请宫毗罗大将',
            'fèng qǐng gōng pí luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p010',
          label: null,
          chars: p(
            '奉请伐折罗大将',
            'fèng qǐng fá zhé luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p011',
          label: null,
          chars: p(
            '奉请迷企罗大将',
            'fèng qǐng mí qǐ luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p012',
          label: null,
          chars: p(
            '奉请安底罗大将',
            'fèng qǐng ān dǐ luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p013',
          label: null,
          chars: p(
            '奉请頞你罗大将',
            'fèng qǐng è nǐ luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p014',
          label: null,
          chars: p(
            '奉请珊底罗大将',
            'fèng qǐng shān dǐ luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p015',
          label: null,
          chars: p(
            '奉请因达罗大将',
            'fèng qǐng yīn dá luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p016',
          label: null,
          chars: p(
            '奉请波夷罗大将',
            'fèng qǐng bō yí luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p017',
          label: null,
          chars: p(
            '奉请摩虎罗大将',
            'fèng qǐng mó hǔ luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p018',
          label: null,
          chars: p(
            '奉请真达罗大将',
            'fèng qǐng zhēn dá luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p019',
          label: null,
          chars: p(
            '奉请招杜罗大将',
            'fèng qǐng zhāo dù luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p020',
          label: null,
          chars: p(
            '奉请毗羯罗大将',
            'fèng qǐng pí jié luó dà jiàng'
          ),
        },
        {
          id: 'prelude_p021',
          label: '发愿文（一遍）',
          chars: p(
            '稽首三界尊　我今发宏愿',
            'qǐ shǒu sān jiè zūn wǒ jīn fā hóng yuàn'
          ),
        },
        {
          id: 'prelude_p022',
          label: null,
          chars: p(
            '上报四重恩　若有见闻者',
            'shàng bào sì chóng ēn ruò yǒu jiàn wén zhě'
          ),
        },
        {
          id: 'prelude_p023',
          label: null,
          chars: p(
            '尽此一报身　亲觐大慈父',
            'jìn cǐ yī bào shēn qīn jìn dà cí fù'
          ),
        },
        {
          id: 'prelude_p024',
          label: null,
          chars: p(
            '学习狮子吼　度众脫苦海',
            'xué xí shī zǐ hǒu dù zhòng tuō kǔ hǎi'
          ),
        },
        {
          id: 'prelude_p025',
          label: null,
          chars: p(
            '皈依十方佛　持此药师经',
            'guī yī shí fāng fó chí cǐ yào shī jīng'
          ),
        },
        {
          id: 'prelude_p026',
          label: null,
          chars: p(
            '下济三塗苦　悉发菩提心',
            'xià jì sān tú kǔ xī fā pú tí xīn'
          ),
        },
        {
          id: 'prelude_p027',
          label: null,
          chars: p(
            '同生极乐国　殷勤闻真谛',
            'tóng shēng jí lè guó yīn qín wén zhēn dì'
          ),
        },
        {
          id: 'prelude_p028',
          label: null,
          chars: p(
            '回返娑婆地　弘法利群迷',
            'huí fǎn suō pó dì hóng fǎ lì qún mí'
          ),
        },
        {
          id: 'prelude_p029',
          label: null,
          chars: p(
            '南無本师释迦牟尼佛（合掌三称）',
            'ná mó běn shī shì jiā móu ní fó'
          ),
        },
        {
          id: 'prelude_p030',
          label: '开经偈（一遍）',
          chars: p(
            '无上甚深微妙法',
            'wú shàng shèn shēn wēi miào fǎ'
          ),
        },
        {
          id: 'prelude_p031',
          label: null,
          chars: p(
            '百千万劫难遭遇',
            'bǎi qiān wàn jié nán zāo yù'
          ),
        },
        {
          id: 'prelude_p032',
          label: null,
          chars: p(
            '我今见闻得受持',
            'wǒ jīn jiàn wén dé shòu chí'
          ),
        },
        {
          id: 'prelude_p033',
          label: null,
          chars: p(
            '愿解如来真实义',
            'yuàn jiě rú lái zhēn shí yì'
          ),
        },
      ],
    },
    {
      id: 'main',
      title: '正文',
      paragraphs: [
        {
          id: 'main_p001',
          label: null,
          chars: p(
            '如是我闻：',
            'rú shì wǒ wén'
          ),
        },
        {
          id: 'main_p002',
          label: null,
          chars: p(
            '一时，薄伽梵游化诸国，至广严城，住乐音树下，与大苾刍众八千人俱，菩萨摩诃萨三万六千，及国王、大臣、婆罗门、居士、天龙八部、人、非人等无量大众，恭敬围绕，而为说法。',
            'yī shí bó qié fàn yóu huà zhū guó zhì guǎng yán chéng zhù yuè yīn shù xià yǔ dà bì chú zhòng bā qiān rén jù pú sà mó hē sà sān wàn liù qiān jí guó wáng dà chén pó luó mén jū shì tiān lóng bā bù rén fēi rén děng wú liàng dà zhòng gōng jìng wéi rào ér wèi shuō fǎ'
          ),
        },
        {
          id: 'main_p003',
          label: null,
          chars: p(
            '尔时，曼殊室利法王子承佛威神，从座而起，偏袒一肩，右膝著地，向薄伽梵曲躬合掌，白言：“世尊！惟愿演说如是相类诸佛名号及本大愿殊胜功德，令诸闻者，业障消除，为欲利乐像法转时诸有情故。”',
            'ěr shí màn shū shì lì fǎ wáng zǐ chéng fó wēi shén cóng zuò ér qǐ piān tǎn yī jiān yòu xī zhuó dì xiàng bó qié fàn qū gōng hé zhǎng bó yán shì zūn wéi yuàn yǎn shuō rú shì xiāng lèi zhū fó míng hào jí běn dà yuàn shū shèng gōng dé lìng zhū wén zhě yè zhàng xiāo chú wèi yù lì lè xiàng fǎ zhuǎn shí zhū yǒu qíng gù'
          ),
        },
        {
          id: 'main_p004',
          label: null,
          chars: p(
            '尔时，世尊赞曼殊室利童子言：“善哉！善哉！曼殊室利，汝以大悲劝请我说诸佛名号本愿功德，为拔业障所缠有情，利益安乐像法转时诸有情故。汝今谛听，极善思惟，当为汝说。”',
            'ěr shí shì zūn zàn màn shū shì lì tóng zǐ yán shàn zāi shàn zāi màn shū shì lì rǔ yǐ dà bēi quàn qǐng wǒ shuō zhū fó míng hào běn yuàn gōng dé wèi bá yè zhàng suǒ chán yǒu qíng lì yì ān lè xiàng fǎ zhuǎn shí zhū yǒu qíng gù rǔ jīn dì tīng jí shàn sī wéi dāng wèi rǔ shuō'
          ),
        },
        {
          id: 'main_p005',
          label: null,
          chars: p(
            '曼殊室利言：“唯然！愿说，我等乐闻。”',
            'màn shū shì lì yán wěi rán yuàn shuō wǒ děng yào wén'
          ),
        },
        {
          id: 'main_p006',
          label: null,
          chars: p(
            '佛告曼殊室利：“东方去此过十殑伽沙等佛土，有世界名净琉璃，佛号药师琉璃光如来、应、正等觉、明行圆满、善逝、世间解、无上士、调御丈夫、天人师、佛、薄伽梵。曼殊室利，彼世尊药师琉璃光如来本行菩萨道时，发十二大愿，令诸有情，所求皆得。',
            'fó gào màn shū shì lì dōng fāng qù cǐ guò shí qíng qié shā děng fó tǔ yǒu shì jiè míng jìng liú lí fó hào yào shī liú lí guāng rú lái yīng zhèng děng jué míng xíng yuán mǎn shàn shì shì jiān jiě wú shàng shì tiáo yù zhàng fū tiān rén shī fó bó qié fàn màn shū shì lì bǐ shì zūn yào shī liú lí guāng rú lái běn xíng pú sà dào shí fā shí èr dà yuàn lìng zhū yǒu qíng suǒ qiú jiē dé'
          ),
        },
        {
          id: 'main_p007',
          label: '第一大愿',
          chars: p(
            '”愿我来世，得阿耨多罗三藐三菩提时，自身光明炽然，照耀无量、无数、无边世界，以三十二大丈夫相、八十随形庄严其身，令一切有情如我无异。',
            'yuàn wǒ lái shì dé ē nòu duō luó sān miǎo sān pú tí shí zì shēn guāng míng chì rán zhào yào wú liàng wú shù wú biān shì jiè yǐ sān shí èr dà zhàng fū xiàng bā shí suí xíng zhuāng yán qí shēn lìng yī qiè yǒu qíng rú wǒ wú yì'
          ),
        },
        {
          id: 'main_p008',
          label: '第二大愿',
          chars: p(
            '“愿我来世，得菩提时，身如琉璃，内外明彻，净无瑕秽，光明广大，功德巍巍，身善安住，焰网庄严，过于日月；幽冥众生，悉蒙开晓，随意所趣，作诸事业。',
            'yuàn wǒ lái shì dé pú tí shí shēn rú liú lí nèi wài míng chè jìng wú xiá huì guāng míng guǎng dà gōng dé wēi wēi shēn shàn ān zhù yàn wǎng zhuāng yán guò yú rì yuè yōu míng zhòng shēng xī méng kāi xiǎo suí yì suǒ qù zuò zhū shì yè'
          ),
        },
        {
          id: 'main_p009',
          label: '第三大愿',
          chars: p(
            '”愿我来世，得菩提时，以无量无边智慧方便，令诸有情皆得无尽所受用物，莫令众生有所乏少。',
            'yuàn wǒ lái shì dé pú tí shí yǐ wú liàng wú biān zhì huì fāng biàn lìng zhū yǒu qíng jiē dé wú jìn suǒ shòu yòng wù mò lìng zhòng shēng yǒu suǒ fá shǎo'
          ),
        },
        {
          id: 'main_p010',
          label: '第四大愿',
          chars: p(
            '“愿我来世，得菩提时，若诸有情行邪道者，悉令安住菩提道中；若行声闻、独觉乘者，皆以大乘而安立之。',
            'yuàn wǒ lái shì dé pú tí shí ruò zhū yǒu qíng xíng xié dào zhě xī lìng ān zhù pú tí dào zhōng ruò xíng shēng wén dú jué shèng zhě jiē yǐ dà shèng ér ān lì zhī'
          ),
        },
        {
          id: 'main_p011',
          label: '第五大愿',
          chars: p(
            '”愿我来世，得菩提时，若有无量无边有情，于我法中，修行梵行，一切皆令得不缺戒，具三聚戒，设有毁犯，闻我名已，还得清净，不堕恶趣。',
            'yuàn wǒ lái shì dé pú tí shí ruò yǒu wú liàng wú biān yǒu qíng yú wǒ fǎ zhōng xiū xíng fàn hèng yī qiè jiē lìng dé bù quē jiè jù sān jù jiè shè yǒu huǐ fàn wén wǒ míng yǐ huán dé qīng jìng bú duò è qù'
          ),
        },
        {
          id: 'main_p012',
          label: '第六大愿',
          chars: p(
            '“愿我来世，得菩提时，若诸有情，其身下劣，诸根不具，丑陋顽愚，盲聋瘖痖，挛躄背偻，白癞颠狂，种种病苦，闻我名已，一切皆得端正黠慧，诸根完具，无诸疾苦。',
            'yuàn wǒ lái shì dé pú tí shí ruò zhū yǒu qíng qí shēn xià liè zhū gēn bú jù chǒu lòu wán yú máng lóng yīn yǎ luán bì bèi lǚ bái lài diān kuáng zhǒng zhǒng bìng kǔ wén wǒ míng yǐ yī qiè jiē dé duān zhèng xiá huì zhū gēn wán jù wú zhū jí kǔ'
          ),
        },
        {
          id: 'main_p013',
          label: '第七大愿',
          chars: p(
            '”愿我来世，得菩提时，若诸有情，众病逼切，无救无归，无医无药，无亲无家，贫穷多苦，我之名号，一经其耳，众病悉除，身心安乐，家属资具，悉皆丰足，乃至证得无上菩提。',
            'yuàn wǒ lái shì dé pú tí shí ruò zhū yǒu qíng zhòng bìng bī qiè wú jiù wú guī wú yī wú yào wú qīn wú jiā pín qióng duō kǔ wǒ zhī míng hào yī jīng qí ěr zhòng bìng xī chú shēn xīn ān lè jiā shǔ zī jù xī jiē fēng zú nǎi zhì zhèng dé wú shàng pú tí'
          ),
        },
        {
          id: 'main_p014',
          label: '第八大愿',
          chars: p(
            '“愿我来世，得菩提时，若有女人，为女百恶之所逼恼，极生厌离，愿舍女身，闻我名已，一切皆得转女成男，具丈夫相，乃至证得无上菩提。',
            'yuàn wǒ lái shì dé pú tí shí ruò yǒu nǚ rén wéi nǚ bǎi è zhī suǒ bī nǎo jí shēng yàn lí yuàn shě nǚ shēn wén wǒ míng yǐ yī qiè jiē dé zhuǎn nǚ chéng nán jù zhàng fū xiàng nǎi zhì zhèng dé wú shàng pú tí'
          ),
        },
        {
          id: 'main_p015',
          label: '第九大愿',
          chars: p(
            '”愿我来世，得菩提时，令诸有情，出魔罥网，解脱一切外道缠缚，若堕种种恶见稠林，皆当引摄置于正见，渐令修习诸菩萨行，速证无上正等菩提。',
            'yuàn wǒ lái shì dé pú tí shí lìng zhū yǒu qíng chū mó juàn wǎng jiě tuō yī qiè wài dào chán fù ruò duò zhǒng zhǒng è jiàn chóu lín jiē dāng yǐn shè zhì yú zhèng jiàn jiàn lìng xiū xí zhū pú sà xíng sù zhèng wú shàng zhèng děng pú tí'
          ),
        },
        {
          id: 'main_p016',
          label: '第十大愿',
          chars: p(
            '“愿我来世，得菩提时，若诸有情，王法所加，缚录鞭挞，系闭牢狱，或当刑戮，及余无量灾难陵辱，悲愁煎逼，身心受苦，若闻我名，以我福德威神力故，皆得解脱一切忧苦。',
            'yuàn wǒ lái shì dé pú tí shí ruò zhū yǒu qíng wáng fǎ suǒ jiā fù lù biān tà xì bì láo yù huò dāng xíng lù jí yú wú liàng zāi nàn líng rǔ bēi chóu jiān bī shēn xīn shòu kǔ ruò wén wǒ míng yǐ wǒ fú dé wēi shén lì gù jiē dé jiě tuō yī qiè yōu kǔ'
          ),
        },
        {
          id: 'main_p017',
          label: '第十一大愿',
          chars: p(
            '”愿我来世，得菩提时，若诸有情，饥渴所恼，为求食故，造诸恶业，得闻我名，专念受持，我当先以上妙饮食，饱足其身，后以法味，毕竟安乐，而建立之。',
            'yuàn wǒ lái shì dé pú tí shí ruò zhū yǒu qíng jī kě suǒ nǎo wèi qiú shí gù zào zhū è yè dé wén wǒ míng zhuān niàn shòu chí wǒ dāng xiān yǐ shàng miào yǐn shí bǎo zú qí shēn hòu yǐ fǎ wèi bì jìng ān lè ér jiàn lì zhī'
          ),
        },
        {
          id: 'main_p018',
          label: '第十二大愿',
          chars: p(
            '“愿我来世，得菩提时，若诸有情，贫无衣服，蚊虻、寒热昼夜逼恼，若闻我名，专念受持，如其所好，即得种种上妙衣服，亦得一切宝庄严具，华鬘涂香，鼓乐众伎，随心所翫，皆令满足。',
            'yuàn wǒ lái shì dé pú tí shí ruò zhū yǒu qíng pín wú yī fú wén méng hán rè zhòu yè bī nǎo ruò wén wǒ míng zhuān niàn shòu chí rú qí suǒ hào jí dé zhǒng zhǒng shàng miào yī fú yì dé yī qiè bǎo zhuāng yán jù huā mán tú xiāng gǔ yuè zhòng jì suí xīn suǒ wán jiē lìng mǎn zú'
          ),
        },
        {
          id: 'main_p019',
          label: null,
          chars: p(
            '”曼殊室利，是为彼世尊药师琉璃光如来、应、正等觉，行菩萨道时，所发十二微妙上愿。',
            'màn shū shì lì shì wéi bǐ shì zūn yào shī liú lí guāng rú lái yīng zhèng děng jué xíng pú sà dào shí suǒ fā shí èr wēi miào shàng yuàn'
          ),
        },
        {
          id: 'main_p020',
          label: null,
          chars: p(
            '“复次，曼殊室利，彼世尊药师琉璃光如来行菩萨道时，所发大愿及彼佛土功德庄严，我若一劫，若一劫余，说不能尽。然彼国土，一向清净，无有女人，亦无恶趣及苦音声，琉璃为地，金绳界道，城阙、宫阁、轩窗、罗网皆七宝成，亦如西方极乐世界功德庄严，等无差别。于其国中，有二菩萨摩诃萨，一名日光遍照，二名月光遍照，是彼无量无数菩萨众之上首，次补佛处，悉能持彼世尊药师琉璃光如来正法宝藏。是故，曼殊室利，诸有信心善男子、善女人等，应当愿生彼佛世界。”',
            'fù cì màn shū shì lì bǐ shì zūn yào shī liú lí guāng rú lái xíng pú sà dào shí suǒ fā dà yuàn jí bǐ fó tǔ gōng dé zhuāng yán wǒ ruò yī jié ruò yī jié yú shuō bù néng jìn rán bǐ guó tǔ yī xiàng qīng jìng wú yǒu nǚ rén yì wú è qù jí kǔ yīn shēng liú lí wéi dì jīn shéng jiè dào chéng què gōng gé xuān chuāng luó wǎng jiē qī bǎo chéng yì rú xī fāng jí lè shì jiè gōng dé zhuāng yán děng wú chā bié yú qí guó zhōng yǒu èr pú sà mó hē sà yī míng rì guāng biàn zhào èr míng yuè guāng biàn zhào shì bǐ wú liàng wú shù pú sà zhòng zhī shàng shǒu cì bǔ fó chù xī néng chí bǐ shì zūn yào shī liú lí guāng rú lái zhèng fǎ bǎo zàng shì gù màn shū shì lì zhū yǒu xìn xīn shàn nán zǐ shàn nǚ rén děng yīng dāng yuàn shēng bǐ fó shì jiè'
          ),
        },
        {
          id: 'main_p021',
          label: null,
          chars: p(
            '尔时，世尊复告曼殊室利童子言：“曼殊室利，有诸众生，不识善恶，惟怀贪吝，不知布施及施果报，愚痴无智，阙于信根，多聚财宝，勤加守护，见乞者来，其心不喜，设不获已而行施时，如割身肉，深生痛惜。复有无量悭贪有情，积集资财，于其自身尚不受用，何况能与父母、妻子、奴婢、作使及来乞者？彼诸有情，从此命终，生饿鬼界，或旁生趣，由昔人间，曾得暂闻药师琉璃光如来名故，今在恶趣，暂得忆念彼如来名，即于念时，从彼处没，还生人中，得宿命念，畏恶趣苦，不乐欲乐，好行惠施，赞叹施者，一切所有悉无贪惜，渐次尚能以头目手足、血肉身分施来求者，况余财物！',
            'ěr shí shì zūn fù gào màn shū shì lì tóng zǐ yán màn shū shì lì yǒu zhū zhòng shēng bù shí shàn è wéi huái tān lìn bù zhī bù shī jí shī guǒ bào yú chī wú zhì quē yú xìn gēn duō jù cái bǎo qín jiā shǒu hù jiàn qǐ zhě lái qí xīn bù xǐ shè bú huò yǐ ér xíng shī shí rú gē shēn ròu shēn shēng tòng xī fù yǒu wú liàng qiān tān yǒu qíng jī jí zī cái yú qí zì shēn shàng bú shòu yòng hé kuàng néng yǔ fù mǔ qī zǐ nú bì zuò shǐ jí lái qǐ zhě bǐ zhū yǒu qíng cóng cǐ mìng zhōng shēng è guǐ jiè huò páng shēng qù yóu xī rén jiān céng dé zàn wén yào shī liú lí guāng rú lái míng gù jīn zài è qù zàn dé yì niàn bǐ rú lái míng jí yú niàn shí cóng bǐ chù mò huán shēng rén zhōng dé sù mìng niàn wèi è qù kǔ bú yào yù lè hào xíng huì shī zàn tàn shī zhě yī qiè suǒ yǒu xī wú tān xī jiàn cì shàng néng yǐ tóu mù shǒu zú xuè ròu shēn fèn shī lái qiú zhě kuàng yú cái wù'
          ),
        },
        {
          id: 'main_p022',
          label: null,
          chars: p(
            '”复次，曼殊室利，若诸有情，虽于如来受诸学处而破尸罗；有虽不破尸罗而破轨则；有于尸罗、轨则虽得不坏，然毁正见；有虽不毁正见而弃多闻，于佛所说契经深义不能解了；有虽多闻而增上慢，由增上慢覆蔽心故，自是非他，嫌谤正法，为魔伴党。如是愚人，自行邪见，复令无量俱胝有情，堕大险坑，此诸有情，应于地狱、旁生、鬼趣流转无穷。若得闻此药师琉璃光如来名号，便舍恶行，修诸善法，不堕恶趣。设有不能舍诸恶行修行善法堕恶趣者，以彼如来本愿威力，令其现前，暂闻名号，从彼命终，还生人趣，得正见精进，善调意乐，便能舍家，趣于非家，如来法中，受持学处，无有毁犯，正见多闻，解甚深义，离增上慢，不谤正法，不为魔伴，渐次修行诸菩萨行，速得圆满。',
            'fù cì màn shū shì lì ruò zhū yǒu qíng suī yú rú lái shòu zhū xué chù ér pò shī luó yǒu suī bú pò shī luó ér pò guǐ zé yǒu yú shī luó guǐ zé suī dé bú huài rán huǐ zhèng jiàn yǒu suī bù huǐ zhèng jiàn ér qì duō wén yú fó suǒ shuō qì jīng shēn yì bù néng jiě liǎo yǒu suī duō wén ér zēng shàng màn yóu zēng shàng màn fù bì xīn gù zì shì fēi tā xián bàng zhèng fǎ wéi mó bàn dǎng rú shì yú rén zì xíng xié jiàn fù lìng wú liàng jù zhī yǒu qíng duò dà xiǎn kēng cǐ zhū yǒu qíng yīng yú dì yù páng shēng guǐ qù liú zhuǎn wú qióng ruò dé wén cǐ yào shī liú lí guāng rú lái míng hào biàn shě è xíng xiū zhū shàn fǎ bú duò è qù shè yǒu bù néng shě zhū è xíng xiū xíng shàn fǎ duò è qù zhě yǐ bǐ rú lái běn yuàn wēi lì lìng qí xiàn qián zàn wén míng hào cóng bǐ mìng zhōng huán shēng rén qù dé zhèng jiàn jīng jìn shàn tiáo yì lè biàn néng shě jiā qù yú fēi jiā rú lái fǎ zhōng shòu chí xué chù wú yǒu huǐ fàn zhèng jiàn duō wén jiě shèn shēn yì lí zēng shàng màn bú bàng zhèng fǎ bù wéi mó bàn jiàn cì xiū xíng zhū pú sà xíng sù dé yuán mǎn'
          ),
        },
        {
          id: 'main_p023',
          label: null,
          chars: p(
            '“复次，曼殊室利，若诸有情，悭贪嫉妒，自赞毁他，当堕三恶趣中，无量千岁受诸剧苦；受剧苦已，从彼命终，来生人间，作牛马驼驴，恒被鞭挞、饥渴逼恼，又常负重，随路而行；或得为人，生居下贱，作人奴婢，受他驱役，恒不自在。若昔人中曾闻世尊药师琉璃光如来名号，由此善因，今复忆念，至心归依，以佛神力，众苦解脱，诸根聪利，智慧多闻，恒求胜法，常遇善友，永断魔罥，破无明㲉，竭烦恼河，解脱一切生、老、病、死、忧愁、苦恼。',
            'fù cì màn shū shì lì ruò zhū yǒu qíng qiān tān jí dù zì zàn huǐ tā dāng duò sān è qù zhōng wú liàng qiān suì shòu zhū jù kǔ shòu jù kǔ yǐ cóng bǐ mìng zhōng lái shēng rén jiān zuò niú mǎ tuó lǘ héng bèi biān tà jī kě bī nǎo yòu cháng fù zhòng suí lù ér xíng huò dé wéi rén shēng jū xià jiàn zuò rén nú bì shòu tā qū yì héng bú zì zài ruò xī rén zhōng céng wén shì zūn yào shī liú lí guāng rú lái míng hào yóu cǐ shàn yīn jīn fù yì niàn zhì xīn guī yī yǐ fó shén lì zhòng kǔ jiě tuō zhū gēn cōng lì zhì huì duō wén héng qiú shèng fǎ cháng yù shàn yǒu yǒng duàn mó juàn pò wú míng què jié fán nǎo hé jiě tuō yī qiè shēng lǎo bìng sǐ yōu chóu kǔ nǎo'
          ),
        },
        {
          id: 'main_p024',
          label: null,
          chars: p(
            '”复次，曼殊室利，若诸有情，好喜乖离，更相斗讼，恼乱自他，以身、语、意造作增长种种恶业，展转常为不饶益事，互相谋害，告召山林、树冢等神，杀诸众生，取其血肉，祭祀药叉、罗刹婆等，书怨人名，作其形像，以恶咒术而咒诅之，厌魅、蛊道、咒起尸鬼，令断彼命及坏其身。是诸有情，若得闻此药师琉璃光如来名号，彼诸恶事，悉不能害，一切展转皆起慈心，利益安乐，无损恼意及嫌恨心，各各欢悦，于自所受生于喜足，不相侵陵，互为饶益。',
            'fù cì màn shū shì lì ruò zhū yǒu qíng hào xǐ guāi lí gèng xiāng dòu sòng nǎo luàn zì tā yǐ shēn yǔ yì zào zuò zēng zhǎng zhǒng zhǒng è yè zhǎn zhuǎn cháng wéi bù ráo yì shì hù xiāng móu hài gào zhào shān lín shù zhǒng děng shén shā zhū zhòng shēng qǔ qí xuè ròu jì sì yào chā luó chà pó děng shū yuàn rén míng zuò qí xíng xiàng yǐ è zhòu shù ér zhòu zǔ zhī yǎn mèi gǔ dào zhòu qǐ shī guǐ lìng duàn bǐ mìng jí huài qí shēn shì zhū yǒu qíng ruò dé wén cǐ yào shī liú lí guāng rú lái míng hào bǐ zhū è shì xī bù néng hài yī qiè zhǎn zhuǎn jiē qǐ cí xīn lì yì ān lè wú sǔn nǎo yì jí xián hèn xīn gè gè huān yuè yú zì suǒ shòu shēng yú xǐ zú bù xiāng qīn líng hù wéi ráo yì'
          ),
        },
        {
          id: 'main_p025',
          label: null,
          chars: p(
            '“复次，曼殊室利，若有四众苾刍、苾刍尼、邬波索迦、邬波斯迦及余净信善男子、善女人等，有能受持八分斋戒，或经一年，或复三月，受持学处，以此善根，愿生西方极乐世界无量寿佛所听闻正法而未定者，若闻世尊药师琉璃光如来名号，临命终时，有八大菩萨，其名曰：文殊师利菩萨、观世音菩萨、得大势菩萨、无尽意菩萨、宝檀华菩萨、药王菩萨、药上菩萨、弥勒菩萨，是八大菩萨，乘空而来，示其道路，即于彼界种种杂色众宝华中自然化生。或有因此生于天上，虽生天上，而本善根亦未穷尽，不复更生诸余恶趣。天上寿尽，还生人间，或为轮王，统摄四洲，威德自在，安立无量百千有情于十善道；或生刹帝力、婆罗门、居士大家，多饶财宝，仓库盈溢，形相端正，眷属具足，聪明智慧，勇健威猛如大力士。若是女人，得闻世尊药师琉璃光如来名号，至心受持，于后不复更受女身。',
            'fù cì màn shū shì lì ruò yǒu sì zhòng bì chú bì chú ní wū bō suǒ jiā wū bō sī jiā jí yú jìng xìn shàn nán zǐ shàn nǚ rén děng yǒu néng shòu chí bā fēn zhāi jiè huò jīng yī nián huò fù sān yuè shòu chí xué chù yǐ cǐ shàn gēn yuàn shēng xī fāng jí lè shì jiè wú liàng shòu fó suǒ tīng wén zhèng fǎ ér wèi dìng zhě ruò wén shì zūn yào shī liú lí guāng rú lái míng hào lín mìng zhōng shí yǒu bā dà pú sà qí míng yuē wén shū shī lì pú sà guān shì yīn pú sà dé dà shì pú sà wú jìn yì pú sà bǎo tán huā pú sà yào wáng pú sà yào shàng pú sà mí lè pú sà shì bā dà pú sà chéng kōng ér lái shì qí dào lù jí yú bǐ jiè zhǒng zhǒng zá sè zhòng bǎo huā zhōng zì rán huà shēng huò yǒu yīn cǐ shēng yú tiān shàng suī shēng tiān shàng ér běn shàn gēn yì wèi qióng jìn bú fù gèng shēng zhū yú è qù tiān shàng shòu jìn huán shēng rén jiān huò wéi lún wáng tǒng shè sì zhōu wēi dé zì zài ān lì wú liàng bǎi qiān yǒu qíng yú shí shàn dào huò shēng chà dì lì pó luó mén jū shì dà jiā duō ráo cái bǎo cāng kù yíng yì xíng xiàng duān zhèng juàn shǔ jù zú cōng míng zhì huì yǒng jiàn wēi měng rú dà lì shì ruò shì nǚ rén dé wén shì zūn yào shī liú lí guāng rú lái míng hào zhì xīn shòu chí yú hòu bú fù gèng shòu nǚ shēn'
          ),
        },
        {
          id: 'main_p026',
          label: null,
          chars: p(
            '”复次，曼殊室利，彼药师琉璃光如来得菩提时，由本愿力观诸有情，遇众病苦，瘦𤼣、干消、黄热等病；或被厌魅、蛊毒所中；或复短命；或时横死。欲令是等病苦消除，所求愿满，时彼世尊，入三摩地，名曰除灭一切众生苦恼，既入定已，于肉髻中，出大光明，光中演说大陀罗尼曰：',
            'fù cì màn shū shì lì bǐ yào shī liú lí guāng rú lái dé pú tí shí yóu běn yuàn lì guān zhū yǒu qíng yù zhòng bìng kǔ shòu luán gān xiāo huáng rè děng bìng huò bèi yǎn mèi gǔ dú suǒ zhòng huò fù duǎn mìng huò shí hèng sǐ yù lìng shì děng bìng kǔ xiāo chú suǒ qiú yuàn mǎn shí bǐ shì zūn rù sān mó dì míng yuē chú miè yī qiè zhòng shēng kǔ nǎo jì rù dìng yǐ yú ròu jì zhōng chū dà guāng míng guāng zhōng yǎn shuō dà tuó luó ní yuē'
          ),
        },
        {
          id: 'main_p027',
          label: null,
          chars: p(
            '“南谟薄伽伐帝　鞞杀社窭噜　薜琉璃　钵喇婆　喝啰阇也　呾陀揭多邪　阿啰喝帝　三藐三勃陀邪　怛侄陀　唵　鞞杀逝　鞞杀逝　鞞杀社　三没揭帝　莎诃”',
            'ná mó bó qié fá dì pí shā shè jù lū bì liú lí bō lā pó hē là shé yě dá tuō jiē duō yē ē là hē dì sān miǎo sān bó tuó yē dá zhí tuō àn pí shā shì pí shā shì pí shā shè sān mò jiē dì suō hē'
          ),
        },
        {
          id: 'main_p028',
          label: null,
          chars: p(
            '“尔时，光中说此咒已，大地震动，放大光明，一切众生病苦皆除，受安隐乐。曼殊室利，若见男子、女人有病苦者，应当一心为彼病人常清净澡漱，或食、或药、或无虫水咒一百八遍，与彼服食，所有病苦，悉皆消灭。若有所求，至心念诵，皆得如是，无病延年，命终之后生彼世界，得不退转，乃至菩提。是故，曼殊室利，若有男子、女人，于彼药师琉璃光如来，至心殷重，恭敬供养者，常持此咒，勿令废忘。',
            'ěr shí guāng zhōng shuō cǐ zhòu yǐ dà dì zhèn dòng fàng dà guāng míng yī qiè zhòng shēng bìng kǔ jiē chú shòu ān wěn lè màn shū shì lì ruò jiàn nán zǐ nǚ rén yǒu bìng kǔ zhě yīng dāng yī xīn wèi bǐ bìng rén cháng qīng jìng zǎo shù huò shí huò yào huò wú chóng shuǐ zhòu yī bǎi bā biàn yǔ bǐ fú shí suǒ yǒu bìng kǔ xī jiē xiāo miè ruò yǒu suǒ qiú zhì xīn niàn sòng jiē dé rú shì wú bìng yán nián mìng zhōng zhī hòu shēng bǐ shì jiè dé bú tuì zhuǎn nǎi zhì pú tí shì gù màn shū shì lì ruò yǒu nán zǐ nǚ rén yú bǐ yào shī liú lí guāng rú lái zhì xīn yīn zhòng gōng jìng gòng yǎng zhě cháng chí cǐ zhòu wù lìng fèi wàng'
          ),
        },
        {
          id: 'main_p029',
          label: null,
          chars: p(
            '”复次，曼殊室利，若有净信男子、女人，得闻药师琉璃光如来、应、正等觉所有名号，闻已诵持；晨嚼齿木，澡漱清净，以诸香华、烧香、涂香，作众伎乐，供养形像；于此经典，若自书，若教人书，一心受持，听闻其义；于彼法师，应修供养，一切所有资身之具，悉皆施与，勿令乏少。如是便蒙诸佛护念，所求愿满，乃至菩提。“',
            'fù cì màn shū shì lì ruò yǒu jìng xìn nán zǐ nǚ rén dé wén yào shī liú lí guāng rú lái yīng zhèng děng jué suǒ yǒu míng hào wén yǐ sòng chí chén jiáo chǐ mù zǎo shù qīng jìng yǐ zhū xiāng huā shāo xiāng tú xiāng zuò zhòng jì yuè gòng yǎng xíng xiàng yú cǐ jīng diǎn ruò zì shū ruò jiào rén shū yī xīn shòu chí tīng wén qí yì yú bǐ fǎ shī yīng xiū gòng yǎng yī qiè suǒ yǒu zī shēn zhī jù xī jiē shī yǔ wù lìng fá shǎo rú shì biàn méng zhū fó hù niàn suǒ qiú yuàn mǎn nǎi zhì pú tí'
          ),
        },
        {
          id: 'main_p030',
          label: null,
          chars: p(
            '尔时，曼殊室利童子白佛言：”世尊！我当誓于像法转时，以种种方便，令诸净信善男子、善女人等，得闻世尊药师琉璃光如来名号，乃至睡中亦以佛名觉悟其耳。世尊！若于此经受持读诵，或复为他演说开示，若自书，若教人书，恭敬尊重，以种种华香、涂香、粖香、烧香、华鬘、璎珞、幡盖、伎乐而为供养，以五色彩作囊盛之，扫洒净处，敷设高座而用安处。尔时，四大天王与其眷属及余无量百千天众，皆诣其所，供养守护。世尊，若此经宝流行之处，有能受持，以彼世尊药师琉璃光如来本愿功德及闻名号，当知是处，无复横死，亦复不为诸恶鬼神夺其精气，设已夺者，还得如故，身心安乐。“',
            'ěr shí màn shū shì lì tóng zǐ bó fó yán shì zūn wǒ dāng shì yú xiàng fǎ zhuǎn shí yǐ zhǒng zhǒng fāng biàn lìng zhū jìng xìn shàn nán zǐ shàn nǚ rén děng dé wén shì zūn yào shī liú lí guāng rú lái míng hào nǎi zhì shuì zhōng yì yǐ fó míng jué wù qí ěr shì zūn ruò yú cǐ jīng shòu chí dú sòng huò fù wèi tā yǎn shuō kāi shì ruò zì shū ruò jiào rén shū gōng jìng zūn zhòng yǐ zhǒng zhǒng huā xiāng tú xiāng mò xiāng shāo xiāng huā mán yīng luò fān gài jì yuè ér wéi gòng yǎng yǐ wǔ sè cǎi zuò náng chéng zhī sǎo sǎ jìng chù fū shè gāo zuò ér yòng ān chǔ ěr shí sì dà tiān wáng yǔ qí juàn shǔ jí yú wú liàng bǎi qiān tiān zhòng jiē yì qí suǒ gòng yǎng shǒu hù shì zūn ruò cǐ jīng bǎo liú xíng zhī chù yǒu néng shòu chí yǐ bǐ shì zūn yào shī liú lí guāng rú lái běn yuàn gōng dé jí wén míng hào dāng zhī shì chù wú fù hèng sǐ yì fù bù wéi zhū è guǐ shén duó qí jīng qì shè yǐ duó zhě huán dé rú gù shēn xīn ān lè'
          ),
        },
        {
          id: 'main_p031',
          label: null,
          chars: p(
            '佛告曼殊室利：”如是！如是！如汝所说。曼殊室利，若有净信善男子、善女人等，欲供养彼世尊药师琉璃光如来者，应先造立彼佛形像，敷清净座而安处之，散种种华，烧种种香，以种种幢幡庄严其处，七日七夜受八分斋戒，食清净食，澡浴香洁，著清净衣，应生无垢浊心，无怒害心，于一切有情，起利益安乐、慈悲喜舍、平等之心，鼓乐歌赞，右绕佛像，复应念彼如来本愿功德，读诵此经，思惟其义，演说开示，随所乐求，一切皆遂。求长寿得长寿，求富饶得富饶，求官位得官位，求男女得男女。若复有人，忽得恶梦，见诸恶相，或怪鸟来集，或于住处百怪出现，此人若以众妙资具，恭敬供养彼世尊药师琉璃光如来者，恶梦、恶相、诸不吉祥皆悉隐没，不能为患。或有水火、刀毒、悬险、恶象、师子、虎狼、熊罴、毒蛇、恶蝎、蜈蚣、蚰蜒、蚊虻等怖，若能至心忆念彼佛，恭敬供养，一切怖畏皆得解脱。若他国侵扰，盗贼反乱，忆念恭敬彼如来者，亦皆解脱。',
            'fó gào màn shū shì lì rú shì rú shì rú rǔ suǒ shuō màn shū shì lì ruò yǒu jìng xìn shàn nán zǐ shàn nǚ rén děng yù gòng yǎng bǐ shì zūn yào shī liú lí guāng rú lái zhě yīng xiān zào lì bǐ fó xíng xiàng fū qīng jìng zuò ér ān chǔ zhī sàn zhǒng zhǒng huā shāo zhǒng zhǒng xiāng yǐ zhǒng zhǒng chuáng fān zhuāng yán qí chù qī rì qī yè shòu bā fēn zhāi jiè shí qīng jìng shí zǎo yù xiāng jié zhuó qīng jìng yī yīng shēng wú gòu zhuó xīn wú nù hài xīn yú yī qiè yǒu qíng qǐ lì yì ān lè cí bēi xǐ shě píng děng zhī xīn gǔ yuè gē zàn yòu rào fó xiàng fù yīng niàn bǐ rú lái běn yuàn gōng dé dú sòng cǐ jīng sī wéi qí yì yǎn shuō kāi shì suí suǒ yào qiú yī qiè jiē suì qiú cháng shòu dé cháng shòu qiú fù ráo dé fù ráo qiú guān wèi dé guān wèi qiú nán nǚ dé nán nǚ ruò fù yǒu rén hū dé è mèng jiàn zhū è xiàng huò guài niǎo lái jí huò yú zhù chù bǎi guài chū xiàn cǐ rén ruò yǐ zhòng miào zī jù gōng jìng gòng yǎng bǐ shì zūn yào shī liú lí guāng rú lái zhě è mèng è xiàng zhū bù jí xiáng jiē xī yǐn mò bù néng wéi huàn huò yǒu shuǐ huǒ dāo dú xuán xiǎn è xiàng shī zǐ hǔ láng xióng pí dú shé è xiē wú gōng yóu yán wén méng děng bù ruò néng zhì xīn yì niàn bǐ fó gōng jìng gòng yǎng yī qiè bù wèi jiē dé jiě tuō ruò tā guó qīn rǎo dào zéi fǎn luàn yì niàn gōng jìng bǐ rú lái zhě yì jiē jiě tuō'
          ),
        },
        {
          id: 'main_p032',
          label: null,
          chars: p(
            '“复次，曼殊室利，若有净信善男子、善女人等，乃至尽形不事余天，唯当一心归佛、法、僧，受持禁戒，若五戒、十戒、菩萨四百戒、苾刍二百五十戒、苾刍尼五百戒，于所受中，或有毁犯，怖堕恶趣，若能专念彼佛名号，恭敬供养者，必定不受三恶趣生。或有女人，临当产时，受于极苦，若能至心称名、礼赞、恭敬、供养彼如来者，众苦皆除，所生之子，身分具足，形色端正，见者欢喜，利根聪明，安隐少病，无有非人夺其精气。”',
            'fù cì màn shū shì lì ruò yǒu jìng xìn shàn nán zǐ shàn nǚ rén děng nǎi zhì jìn xíng bú shì yú tiān wéi dāng yī xīn guī fó fǎ sēng shòu chí jìn jiè ruò wǔ jiè shí jiè pú sà sì bǎi jiè bì chú èr bǎi wǔ shí jiè bì chú ní wǔ bǎi jiè yú suǒ shòu zhōng huò yǒu huǐ fàn bù duò è qù ruò néng zhuān niàn bǐ fó míng hào gōng jìng gòng yǎng zhě bì dìng bú shòu sān è qù shēng huò yǒu nǚ rén lín dāng chǎn shí shòu yú jí kǔ ruò néng zhì xīn chēng míng lǐ zàn gōng jìng gòng yǎng bǐ rú lái zhě zhòng kǔ jiē chú suǒ shēng zhī zǐ shēn fèn jù zú xíng sè duān zhèng jiàn zhě huān xǐ lì gēn cōng míng ān wěn shǎo bìng wú yǒu fēi rén duó qí jīng qì'
          ),
        },
        {
          id: 'main_p033',
          label: null,
          chars: p(
            '尔时，世尊告阿难言：“如我称扬彼世尊药师琉璃光如来所有功德，此是诸佛甚深行处，难可解了，汝为信不？”',
            'ěr shí shì zūn gào ē nán yán rú wǒ chēng yáng bǐ shì zūn yào shī liú lí guāng rú lái suǒ yǒu gōng dé cǐ shì zhū fó shèn shēn xíng chù nán kě jiě liǎo rǔ wéi xìn fǒu'
          ),
        },
        {
          id: 'main_p034',
          label: null,
          chars: p(
            '阿难白言：“大德世尊！我于如来所说契经，不生疑惑，所以者何？一切如来身、语、意业无不清净！世尊！此日月轮可令堕落，妙高山王可使倾动，诸佛所言无有异也。世尊！有诸众生，信根不具，闻说诸佛甚深行处，作是思惟：\'云何但念药师琉璃光如来一佛名号，便获尔所功德胜利？\'由此不信，返生诽谤，彼于长夜，失大利乐，堕诸恶趣，流转无穷。”',
            'ē nán bó yán dà dé shì zūn wǒ yú rú lái suǒ shuō qì jīng bù shēng yí huò suǒ yǐ zhě hé yī qiè rú lái shēn yǔ yì yè wú bù qīng jìng shì zūn cǐ rì yuè lún kě lìng duò luò miào gāo shān wáng kě shǐ qīng dòng zhū fó suǒ yán wú yǒu yì yě shì zūn yǒu zhū zhòng shēng xìn gēn bú jù wén shuō zhū fó shèn shēn xíng chù zuò shì sī wéi yún hé dàn niàn yào shī liú lí guāng rú lái yī fó míng hào biàn huò ěr suǒ gōng dé shèng lì yóu cǐ bú xìn fǎn shēng fěi bàng bǐ yú cháng yè shī dà lì lè duò zhū è qù liú zhuǎn wú qióng'
          ),
        },
        {
          id: 'main_p035',
          label: null,
          chars: p(
            '佛告阿难：“是诸有情，若闻世尊药师琉璃光如来名号，至心受持，不生疑惑，堕恶趣者，无有是处。阿难，此是诸佛甚深所行，难可信解，汝今能受，当知皆是如来威力。阿难，一切声闻、独觉及未登地诸菩萨等，皆悉不能如实信解，唯除一生所系菩萨。阿难，人身难得，于三宝中信敬尊重亦难可得，闻世尊药师琉璃光如来名号，复难于是。阿难，彼药师琉璃光如来无量菩萨行，无量善巧方便，无量广大愿，我若一劫、若一劫余而广说者，劫可速尽，彼佛行愿、善巧方便无有尽也。”',
            'fó gào ē nán shì zhū yǒu qíng ruò wén shì zūn yào shī liú lí guāng rú lái míng hào zhì xīn shòu chí bù shēng yí huò duò è qù zhě wú yǒu shì chù ē nán cǐ shì zhū fó shèn shēn suǒ xíng nán kě xìn jiě rǔ jīn néng shòu dāng zhī jiē shì rú lái wēi lì ē nán yī qiè shēng wén dú jué jí wèi dēng dì zhū pú sà děng jiē xī bù néng rú shí xìn jiě wéi chú yī shēng suǒ xì pú sà ē nán rén shēn nán dé yú sān bǎo zhōng xìn jìng zūn zhòng yì nán kě dé wén shì zūn yào shī liú lí guāng rú lái míng hào fù nán yú shì ē nán bǐ yào shī liú lí guāng rú lái wú liàng pú sà xíng wú liàng shàn qiǎo fāng biàn wú liàng guǎng dà yuàn wǒ ruò yī jié ruò yī jié yú ér guǎng shuō zhě jié kě sù jìn bǐ fó xíng yuàn shàn qiǎo fāng biàn wú yǒu jìn yě'
          ),
        },
        {
          id: 'main_p036',
          label: null,
          chars: p(
            '尔时，众中有一菩萨摩诃萨，名曰救脱，即从座起，偏袒右肩，右膝著地，曲躬合掌，而白佛言：“大德世尊！像法转时，有诸众生为种种患之所困厄，长病羸瘦，不能饮食，喉唇干燥，见诸方暗，死相现前，父母、亲属、朋友、知识啼泣围绕；然彼自身，卧在本处，见琰魔使引其神识至于琰魔法王之前；然诸有情，有俱生神，随其所作，若罪若福，皆具书之，尽持授与琰魔法王；尔时，彼王推问其人，计算所作，随其罪福而处断之。时彼病人亲属、知识，若能为彼归依世尊药师琉璃光如来，请诸众僧，转读此经，然七层之灯，悬五色续命神旛，或有是处，彼识得还，如在梦中明了自见。或经七日，或二十一日，或三十五日，或四十九日，彼识还时，如从梦觉，皆自忆知善、不善业所得果报，由自证见业果报故，乃至命难亦不造作诸恶之业。是故，净信善男子、善女人等，皆应受持药师琉璃光如来名号，随力所能，恭敬供养。”',
            'ěr shí zhòng zhōng yǒu yī pú sà mó hē sà míng yuē jiù tuō jí cóng zuò qǐ piān tǎn yòu jiān yòu xī zhuó dì qū gōng hé zhǎng ér bó fó yán dà dé shì zūn xiàng fǎ zhuǎn shí yǒu zhū zhòng shēng wéi zhǒng zhǒng huàn zhī suǒ kùn è cháng bìng léi shòu bù néng yǐn shí hóu chún gān zào jiàn zhū fāng àn sǐ xiàng xiàn qián fù mǔ qīn shǔ péng yǒu zhī shí tí qì wéi rào rán bǐ zì shēn wò zài běn chù jiàn yǎn mó shǐ yǐn qí shén shí zhì yú yǎn mó fǎ wáng zhī qián rán zhū yǒu qíng yǒu jù shēng shén suí qí suǒ zuò ruò zuì ruò fú jiē jù shū zhī jìn chí shòu yǔ yǎn mó fǎ wáng ěr shí bǐ wáng tuī wèn qí rén jì suàn suǒ zuò suí qí zuì fú ér chǔ duàn zhī shí bǐ bìng rén qīn shǔ zhī shí ruò néng wèi bǐ guī yī shì zūn yào shī liú lí guāng rú lái qǐng zhū zhòng sēng zhuǎn dú cǐ jīng rán qī céng zhī dēng xuán wǔ sè xù mìng shén fān huò yǒu shì chù bǐ shí dé huán rú zài mèng zhōng míng liǎo zì jiàn huò jīng qī rì huò èr shí yī rì huò sān shí wǔ rì huò sì shí jiǔ rì bǐ shí huán shí rú cóng mèng jué jiē zì yì zhī shàn bú shàn yè suǒ dé guǒ bào yóu zì zhèng jiàn yè guǒ bào gù nǎi zhì mìng nàn yì bú zào zuò zhū è zhī yè shì gù jìng xìn shàn nán zǐ shàn nǚ rén děng jiē yīng shòu chí yào shī liú lí guāng rú lái míng hào suí lì suǒ néng gōng jìng gòng yǎng'
          ),
        },
        {
          id: 'main_p037',
          label: null,
          chars: p(
            '尔时，阿难问救脱菩萨曰：“善男子，应云何恭敬供养彼世尊药师琉璃光如来？续命幡灯复云何造？”',
            'ěr shí ē nán wèn jiù tuō pú sà yuē shàn nán zǐ yīng yún hé gōng jìng gòng yǎng bǐ shì zūn yào shī liú lí guāng rú lái xù mìng fān dēng fù yún hé zào'
          ),
        },
        {
          id: 'main_p038',
          label: null,
          chars: p(
            '救脱菩萨言：“大德！若有病人欲脱病苦，当为其人七日七夜受持八分斋戒；应以饮食及余资具随力所办，供养苾刍僧；昼夜六时，礼拜、行道、供养彼世尊药师琉璃光如来，读诵此经四十九遍，然四十九灯，造彼如来形像七躯，一一像前各置七灯，一一灯量大如车轮，乃至四十九日光明不绝，造五色彩幡长四十九搩手，应放杂类众生至四十九，可得过度危厄之难，不为诸横恶鬼所持。',
            'jiù tuō pú sà yán dà dé ruò yǒu bìng rén yù tuō bìng kǔ dāng wèi qí rén qī rì qī yè shòu chí bā fēn zhāi jiè yīng yǐ yǐn shí jí yú zī jù suí lì suǒ bàn gòng yǎng bì chú sēng zhòu yè liù shí lǐ bài xíng dào gòng yǎng bǐ shì zūn yào shī liú lí guāng rú lái dú sòng cǐ jīng sì shí jiǔ biàn rán sì shí jiǔ dēng zào bǐ rú lái xíng xiàng qī qū yī yī xiàng qián gè zhì qī dēng yī yī dēng liàng dà rú chē lún nǎi zhì sì shí jiǔ rì guāng míng bù jué zào wǔ sè cǎi fān cháng sì shí jiǔ zhé shǒu yīng fàng zá lèi zhòng shēng zhì sì shí jiǔ kě dé guò dù wēi è zhī nàn bú wéi zhū hèng è guǐ suǒ chí'
          ),
        },
        {
          id: 'main_p039',
          label: null,
          chars: p(
            '”复次，阿难，若刹帝力、灌顶王等灾难起时，所谓人众疾疫难、他国侵逼难、自界叛逆难、星宿变怪难、日月薄蚀难、非时风雨难、过时不雨难。彼刹帝力、灌顶王等，尔时应于一切有情起慈悲心，赦诸系闭，依前所说供养之法，供养彼世尊药师琉璃光如来，由此善根及彼如来本愿力故，令其国界即得安隐，风雨顺时，谷稼成熟，一切有情无病欢乐；于其国中，无有暴恶药叉等神恼有情者，一切恶相皆即隐没；而刹帝力、灌顶王等，寿命色力，无病自在，皆得增益。阿难，若帝后、妃主、储君、王子、大臣、辅相、中宫、婇女、百官、黎庶为病所苦及余厄难，亦应造立五色神幡，然灯续明，放诸生命，散杂色华，烧众名香，病得除愈，众难解脱。“',
            'fù cì ē nán ruò chà dì lì guàn dǐng wáng děng zāi nàn qǐ shí suǒ wèi rén zhòng jí yì nàn tā guó qīn bī nàn zì jiè pàn nì nàn xīng xiù biàn guài nàn rì yuè bó shí nàn fēi shí fēng yǔ nàn guò shí bù yǔ nàn bǐ chà dì lì guàn dǐng wáng děng ěr shí yīng yú yī qiè yǒu qíng qǐ cí bēi xīn shè zhū xì bì yī qián suǒ shuō gòng yǎng zhī fǎ gòng yǎng bǐ shì zūn yào shī liú lí guāng rú lái yóu cǐ shàn gēn jí bǐ rú lái běn yuàn lì gù lìng qí guó jiè jí dé ān wěn fēng yǔ shùn shí gǔ jià chéng shú yī qiè yǒu qíng wú bìng huān lè yú qí guó zhōng wú yǒu bào è yào chā děng shén nǎo yǒu qíng zhě yī qiè è xiàng jiē jí yǐn mò ér chà dì lì guàn dǐng wáng děng shòu mìng sè lì wú bìng zì zài jiē dé zēng yì ē nán ruò dì hòu fēi zhǔ chǔ jūn wáng zǐ dà chén fǔ xiàng zhōng gōng cǎi nǚ bǎi guān lí shù wéi bìng suǒ kǔ jí yú è nàn yì yīng zào lì wǔ sè shén fān rán dēng xù míng fàng zhū shēng mìng sàn zá sè huā shāo zhòng míng xiāng bìng dé chú yù zhòng nàn jiě tuō'
          ),
        },
        {
          id: 'main_p040',
          label: null,
          chars: p(
            '尔时，阿难问救脱菩萨言：”善男子，云何已尽之命而可增益？“',
            'ěr shí ē nán wèn jiù tuō pú sà yán shàn nán zǐ yún hé yǐ jìn zhī mìng ér kě zēng yì'
          ),
        },
        {
          id: 'main_p041',
          label: null,
          chars: p(
            '救脱菩萨言：”大德！汝岂不闻如来说有九横死耶？是故劝造续命幡灯，修诸福德。以修福故，尽其寿命，不经苦患。“',
            'jiù tuō pú sà yán dà dé rǔ qǐ bù wén rú lái shuō yǒu jiǔ hèng sǐ yé shì gù quàn zào xù mìng fān dēng xiū zhū fú dé yǐ xiū fú gù jìn qí shòu mìng bù jīng kǔ huàn'
          ),
        },
        {
          id: 'main_p042',
          label: null,
          chars: p(
            '阿难问言：”九横云何？“',
            'ē nán wèn yán jiǔ hèng yún hé'
          ),
        },
        {
          id: 'main_p043',
          label: null,
          chars: p(
            '救脱菩萨言：”若诸有情，得病虽轻，然无医药及看病者，设复遇医，授以非药，实不应死，而便横死；又信世间邪魔外道妖孽之师，妄说祸福，便生恐动，心不自正，卜问觅祸，杀种种众生，解奏神明，呼诸魍魉，请乞福佑，欲冀延年，终不能得，愚痴迷惑，信邪倒见，遂令横死，入于地狱，无有出期，是名初横；二者，横被王法之所诛戮；三者，畋猎嬉戏，耽淫嗜酒，放逸无度，横为非人夺其精气；四者，横为火焚；五者，横为水溺；六者，横为种种恶兽所啖；七者，横堕山崖；八者，横为毒药、厌祷、咒咀、起尸鬼等之所中害；九者，饥渴所困，不得饮食，而便横死。是为如来略说横死有此九种，其余复有无量诸横，难可具说。',
            'jiù tuō pú sà yán ruò zhū yǒu qíng dé bìng suī qīng rán wú yī yào jí kàn bìng zhě shè fù yù yī shòu yǐ fēi yào shí bù yīng sǐ ér biàn hèng sǐ yòu xìn shì jiān xié mó wài dào yāo niè zhī shī wàng shuō huò fú biàn shēng kǒng dòng xīn bú zì zhèng bǔ wèn mì huò shā zhǒng zhǒng zhòng shēng jiě zòu shén míng hū zhū wǎng liǎng qǐng qǐ fú yòu yù jì yán nián zhōng bù néng dé yú chī mí huò xìn xié dào jiàn suì lìng hèng sǐ rù yú dì yù wú yǒu chū qī shì míng chū hèng èr zhě hèng bèi wáng fǎ zhī suǒ zhū lù sān zhě tián liè xī xì dān yín shì jiǔ fàng yì wú dù hèng wéi fēi rén duó qí jīng qì sì zhě hèng wéi huǒ fén wǔ zhě hèng wéi shuǐ nì liù zhě hèng wéi zhǒng zhǒng è shòu suǒ dàn qī zhě hèng duò shān yá bā zhě hèng wéi dú yào yǎn dǎo zhòu zǔ qǐ shī guǐ děng zhī suǒ zhòng hài jiǔ zhě jī kě suǒ kùn bù dé yǐn shí ér biàn hèng sǐ shì wéi rú lái lüè shuō hèng sǐ yǒu cǐ jiǔ zhǒng qí yú fù yǒu wú liàng zhū hèng nán kě jù shuō'
          ),
        },
        {
          id: 'main_p044',
          label: null,
          chars: p(
            '“复次，阿难，彼琰魔王主领世间名籍之记，若诸有情不孝五逆，破辱三宝，坏君臣法，毁于信戒，琰魔法王随罪轻重考而罚之。是故，我今劝诸有情，然灯造幡，放生修福，令度苦厄，不遭众难。”',
            'fù cì ē nán bǐ yǎn mó wáng zhǔ lǐng shì jiān míng jí zhī jì ruò zhū yǒu qíng bú xiào wǔ nì pò rǔ sān bǎo huài jūn chén fǎ huǐ yú xìn jiè yǎn mó fǎ wáng suí zuì qīng zhòng kǎo ér fá zhī shì gù wǒ jīn quàn zhū yǒu qíng rán dēng zào fān fàng shēng xiū fú lìng dù kǔ è bù zāo zhòng nàn'
          ),
        },
        {
          id: 'main_p045',
          label: null,
          chars: p(
            '尔时，众中有十二药叉大将，俱在会坐，所谓：',
            'ěr shí zhòng zhōng yǒu shí èr yào chā dà jiàng jù zài huì zuò suǒ wèi'
          ),
        },
        {
          id: 'main_p046',
          label: null,
          chars: p(
            '宫毗罗大将　伐折罗大将　迷企罗大将',
            'gōng pí luó dà jiàng fá zhé luó dà jiàng mí qǐ luó dà jiàng'
          ),
        },
        {
          id: 'main_p047',
          label: null,
          chars: p(
            '安底罗大将　頞你罗大将　珊底罗大将',
            'ān dǐ luó dà jiàng è nǐ luó dà jiàng shān dǐ luó dà jiàng'
          ),
        },
        {
          id: 'main_p048',
          label: null,
          chars: p(
            '因达罗大将　波夷罗大将　摩虎罗大将',
            'yīn dá luó dà jiàng bō yí luó dà jiàng mó hǔ luó dà jiàng'
          ),
        },
        {
          id: 'main_p049',
          label: null,
          chars: p(
            '真达罗大将　招杜罗大将　毗羯罗大将',
            'zhēn dá luó dà jiàng zhāo dù luó dà jiàng pí jié luó dà jiàng'
          ),
        },
        {
          id: 'main_p050',
          label: null,
          chars: p(
            '此十二药叉大将，一一各有七千药叉以为眷属，同时举声白佛言：“世尊！我等今者，蒙佛威力，得闻世尊药师琉璃光如来名号，不复更有恶趣之怖。我等相率，皆同一心，乃至尽形归佛、法、僧，誓当荷负一切有情，为作义利，饶益安乐。随于何等村城国邑、空闲林中，若有流布此经，或复受持药师琉璃光如来名号恭敬供养者，我等眷属卫护是人，皆使解脱一切苦难，诸有愿求悉令满足。或有疾厄求度脱者，亦应读诵此经，以五色缕结我名字，得如愿已，然后解结。”',
            'cǐ shí èr yào chā dà jiàng yī yī gè yǒu qī qiān yào chā yǐ wéi juàn shǔ tóng shí jǔ shēng bó fó yán shì zūn wǒ děng jīn zhě méng fó wēi lì dé wén shì zūn yào shī liú lí guāng rú lái míng hào bú fù gèng yǒu è qù zhī bù wǒ děng xiāng shuài jiē tóng yī xīn nǎi zhì jìn xíng guī fó fǎ sēng shì dāng hè fù yī qiè yǒu qíng wèi zuò yì lì ráo yì ān lè suí yú hé děng cūn chéng guó yì kòng xián lín zhōng ruò yǒu liú bù cǐ jīng huò fù shòu chí yào shī liú lí guāng rú lái míng hào gōng jìng gòng yǎng zhě wǒ děng juàn shǔ wèi hù shì rén jiē shǐ jiě tuō yī qiè kǔ nàn zhū yǒu yuàn qiú xī lìng mǎn zú huò yǒu jí è qiú dù tuō zhě yì yīng dú sòng cǐ jīng yǐ wǔ sè lǚ jié wǒ míng zì dé rú yuàn yǐ rán hòu jiě jié'
          ),
        },
        {
          id: 'main_p051',
          label: null,
          chars: p(
            '尔时，世尊赞诸药叉大将言：“善哉！善哉！大药叉将，汝等念报世尊药师琉璃光如来恩德者，常应如是利益安乐一切有情。”',
            'ěr shí shì zūn zàn zhū yào chā dà jiàng yán shàn zāi shàn zāi dà yào chā jiàng rǔ děng niàn bào shì zūn yào shī liú lí guāng rú lái ēn dé zhě cháng yīng rú shì lì yì ān lè yī qiè yǒu qíng'
          ),
        },
        {
          id: 'main_p052',
          label: null,
          chars: p(
            '尔时，阿难白佛言：“世尊！当何名此法门？我等云何奉持？”',
            'ěr shí ē nán bó fó yán shì zūn dāng hé míng cǐ fǎ mén wǒ děng yún hé fèng chí'
          ),
        },
        {
          id: 'main_p053',
          label: null,
          chars: p(
            '佛告阿难：“此法门名说药师琉璃光如来本愿功德，亦名说十二神将饶益有情结愿神咒，亦名拔除一切业障，应如是持。”',
            'fó gào ē nán cǐ fǎ mén míng shuō yào shī liú lí guāng rú lái běn yuàn gōng dé yì míng shuō shí èr shén jiàng ráo yì yǒu qíng jié yuàn shén zhòu yì míng bá chú yī qiè yè zhàng yīng rú shì chí'
          ),
        },
        {
          id: 'main_p054',
          label: null,
          chars: p(
            '时，薄伽梵说是语已，诸菩萨摩诃萨及大声闻、国王、大臣、婆罗门、居士、天、龙、药叉、健达缚、阿素洛、揭路茶、紧捺洛、莫呼洛伽、人、非人等一切大众，闻佛所说，皆大欢喜，信受奉行。',
            'shí bó qié fàn shuō shì yǔ yǐ zhū pú sà mó hē sà jí dà shēng wén guó wáng dà chén pó luó mén jū shì tiān lóng yào chā jiàn dá fù ē sù luò jiē lù tú jǐn nà luò mò hū luò qié rén fēi rén děng yī qiè dà zhòng wén fó suǒ shuō jiē dà huān xǐ xìn shòu fèng xíng'
          ),
        },
      ],
    },
    {
      id: 'zan',
      title: '赞',
      paragraphs: [
        {
          id: 'zan_p001',
          label: null,
          chars: p(
            '十二大愿．饶益有情．密咒加持德难名．礼念愿圆成．怨业冰清．寿永福慧宏．',
            'shí èr dà yuàn ráo yì yǒu qíng mì zhòu jiā chí dé nán míng lǐ niàn yuàn yuán chéng yuàn yè bīng qīng shòu yǒng fú huì hóng'
          ),
        },
        {
          id: 'zan_p002',
          label: null,
          chars: p(
            '南無药师会上佛菩萨（合掌三称）',
            'ná mó yào shī huì shàng fó pú sà'
          ),
        },
      ],
    },
    {
      id: 'closing',
      title: '结诵仪',
      paragraphs: [
        {
          id: 'closing_p001',
          label: '补阙真言（三遍）',
          chars: p(
            '南無喝啰怛那．哆啰夜耶．佉啰佉啰．俱住俱住．摩啰摩啰．虎啰．吽．贺贺．苏怛拏．吽．泼抹拏．娑婆诃。',
            'ná mó hē là dá nuó duō là yè yē qié là qié là jù zhù jù zhù mó là mó là hǔ là hōng hè hè sū dá ná hōng pō mò ná suō pó hē'
          ),
        },
        {
          id: 'closing_p002',
          label: '补阙圆满真言（三遍）',
          chars: p(
            '唵．呼嚧呼嚧．社曳穆契．莎诃。',
            'ōng hū lú hū lú shè yì mù qiè suō hē'
          ),
        },
        {
          id: 'closing_p003',
          label: '普回向真言（三遍）',
          chars: p(
            '唵．娑摩啰．娑摩啰．弥摩曩．萨哈啰．摩诃咱哈啰吽。',
            'ōng suō mó là suō mó là mí mó nǎng sà hā là mó hē zán hā là hòng'
          ),
        },
        {
          id: 'closing_p004',
          label: '药师灌顶真言（三遍）',
          chars: p(
            '南謨薄伽伐帝．鞞殺社窶嚕．薜瑠璃．鉢喇婆．曷囉阇也．呾他揭多耶．阿囉諦．三藐三㪍陀也．呾姪他．唵．鞞殺逝．鞞殺逝．鞞殺社．三没揭帝．莎訶．',
            'ná mó bó qié fá dì pí shā shè jù lū bì liú lí bō lā pó hé là shé yě dá tuō jiē duō yē ē là dì sān miǎo sān bó tuó yě dá zhí tuō àn pí shā shì pí shā shì pí shā shè sān mò jiē dì suō hē'
          ),
        },
        {
          id: 'closing_p005',
          label: '解冤咒（三遍）',
          chars: p(
            '解结解结解冤结．解了多生冤和业．洗心涤虑发虔诚．今对佛前求解结．药师佛．药师佛．消灾延寿药师佛．随心满愿药师佛．',
            'jiě jié jiě jié jiě yuān jié jiě liǎo duō shēng yuān hé yè xǐ xīn dí lǜ fā qián chéng jīn duì fó qián qiú jiě jié yào shī fó yào shī fó xiāo zāi yán shòu yào shī fó suí xīn mǎn yuàn yào shī fó'
          ),
        },
        {
          id: 'closing_p006',
          label: '消解病咒（三遍）',
          chars: p(
            '唵．致哩哆．致哩哆．恽吒唎．娑婆诃．',
            'ǒng zhì lī duō zhì lī duō yùn zhā lì suō pó hē'
          ),
        },
        {
          id: 'closing_p007',
          label: '药师赞（一遍）',
          chars: p(
            '药师佛．延寿王．光临水月坛场．悲心救苦降吉祥．免难消灾障．忏悔众等三世罪．愿祈福寿绵长．吉星高照沐恩光．如意保安康．吉星高照沐恩光．如意保安康．',
            'yào shī fó yán shòu wáng guāng lín shuǐ yuè tán chǎng bēi xīn jiù kǔ jiàng jí xiáng miǎn nàn xiāo zāi zhàng chàn huǐ zhòng děng sān shì zuì yuàn qí fú shòu mián cháng jí xīng gāo zhào mù ēn guāng rú yì bǎo ān kāng jí xīng gāo zhào mù ēn guāng rú yì bǎo ān kāng'
          ),
        },
        {
          id: 'closing_p008',
          label: null,
          chars: p(
            '药师如来琉璃光　誓愿宏深世莫量',
            'yào shī rú lái liú lí guāng shì yuàn hóng shēn shì mò liàng'
          ),
        },
        {
          id: 'closing_p009',
          label: null,
          chars: p(
            '显令生善集福庆　密使灭恶消祸殃',
            'xiǎn lìng shēng shàn jí fú qìng mì shǐ miè è xiāo huò yāng'
          ),
        },
        {
          id: 'closing_p010',
          label: null,
          chars: p(
            '拔苦必期二死尽　与乐直教万德彰',
            'bá kǔ bì qī èr sǐ jìn yǔ lè zhí jiào wàn dé zhāng'
          ),
        },
        {
          id: 'closing_p011',
          label: null,
          chars: p(
            '法界圣凡同归命　蒙恩速得证真常',
            'fǎ jiè shèng fán tóng guī mìng méng ēn sù dé zhèng zhēn cháng'
          ),
        },
        {
          id: 'closing_p012',
          label: null,
          chars: p(
            '南無东方净琉璃世界药师琉璃光如来（合掌一称）',
            'ná mó dōng fāng jìng liú lí shì jiè yào shī liú lí guāng rú lái'
          ),
        },
        {
          id: 'closing_p013',
          label: null,
          chars: p(
            '南無消灾延寿药师佛（千称或数百称）',
            'ná mó xiāo zāi yán shòu yào shī fó'
          ),
        },
        {
          id: 'closing_p014',
          label: null,
          chars: p(
            '南無日光遍照菩萨（三称三拜）',
            'ná mó rì guāng biàn zhào pú sà'
          ),
        },
        {
          id: 'closing_p015',
          label: null,
          chars: p(
            '南無月光遍照菩萨（三称三拜）',
            'ná mó yuè guāng biàn zhào pú sà'
          ),
        },
        {
          id: 'closing_p016',
          label: null,
          chars: p(
            '南無药师海会佛菩萨（三称三拜）',
            'ná mó yào shī hǎi huì fó pú sà'
          ),
        },
        {
          id: 'closing_p017',
          label: '回向偈（一遍）',
          chars: p(
            '愿以此功德　庄严佛净土',
            'yuàn yǐ cǐ gōng dé zhuāng yán fó jìng tǔ'
          ),
        },
        {
          id: 'closing_p018',
          label: null,
          chars: p(
            '上报四重恩　下济三途苦',
            'shàng bào sì chóng ēn xià jì sān tú kǔ'
          ),
        },
        {
          id: 'closing_p019',
          label: null,
          chars: p(
            '若有见闻者　悉发菩提心',
            'ruò yǒu jiàn wén zhě xī fā pú tí xīn'
          ),
        },
        {
          id: 'closing_p020',
          label: null,
          chars: p(
            '尽此一报身　同生极乐国',
            'jìn cǐ yī bào shēn tóng shēng jí lè guó'
          ),
        },
        {
          id: 'closing_p021',
          label: null,
          chars: p(
            '十方三世一切佛．一切菩萨摩诃萨．摩诃般若波罗蜜。',
            'shí fāng sān shì yí qiè fó yí qiè pú sà mó hē sà mó hē bō rě bō luó mì'
          ),
        },
        {
          id: 'closing_p022',
          label: '三皈依（一遍）',
          chars: p(
            '自皈依佛．当愿众生．体解大道．发无上心。',
            'zì guī yī fó dāng yuàn zhòng shēng tǐ jiě dà dào fā wú shàng xīn'
          ),
        },
        {
          id: 'closing_p023',
          label: null,
          chars: p(
            '自皈依法．当愿众生．深入经藏．智慧如海。',
            'zì guī yī fǎ dāng yuàn zhòng shēng shēn rù jīng zàng zhì huì rú hǎi'
          ),
        },
        {
          id: 'closing_p024',
          label: null,
          chars: p(
            '自皈依僧．当愿众生．统理大众．一切无碍。',
            'zì guī yī sēng dāng yuàn zhòng shēng tǒng lǐ dà zhòng yī qiè wú ài'
          ),
        },
        {
          id: 'closing_p025',
          label: null,
          chars: p(
            '和南圣众。',
            'hé nán shèng zhòng'
          ),
        },
        {
          id: 'closing_p026',
          label: null,
          chars: p(
            '（念毕．起身三礼而退。）',
            ''
          ),
        },
      ],
    },
  ],
  glossary: [
    { id: 'g01', chars: '薄伽梵', pinyin: 'bó qié fàn', category: '称谓', definition: '梵语Bhagavat音译，意为世尊，佛的尊称之一。玄奘译经中常用此词。' },
    { id: 'g02', chars: '曼殊室利', pinyin: 'màn shū shì lì', category: '菩萨', definition: '即文殊菩萨，梵语Mañjuśrī音译。本经中请佛宣说药师佛名号与本愿功德。' },
    { id: 'g03', chars: '药师琉璃光如来', pinyin: 'yào shī liú lí guāng rú lái', category: '佛', definition: '东方净琉璃世界的教主，以十二大愿利益众生，消灾延寿，为本经主角。' },
    { id: 'g04', chars: '殑伽沙', pinyin: 'qíng qié shā', category: '数量', definition: '即恒河沙，梵语Gaṅgā音译，玄奘译法。以恒河中沙粒数比喻极多之数量。' },
    { id: 'g05', chars: '苾刍', pinyin: 'bì chú', category: '称谓', definition: '即比丘，梵语bhikṣu的另一种音译，玄奘译经中常用。指出家受具足戒的男性僧人。' },
    { id: 'g06', chars: '阿耨多罗三藐三菩提', pinyin: 'ā nòu duō luó sān miǎo sān pú tí', category: '名相', definition: '梵语音译，意为无上正等正觉，佛所证得的究竟圆满智慧。' },
    { id: 'g07', chars: '净琉璃', pinyin: 'jìng liú lí', category: '佛教地理', definition: '药师佛的净土名称，全称净琉璃世界，位于东方。' },
    { id: 'g08', chars: '十二大愿', pinyin: 'shí èr dà yuàn', category: '名相', definition: '药师佛因地修行时所发的十二个大愿，涵盖众生身心安乐、消灾免难等。' },
    { id: 'g09', chars: '执金刚', pinyin: 'zhí jīn gāng', category: '护法', definition: '手持金刚杵的护法神，守护佛法与修行者。' },
    { id: 'g10', chars: '灌顶', pinyin: 'guàn dǐng', category: '仪轨', definition: '以水灌注头顶的仪式，表示授予法位或加持。药师灌顶真言即以此得名。' },
    { id: 'g11', chars: '天龙八部', pinyin: 'tiān lóng bā bù', category: '众生', definition: '八类护法神众：天、龙、夜叉、乾闼婆、阿修罗、迦楼罗、紧那罗、摩睺罗伽。' },
    { id: 'g12', chars: '阿难', pinyin: 'ā nán', category: '人物', definition: '佛陀十大弟子之一，多闻第一。本经中向佛请问法门名称与奉持方法。' },
    { id: 'g13', chars: '救脱菩萨', pinyin: 'jiù tuō pú sà', category: '菩萨', definition: '本经中为阿难开示药师法门的消灾延命功德的菩萨。' },
    { id: 'g14', chars: '十二药叉大将', pinyin: 'shí èr yào chā dà jiàng', category: '护法', definition: '宫毗罗等十二位药叉大将，各率七千眷属，誓愿护持药师法门修行者。' },
    { id: 'g15', chars: '五逆', pinyin: 'wǔ nì', category: '名相', definition: '五种极重罪业：杀父、杀母、杀阿罗汉、出佛身血、破和合僧。' },
    { id: 'g16', chars: '涅槃', pinyin: 'niè pán', category: '果位', definition: '梵语nirvāṇa音译，意为寂灭、解脱，超脱生死轮回的究竟境界。' },
  ],
}
