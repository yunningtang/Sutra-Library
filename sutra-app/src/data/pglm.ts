import type { SutraData } from './types'

// Helper to convert a string of chars + pinyin pairs into SutraChar array
function p(text: string, pinyinStr: string): { char: string; pinyin: string | null }[] {
  const chars = [...text]
  const pinyins = pinyinStr.split(' ')
  let pi = 0
  return chars.map((c) => {
    const isPunctuation = /[：，。？、！""（）；·\s]/.test(c)
    if (isPunctuation) {
      return { char: c, pinyin: null }
    }
    return { char: c, pinyin: pinyins[pi++] || null }
  })
}

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
            '如是我闻：一时，佛在王舍城耆阇崛山中，与大菩萨无量百千亿那由他数，皆是大智精进善巧，证无言法获妙辩才，是处非处力无所畏，功德智慧以修其心，相好严身威德尊重，名称普闻犹如大海，深智无底犹如须弥，其心坚固善得无生，利益安乐诸众生故，不舍大悲恒求正法，一切智智利益安乐诸众生故。',
            'rú shì wǒ wén yī shí fó zài wáng shè chéng qí shé jué shān zhōng yǔ dà pú sà wú liàng bǎi qiān yì nà yóu tuō shù jiē shì dà zhì jīng jìn shàn qiǎo zhèng wú yán fǎ huò miào biàn cái shì chù fēi chù lì wú suǒ wèi gōng dé zhì huì yǐ xiū qí xīn xiàng hǎo yán shēn wēi dé zūn zhòng míng chēng pǔ wén yóu rú dà hǎi shēn zhì wú dǐ yóu rú xū mí qí xīn jiān gù shàn dé wú shēng lì yì ān lè zhū zhòng shēng gù bù shě dà bēi héng qiú zhèng fǎ yī qiè zhì zhì lì yì ān lè zhū zhòng shēng gù'
          ),
        },
        {
          id: 'p002',
          label: null,
          chars: p(
            '尔时，胜思惟菩萨摩诃萨从座而起，偏袒右肩右膝著地，合掌向佛，而作是言："世尊，我今欲请二字之义，惟愿如来垂哀见许。"',
            'ěr shí shèng sī wéi pú sà mó hē sà cóng zuò ér qǐ piān tǎn yòu jiān yòu xī zhù dì hé zhǎng xiàng fó ér zuò shì yán shì zūn wǒ jīn yù qǐng èr zì zhī yì wéi yuàn rú lái chuí āi jiàn xǔ'
          ),
        },
        {
          id: 'p003',
          label: null,
          chars: p(
            '佛告胜思惟菩萨言："善男子，欲有问者随汝意问，如来不为一众生故出现世间，为欲利益无量众生而出现耳。"',
            'fó gào shèng sī wéi pú sà yán shàn nán zǐ yù yǒu wèn zhě suí rǔ yì wèn rú lái bù wèi yī zhòng shēng gù chū xiàn shì jiān wèi yù lì yì wú liàng zhòng shēng ér chū xiàn ěr'
          ),
        },
        {
          id: 'p004',
          label: null,
          chars: p(
            '于是胜思惟菩萨即白佛言："世尊，何者一法，是诸菩萨所应永离？何者一法，是诸菩萨应常护持？何者一法，是诸如来现所觉了？"',
            'yú shì shèng sī wéi pú sà jí bái fó yán shì zūn hé zhě yī fǎ shì zhū pú sà suǒ yīng yǒng lí hé zhě yī fǎ shì zhū pú sà yīng cháng hù chí hé zhě yī fǎ shì zhū rú lái xiàn suǒ jué liǎo'
          ),
        },
        {
          id: 'p005',
          label: null,
          chars: p(
            '佛言："善哉善哉！善男子，汝今乃能请问如来如是深义。谛听谛听，善思念之，当为汝说。',
            'fó yán shàn zāi shàn zāi shàn nán zǐ rǔ jīn nǎi néng qǐng wèn rú lái rú shì shēn yì dì tīng dì tīng shàn sī niàn zhī dāng wèi rǔ shuō'
          ),
        },
        {
          id: 'p006',
          label: null,
          chars: p(
            '善男子，有一种法菩萨应离，所谓欲贪。善男子，如是一法是诸菩萨所应永离。',
            'shàn nán zǐ yǒu yī zhǒng fǎ pú sà yīng lí suǒ wèi yù tān shàn nán zǐ rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p007',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓瞋怒。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi chēn nù rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p008',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓愚痴。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi yú chī rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p009',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓我取。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi wǒ qǔ rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p010',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓疑惑。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi yí huò rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p011',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓憍慢。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi jiāo màn rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p012',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓懈怠。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi xiè dài rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p013',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓惛眠。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi hūn mián rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p014',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应离，所谓爱著。如是一法是诸菩萨所应永离。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng lí suǒ wèi ài zhù rú shì yī fǎ shì zhū pú sà suǒ yīng yǒng lí'
          ),
        },
        {
          id: 'p015',
          label: null,
          chars: p(
            '善男子，如是九法，菩萨应离。',
            'shàn nán zǐ rú shì jiǔ fǎ pú sà yīng lí'
          ),
        },
        {
          id: 'p016',
          label: null,
          chars: p(
            '善男子，复有一法菩萨应护，云何一法？所谓诸菩萨不为自身求安乐故，不为自身修诸行故。如是一法是诸菩萨应常护持。',
            'shàn nán zǐ fù yǒu yī fǎ pú sà yīng hù yún hé yī fǎ suǒ wèi zhū pú sà bù wèi zì shēn qiú ān lè gù bù wèi zì shēn xiū zhū xíng gù rú shì yī fǎ shì zhū pú sà yīng cháng hù chí'
          ),
        },
        {
          id: 'p017',
          label: null,
          chars: p(
            '善男子，何者一法是诸如来现所觉了？善男子，无有少法如来觉了。何以故？如来觉了无有少法。善男子，一切法无生是如来觉。一切法无灭是如来觉。一切法离二边是如来觉。一切法不实是如来觉。',
            'shàn nán zǐ hé zhě yī fǎ shì zhū rú lái xiàn suǒ jué liǎo shàn nán zǐ wú yǒu shǎo fǎ rú lái jué liǎo hé yǐ gù rú lái jué liǎo wú yǒu shǎo fǎ shàn nán zǐ yī qiè fǎ wú shēng shì rú lái jué yī qiè fǎ wú miè shì rú lái jué yī qiè fǎ lí èr biān shì rú lái jué yī qiè fǎ bù shí shì rú lái jué'
          ),
        },
        {
          id: 'p018',
          label: null,
          chars: p(
            '善男子，诸业自性是如来觉。一切法从因缘生是如来觉。因缘之法犹如电光是如来觉。以因缘故而有诸业是如来觉。',
            'shàn nán zǐ zhū yè zì xìng shì rú lái jué yī qiè fǎ cóng yīn yuán shēng shì rú lái jué yīn yuán zhī fǎ yóu rú diàn guāng shì rú lái jué yǐ yīn yuán gù ér yǒu zhū yè shì rú lái jué'
          ),
        },
        {
          id: 'p019',
          label: null,
          chars: p(
            '善男子，一切法如幻如焰如水中月如虚空如响如犍闼婆城如梦如影如镜中像如化是如来觉。',
            'shàn nán zǐ yī qiè fǎ rú huàn rú yàn rú shuǐ zhōng yuè rú xū kōng rú xiǎng rú qián tà pó chéng rú mèng rú yǐng rú jìng zhōng xiàng rú huà shì rú lái jué'
          ),
        },
        {
          id: 'p020',
          label: null,
          chars: p(
            '善男子，一切空是如来觉。一切无我是如来觉。一切无有相是如来觉。一切法第一义谛是如来觉。一切法毕竟寂灭是如来觉。一切法性平等是如来觉。一切法犹如大地水火风等是如来觉。一切法虚空无相是如来觉。一切法无有戏论无有文字无有语言道是如来觉。',
            'shàn nán zǐ yī qiè kōng shì rú lái jué yī qiè wú wǒ shì rú lái jué yī qiè wú yǒu xiàng shì rú lái jué yī qiè fǎ dì yī yì dì shì rú lái jué yī qiè fǎ bì jìng jì miè shì rú lái jué yī qiè fǎ xìng píng děng shì rú lái jué yī qiè fǎ yóu rú dà dì shuǐ huǒ fēng děng shì rú lái jué yī qiè fǎ xū kōng wú xiàng shì rú lái jué yī qiè fǎ wú yǒu xì lùn wú yǒu wén zì wú yǒu yǔ yán dào shì rú lái jué'
          ),
        },
        {
          id: 'p021',
          label: null,
          chars: p(
            '善男子，何者是无生义？一切法性本无生故。何者是无灭义？一切法本无灭故。何者是无相义？一切法相本空故。何者是无作义？诸法无有造作者故。何者是无起义？诸法无有起者故。何者是无性义？一切法性空无性故。善男子，此法是诸如来现所觉了。',
            'shàn nán zǐ hé zhě shì wú shēng yì yī qiè fǎ xìng běn wú shēng gù hé zhě shì wú miè yì yī qiè fǎ běn wú miè gù hé zhě shì wú xiàng yì yī qiè fǎ xiàng běn kōng gù hé zhě shì wú zuò yì zhū fǎ wú yǒu zào zuò zhě gù hé zhě shì wú qǐ yì zhū fǎ wú yǒu qǐ zhě gù hé zhě shì wú xìng yì yī qiè fǎ xìng kōng wú xìng gù shàn nán zǐ cǐ fǎ shì zhū rú lái xiàn suǒ jué liǎo'
          ),
        },
        {
          id: 'p022',
          label: null,
          chars: p(
            '善男子，如是法义，若有善男子善女人及诸菩萨摩诃萨能于此法如说修行。于三世法亦能觉了。',
            'shàn nán zǐ rú shì fǎ yì ruò yǒu shàn nán zǐ shàn nǚ rén jí zhū pú sà mó hē sà néng yú cǐ fǎ rú shuō xiū xíng yú sān shì fǎ yì néng jué liǎo'
          ),
        },
        {
          id: 'p023',
          label: null,
          chars: p(
            '善男子，若有善男子善女人及菩萨摩诃萨，于此经典受持读诵，圆满七日，是人即得三十三天天人恭敬供养。善男子，若有善男子善女人及菩萨摩诃萨，于此经典至心读诵，满二十一日，四大天王即以天眼昼夜守护是善男子善女人，令离衰患得大利益。',
            'shàn nán zǐ ruò yǒu shàn nán zǐ shàn nǚ rén jí pú sà mó hē sà yú cǐ jīng diǎn shòu chí dú sòng yuán mǎn qī rì shì rén jí dé sān shí sān tiān tiān rén gōng jìng gòng yǎng shàn nán zǐ ruò yǒu shàn nán zǐ shàn nǚ rén jí pú sà mó hē sà yú cǐ jīng diǎn zhì xīn dú sòng mǎn èr shí yī rì sì dà tiān wáng jí yǐ tiān yǎn zhòu yè shǒu hù shì shàn nán zǐ shàn nǚ rén lìng lí shuāi huàn dé dà lì yì'
          ),
        },
        {
          id: 'p024',
          label: null,
          chars: p(
            '若出家人于此经典书写读诵受持经卷，即得三十三天一切天人及天帝释主丞天仙，昼夜守护不暂舍离，令其所作皆得成就。',
            'ruò chū jiā rén yú cǐ jīng diǎn shū xiě dú sòng shòu chí jīng juàn jí dé sān shí sān tiān yī qiè tiān rén jí tiān dì shì zhǔ chéng tiān xiān zhòu yè shǒu hù bù zàn shě lí lìng qí suǒ zuò jiē dé chéng jiù'
          ),
        },
        {
          id: 'p025',
          label: null,
          chars: p(
            '若有善男子善女人，愿生西方极乐世界，及十方佛刹随意往生。常见诸佛亲闻妙法。善男子善女人须当读诵受持如是经典。',
            'ruò yǒu shàn nán zǐ shàn nǚ rén yuàn shēng xī fāng jí lè shì jiè jí shí fāng fó chà suí yì wǎng shēng cháng jiàn zhū fó qīn wén miào fǎ shàn nán zǐ shàn nǚ rén xū dāng dú sòng shòu chí rú shì jīng diǎn'
          ),
        },
        {
          id: 'p026',
          label: null,
          chars: p(
            '善男子，若人闻此经典。信心清净以至发心。诵读书写为他解说，此人当得无量无边功德。',
            'shàn nán zǐ ruò rén wén cǐ jīng diǎn xìn xīn qīng jìng yǐ zhì fā xīn sòng dú shū xiě wèi tā jiě shuō cǐ rén dāng dé wú liàng wú biān gōng dé'
          ),
        },
        {
          id: 'p027',
          label: null,
          chars: p(
            '善男子，若复有人闻此经名，纯以清净信心欢喜受持，即得无量功德。况复书写受持读诵为他解说。何以故？善男子，如是经典不可思议，此经能令一切众生于如来觉有大利益。"',
            'shàn nán zǐ ruò fù yǒu rén wén cǐ jīng míng chún yǐ qīng jìng xìn xīn huān xǐ shòu chí jí dé wú liàng gōng dé kuàng fù shū xiě shòu chí dú sòng wèi tā jiě shuō hé yǐ gù shàn nán zǐ rú shì jīng diǎn bù kě sī yì cǐ jīng néng lìng yī qiè zhòng shēng yú rú lái jué yǒu dà lì yì'
          ),
        },
        {
          id: 'p028',
          label: null,
          chars: p(
            '尔时，佛告胜思惟菩萨："善男子，我于过去阿僧祇劫，为求如是经典，行菩萨道时，虽遇种种苦行艰难，亦不退转。善男子，我于往昔求此经典，于一劫中常勤精进修诸苦行，未曾废懈。若有善男子善女人，于末世中能受持读诵此经典者，所得功德胜前功德百分不及一，千分不及一，百千万分不及一，乃至算数譬喻所不能及。',
            'ěr shí fó gào shèng sī wéi pú sà shàn nán zǐ wǒ yú guò qù ā sēng qí jié wèi qiú rú shì jīng diǎn xíng pú sà dào shí suī yù zhǒng zhǒng kǔ xíng jiān nán yì bù tuì zhuǎn shàn nán zǐ wǒ yú wǎng xī qiú cǐ jīng diǎn yú yī jié zhōng cháng qín jīng jìn xiū zhū kǔ xíng wèi céng fèi xiè ruò yǒu shàn nán zǐ shàn nǚ rén yú mò shì zhōng néng shòu chí dú sòng cǐ jīng diǎn zhě suǒ dé gōng dé shèng qián gōng dé bǎi fēn bù jí yī qiān fēn bù jí yī bǎi qiān wàn fēn bù jí yī nǎi zhì suàn shù pì yù suǒ bù néng jí'
          ),
        },
        {
          id: 'p029',
          label: null,
          chars: p(
            '善男子，当来世中若有善男子善女人及诸菩萨摩诃萨，闻此经典受持读诵书写经卷，以花香幡盖恭敬供养者，是善男子善女人，久已亲近无量诸佛，于诸佛所曾种善根。是善男子善女人当得不退转于阿耨多罗三藐三菩提。善男子，若有人以三千大千世界满中珍宝布施，若复有人于此经典乃至四句偈等受持读诵为他演说，其所得福胜前布施不可为喻。"',
            'shàn nán zǐ dāng lái shì zhōng ruò yǒu shàn nán zǐ shàn nǚ rén jí zhū pú sà mó hē sà wén cǐ jīng diǎn shòu chí dú sòng shū xiě jīng juàn yǐ huā xiāng fān gài gōng jìng gòng yǎng zhě shì shàn nán zǐ shàn nǚ rén jiǔ yǐ qīn jìn wú liàng zhū fó yú zhū fó suǒ céng zhǒng shàn gēn shì shàn nán zǐ shàn nǚ rén dāng dé bù tuì zhuǎn yú ā nòu duō luó sān miǎo sān pú tí shàn nán zǐ ruò yǒu rén yǐ sān qiān dà qiān shì jiè mǎn zhōng zhēn bǎo bù shī ruò fù yǒu rén yú cǐ jīng diǎn nǎi zhì sì jù jì děng shòu chí dú sòng wèi tā yǎn shuō qí suǒ dé fú shèng qián bù shī bù kě wéi yù'
          ),
        },
        {
          id: 'p030',
          label: null,
          chars: p(
            '说此法时，胜思惟等诸大菩萨无量天龙八部人非人等，皆大欢喜信受奉行。',
            'shuō cǐ fǎ shí shèng sī wéi děng zhū dà pú sà wú liàng tiān lóng bā bù rén fēi rén děng jiē dà huān xǐ xìn shòu fèng xíng'
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
          label: '礼佛发愿文（一遍）',
          chars: p(
            '归命十方调御师，演扬清净微妙法，三乘四果解脱僧，愿赐慈悲哀摄受。但（某甲）自违真性，枉入迷流。随生死以飘沉，逐色声而贪染。十缠十使，积成有漏之因；六根六尘，妄作无边之罪。迷沦苦海，深溺邪途。著我耽人，举枉措直。累生业障，一切愆尤。仰三宝以慈悲，沥一心而忏悔。所愿能仁拯拔，善友提携。出烦恼之深源，到菩提之彼岸。此世福基命位，各愿昌隆；来生智种灵苗，同希增秀。生逢中国，长遇明师。正信出家，童真入道。六根通利，三业纯和。不染世缘，常修梵行。执持禁戒，尘业不侵。严护威仪，蜎飞无损。不逢八难，不缺四缘。般若智以现前，菩提心而不退。修习正法，了悟大乘。开六度之行门，越三祇之劫海。建法幢于处处，破疑网于重重。降伏众魔，绍隆三宝。承事十方诸佛，无有疲劳。修学一切法门，悉皆通达。广作福慧，普利尘沙。得六种之神通，圆一生之佛果。然后不舍法界，遍入尘劳。等观音之慈心，行普贤之愿海。他方此界，逐类随形。应现色身，演扬妙法。泥犁苦趣，饿鬼道中，或放大光明，或现诸神变，其有见我相，乃至闻我名，皆发菩提心，永出轮回苦。火镬冰河之地，变作香林；饮铜食铁之徒，化生净土。披毛戴角，负债含怨，尽罢辛酸，咸沾利乐。疾疫世而现为药草，救疗沉疴；饥馑时而化作稻粱，济诸贫馁。但有利益，无不兴崇。次期累世冤亲，现存眷属，出四生之汩没，舍万劫之爱缠。等与含生，齐成佛道。虚空有尽，我愿无穷。情与无情，同圆种智。',
            'guī mìng shí fāng tiáo yù shī yǎn yáng qīng jìng wēi miào fǎ sān shèng sì guǒ jiě tuō sēng yuàn cì cí bēi āi shè shòu dàn mǒu jiǎ zì wéi zhēn xìng wǎng rù mí liú suí shēng sǐ yǐ piāo chén zhú sè shēng ér tān rǎn shí chán shí shǐ jī chéng yǒu lòu zhī yīn liù gēn liù chén wàng zuò wú biān zhī zuì mí lún kǔ hǎi shēn nì xié tú zhù wǒ dān rén jǔ wǎng cuò zhí lěi shēng yè zhàng yī qiè qiān yóu yǎng sān bǎo yǐ cí bēi lì yī xīn ér chàn huǐ suǒ yuàn néng rén zhěng bá shàn yǒu tí xié chū fán nǎo zhī shēn yuán dào pú tí zhī bǐ àn cǐ shì fú jī mìng wèi gè yuàn chāng lóng lái shēng zhì zhǒng líng miáo tóng xī zēng xiù shēng féng zhōng guó cháng yù míng shī zhèng xìn chū jiā tóng zhēn rù dào liù gēn tōng lì sān yè chún hé bù rǎn shì yuán cháng xiū fàn xíng zhí chí jìn jiè chén yè bù qīn yán hù wēi yí yuān fēi wú sǔn bù féng bā nàn bù quē sì yuán bō rě zhì yǐ xiàn qián pú tí xīn ér bù tuì xiū xí zhèng fǎ liǎo wù dà shèng kāi liù dù zhī xíng mén yuè sān qí zhī jié hǎi jiàn fǎ chuáng yú chù chù pò yí wǎng yú chóng chóng xiáng fú zhòng mó shào lóng sān bǎo chéng shì shí fāng zhū fó wú yǒu pí láo xiū xué yī qiè fǎ mén xī jiē tōng dá guǎng zuò fú huì pǔ lì chén shā dé liù zhǒng zhī shén tōng yuán yī shēng zhī fó guǒ rán hòu bù shě fǎ jiè biàn rù chén láo děng guān yīn zhī cí xīn xíng pǔ xián zhī yuàn hǎi tā fāng cǐ jiè zhú lèi suí xíng yìng xiàn sè shēn yǎn yáng miào fǎ ní lí kǔ qù è guǐ dào zhōng huò fàng dà guāng míng huò xiàn zhū shén biàn qí yǒu jiàn wǒ xiàng nǎi zhì wén wǒ míng jiē fā pú tí xīn yǒng chū lún huí kǔ huǒ huò bīng hé zhī dì biàn zuò xiāng lín yǐn tóng shí tiě zhī tú huà shēng jìng tǔ pī máo dài jiǎo fù zhài hán yuàn jìn bà xīn suān xián zhān lì lè jí yì shì ér xiàn wéi yào cǎo jiù liáo chén kē jī jǐn shí ér huà zuò dào liáng jì zhū pín něi dàn yǒu lì yì wú bù xīng chóng cì qī lěi shì yuān qīn xiàn cún juàn shǔ chū sì shēng zhī gǔ mò shě wàn jié zhī ài chán děng yǔ hán shēng qí chéng fó dào xū kōng yǒu jìn wǒ yuàn wú qióng qíng yǔ wú qíng tóng yuán zhǒng zhì'
          ),
        },
        {
          id: 'cls09',
          label: '回向偈（一遍）',
          chars: p(
            '愿以此功德，庄严佛净土，上报四重恩，下济三途苦，若有见闻者，悉发菩提心，尽此一报身，同生极乐国。十方三世一切佛·一切菩萨摩诃萨·摩诃般若波罗蜜·',
            'yuàn yǐ cǐ gōng dé zhuāng yán fó jìng tǔ shàng bào sì chóng ēn xià jì sān tú kǔ ruò yǒu jiàn wén zhě xī fā pú tí xīn jìn cǐ yī bào shēn tóng shēng jí lè guó shí fāng sān shì yī qiè fó yī qiè pú sà mó hē sà mó hē bō rě bō luó mì'
          ),
        },
        {
          id: 'cls10',
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
