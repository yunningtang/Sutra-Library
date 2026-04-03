import type { SutraData } from './types'

function p(text: string, pinyinStr: string): { char: string; pinyin: string | null }[] {
  const chars = [...text]
  const pinyins = pinyinStr.split(' ')
  let pi = 0
  return chars.map((c) => {
    const isPunctuation = /[：，。？、！""''（）；·《》\s]/.test(c)
    if (isPunctuation) {
      return { char: c, pinyin: null }
    }
    return { char: c, pinyin: pinyins[pi++] || null }
  })
}

export const diamond: SutraData = {
  id: 'diamond',
  name: '金刚般若波罗蜜经',
  translator: '姚秦天竺三藏鸠摩罗什译',
  source: '《乾隆大藏经》般若部',
  about: '此经以须菩提与佛陀的对话，阐明"应无所住而生其心"之旨，破一切相，显般若空慧。为大乘佛教最重要的经典之一。',
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
          id: 's01',
          label: '法会因由分第一',
          chars: p(
            '如是我闻：一时，佛在舍卫国祇树给孤独园，与大比丘众千二百五十人俱。尔时，世尊食时，著衣持钵，入舍卫大城乞食。于其城中，次第乞已，还至本处。饭食讫，收衣钵，洗足已，敷座而坐。',
            'rú shì wǒ wén yī shí fó zài shè wèi guó qí shù jǐ gū dú yuán yǔ dà bǐ qiū zhòng qiān èr bǎi wǔ shí rén jù ěr shí shì zūn shí shí zhù yī chí bō rù shè wèi dà chéng qǐ shí yú qí chéng zhōng cì dì qǐ yǐ huán zhì běn chù fàn shí qì shōu yī bō xǐ zú yǐ fū zuò ér zuò'
          ),
        },
        {
          id: 's02',
          label: '善现启请分第二',
          chars: p(
            '时，长老须菩提在大众中即从座起，偏袒右肩，右膝著地，合掌恭敬而白佛言："希有！世尊，如来善护念诸菩萨，善付嘱诸菩萨。世尊，善男子、善女人，发阿耨多罗三藐三菩提心，应云何住？云何降伏其心？"佛言："善哉善哉！须菩提，如汝所说，如来善护念诸菩萨，善付嘱诸菩萨。汝今谛听，当为汝说。善男子、善女人，发阿耨多罗三藐三菩提心，应如是住，如是降伏其心。""唯然，世尊，愿乐欲闻。"',
            'shí zhǎng lǎo xū pú tí zài dà zhòng zhōng jí cóng zuò qǐ piān tǎn yòu jiān yòu xī zhù dì hé zhǎng gōng jìng ér bái fó yán xī yǒu shì zūn rú lái shàn hù niàn zhū pú sà shàn fù zhǔ zhū pú sà shì zūn shàn nán zǐ shàn nǚ rén fā ā nòu duō luó sān miǎo sān pú tí xīn yīng yún hé zhù yún hé xiáng fú qí xīn fó yán shàn zāi shàn zāi xū pú tí rú rǔ suǒ shuō rú lái shàn hù niàn zhū pú sà shàn fù zhǔ zhū pú sà rǔ jīn dì tīng dāng wèi rǔ shuō shàn nán zǐ shàn nǚ rén fā ā nòu duō luó sān miǎo sān pú tí xīn yīng rú shì zhù rú shì xiáng fú qí xīn wéi rán shì zūn yuàn lè yù wén'
          ),
        },
        {
          id: 's03',
          label: '大乘正宗分第三',
          chars: p(
            '佛告须菩提："诸菩萨摩诃萨应如是降伏其心：所有一切众生之类，若卵生、若胎生、若湿生、若化生，若有色、若无色，若有想、若无想、若非有想非无想，我皆令入无余涅槃而灭度之。如是灭度无量无数无边众生，实无众生得灭度者。何以故？须菩提，若菩萨有我相、人相、众生相、寿者相，即非菩萨。"',
            'fó gào xū pú tí zhū pú sà mó hē sà yīng rú shì xiáng fú qí xīn suǒ yǒu yī qiè zhòng shēng zhī lèi ruò luǎn shēng ruò tāi shēng ruò shī shēng ruò huà shēng ruò yǒu sè ruò wú sè ruò yǒu xiǎng ruò wú xiǎng ruò fēi yǒu xiǎng fēi wú xiǎng wǒ jiē lìng rù wú yú niè pán ér miè dù zhī rú shì miè dù wú liàng wú shù wú biān zhòng shēng shí wú zhòng shēng dé miè dù zhě hé yǐ gù xū pú tí ruò pú sà yǒu wǒ xiàng rén xiàng zhòng shēng xiàng shòu zhě xiàng jí fēi pú sà'
          ),
        },
        {
          id: 's04',
          label: '妙行无住分第四',
          chars: p(
            '"复次，须菩提，菩萨于法，应无所住，行于布施。所谓不住色布施，不住声香味触法布施。须菩提，菩萨应如是布施，不住于相。何以故？若菩萨不住相布施，其福德不可思量。须菩提，于意云何？东方虚空可思量不？""不也，世尊。""须菩提，南西北方四维上下虚空可思量不？""不也，世尊。""须菩提，菩萨无住相布施，福德亦复如是不可思量。须菩提，菩萨但应如所教住。"',
            'fù cì xū pú tí pú sà yú fǎ yīng wú suǒ zhù xíng yú bù shī suǒ wèi bù zhù sè bù shī bù zhù shēng xiāng wèi chù fǎ bù shī xū pú tí pú sà yīng rú shì bù shī bù zhù yú xiàng hé yǐ gù ruò pú sà bù zhù xiàng bù shī qí fú dé bù kě sī liáng xū pú tí yú yì yún hé dōng fāng xū kōng kě sī liáng bù bù yě shì zūn xū pú tí nán xī běi fāng sì wéi shàng xià xū kōng kě sī liáng bù bù yě shì zūn xū pú tí pú sà wú zhù xiàng bù shī fú dé yì fù rú shì bù kě sī liáng xū pú tí pú sà dàn yīng rú suǒ jiào zhù'
          ),
        },
        {
          id: 's05',
          label: '如理实见分第五',
          chars: p(
            '"须菩提，于意云何？可以身相见如来不？""不也，世尊，不可以身相得见如来。何以故？如来所说身相，即非身相。"佛告须菩提："凡所有相，皆是虚妄。若见诸相非相，则见如来。"',
            'xū pú tí yú yì yún hé kě yǐ shēn xiàng jiàn rú lái bù bù yě shì zūn bù kě yǐ shēn xiàng dé jiàn rú lái hé yǐ gù rú lái suǒ shuō shēn xiàng jí fēi shēn xiàng fó gào xū pú tí fán suǒ yǒu xiàng jiē shì xū wàng ruò jiàn zhū xiàng fēi xiàng zé jiàn rú lái'
          ),
        },
        {
          id: 's06',
          label: '正信希有分第六',
          chars: p(
            '须菩提白佛言："世尊，颇有众生得闻如是言说章句，生实信不？"佛告须菩提："莫作是说。如来灭后，后五百岁，有持戒修福者，于此章句能生信心，以此为实，当知是人不于一佛二佛三四五佛而种善根，已于无量千万佛所种诸善根。闻是章句，乃至一念生净信者，须菩提，如来悉知悉见，是诸众生得如是无量福德。何以故？是诸众生无复我相、人相、众生相、寿者相，无法相，亦无非法相。何以故？是诸众生，若心取相，则为著我人众生寿者；若取法相，即著我人众生寿者。何以故？若取非法相，即著我人众生寿者。是故不应取法，不应取非法。以是义故，如来常说：汝等比丘，知我说法如筏喻者，法尚应舍，何况非法。"',
            'xū pú tí bái fó yán shì zūn pō yǒu zhòng shēng dé wén rú shì yán shuō zhāng jù shēng shí xìn bù fó gào xū pú tí mò zuò shì shuō rú lái miè hòu hòu wǔ bǎi suì yǒu chí jiè xiū fú zhě yú cǐ zhāng jù néng shēng xìn xīn yǐ cǐ wéi shí dāng zhī shì rén bù yú yī fó èr fó sān sì wǔ fó ér zhǒng shàn gēn yǐ yú wú liàng qiān wàn fó suǒ zhǒng zhū shàn gēn wén shì zhāng jù nǎi zhì yī niàn shēng jìng xìn zhě xū pú tí rú lái xī zhī xī jiàn shì zhū zhòng shēng dé rú shì wú liàng fú dé hé yǐ gù shì zhū zhòng shēng wú fù wǒ xiàng rén xiàng zhòng shēng xiàng shòu zhě xiàng wú fǎ xiàng yì wú fēi fǎ xiàng hé yǐ gù shì zhū zhòng shēng ruò xīn qǔ xiàng zé wéi zhù wǒ rén zhòng shēng shòu zhě ruò qǔ fǎ xiàng jí zhù wǒ rén zhòng shēng shòu zhě hé yǐ gù ruò qǔ fēi fǎ xiàng jí zhù wǒ rén zhòng shēng shòu zhě shì gù bù yīng qǔ fǎ bù yīng qǔ fēi fǎ yǐ shì yì gù rú lái cháng shuō rǔ děng bǐ qiū zhī wǒ shuō fǎ rú fá yù zhě fǎ shàng yīng shě hé kuàng fēi fǎ'
          ),
        },
        {
          id: 's07',
          label: '无得无说分第七',
          chars: p(
            '"须菩提，于意云何？如来得阿耨多罗三藐三菩提耶？如来有所说法耶？"须菩提言："如我解佛所说义，无有定法名阿耨多罗三藐三菩提，亦无有定法如来可说。何以故？如来所说法，皆不可取、不可说，非法、非非法。所以者何？一切贤圣皆以无为法而有差别。"',
            'xū pú tí yú yì yún hé rú lái dé ā nòu duō luó sān miǎo sān pú tí yé rú lái yǒu suǒ shuō fǎ yé xū pú tí yán rú wǒ jiě fó suǒ shuō yì wú yǒu dìng fǎ míng ā nòu duō luó sān miǎo sān pú tí yì wú yǒu dìng fǎ rú lái kě shuō hé yǐ gù rú lái suǒ shuō fǎ jiē bù kě qǔ bù kě shuō fēi fǎ fēi fēi fǎ suǒ yǐ zhě hé yī qiè xián shèng jiē yǐ wú wéi fǎ ér yǒu chā bié'
          ),
        },
        {
          id: 's08',
          label: '依法出生分第八',
          chars: p(
            '"须菩提，于意云何？若人满三千大千世界七宝以用布施，是人所得福德，宁为多不？"须菩提言："甚多，世尊。何以故？是福德即非福德性，是故如来说福德多。""若复有人，于此经中受持乃至四句偈等，为他人说，其福胜彼。何以故？须菩提，一切诸佛及诸佛阿耨多罗三藐三菩提法，皆从此经出。须菩提，所谓佛法者，即非佛法。"',
            'xū pú tí yú yì yún hé ruò rén mǎn sān qiān dà qiān shì jiè qī bǎo yǐ yòng bù shī shì rén suǒ dé fú dé nìng wéi duō bù xū pú tí yán shèn duō shì zūn hé yǐ gù shì fú dé jí fēi fú dé xìng shì gù rú lái shuō fú dé duō ruò fù yǒu rén yú cǐ jīng zhōng shòu chí nǎi zhì sì jù jì děng wèi tā rén shuō qí fú shèng bǐ hé yǐ gù xū pú tí yī qiè zhū fó jí zhū fó ā nòu duō luó sān miǎo sān pú tí fǎ jiē cóng cǐ jīng chū xū pú tí suǒ wèi fó fǎ zhě jí fēi fó fǎ'
          ),
        },
        {
          id: 's09',
          label: '一相无相分第九',
          chars: p(
            '"须菩提！于意云何？须陀洹能作是念：‘我得须陀洹果’不？"须菩提言："不也，世尊！何以故？须陀洹名为入流，而无所入，不入色声香味触法，是名须陀洹。""须菩提！于意云何？斯陀含能作是念：‘我得斯陀含果’不？"须菩提言："不也，世尊！何以故？斯陀含名一往来，而实无往来，是名斯陀含。""须菩提！于意云何？阿那含能作是念：‘我得阿那含果’不？"须菩提言："不也，世尊！何以故？阿那含名为不来，而实无不来，是故名阿那含。""须菩提！于意云何？阿罗汉能作是念：‘我得阿罗汉道’不？"须菩提言："不也，世尊！何以故？实无有法名阿罗汉。世尊！若阿罗汉作是念：‘我得阿罗汉道’，即为著我人众生寿者。世尊！佛说我得无诤三昧，人中最为第一，是第一离欲阿罗汉。世尊！我不作是念：‘我是离欲阿罗汉’。世尊！我若作是念：‘我得阿罗汉道’，世尊则不说须菩提是乐阿兰那行者！以须菩提实无所行，而名须菩提是乐阿兰那行。"',
            'xū pú tí yú yì yún hé xū tuó huán néng zuò shì niàn wǒ dé xū tuó huán guǒ fǒu xū pú tí yán bù yě shì zūn hé yǐ gù xū tuó huán míng wéi rù liú ér wú suǒ rù bù rù sè shēng xiāng wèi chù fǎ shì míng xū tuó huán xū pú tí yú yì yún hé sī tuó hán néng zuò shì niàn wǒ dé sī tuó hán guǒ fǒu xū pú tí yán bù yě shì zūn hé yǐ gù sī tuó hán míng yī wǎng lái ér shí wú wǎng lái shì míng sī tuó hán xū pú tí yú yì yún hé ā nà hán néng zuò shì niàn wǒ dé ā nà hán guǒ fǒu xū pú tí yán bù yě shì zūn hé yǐ gù ā nà hán míng wéi bù lái ér shí wú bù lái shì gù míng ā nà hán xū pú tí yú yì yún hé ā luó hàn néng zuò shì niàn wǒ dé ā luó hàn dào fǒu xū pú tí yán bù yě shì zūn hé yǐ gù shí wú yǒu fǎ míng ā luó hàn shì zūn ruò ā luó hàn zuò shì niàn wǒ dé ā luó hàn dào jí wéi zhù wǒ rén zhòng shēng shòu zhě shì zūn fó shuō wǒ dé wú zhèng sān mèi rén zhōng zuì wéi dì yī shì dì yī lí yù ā luó hàn shì zūn wǒ bù zuò shì niàn wǒ shì lí yù ā luó hàn shì zūn wǒ ruò zuò shì niàn wǒ dé ā luó hàn dào shì zūn zé bù shuō xū pú tí shì lè ā lán nà xíng zhě yǐ xū pú tí shí wú suǒ xíng ér míng xū pú tí shì lè ā lán nà xíng'
          ),
        },
        {
          id: 's10',
          label: '庄严净土分第十',
          chars: p(
            '佛告须菩提："于意云何？如来昔在然灯佛所，于法有所得不？""不也，世尊！如来在然灯佛所，于法实无所得。""须菩提！于意云何？菩萨庄严佛土不？""不也，世尊！何以故？庄严佛土者，即非庄严，是名庄严。""是故须菩提！诸菩萨摩诃萨应如是生清净心，不应住色生心，不应住声香味触法生心，应无所住而生其心。须菩提！譬如有人，身如须弥山王，于意云何？是身为大不？"须菩提言："甚大，世尊！何以故？佛说非身，是名大身。"',
            'fó gào xū pú tí yú yì yún hé rú lái xī zài rán dēng fó suǒ yú fǎ yǒu suǒ dé bù bù yě shì zūn rú lái zài rán dēng fó suǒ yú fǎ shí wú suǒ dé xū pú tí yú yì yún hé pú sà zhuāng yán fó tǔ bù bù yě shì zūn hé yǐ gù zhuāng yán fó tǔ zhě jí fēi zhuāng yán shì míng zhuāng yán shì gù xū pú tí zhū pú sà mó hē sà yīng rú shì shēng qīng jìng xīn bù yīng zhù sè shēng xīn bù yīng zhù shēng xiāng wèi chù fǎ shēng xīn yīng wú suǒ zhù ér shēng qí xīn xū pú tí pì rú yǒu rén shēn rú xū mí shān wáng yú yì yún hé shì shēn wéi dà bù xū pú tí yán shèn dà shì zūn hé yǐ gù fó shuō fēi shēn shì míng dà shēn'
          ),
        },
        {
          id: 's11',
          label: '无为福胜分第十一',
          chars: p(
            '"须菩提！如恒河中所有沙数，如是沙等恒河，于意云何？是诸恒河沙宁为多不？"须菩提言："甚多，世尊！但诸恒河尚多无数，何况其沙。""须菩提！我今实言告汝：若有善男子、善女人，以七宝满尔所恒河沙数三千大千世界，以用布施，得福多不？"须菩提言："甚多，世尊！"佛告须菩提："若善男子、善女人，于此经中，乃至受持四句偈等，为他人说，而此福德胜前福德。"',
            'xū pú tí rú héng hé zhōng suǒ yǒu shā shù rú shì shā děng héng hé yú yì yún hé shì zhū héng hé shā nìng wéi duō bù xū pú tí yán shèn duō shì zūn dàn zhū héng hé shàng duō wú shù hé kuàng qí shā xū pú tí wǒ jīn shí yán gào rǔ ruò yǒu shàn nán zǐ shàn nǚ rén yǐ qī bǎo mǎn ěr suǒ héng hé shā shù sān qiān dà qiān shì jiè yǐ yòng bù shī dé fú duō bù xū pú tí yán shèn duō shì zūn fó gào xū pú tí ruò shàn nán zǐ shàn nǚ rén yú cǐ jīng zhōng nǎi zhì shòu chí sì jù jì děng wèi tā rén shuō ér cǐ fú dé shèng qián fú dé'
          ),
        },
        {
          id: 's12',
          label: '尊重正教分第十二',
          chars: p(
            '"复次，须菩提！随说是经，乃至四句偈等，当知此处，一切世间、天人、阿修罗，皆应供养，如佛塔庙，何况有人尽能受持读诵。须菩提！当知是人成就最上第一希有之法，若是经典所在之处，则为有佛，若尊重弟子。"',
            'fù cì xū pú tí suí shuō shì jīng nǎi zhì sì jù jì děng dāng zhī cǐ chù yī qiè shì jiān tiān rén ā xiū luó jiē yīng gòng yǎng rú fó tǎ miào hé kuàng yǒu rén jìn néng shòu chí dú sòng xū pú tí dāng zhī shì rén chéng jiù zuì shàng dì yī xī yǒu zhī fǎ ruò shì jīng diǎn suǒ zài zhī chù zé wéi yǒu fó ruò zūn zhòng dì zǐ'
          ),
        },
        {
          id: 's13',
          label: '如法受持分第十三',
          chars: p(
            '尔时，须菩提白佛言："世尊！当何名此经，我等云何奉持？"佛告须菩提："是经名为《金刚般若波罗蜜》，以是名字，汝当奉持。所以者何？须菩提！佛说般若波罗蜜，即非般若波罗蜜，是名般若波罗蜜。须菩提！于意云何？如来有所说法不？"须菩提白佛言："世尊！如来无所说。""须菩提！于意云何？三千大千世界所有微尘是为多不？"须菩提言："甚多，世尊！""须菩提！诸微尘，如来说非微尘，是名微尘。如来说：世界，非世界，是名世界。须菩提！于意云何？可以三十二相见如来不？""不也，世尊！不可以三十二相得见如来。何以故？如来说：三十二相，即是非相，是名三十二相。""须菩提！若有善男子、善女人，以恒河沙等身命布施；若复有人，于此经中，乃至受持四句偈等，为他人说，其福甚多。"',
            'ěr shí xū pú tí bái fó yán shì zūn dāng hé míng cǐ jīng wǒ děng yún hé fèng chí fó gào xū pú tí shì jīng míng wéi jīn gāng bō rě bō luó mì yǐ shì míng zì rǔ dāng fèng chí suǒ yǐ zhě hé xū pú tí fó shuō bō rě bō luó mì jí fēi bō rě bō luó mì shì míng bō rě bō luó mì xū pú tí yú yì yún hé rú lái yǒu suǒ shuō fǎ bù xū pú tí bái fó yán shì zūn rú lái wú suǒ shuō xū pú tí yú yì yún hé sān qiān dà qiān shì jiè suǒ yǒu wēi chén shì wéi duō bù xū pú tí yán shèn duō shì zūn xū pú tí zhū wēi chén rú lái shuō fēi wēi chén shì míng wēi chén rú lái shuō shì jiè fēi shì jiè shì míng shì jiè xū pú tí yú yì yún hé kě yǐ sān shí èr xiàng jiàn rú lái bù bù yě shì zūn bù kě yǐ sān shí èr xiàng dé jiàn rú lái hé yǐ gù rú lái shuō sān shí èr xiàng jí shì fēi xiàng shì míng sān shí èr xiàng xū pú tí ruò yǒu shàn nán zǐ shàn nǚ rén yǐ héng hé shā děng shēn mìng bù shī ruò fù yǒu rén yú cǐ jīng zhōng nǎi zhì shòu chí sì jù jì děng wèi tā rén shuō qí fú shèn duō'
          ),
        },
        {
          id: 's14',
          label: '离相寂灭分第十四',
          chars: p(
            '尔时，须菩提闻说是经，深解义趣，涕泪悲泣，而白佛言："希有，世尊！佛说如是甚深经典，我从昔来所得慧眼，未曾得闻如是之经。世尊！若复有人得闻是经，信心清净，则生实相，当知是人，成就第一希有功德。世尊！是实相者，即是非相，是故如来说名实相。世尊！我今得闻如是经典，信解受持不足为难，若当来世，后五百岁，其有众生，得闻是经，信解受持，是人则为第一希有。何以故？此人无我相、无人相、无众生相、无寿者相。所以者何？我相即是非相，人相、众生相、寿者相即是非相。何以故？离一切诸相，则名诸佛。"佛告须菩提："如是！如是！若复有人得闻是经，不惊、不怖、不畏，当知是人甚为希有。何以故？须菩提！如来说第一波罗蜜，非第一波罗蜜，是名第一波罗蜜。须菩提！忍辱波罗蜜，如来说非忍辱波罗蜜，是名忍辱波罗蜜。何以故？须菩提！如我昔为歌利王割截身体，我于尔时，无我相、无人相、无众生相、无寿者相。何以故？我于往昔节节支解时，若有我相、人相、众生相、寿者相，应生嗔恨。须菩提！又念过去于五百世作忍辱仙人，于尔所世，无我相、无人相、无众生相、无寿者相。是故须菩提！菩萨应离一切相，发阿耨多罗三藐三菩提心，不应住色生心，不应住声香味触法生心，应生无所住心。若心有住，则为非住。是故佛说：‘菩萨心不应住色布施。’须菩提！菩萨为利益一切众生，应如是布施。如来说：一切诸相，即是非相。又说：一切众生，即非众生。须菩提！如来是真语者、实语者、如语者、不诳语者、不异语者。须菩提！如来所得法，此法无实无虚。须菩提！若菩萨心住于法而行布施，如人入暗，则无所见。若菩萨心不住法而行布施，如人有目，日光明照，见种种色。须菩提！当来之世，若有善男子、善女人，能于此经受持读诵，则为如来以佛智慧，悉知是人，悉见是人，皆得成就无量无边功德。"',
            'ěr shí xū pú tí wén shuō shì jīng shēn jiě yì qù tì lèi bēi qì ér bái fó yán xī yǒu shì zūn fó shuō rú shì shèn shēn jīng diǎn wǒ cóng xī lái suǒ dé huì yǎn wèi céng dé wén rú shì zhī jīng shì zūn ruò fù yǒu rén dé wén shì jīng xìn xīn qīng jìng zé shēng shí xiàng dāng zhī shì rén chéng jiù dì yī xī yǒu gōng dé shì zūn shì shí xiàng zhě jí shì fēi xiàng shì gù rú lái shuō míng shí xiàng shì zūn wǒ jīn dé wén rú shì jīng diǎn xìn jiě shòu chí bù zú wéi nán ruò dāng lái shì hòu wǔ bǎi suì qí yǒu zhòng shēng dé wén shì jīng xìn jiě shòu chí shì rén zé wéi dì yī xī yǒu hé yǐ gù cǐ rén wú wǒ xiàng wú rén xiàng wú zhòng shēng xiàng wú shòu zhě xiàng suǒ yǐ zhě hé wǒ xiàng jí shì fēi xiàng rén xiàng zhòng shēng xiàng shòu zhě xiàng jí shì fēi xiàng hé yǐ gù lí yī qiè zhū xiàng zé míng zhū fó fó gào xū pú tí rú shì rú shì ruò fù yǒu rén dé wén shì jīng bù jīng bù bù bù wèi dāng zhī shì rén shèn wéi xī yǒu hé yǐ gù xū pú tí rú lái shuō dì yī bō luó mì fēi dì yī bō luó mì shì míng dì yī bō luó mì xū pú tí rěn rǔ bō luó mì rú lái shuō fēi rěn rǔ bō luó mì shì míng rěn rǔ bō luó mì hé yǐ gù xū pú tí rú wǒ xī wéi gē lì wáng gē jié shēn tǐ wǒ yú ěr shí wú wǒ xiàng wú rén xiàng wú zhòng shēng xiàng wú shòu zhě xiàng hé yǐ gù wǒ yú wǎng xī jié jié zhī jiě shí ruò yǒu wǒ xiàng rén xiàng zhòng shēng xiàng shòu zhě xiàng yīng shēng chēn hèn xū pú tí yòu niàn guò qù yú wǔ bǎi shì zuò rěn rǔ xiān rén yú ěr suǒ shì wú wǒ xiàng wú rén xiàng wú zhòng shēng xiàng wú shòu zhě xiàng shì gù xū pú tí pú sà yīng lí yī qiè xiàng fā ā nòu duō luó sān miǎo sān pú tí xīn bù yīng zhù sè shēng xīn bù yīng zhù shēng xiāng wèi chù fǎ shēng xīn yīng shēng wú suǒ zhù xīn ruò xīn yǒu zhù zé wéi fēi zhù shì gù fó shuō pú sà xīn bù yīng zhù sè bù shī xū pú tí pú sà wèi lì yì yī qiè zhòng shēng yīng rú shì bù shī rú lái shuō yī qiè zhū xiàng jí shì fēi xiàng yòu shuō yī qiè zhòng shēng jí fēi zhòng shēng xū pú tí rú lái shì zhēn yǔ zhě shí yǔ zhě rú yǔ zhě bù kuáng yǔ zhě bù yì yǔ zhě xū pú tí rú lái suǒ dé fǎ cǐ fǎ wú shí wú xū xū pú tí ruò pú sà xīn zhù yú fǎ ér xíng bù shī rú rén rù àn zé wú suǒ jiàn ruò pú sà xīn bù zhù fǎ ér xíng bù shī rú rén yǒu mù rì guāng míng zhào jiàn zhǒng zhǒng sè xū pú tí dāng lái zhī shì ruò yǒu shàn nán zǐ shàn nǚ rén néng yú cǐ jīng shòu chí dú sòng zé wéi rú lái yǐ fó zhì huì xī zhī shì rén xī jiàn shì rén jiē dé chéng jiù wú liàng wú biān gōng dé'
          ),
        },
        {
          id: 's15',
          label: '持经功德分第十五',
          chars: p(
            '"须菩提！若有善男子、善女人，初日分以恒河沙等身布施，中日分复以恒河沙等身布施，后日分亦以恒河沙等身布施，如是无量百千万亿劫以身布施；若复有人，闻此经典，信心不逆，其福胜彼，何况书写、受持、读诵、为人解说。须菩提！以要言之，是经有不可思议、不可称量、无边功德。如来为发大乘者说，为发最上乘者说。若有人能受持读诵，广为人说，如来悉知是人，悉见是人，皆得成就不可量、不可称、无有边、不可思议功德。如是人等，则为荷担如来阿耨多罗三藐三菩提。何以故？须菩提！若乐小法者，著我见、人见、众生见、寿者见，则于此经，不能听受读诵、为人解说。须菩提！在在处处，若有此经，一切世间、天、人、阿修罗，所应供养；当知此处则为是塔，皆应恭敬，作礼围绕，以诸华香而散其处。"',
            'xū pú tí ruò yǒu shàn nán zǐ shàn nǚ rén chū rì fēn yǐ héng hé shā děng shēn bù shī zhōng rì fēn fù yǐ héng hé shā děng shēn bù shī hòu rì fēn yì yǐ héng hé shā děng shēn bù shī rú shì wú liàng bǎi qiān wàn yì jié yǐ shēn bù shī ruò fù yǒu rén wén cǐ jīng diǎn xìn xīn bù nì qí fú shèng bǐ hé kuàng shū xiě shòu chí dú sòng wèi rén jiě shuō xū pú tí yǐ yào yán zhī shì jīng yǒu bù kě sī yì bù kě chēng liáng wú biān gōng dé rú lái wéi fā dà shèng zhě shuō wéi fā zuì shàng shèng zhě shuō ruò yǒu rén néng shòu chí dú sòng guǎng wèi rén shuō rú lái xī zhī shì rén xī jiàn shì rén jiē dé chéng jiù bù kě liáng bù kě chēng wú yǒu biān bù kě sī yì gōng dé rú shì rén děng zé wéi hè dān rú lái ā nòu duō luó sān miǎo sān pú tí hé yǐ gù xū pú tí ruò lè xiǎo fǎ zhě zhù wǒ jiàn rén jiàn zhòng shēng jiàn shòu zhě jiàn zé yú cǐ jīng bù néng tīng shòu dú sòng wèi rén jiě shuō xū pú tí zài zài chù chù ruò yǒu cǐ jīng yī qiè shì jiān tiān rén ā xiū luó suǒ yīng gòng yǎng dāng zhī cǐ chù zé wéi shì tǎ jiē yīng gōng jìng zuò lǐ wéi rào yǐ zhū huā xiāng ér sàn qí chù'
          ),
        },
        {
          id: 's16',
          label: '能净业障分第十六',
          chars: p(
            '"复次，须菩提！若善男子、善女人，受持读诵此经，若为人轻贱，是人先世罪业，应堕恶道，以今世人轻贱故，先世罪业则为消灭，当得阿耨多罗三藐三菩提。须菩提！我念过去无量阿僧祇劫，于然灯佛前，得值八百四千万亿那由他诸佛，悉皆供养承事，无空过者，若复有人，于后末世，能受持读诵此经，所得功德，于我所供养诸佛功德，百分不及一，千万亿分、乃至算数譬喻所不能及。须菩提！若善男子、善女人，于后末世，有受持读诵此经，所得功德，我若具说者，或有人闻，心则狂乱，狐疑不信。须菩提！当知是经义不可思议，果报亦不可思议。"',
            'fù cì xū pú tí ruò shàn nán zǐ shàn nǚ rén shòu chí dú sòng cǐ jīng ruò wéi rén qīng jiàn shì rén xiān shì zuì yè yīng duò è dào yǐ jīn shì rén qīng jiàn gù xiān shì zuì yè zé wéi xiāo miè dāng dé ā nòu duō luó sān miǎo sān pú tí xū pú tí wǒ niàn guò qù wú liàng ā sēng qí jié yú rán dēng fó qián dé zhí bā bǎi sì qiān wàn yì nà yóu tuō zhū fó xī jiē gòng yǎng chéng shì wú kōng guò zhě ruò fù yǒu rén yú hòu mò shì néng shòu chí dú sòng cǐ jīng suǒ dé gōng dé yú wǒ suǒ gòng yǎng zhū fó gōng dé bǎi fēn bù jí yī qiān wàn yì fēn nǎi zhì suàn shù pì yù suǒ bù néng jí xū pú tí ruò shàn nán zǐ shàn nǚ rén yú hòu mò shì yǒu shòu chí dú sòng cǐ jīng suǒ dé gōng dé wǒ ruò jù shuō zhě huò yǒu rén wén xīn zé kuáng luàn hú yí bù xìn xū pú tí dāng zhī shì jīng yì bù kě sī yì guǒ bào yì bù kě sī yì'
          ),
        },
        {
          id: 's17',
          label: '究竟无我分第十七',
          chars: p(
            '尔时，须菩提白佛言："世尊！善男子、善女人，发阿耨多罗三藐三菩提心，云何应住？云何降伏其心？"佛告须菩提："善男子、善女人，发阿耨多罗三藐三菩提心者，当生如是心：我应灭度一切众生。灭度一切众生已，而无有一众生实灭度者。何以故？须菩提！若菩萨有我相、人相、众生相、寿者相，则非菩萨。所以者何？须菩提！实无有法发阿耨多罗三藐三菩提心者。须菩提！于意云何？如来于然灯佛所，有法得阿耨多罗三藐三菩提不？""不也，世尊！如我解佛所说义，佛于然灯佛所，无有法得阿耨多罗三藐三菩提。"佛言："如是！如是！须菩提！实无有法如来得阿耨多罗三藐三菩提。须菩提！若有法如来得阿耨多罗三藐三菩提者，然灯佛则不与我授记：‘汝于来世，当得作佛，号释迦牟尼。’以实无有法得阿耨多罗三藐三菩提，是故然灯佛与我授记，作是言：‘汝于来世，当得作佛，号释迦牟尼。’何以故？如来者，即诸法如义。若有人言：‘如来得阿耨多罗三藐三菩提。’须菩提！实无有法，佛得阿耨多罗三藐三菩提。须菩提！如来所得阿耨多罗三藐三菩提，于是中无实无虚。是故如来说：一切法皆是佛法。须菩提！所言一切法者，即非一切法，是故名一切法。须菩提！譬如人身长大。"须菩提言："世尊！如来说：人身长大，则为非大身，是名大身。""须菩提！菩萨亦如是。若作是言：‘我当灭度无量众生’，则不名菩萨。何以故？须菩提！实无有法名为菩萨。是故佛说：一切法无我、无人、无众生、无寿者。须菩提！若菩萨作是言：‘我当庄严佛土’，是不名菩萨。何以故？如来说：庄严佛土者，即非庄严，是名庄严。须菩提！若菩萨通达无我法者，如来说名真是菩萨。"',
            'ěr shí xū pú tí bái fó yán shì zūn shàn nán zǐ shàn nǚ rén fā ā nòu duō luó sān miǎo sān pú tí xīn yún hé yīng zhù yún hé xiáng fú qí xīn fó gào xū pú tí shàn nán zǐ shàn nǚ rén fā ā nòu duō luó sān miǎo sān pú tí xīn zhě dāng shēng rú shì xīn wǒ yīng miè dù yī qiè zhòng shēng miè dù yī qiè zhòng shēng yǐ ér wú yǒu yī zhòng shēng shí miè dù zhě hé yǐ gù xū pú tí ruò pú sà yǒu wǒ xiàng rén xiàng zhòng shēng xiàng shòu zhě xiàng zé fēi pú sà suǒ yǐ zhě hé xū pú tí shí wú yǒu fǎ fā ā nòu duō luó sān miǎo sān pú tí xīn zhě xū pú tí yú yì yún hé rú lái yú rán dēng fó suǒ yǒu fǎ dé ā nòu duō luó sān miǎo sān pú tí bù bù yě shì zūn rú wǒ jiě fó suǒ shuō yì fó yú rán dēng fó suǒ wú yǒu fǎ dé ā nòu duō luó sān miǎo sān pú tí fó yán rú shì rú shì xū pú tí shí wú yǒu fǎ rú lái dé ā nòu duō luó sān miǎo sān pú tí xū pú tí ruò yǒu fǎ rú lái dé ā nòu duō luó sān miǎo sān pú tí zhě rán dēng fó zé bù yǔ wǒ shòu jì rǔ yú lái shì dāng dé zuò fó hào shì jiā móu ní yǐ shí wú yǒu fǎ dé ā nòu duō luó sān miǎo sān pú tí shì gù rán dēng fó yǔ wǒ shòu jì zuò shì yán rǔ yú lái shì dāng dé zuò fó hào shì jiā móu ní hé yǐ gù rú lái zhě jí zhū fǎ rú yì ruò yǒu rén yán rú lái dé ā nòu duō luó sān miǎo sān pú tí xū pú tí shí wú yǒu fǎ fó dé ā nòu duō luó sān miǎo sān pú tí xū pú tí rú lái suǒ dé ā nòu duō luó sān miǎo sān pú tí yú shì zhōng wú shí wú xū shì gù rú lái shuō yī qiè fǎ jiē shì fó fǎ xū pú tí suǒ yán yī qiè fǎ zhě jí fēi yī qiè fǎ shì gù míng yī qiè fǎ xū pú tí pì rú rén shēn cháng dà xū pú tí yán shì zūn rú lái shuō rén shēn cháng dà zé wéi fēi dà shēn shì míng dà shēn xū pú tí pú sà yì rú shì ruò zuò shì yán wǒ dāng miè dù wú liàng zhòng shēng zé bù míng pú sà hé yǐ gù xū pú tí shí wú yǒu fǎ míng wéi pú sà shì gù fó shuō yī qiè fǎ wú wǒ wú rén wú zhòng shēng wú shòu zhě xū pú tí ruò pú sà zuò shì yán wǒ dāng zhuāng yán fó tǔ shì bù míng pú sà hé yǐ gù rú lái shuō zhuāng yán fó tǔ zhě jí fēi zhuāng yán shì míng zhuāng yán xū pú tí ruò pú sà tōng dá wú wǒ fǎ zhě rú lái shuō míng zhēn shì pú sà'
          ),
        },
        {
          id: 's18',
          label: '一体同观分第十八',
          chars: p(
            '"须菩提！于意云何？如来有肉眼不？""如是，世尊！如来有肉眼。""须菩提！于意云何？如来有天眼不？""如是，世尊！如来有天眼。""须菩提！于意云何？如来有慧眼不？""如是，世尊！如来有慧眼。""须菩提！于意云何？如来有法眼不？""如是，世尊！如来有法眼。""须菩提！于意云何？如来有佛眼不？""如是，世尊！如来有佛眼。""须菩提！于意云何？如恒河中所有沙，佛说是沙不？""如是，世尊！如来说是沙。""须菩提！于意云何？如一恒河中所有沙，有如是等恒河，是诸恒河所有沙数，佛世界如是，宁为多不？""甚多，世尊！"佛告须菩提："尔所国土中，所有众生，若干种心，如来悉知。何以故？如来说：诸心皆为非心，是名为心。所以者何？须菩提！过去心不可得，现在心不可得，未来心不可得。"',
            'xū pú tí yú yì yún hé rú lái yǒu ròu yǎn bù rú shì shì zūn rú lái yǒu ròu yǎn xū pú tí yú yì yún hé rú lái yǒu tiān yǎn bù rú shì shì zūn rú lái yǒu tiān yǎn xū pú tí yú yì yún hé rú lái yǒu huì yǎn bù rú shì shì zūn rú lái yǒu huì yǎn xū pú tí yú yì yún hé rú lái yǒu fǎ yǎn bù rú shì shì zūn rú lái yǒu fǎ yǎn xū pú tí yú yì yún hé rú lái yǒu fó yǎn bù rú shì shì zūn rú lái yǒu fó yǎn xū pú tí yú yì yún hé rú héng hé zhōng suǒ yǒu shā fó shuō shì shā bù rú shì shì zūn rú lái shuō shì shā xū pú tí yú yì yún hé rú yī héng hé zhōng suǒ yǒu shā yǒu rú shì děng héng hé shì zhū héng hé suǒ yǒu shā shù fó shì jiè rú shì nìng wéi duō bù shèn duō shì zūn fó gào xū pú tí ěr suǒ guó tǔ zhōng suǒ yǒu zhòng shēng ruò gān zhǒng xīn rú lái xī zhī hé yǐ gù rú lái shuō zhū xīn jiē wéi fēi xīn shì míng wéi xīn suǒ yǐ zhě hé xū pú tí guò qù xīn bù kě dé xiàn zài xīn bù kě dé wèi lái xīn bù kě dé'
          ),
        },
        {
          id: 's19',
          label: '法界通化分第十九',
          chars: p(
            '"须菩提！于意云何？若有人满三千大千世界七宝以用布施，是人以是因缘，得福多不？""如是，世尊！此人以是因缘，得福甚多。""须菩提！若福德有实，如来不说得福德多；以福德无故，如来说得福德多。"',
            'xū pú tí yú yì yún hé ruò yǒu rén mǎn sān qiān dà qiān shì jiè qī bǎo yǐ yòng bù shī shì rén yǐ shì yīn yuán dé fú duō bù rú shì shì zūn cǐ rén yǐ shì yīn yuán dé fú shèn duō xū pú tí ruò fú dé yǒu shí rú lái bù shuō dé fú dé duō yǐ fú dé wú gù rú lái shuō dé fú dé duō'
          ),
        },
        {
          id: 's20',
          label: '离色离相分第二十',
          chars: p(
            '"须菩提！于意云何？佛可以具足色身见不？""不也，世尊！如来不应以具足色身见。何以故？如来说：具足色身，即非具足色身，是名具足色身。""须菩提！于意云何？如来可以具足诸相见不？""不也，世尊！如来不应以具足诸相见。何以故？如来说：诸相具足，即非具足，是名诸相具足。"',
            'xū pú tí yú yì yún hé fó kě yǐ jù zú sè shēn jiàn bù bù yě shì zūn rú lái bù yīng yǐ jù zú sè shēn jiàn hé yǐ gù rú lái shuō jù zú sè shēn jí fēi jù zú sè shēn shì míng jù zú sè shēn xū pú tí yú yì yún hé rú lái kě yǐ jù zú zhū xiàng jiàn bù bù yě shì zūn rú lái bù yīng yǐ jù zú zhū xiàng jiàn hé yǐ gù rú lái shuō zhū xiàng jù zú jí fēi jù zú shì míng zhū xiàng jù zú'
          ),
        },
        {
          id: 's21',
          label: '非说所说分第二十一',
          chars: p(
            '"须菩提！汝勿谓如来作是念：‘我当有所说法。’莫作是念，何以故？若人言：如来有所说法，即为谤佛，不能解我所说故。须菩提！说法者，无法可说，是名说法。"尔时，慧命须菩提白佛言："世尊！颇有众生，于未来世，闻说是法，生信心不？"佛言："须菩提！彼非众生，非不众生。何以故？须菩提！众生众生者，如来说非众生，是名众生。"',
            'xū pú tí rǔ wù wèi rú lái zuò shì niàn wǒ dāng yǒu suǒ shuō fǎ mò zuò shì niàn hé yǐ gù ruò rén yán rú lái yǒu suǒ shuō fǎ jí wéi bàng fó bù néng jiě wǒ suǒ shuō gù xū pú tí shuō fǎ zhě wú fǎ kě shuō shì míng shuō fǎ ěr shí huì mìng xū pú tí bái fó yán shì zūn pō yǒu zhòng shēng yú wèi lái shì wén shuō shì fǎ shēng xìn xīn bù fó yán xū pú tí bǐ fēi zhòng shēng fēi bù zhòng shēng hé yǐ gù xū pú tí zhòng shēng zhòng shēng zhě rú lái shuō fēi zhòng shēng shì míng zhòng shēng'
          ),
        },
        {
          id: 's22',
          label: '无法可得分第二十二',
          chars: p(
            '须菩提白佛言："世尊！佛得阿耨多罗三藐三菩提，为无所得耶？"佛言："如是，如是。须菩提！我于阿耨多罗三藐三菩提乃至无有少法可得，是名阿耨多罗三藐三菩提。"',
            'xū pú tí bái fó yán shì zūn fó dé ā nòu duō luó sān miǎo sān pú tí wéi wú suǒ dé yé fó yán rú shì rú shì xū pú tí wǒ yú ā nòu duō luó sān miǎo sān pú tí nǎi zhì wú yǒu shǎo fǎ kě dé shì míng ā nòu duō luó sān miǎo sān pú tí'
          ),
        },
        {
          id: 's23',
          label: '净心行善分第二十三',
          chars: p(
            '"复次，须菩提！是法平等，无有高下，是名阿耨多罗三藐三菩提；以无我、无人、无众生、无寿者，修一切善法，即得阿耨多罗三藐三菩提。须菩提！所言善法者，如来说即非善法，是名善法。"',
            'fù cì xū pú tí shì fǎ píng děng wú yǒu gāo xià shì míng ā nòu duō luó sān miǎo sān pú tí yǐ wú wǒ wú rén wú zhòng shēng wú shòu zhě xiū yī qiè shàn fǎ jí dé ā nòu duō luó sān miǎo sān pú tí xū pú tí suǒ yán shàn fǎ zhě rú lái shuō jí fēi shàn fǎ shì míng shàn fǎ'
          ),
        },
        {
          id: 's24',
          label: '福智无比分第二十四',
          chars: p(
            '"须菩提！若三千大千世界中所有诸须弥山王，如是等七宝聚，有人持用布施；若人以此《般若波罗蜜经》，乃至四句偈等，受持读诵、为他人说，于前福德百分不及一，百千万亿分，乃至算数譬喻所不能及。"',
            'xū pú tí ruò sān qiān dà qiān shì jiè zhōng suǒ yǒu zhū xū mí shān wáng rú shì děng qī bǎo jù yǒu rén chí yòng bù shī ruò rén yǐ cǐ bō rě bō luó mì jīng nǎi zhì sì jù jì děng shòu chí dú sòng wèi tā rén shuō yú qián fú dé bǎi fēn bù jí yī bǎi qiān wàn yì fēn nǎi zhì suàn shù pì yù suǒ bù néng jí'
          ),
        },
        {
          id: 's25',
          label: '化无所化分第二十五',
          chars: p(
            '"须菩提！于意云何？汝等勿谓如来作是念：‘我当度众生。’须菩提！莫作是念。何以故？实无有众生如来度者。若有众生如来度者，如来则有我、人、众生、寿者。须菩提！如来说：‘有我者，则非有我，而凡夫之人以为有我。’须菩提！凡夫者，如来说则非凡夫，是名凡夫。"',
            'xū pú tí yú yì yún hé rǔ děng wù wèi rú lái zuò shì niàn wǒ dāng dù zhòng shēng xū pú tí mò zuò shì niàn hé yǐ gù shí wú yǒu zhòng shēng rú lái dù zhě ruò yǒu zhòng shēng rú lái dù zhě rú lái zé yǒu wǒ rén zhòng shēng shòu zhě xū pú tí rú lái shuō yǒu wǒ zhě zé fēi yǒu wǒ ér fán fū zhī rén yǐ wéi yǒu wǒ xū pú tí fán fū zhě rú lái shuō zé fēi fán fū shì míng fán fū'
          ),
        },
        {
          id: 's26',
          label: '法身非相分第二十六',
          chars: p(
            '"须菩提！于意云何？可以三十二相观如来不？"须菩提言："如是！如是！以三十二相观如来。"佛言："须菩提！若以三十二相观如来者，转轮圣王则是如来。"须菩提白佛言："世尊！如我解佛所说义，不应以三十二相观如来。"尔时，世尊而说偈言："若以色见我，以音声求我，是人行邪道，不能见如来。"',
            'xū pú tí yú yì yún hé kě yǐ sān shí èr xiàng guān rú lái bù xū pú tí yán rú shì rú shì yǐ sān shí èr xiàng guān rú lái fó yán xū pú tí ruò yǐ sān shí èr xiàng guān rú lái zhě zhuǎn lún shèng wáng zé shì rú lái xū pú tí bái fó yán shì zūn rú wǒ jiě fó suǒ shuō yì bù yīng yǐ sān shí èr xiàng guān rú lái ěr shí shì zūn ér shuō jì yán ruò yǐ sè jiàn wǒ yǐ yīn shēng qiú wǒ shì rén xíng xié dào bù néng jiàn rú lái'
          ),
        },
        {
          id: 's27',
          label: '无断无灭分第二十七',
          chars: p(
            '"须菩提！汝若作是念：‘如来不以具足相故，得阿耨多罗三藐三菩提。’须菩提！莫作是念：‘如来不以具足相故，得阿耨多罗三藐三菩提。’须菩提！汝若作是念，发阿耨多罗三藐三菩提心者，说诸法断灭。莫作是念！何以故？发阿耨多罗三藐三菩提心者，于法不说断灭相。"',
            'xū pú tí rǔ ruò zuò shì niàn rú lái bù yǐ jù zú xiàng gù dé ā nòu duō luó sān miǎo sān pú tí xū pú tí mò zuò shì niàn rú lái bù yǐ jù zú xiàng gù dé ā nòu duō luó sān miǎo sān pú tí xū pú tí rǔ ruò zuò shì niàn fā ā nòu duō luó sān miǎo sān pú tí xīn zhě shuō zhū fǎ duàn miè mò zuò shì niàn hé yǐ gù fā ā nòu duō luó sān miǎo sān pú tí xīn zhě yú fǎ bù shuō duàn miè xiàng'
          ),
        },
        {
          id: 's28',
          label: '不受不贪分第二十八',
          chars: p(
            '"须菩提！若菩萨以满恒河沙等世界七宝持用布施；若复有人知一切法无我，得成于忍，此菩萨胜前菩萨所得功德。何以故？须菩提！以诸菩萨不受福德故。"须菩提白佛言："世尊！云何菩萨不受福德？""须菩提！菩萨所作福德，不应贪著，是故说不受福德。"',
            'xū pú tí ruò pú sà yǐ mǎn héng hé shā děng shì jiè qī bǎo chí yòng bù shī ruò fù yǒu rén zhī yī qiè fǎ wú wǒ dé chéng yú rěn cǐ pú sà shèng qián pú sà suǒ dé gōng dé hé yǐ gù xū pú tí yǐ zhū pú sà bù shòu fú dé gù xū pú tí bái fó yán shì zūn yún hé pú sà bù shòu fú dé xū pú tí pú sà suǒ zuò fú dé bù yīng tān zhù shì gù shuō bù shòu fú dé'
          ),
        },
        {
          id: 's29',
          label: '威仪寂静分第二十九',
          chars: p(
            '"须菩提！若有人言：如来若来若去、若坐若卧，是人不解我所说义。何以故？如来者，无所从来，亦无所去，故名如来。"',
            'xū pú tí ruò yǒu rén yán rú lái ruò lái ruò qù ruò zuò ruò wò shì rén bù jiě wǒ suǒ shuō yì hé yǐ gù rú lái zhě wú suǒ cóng lái yì wú suǒ qù gù míng rú lái'
          ),
        },
        {
          id: 's30',
          label: '一合理相分第三十',
          chars: p(
            '"须菩提！若善男子、善女人，以三千大千世界碎为微尘，于意云何？是微尘众宁为多不？""甚多，世尊！何以故？若是微尘众实有者，佛则不说是微尘众，所以者何？佛说：微尘众，即非微尘众，是名微尘众。世尊！如来所说三千大千世界，则非世界，是名世界。何以故？若世界实有者，则是一合相。如来说：‘一合相，则非一合相，是名一合相。’须菩提！一合相者，则是不可说，但凡夫之人贪著其事。"',
            'xū pú tí ruò shàn nán zǐ shàn nǚ rén yǐ sān qiān dà qiān shì jiè suì wéi wēi chén yú yì yún hé shì wēi chén zhòng nìng wéi duō bù shèn duō shì zūn hé yǐ gù ruò shì wēi chén zhòng shí yǒu zhě fó zé bù shuō shì wēi chén zhòng suǒ yǐ zhě hé fó shuō wēi chén zhòng jí fēi wēi chén zhòng shì míng wēi chén zhòng shì zūn rú lái suǒ shuō sān qiān dà qiān shì jiè zé fēi shì jiè shì míng shì jiè hé yǐ gù ruò shì jiè shí yǒu zhě zé shì yī hé xiàng rú lái shuō yī hé xiàng zé fēi yī hé xiàng shì míng yī hé xiàng xū pú tí yī hé xiàng zhě zé shì bù kě shuō dàn fán fū zhī rén tān zhù qí shì'
          ),
        },
        {
          id: 's31',
          label: '知见不生分第三十一',
          chars: p(
            '"须菩提！若人言：佛说我见、人见、众生见、寿者见。须菩提！于意云何？是人解我所说义不？""不也，世尊！是人不解如来所说义。何以故？世尊说：我见、人见、众生见、寿者见，即非我见、人见、众生见、寿者见，是名我见、人见、众生见、寿者见。""须菩提！发阿耨多罗三藐三菩提心者，于一切法，应如是知，如是见，如是信解，不生法相。须菩提！所言法相者，如来说即非法相，是名法相。"',
            'xū pú tí ruò rén yán fó shuō wǒ jiàn rén jiàn zhòng shēng jiàn shòu zhě jiàn xū pú tí yú yì yún hé shì rén jiě wǒ suǒ shuō yì bù bù yě shì zūn shì rén bù jiě rú lái suǒ shuō yì hé yǐ gù shì zūn shuō wǒ jiàn rén jiàn zhòng shēng jiàn shòu zhě jiàn jí fēi wǒ jiàn rén jiàn zhòng shēng jiàn shòu zhě jiàn shì míng wǒ jiàn rén jiàn zhòng shēng jiàn shòu zhě jiàn xū pú tí fā ā nòu duō luó sān miǎo sān pú tí xīn zhě yú yī qiè fǎ yīng rú shì zhī rú shì jiàn rú shì xìn jiě bù shēng fǎ xiàng xū pú tí suǒ yán fǎ xiàng zhě rú lái shuō jí fēi fǎ xiàng shì míng fǎ xiàng'
          ),
        },
        {
          id: 's32',
          label: '应化非真分第三十二',
          chars: p(
            '"须菩提！若有人以满无量阿僧祇世界七宝持用布施，若有善男子、善女人发菩提心者，持于此经，乃至四句偈等，受持读诵，为人演说，其福胜彼。云何为人演说，不取于相，如如不动。何以故？一切有为法，如梦幻泡影，如露亦如电，应作如是观。"佛说是经已，长老须菩提及诸比丘、比丘尼、优婆塞、优婆夷，一切世间、天、人、阿修罗，闻佛所说，皆大欢喜，信受奉行。',
            'xū pú tí ruò yǒu rén yǐ mǎn wú liàng ā sēng qí shì jiè qī bǎo chí yòng bù shī ruò yǒu shàn nán zǐ shàn nǚ rén fā pú tí xīn zhě chí yú cǐ jīng nǎi zhì sì jù jì děng shòu chí dú sòng wèi rén yǎn shuō qí fú shèng bǐ yún hé wèi rén yǎn shuō bù qǔ yú xiàng rú rú bù dòng hé yǐ gù yī qiè yǒu wéi fǎ rú mèng huàn pào yǐng rú lù yì rú diàn yīng zuò rú shì guān fó shuō shì jīng yǐ zhǎng lǎo xū pú tí jí zhū bǐ qiū bǐ qiū ní yōu pó sè yōu pó yí yī qiè shì jiān tiān rén ā xiū luó wén fó suǒ shuō jiē dà huān xǐ xìn shòu fèng xíng'
          ),
        }
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
      definition: '梵文 prajn\u0101 音译，意为智慧，特指超越世俗的佛智。',
      category: '名相',
    },
    {
      id: 'boluomi',
      chars: '波罗蜜',
      pinyin: 'bō luó mì',
      definition: '梵文 p\u0101ramit\u0101 音译，意为到彼岸、究竟圆满。',
      category: '名相',
    },
    {
      id: 'xuputi',
      chars: '须菩提',
      pinyin: 'xū pú tí',
      definition: '佛十大弟子之一，解空第一。梵文 Subh\u016bti 音译。',
      category: '称谓',
    },
    {
      id: 'anouduoluo',
      chars: '阿耨多罗三藐三菩提',
      pinyin: 'ā nòu duō luó sān miǎo sān pú tí',
      definition: '梵文 Anuttara-samyak-sa\u1e43bodhi 音译，意为无上正等正觉。',
      category: '名相',
    },
    {
      id: 'xutuohuan',
      chars: '须陀洹',
      pinyin: 'xū tuó huán',
      definition: '梵文 Srot\u0101panna 音译，声闻初果，入流。',
      category: '名相',
    },
    {
      id: 'situohan',
      chars: '斯陀含',
      pinyin: 'sī tuó hán',
      definition: '梵文 Sak\u1e5bd\u0101g\u0101min 音译，声闻二果，一来。',
      category: '名相',
    },
    {
      id: 'anahan',
      chars: '阿那含',
      pinyin: 'ā nà hán',
      definition: '梵文 An\u0101g\u0101min 音译，声闻三果，不还。',
      category: '名相',
    },
    {
      id: 'aluohan',
      chars: '阿罗汉',
      pinyin: 'ā luó hàn',
      definition: '梵文 Arhat 音译，声闻四果，已断尽烦恼。',
      category: '名相',
    },
    {
      id: 'henghe',
      chars: '恒河',
      pinyin: 'héng hé',
      definition: '印度恒河，佛经中常以恒河沙喻极多之数。',
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
      id: 'rulai',
      chars: '如来',
      pinyin: 'rú lái',
      definition: '佛的十号之一，意为乘如实之道而来。',
      category: '称谓',
    },
    {
      id: 'ji',
      chars: '偈',
      pinyin: 'jì',
      definition: '梵文 G\u0101th\u0101 音译，佛经中的韵文、颂词。',
      category: '名相',
    },
  ],
}
