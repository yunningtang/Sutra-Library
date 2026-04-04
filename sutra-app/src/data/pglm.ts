import type { SutraData } from './types'
import { p } from './types'

export const pglm: SutraData = {
  id: 'pglm',
  name: '大乘离文字普光明藏经',
  translator: '唐中天竺三藏法师地婆诃罗奉敕译',
  source: '《乾隆大藏经》大乘五大部外重译经第0218部',
  about: '此经记载佛于王舍城耆阇崛山中，为胜思惟菩萨宣说离文字法门，令众生得普光明。经文虽短，义理深奥，功德殊胜。',
  sections: [
    {
      id: 'prelude',
      title: '起诵仪',
      paragraphs: [
        {
          id: 'pre01',
          label: '香赞（一遍）',
          chars: p(
            '炉香乍爇，法界蒙薰，诸佛海会悉遥闻，随处结祥云，诚意方殷，诸佛现全身。',
            'lú xiāng zhà ruò fǎ jiè méng xūn zhū fó hǎi huì xī yáo wén suí chù jié xiáng yún chéng yì fāng yīn zhū fó xiàn quán shēn'
          ),
        },
        {
          id: 'pre02',
          label: '南无香云盖菩萨摩诃萨（合掌三称）',
          chars: p(
            '南无香云盖菩萨摩诃萨（合掌三称）',
            'ná mó xiāng yún gài pú sà mó hē sà'
          ),
        },
        {
          id: 'pre03',
          label: '南无本师释迦牟尼佛（合掌三称）',
          chars: p(
            '南无本师释迦牟尼佛（合掌三称）',
            'ná mó běn shī shì jiā móu ní fó'
          ),
        },
        {
          id: 'pre04',
          label: '开经偈（一遍）',
          chars: p(
            '无上甚深微妙法，百千万劫难遭遇。',
            'wú shàng shèn shēn wēi miào fǎ bǎi qiān wàn jié nán zāo yù'
          ),
        },
        {
          id: 'pre05',
          label: null,
          chars: p(
            '我今见闻得受持，愿解如来真实义。',
            'wǒ jīn jiàn wén dé shòu chí yuàn jiě rú lái zhēn shí yì'
          ),
        },
      ],
    },
    {
      id: 'main',
      title: '经文正文',
      paragraphs: [
        {
          id: 'p001',
          label: '大乘离文字普光明藏经',
          chars: p(
            '大乘离文字普光明藏经',
            'dà shèng lí wén zì pǔ guāng míng zàng jīng'
          ),
        },
        {
          id: 'p002',
          label: null,
          chars: p(
            '唐中天竺三藏法师地婆诃罗奉敕译',
            'táng zhōng tiān zhú sān zàng fǎ shī dì pó hē luó fèng chì yì'
          ),
        },
        {
          id: 'p003',
          label: null,
          chars: p(
            '如是我闻：一时，佛在王舍城耆阇崛山中，与大菩萨无量百千亿那由他数，皆是大智精进善巧，证无言法，获妙辩才，是处非处不相违反，善调身心具诸解脱，常游三昧不舍大悲，惭愧为身，智慧为首，多所饶益如大宝洲，了知诸法善不善相，不著文字而有言说，于真俗门洞达无碍，深明实际不住其中，善能分别而无所受，虽厌生死常护世间，周遍十方有大名称，于真妙藏寂然宴息，虽现受身永出三界，而行诸有勉济众生，平等教诲志常贤善，平等怜愍心无染著，能令自他莫不清净，成就如是无量功德。',
            'rú shì wǒ wén yī shí fó zài wáng shè chéng qí shé jué shān zhōng yǔ dà pú sà wú liàng bǎi qiān yì nà yóu tā shù jiē shì dà zhì jīng jìn shàn qiǎo zhèng wú yán fǎ huò miào biàn cái shì chù fēi chù bù xiāng wéi fǎn shàn tiáo shēn xīn jù zhū jiě tuō cháng yóu sān mèi bù shě dà bēi cán kuì wéi shēn zhì huì wéi shǒu duō suǒ ráo yì rú dà bǎo zhōu liǎo zhī zhū fǎ shàn bú shàn xiàng bù zhuó wén zì ér yǒu yán shuō yú zhēn sú mén dòng dá wú ài shēn míng shí jì bú zhù qí zhōng shàn néng fēn bié ér wú suǒ shòu suī yàn shēng sǐ cháng hù shì jiān zhōu biàn shí fāng yǒu dà míng chēng yú zhēn miào zàng jì rán yàn xī suī xiàn shòu shēn yǒng chū sān jiè ér xíng zhū yǒu miǎn jǐ zhòng shēng píng děng jiào huì zhì cháng xián shàn píng děng lián mǐn xīn wú rǎn zhuó néng lìng zì tā mò bù qīng jìng chéng jiù rú shì wú liàng gōng dé'
          ),
        },
        {
          id: 'p004',
          label: null,
          chars: p(
            '其名曰：胜思惟菩萨、法震音菩萨、妙身菩萨、法辋菩萨、辩积菩萨、持地菩萨、持世菩萨、大名称菩萨、具诸辩菩萨、千容相菩萨、功德山菩萨、莲华眼菩萨、莲华面菩萨、珠髻菩萨、妙音菩萨。',
            'qí míng yuē shèng sī wéi pú sà fǎ zhèn yīn pú sà miào shēn pú sà fǎ wǎng pú sà biàn jī pú sà chí dì pú sà chí shì pú sà dà míng chēng pú sà jù zhū biàn pú sà qiān róng xiàng pú sà gōng dé shān pú sà lián huā yǎn pú sà lián huā miàn pú sà zhū jì pú sà miào yīn pú sà'
          ),
        },
        {
          id: 'p005',
          label: null,
          chars: p(
            '如是等菩萨摩诃萨，皆如童子色相端严，于此众中而为上首。',
            'rú shì děng pú sà mó hē sà jiē rú tóng zǐ sè xiàng duān yán yú cǐ zhòng zhōng ér wéi shàng shǒu'
          ),
        },
        {
          id: 'p006',
          label: null,
          chars: p(
            '尔时，观自在菩萨与恒河沙等绍尊位者诸菩萨俱，殊胜见菩萨与无央数天帝释俱，虚空藏菩萨与无量菩萨及无量四天王众俱，大势至菩萨与无量亿梵天众俱，遍吉祥菩萨与无量婇女俱，普贤菩萨、不空见菩萨、星宿王菩萨、离疑菩萨、息诸盖菩萨、药王菩萨、药上菩萨，各与无量菩萨众俱。',
            'ěr shí guān zì zài pú sà yǔ héng hé shā děng shào zūn wèi zhě zhū pú sà jù shū shèng jiàn pú sà yǔ wú yāng shù tiān dì shì jù xū kōng zàng pú sà yǔ wú liàng pú sà jí wú liàng sì tiān wáng zhòng jù dà shì zhì pú sà yǔ wú liàng yì fàn tiān zhòng jù biàn jí xiáng pú sà yǔ wú liàng cǎi nǚ jù pǔ xián pú sà bù kōng jiàn pú sà xīng xiù wáng pú sà lí yí pú sà xī zhū gài pú sà yào wáng pú sà yào shàng pú sà gè yǔ wú liàng pú sà zhòng jù'
          ),
        },
        {
          id: 'p007',
          label: null,
          chars: p(
            '其中亦有无量诸佛，自变其身作菩萨像。尊者舍利弗、摩诃目揵连、摩诃迦葉，如是等大阿罗汉，各与无量声闻众俱。',
            'qí zhōng yì yǒu wú liàng zhū fó zì biàn qí shēn zuò pú sà xiàng zūn zhě shè lì fú mó hē mù qián lián mó hē jiā shè rú shì děng dà ā luó hàn gè yǔ wú liàng shēng wén zhòng jù'
          ),
        },
        {
          id: 'p008',
          label: null,
          chars: p(
            '那罗延等无量天众，乃至恒沙国土日月诸天，威光照耀悉来佛所；至佛所已，彼天威光不能复现，犹如聚墨对阎浮金。',
            'nà luó yán děng wú liàng tiān zhòng nǎi zhì héng shā guó tǔ rì yuè zhū tiān wēi guāng zhào yào xī lái fó suǒ zhì fó suǒ yǐ bǐ tiān wēi guāng bù néng fù xiàn yóu rú jù mò duì yán fú jīn'
          ),
        },
        {
          id: 'p009',
          label: null,
          chars: p(
            '婆楼那龙王、德叉迦龙王、阿那婆达多龙王、美音乾闼婆王、无扰浊迦楼罗王，各与无量诸眷属俱，来入此会。',
            'pó lóu nà lóng wáng dé chā jiā lóng wáng ā nà pó dá duō lóng wáng měi yīn qián tà pó wáng wú rǎo zhuó jiā lóu luó wáng gè yǔ wú liàng zhū juàn shǔ jù lái rù cǐ huì'
          ),
        },
        {
          id: 'p010',
          label: null,
          chars: p(
            '十方世界如恒河沙所有菩萨，咸于本土启请如来，与诸四众同时到此，各持种种出过世间殊好供事，奉上于佛、诸菩萨已，即于会中，坐莲华座。',
            'shí fāng shì jiè rú héng hé shā suǒ yǒu pú sà xián yú běn tǔ qǐ qǐng rú lái yǔ zhū sì zhòng tóng shí dào cǐ gè chí zhǒng zhǒng chū guò shì jiān shū hǎo gòng shì fèng shàng yú fó zhū pú sà yǐ jí yú huì zhōng zuò lián huā zuò'
          ),
        },
        {
          id: 'p011',
          label: null,
          chars: p(
            '尔时，胜思惟菩萨摩诃萨从座而起，偏袒右肩，右膝著地，合掌向佛，而作是言：',
            'ěr shí shèng sī wéi pú sà mó hē sà cóng zuò ér qǐ piān tǎn yòu jiān yòu xī zhuó dì hé zhǎng xiàng fó ér zuò shì yán'
          ),
        },
        {
          id: 'p012',
          label: null,
          chars: p(
            '\u201c世尊，我今欲请二字之义，惟愿如来垂哀见许。\u201d',
            'shì zūn wǒ jīn yù qǐng èr zì zhī yì wéi yuàn rú lái chuí āi jiàn xǔ'
          ),
        },
        {
          id: 'p013',
          label: null,
          chars: p(
            '佛告胜思惟菩萨言：\u201c善男子，欲有问者随汝意问。如来不为一众生故出现世间，为欲利益无量众生而出现耳！\u201d',
            'fó gào shèng sī wéi pú sà yán shàn nán zǐ yù yǒu wèn zhě suí rǔ yì wèn rú lái bú wèi yī zhòng shēng gù chū xiàn shì jiān wèi yù lì yì wú liàng zhòng shēng ér chū xiàn ěr'
          ),
        },
        {
          id: 'p014',
          label: null,
          chars: p(
            '于是胜思惟菩萨，即白佛言：\u201c世尊！何者一法，是诸菩萨所应永离？何者一法，是诸菩萨应常护持？何者一法，是诸如来现所觉了？\u201d',
            'yú shì shèng sī wéi pú sà jí bó fó yán shì zūn hé zhě yī fǎ shì zhū pú sà suǒ yīng yǒng lí hé zhě yī fǎ shì zhū pú sà yīng cháng hù chí hé zhě yī fǎ shì zhū rú lái xiàn suǒ jué liǎo'
          ),
        },
        {
          id: 'p015',
          label: null,
          chars: p(
            '佛言：\u201c善哉！善哉！善男子，汝以如来威神之力，乃能问我如是深义。谛听！谛听！善思念之，当为汝说。',
            'fó yán shàn zāi shàn zāi shàn nán zǐ rǔ yǐ rú lái wēi shén zhī lì nǎi néng wèn wǒ rú shì shēn yì dì tīng dì tīng shàn sī niàn zhī dāng wèi rǔ shuō'
          ),
        },
        {
          id: 'p016',
          label: null,
          chars: p(
            '\u201d善男子，有一种法菩萨应离，所谓欲贪。善男子，如是一法，是诸菩萨所应永离。',
            'shàn nán zǐ yǒu yī zhǒng fǎ pú sà yīng lí suǒ wèi yù tān shàn nán zǐ rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p017',
          label: null,
          chars: p(
            '\u201c善男子，复有一法菩萨应离，所谓瞋怒。如是一法，是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi chēn nù rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p018',
          label: null,
          chars: p(
            '\u201d善男子，复有一法菩萨应离，所谓愚痴。如是一法，是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi yú chī rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p019',
          label: null,
          chars: p(
            '\u201c善男子，复有一法菩萨应离，所谓我取。善男子，复有一法菩萨应离，所谓疑惑。善男子，复有一法菩萨应离，所谓憍慢。善男子，复有一法菩萨应离，所谓懈怠。善男子，复有一法菩萨应离，所谓惛眠。善男子，复有一法菩萨应离，所谓爱著。善男子，如是一法，是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi wǒ qǔ shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi yí huò shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi jiāo màn shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi xiè dài shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi hūn mián shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi ài zhuó shàn nán zǐ rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p020',
          label: null,
          chars: p(
            '\u201d善男子，汝复问我，何者一法，是诸菩萨应常护持？善男子，谓诸菩萨，非己所安，不加于物。若诸菩萨守护此法，即是能持诸佛如来一切禁戒。',
            'shàn nán zǐ rǔ fù wèn wǒ hé zhě yī fǎ shì zhū pú sà yīng cháng hù chí shàn nán zǐ wèi zhū pú sà fēi jǐ suǒ ān bù jiā yú wù ruò zhū pú sà shǒu hù cǐ fǎ jí shì néng chí zhū fó rú lái yī qiè jìn jiè'
          ),
        },
        {
          id: 'p021',
          label: null,
          chars: p(
            '何以故？自爱身命不应杀生，自重资财不应偷盗，自护妻室不应侵他，如是等行皆名一法。',
            'hé yǐ gù zì ài shēn mìng bù yīng shā shēng zì zhòng zī cái bù yīng tōu dào zì hù qī shì bù yīng qīn tā rú shì děng xíng jiē míng yī fǎ'
          ),
        },
        {
          id: 'p022',
          label: null,
          chars: p(
            '善男子，若有敬顺如来语者，于此一法常当忆念。何以故？无有众生爱乐于苦，凡有所作悉求安乐，乃至菩萨求阿耨多罗三藐三菩提，亦为自他皆得乐故。',
            'shàn nán zǐ ruò yǒu jìng shùn rú lái yǔ zhě yú cǐ yī fǎ cháng dāng yì niàn hé yǐ gù wú yǒu zhòng shēng ài yào yú kǔ fán yǒu suǒ zuò xī qiú ān lè nǎi zhì pú sà qiú ā nòu duō luó sān miǎo sān pú tí yì wèi zì tā jiē dé lè gù'
          ),
        },
        {
          id: 'p023',
          label: null,
          chars: p(
            '善男子，以如是义我说此言：\'非己所安，不加于物。\'如是一法，是诸菩萨应常护持。',
            'shàn nán zǐ yǐ rú shì yì wǒ shuō cǐ yán fēi jǐ suǒ ān bù jiā yú wù rú shì yī fǎ shì zhū pú sà yīng cháng hù chí'
          ),
        },
        {
          id: 'p024',
          label: null,
          chars: p(
            '\u201c善男子，如汝所问，何者一法，是诸如来现所觉了？善男子，无有少法是如来觉。何以故？如来觉者无所觉故。',
            'shàn nán zǐ rú rǔ suǒ wèn hé zhě yī fǎ shì zhū rú lái xiàn suǒ jué liǎo shàn nán zǐ wú yǒu shǎo fǎ shì rú lái jué hé yǐ gù rú lái jué zhě wú suǒ jué gù'
          ),
        },
        {
          id: 'p025',
          label: null,
          chars: p(
            '善男子，一切法无生是如来觉，一切法无灭是如来觉，一切法离二边是如来觉，一切法不实是如来觉。',
            'shàn nán zǐ yī qiè fǎ wú shēng shì rú lái jué yī qiè fǎ wú miè shì rú lái jué yī qiè fǎ lí èr biān shì rú lái jué yī qiè fǎ bù shí shì rú lái jué'
          ),
        },
        {
          id: 'p026',
          label: null,
          chars: p(
            '善男子，诸业自性是如来觉，一切法从因缘生是如来觉，因缘之法犹如电光是如来觉，以因缘故而有诸业是如来觉。',
            'shàn nán zǐ zhū yè zì xìng shì rú lái jué yī qiè fǎ cóng yīn yuán shēng shì rú lái jué yīn yuán zhī fǎ yóu rú diàn guāng shì rú lái jué yǐ yīn yuán gù ér yǒu zhū yè shì rú lái jué'
          ),
        },
        {
          id: 'p027',
          label: null,
          chars: p(
            '\u201d善男子，一切法性普光明藏是如来觉。善男子，何故法性名普光明藏？',
            'shàn nán zǐ yī qiè fǎ xìng pǔ guāng míng zàng shì rú lái jué shàn nán zǐ hé gù fǎ xìng míng pǔ guāng míng zàng'
          ),
        },
        {
          id: 'p028',
          label: null,
          chars: p(
            '善男子，世出世智依之以生，如母怀子，故名为藏。若智生时，反照其本，如是法性为般若波罗蜜之所摄藏，是故名为普光明藏。',
            'shàn nán zǐ shì chū shì zhì yī zhī yǐ shēng rú mǔ huái zǐ gù míng wéi zàng ruò zhì shēng shí fǎn zhào qí běn rú shì fǎ xìng wéi bō rě bō luó mì zhī suǒ shè zàng shì gù míng wéi pǔ guāng míng zàng'
          ),
        },
        {
          id: 'p029',
          label: null,
          chars: p(
            '善男子，一切法如幻如焰是如来觉。善男子，诸法实性一味解脱是如来觉，一味解脱是即名为普光明藏。',
            'shàn nán zǐ yī qiè fǎ rú huàn rú yàn shì rú lái jué shàn nán zǐ zhū fǎ shí xìng yī wèi jiě tuō shì rú lái jué yī wèi jiě tuō shì jí míng wéi pǔ guāng míng zàng'
          ),
        },
        {
          id: 'p030',
          label: null,
          chars: p(
            '\u201c善男子，一相法是如来觉。云何一相？所谓诸法不来不去、非因非缘、不生不灭、无取无舍、不增不减。',
            'shàn nán zǐ yī xiàng fǎ shì rú lái jué yún hé yī xiàng suǒ wèi zhū fǎ bù lái bú qù fēi yīn fēi yuán bù shēng bú miè wú qǔ wú shě bù zēng bù jiǎn'
          ),
        },
        {
          id: 'p031',
          label: null,
          chars: p(
            '善男子，诸法自性，本无所有，不可为喻，非是文辞之所辩说。如是一法，是诸如来现所觉了。\u201d',
            'shàn nán zǐ zhū fǎ zì xìng běn wú suǒ yǒu bù kě wéi yù fēi shì wén cí zhī suǒ biàn shuō rú shì yī fǎ shì zhū rú lái xiàn suǒ jué liǎo'
          ),
        },
        {
          id: 'p032',
          label: null,
          chars: p(
            '当佛说此庄严王离文字普光明藏法门之时，有十地菩萨所见微尘数众生，悉发阿耨多罗三藐三菩提心。',
            'dāng fó shuō cǐ zhuāng yán wáng lí wén zì pǔ guāng míng zàng fǎ mén zhī shí yǒu shí dì pú sà suǒ jiàn wēi chén shù zhòng shēng xī fā ā nòu duō luó sān miǎo sān pú tí xīn'
          ),
        },
        {
          id: 'p033',
          label: null,
          chars: p(
            '复有如是微尘数众生，皆发声闻、辟支佛心。复有如是微尘数众生，在地狱者，皆得离苦，生人天中。',
            'fù yǒu rú shì wēi chén shù zhòng shēng jiē fā shēng wén pì zhī fó xīn fù yǒu rú shì wēi chén shù zhòng shēng zài dì yù zhě jiē dé lí kǔ shēng rén tiān zhōng'
          ),
        },
        {
          id: 'p034',
          label: null,
          chars: p(
            '无量菩萨得入初地，无量菩萨得百千三昧，无量众生悉蒙利益无空过者。',
            'wú liàng pú sà dé rù chū dì wú liàng pú sà dé bǎi qiān sān mèi wú liàng zhòng shēng xī méng lì yì wú kōng guò zhě'
          ),
        },
        {
          id: 'p035',
          label: null,
          chars: p(
            '尔时，佛告罗睺罗言：\u201c善男子，我此法要汝当受持。\u201d',
            'ěr shí fó gào luó hóu luó yán shàn nán zǐ wǒ cǐ fǎ yào rǔ dāng shòu chí'
          ),
        },
        {
          id: 'p036',
          label: null,
          chars: p(
            '说是语时，会中有九十亿菩萨摩诃萨，承佛威神即皆避座，白佛言：\u201c世尊，我等誓当受持如来所说法要，于此娑婆国土最后时中，见有其人流通为说。\u201d',
            'shuō shì yǔ shí huì zhōng yǒu jiǔ shí yì pú sà mó hē sà chéng fó wēi shén jí jiē bì zuò bó fó yán shì zūn wǒ děng shì dāng shòu chí rú lái suǒ shuō fǎ yào yú cǐ suō pó guó tǔ zuì hòu shí zhōng jiàn yǒu qí rén liú tōng wèi shuō'
          ),
        },
        {
          id: 'p037',
          label: null,
          chars: p(
            '尔时，四天王白佛言：\u201c世尊，若有能持此经典者，我当拥护，令其志愿，皆得满足。所以者何？能持此经是法器故。\u201d',
            'ěr shí sì tiān wáng bó fó yán shì zūn ruò yǒu néng chí cǐ jīng diǎn zhě wǒ dāng yōng hù lìng qí zhì yuàn jiē dé mǎn zú suǒ yǐ zhě hé néng chí cǐ jīng shì fǎ qì gù'
          ),
        },
        {
          id: 'p038',
          label: null,
          chars: p(
            '尔时，世尊普观众会而作是言：\u201c诸仁者，我此所说甚深方广希有法门，非诸众生有少善根而能听受。能听受者即为承事供养于我，亦为荷担无上菩提。',
            'ěr shí shì zūn pǔ guān zhòng huì ér zuò shì yán zhū rén zhě wǒ cǐ suǒ shuō shèn shēn fāng guǎng xī yǒu fǎ mén fēi zhū zhòng shēng yǒu shǎo shàn gēn ér néng tīng shòu néng tīng shòu zhě jí wéi chéng shì gòng yǎng yú wǒ yì wéi hé dān wú shàng pú tí'
          ),
        },
        {
          id: 'p039',
          label: null,
          chars: p(
            '是人当得辩才无碍，决定生于清净佛土。是人临终定得亲见阿弥陀佛、菩萨大众而现在前。',
            'shì rén dāng dé biàn cái wú ài jué dìng shēng yú qīng jìng fó tǔ shì rén lín zhōng dìng dé qīn jiàn ā mí tuó fó pú sà dà zhòng ér xiàn zài qián'
          ),
        },
        {
          id: 'p040',
          label: null,
          chars: p(
            '我今在此耆阇崛山诸菩萨众所共围绕，彼临终时，亦如是见。',
            'wǒ jīn zài cǐ qí shé jué shān zhū pú sà zhòng suǒ gòng wéi rào bǐ lín zhōng shí yì rú shì jiàn'
          ),
        },
        {
          id: 'p041',
          label: null,
          chars: p(
            '当知是人即为已得无尽法藏，当知是人得宿命智，当知是人不堕恶道。',
            'dāng zhī shì rén jí wéi yǐ dé wú jìn fǎ zàng dāng zhī shì rén dé sù mìng zhì dāng zhī shì rén bú duò è dào'
          ),
        },
        {
          id: 'p042',
          label: null,
          chars: p(
            '善男子，我今说此一切世间难信之法。设有众生作五逆罪，闻是经已，书持读诵，为人解说，所有业障咸得消除，终不受于恶趣之苦。',
            'shàn nán zǐ wǒ jīn shuō cǐ yī qiè shì jiān nán xìn zhī fǎ shè yǒu zhòng shēng zuò wǔ nì zuì wén shì jīng yǐ shū chí dú sòng wèi rén jiě shuō suǒ yǒu yè zhàng xián dé xiāo chú zhōng bú shòu yú è qù zhī kǔ'
          ),
        },
        {
          id: 'p043',
          label: null,
          chars: p(
            '斯人即为诸佛菩萨之所护念，在在所生，诸根具足，蒙佛灌顶，五眼清净。',
            'sī rén jí wéi zhū fó pú sà zhī suǒ hù niàn zài zài suǒ shēng zhū gēn jù zú méng fó guàn dǐng wǔ yǎn qīng jìng'
          ),
        },
        {
          id: 'p044',
          label: null,
          chars: p(
            '善男子，取要言之，我见是人，已成佛道。\u201d',
            'shàn nán zǐ qǔ yào yán zhī wǒ jiàn shì rén yǐ chéng fó dào'
          ),
        },
        {
          id: 'p045',
          label: null,
          chars: p(
            '佛说此经已，胜思惟等一切菩萨，及诸声闻、天龙八部，皆大欢喜，信受奉行。',
            'fó shuō cǐ jīng yǐ shèng sī wéi děng yī qiè pú sà jí zhū shēng wén tiān lóng bā bù jiē dà huān xǐ xìn shòu fèng xíng'
          ),
        },
        {
          id: 'p046',
          label: null,
          chars: p(
            '《大乘离文字普光明藏经》卷终',
            ''
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
            '南无喝啰怛那·哆罗夜耶·佉啰佉啰·俱住俱住·摩啰摩啰·虎啰·吽·贺贺·苏怛拿·吽·泼抹拿·娑婆诃',
            'ná mó hē là dá nà duō là yè yē qié là qié là jù zhù jù zhù mó là mó là hǔ là hōng hè hè sū dá ná hōng pō mò ná suō pó hē'
          ),
        },
        {
          id: 'cls02',
          label: '三皈依（一遍）',
          chars: p(
            '自皈依佛，当愿众生，体解大道，发无上心；',
            'zì guī yī fó dāng yuàn zhòng shēng tǐ jiě dà dào fā wú shàng xīn'
          ),
        },
        {
          id: 'cls03',
          label: null,
          chars: p(
            '自皈依法，当愿众生，深入经藏，智慧如海；',
            'zì guī yī fǎ dāng yuàn zhòng shēng shēn rù jīng zàng zhì huì rú hǎi'
          ),
        },
        {
          id: 'cls04',
          label: null,
          chars: p(
            '自皈依僧，当愿众生，统理大众，一切无碍。和南圣众。',
            'zì guī yī sēng dāng yuàn zhòng shēng tǒng lǐ dà zhòng yī qiè wú ài hé nán shèng zhòng'
          ),
        },
        {
          id: 'cls05',
          label: '南无本师释迦牟尼佛（合掌三称）',
          chars: p(
            '南无本师释迦牟尼佛（合掌三称）',
            'ná mó běn shī shì jiā móu ní fó'
          ),
        },
        {
          id: 'cls06',
          label: '回向偈（一遍）',
          chars: p(
            '诵经功德殊胜行，无边胜福皆回向。',
            'sòng jīng gōng dé shū shèng hèng wú biān shèng fú jiē huí xiàng'
          ),
        },
        {
          id: 'cls07',
          label: null,
          chars: p(
            '普愿沉溺诸有情，速往无量光佛刹。',
            'pǔ yuàn chén nì zhū yǒu qíng sù wǎng wú liàng guāng fó chà'
          ),
        },
        {
          id: 'cls08',
          label: null,
          chars: p(
            '十方三世一切佛，一切菩萨摩诃萨。',
            'shí fāng sān shì yí qiè fó yí qiè pú sà mó hē sà'
          ),
        },
        {
          id: 'cls09',
          label: null,
          chars: p(
            '摩诃般若波罗蜜。',
            'mó hē bō rě bō luó mì'
          ),
        },
        {
          id: 'cls10',
          label: '回向偈',
          chars: p(
            '愿以此功德，普及于一切。我等与众生，皆共成佛道。',
            'yuàn yǐ cǐ gōng dé pǔ jí yú yí qiè wǒ děng yǔ zhòng shēng jiē gòng chéng fó dào'
          ),
        },
      ],
    },
  ],
  glossary: [
    {
      id: 'qisheque',
      chars: '耆阇崛',
      pinyin: 'qí shé jué',
      definition: '灵鹫山。梵文 Gṛdhrakūṭa 音译。古印度王舍城外，佛陀常于此处说法。',
      category: '地名',
    },
    {
      id: 'namo',
      chars: '南无',
      pinyin: 'ná mó',
      definition: '梵文 namas 音译，意为归命、敬礼。',
      category: '仪轨用语',
    },
    {
      id: 'pusa',
      chars: '菩萨',
      pinyin: 'pú sà',
      definition: '梵文 Bodhisattva 音译，意为觉有情，即上求佛道下化众生者。',
      category: '称谓',
    },
    {
      id: 'mohesa',
      chars: '摩诃萨',
      pinyin: 'mó hē sà',
      definition: '梵文 Mahāsattva 音译，意为大有情、大士。',
      category: '称谓',
    },
    {
      id: 'nayouta',
      chars: '那由他',
      pinyin: 'nà yóu tuō',
      definition: '梵文 nayuta 音译，表极大数目。',
      category: '数量',
    },
    {
      id: 'qiantapo',
      chars: '犍闼婆',
      pinyin: 'qián tà pó',
      definition: '天龙八部之一，乾闼婆城即海市蜃楼之意。',
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
      id: 'ji',
      chars: '偈',
      pinyin: 'jì',
      definition: '梵文 Gāthā 音译，佛经中的韵文、颂词。',
      category: '名相',
    },
    {
      id: 'asengqi',
      chars: '阿僧祇',
      pinyin: 'ā sēng qí',
      definition: '梵文 asaṃkhyeya 音译，意为无量数、不可计数。',
      category: '数量',
    },
    {
      id: 'boruo',
      chars: '般若',
      pinyin: 'bō rě',
      definition: '梵文 prajñā 音译，意为智慧，特指超越世俗的佛智。',
      category: '名相',
    },
    {
      id: 'rulai',
      chars: '如来',
      pinyin: 'rú lái',
      definition: '佛的十号之一，意为乘如实之道而来。',
      category: '称谓',
    },
    {
      id: 'zhengfa',
      chars: '正法',
      pinyin: 'zhèng fǎ',
      definition: '佛陀所说的真正教法。',
      category: '名相',
    },
    {
      id: 'xumi',
      chars: '须弥',
      pinyin: 'xū mí',
      definition: '梵文 Sumeru 音译，佛教世界观中的中心大山。',
      category: '地名',
    },
    {
      id: 'shizun',
      chars: '世尊',
      pinyin: 'shì zūn',
      definition: '佛的十号之一，意为世间最尊贵者。',
      category: '称谓',
    },
  ],
}
