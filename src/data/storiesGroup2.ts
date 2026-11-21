import { Story } from '../types/story';

export const storiesGroup2: Story[] = [
  // STORY 6
  {
    id: 'story-06',
    slug: 'omusubi-kororin',
    title: 'おむすび　ころりん',
    romajiTitle: 'Omusubi Kororin',
    englishTitle: 'The Rolling Rice Ball',
    category: 'folktale',
    categoryLabelJa: 'むかしばなし',
    categoryLabelEn: 'Folktale',
    difficulty: 'N5 Kana',
    charCount: 430,
    estimatedMinutes: 4,
    description: 'An old man drops his delicious rice ball down a dark hole in the mountain, discovering a lively secret mice kingdom!',
    coverEmoji: '🍙',
    coverTheme: 'matcha',
    paragraphs: [
      {
        id: 's06-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'mountain',
          altJa: 'やま で おじいさん の おむすび が ころころ ころがる',
          altEn: 'A round onigiri rice ball rolling downhill into a little hole near an old man under green cedar trees.',
        },
        sentences: [
          {
            id: 's06-s01',
            japanese: 'むかし、　やま　へ　しごと　に　いった　おじいさん　が　いました。',
            romaji: 'Mukashi, yama e shigoto ni itta ojiisan ga imashita.',
            english: 'Long ago, there was an old man who went to the mountain for work.',
            vocabHighlight: [
              { word: 'しごと', romaji: 'shigoto', meaning: 'work / job', type: 'noun' },
              { word: 'いった', romaji: 'itta', meaning: 'went', type: 'verb' }
            ]
          },
          {
            id: 's06-s02',
            japanese: 'ひる　に　なって、　おむすび　を　たべよう　と　しました。',
            romaji: 'Hiru ni natte, omusubi o tabeyou to shimashita.',
            english: 'Noon arrived, and he decided to eat his rice ball.',
            vocabHighlight: [
              { word: 'ひる', romaji: 'hiru', meaning: 'noon / daytime', type: 'noun' },
              { word: 'おむすび', romaji: 'omusubi', meaning: 'rice ball (onigiri)', type: 'noun' }
            ]
          },
          {
            id: 's06-s03',
            japanese: 'ところが、　おむすび　が　て　から　ぽろり　と　おちました。',
            romaji: 'Tokoroga, omusubi ga te kara porori to ochimashita.',
            english: 'However, the rice ball slipped gently from his hands and fell.',
            vocabHighlight: [
              { word: 'て', romaji: 'te', meaning: 'hand', type: 'noun' },
              { word: 'おちました', romaji: 'ochimashita', meaning: 'fell / dropped', type: 'verb' }
            ]
          },
          {
            id: 's06-s04',
            japanese: '「ころころ　ころりん、　おむすび　ころりん！」',
            romaji: '"Korokoro kororin, omusubi kororin!"',
            english: '"Roll, roll, rolling along, the rice ball goes rolling!"',
            vocabHighlight: [
              { word: 'ころころ', romaji: 'korokoro', meaning: 'rolling sound', type: 'adjective' }
            ]
          },
          {
            id: 's06-s05',
            japanese: 'おむすび　は　じめん　の　あな　の　なか　へ　すぽん　と　はいりました。',
            romaji: 'Omusubi wa jimen no ana no naka e supon to hairimashita.',
            english: 'The rice ball plopped right into a hole in the ground.',
            vocabHighlight: [
              { word: 'じめん', romaji: 'jimen', meaning: 'ground', type: 'noun' },
              { word: 'あな', romaji: 'ana', meaning: 'hole', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's06-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'home',
          altJa: 'あな の なか で かわいい ねずみ たち が うたって おどる',
          altEn: 'Little grey mice wearing tiny kimonos singing and pounding rice cakes inside a warm cozy burrow underground.',
        },
        sentences: [
          {
            id: 's06-s06',
            japanese: 'あな　の　なか　から　かわいい　うたごえ　が　きこえて　きました。',
            romaji: 'Ana no naka kara kawaii utagoe ga kikoete kimashita.',
            english: 'From inside the hole, cute singing voices could be heard.',
            vocabHighlight: [
              { word: 'かわいい', romaji: 'kawaii', meaning: 'cute / lovely', type: 'adjective' },
              { word: 'きこえて', romaji: 'kikoete', meaning: 'could be heard', type: 'verb' }
            ]
          },
          {
            id: 's06-s07',
            japanese: 'おじいさん　が　のぞくと、　あな　に　おちて　しまいました！',
            romaji: 'Ojiisan ga nozoku to, ana ni ochite shimaimashita!',
            english: 'When the old man peeked inside, he accidentally tumbled into the hole!',
            vocabHighlight: [
              { word: 'のぞくと', romaji: 'nozoku to', meaning: 'when peeking in', type: 'verb' }
            ]
          },
          {
            id: 's06-s08',
            japanese: 'あな　の　そこ　には、　たくさんの　ねずみ　が　いました。',
            romaji: 'Ana no soko niwa, takusan no nezumi ga imashita.',
            english: 'At the bottom of the hole, there were many mice.',
            vocabHighlight: [
              { word: 'ねずみ', romaji: 'nezumi', meaning: 'mouse / rat', type: 'noun' }
            ]
          },
          {
            id: 's06-s09',
            japanese: '「おいしい　おむすび　を　ありがとう！」　と　ねずみ　たち　が　いいました。',
            romaji: '"Oishii omusubi o arigatou!" to nezumi-tachi ga iimashita.',
            english: '"Thank you for the delicious rice ball!" said the mice.',
            vocabHighlight: [
              { word: 'たち', romaji: 'tachi', meaning: '(plural suffix)', type: 'particle' }
            ]
          },
          {
            id: 's06-s10',
            japanese: 'ねずみ　たち　は　おじいさん　に　すてきな　たからもの　を　プレゼント　しました。',
            romaji: 'Nezumi-tachi wa ojiisan ni sutekina takaramono o purezento shimashita.',
            english: 'The mice gifted the old man a wonderful treasure.',
            vocabHighlight: [
              { word: 'すてきな', romaji: 'sutekina', meaning: 'wonderful / lovely', type: 'adjective' },
              { word: 'たからもの', romaji: 'takaramono', meaning: 'treasure', type: 'noun' },
              { word: 'プレゼント', romaji: 'purezento', meaning: 'present / gift', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 7
  {
    id: 'story-07',
    slug: 'shinkansen-no-tabi',
    title: 'ぼく　の　はじめて　の　しんかんせん',
    romajiTitle: 'Boku no Hajimete no Shinkansen',
    englishTitle: 'My First Bullet Train Ride',
    category: 'adventure',
    categoryLabelJa: 'ぼうけん',
    categoryLabelEn: 'Adventure',
    difficulty: 'N5 Easy',
    charCount: 420,
    estimatedMinutes: 4,
    description: 'Riding the sleek white Shinkansen bullet train from Tokyo to Kyoto, gazing at snow-capped Mount Fuji out the window.',
    coverEmoji: '🚅',
    coverTheme: 'fuji',
    paragraphs: [
      {
        id: 's07-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'city',
          altJa: 'とうきょう えき の ホーム に しんかんせん が くる',
          altEn: 'A high-speed white bullet train arriving at a modern Tokyo train station platform.',
        },
        sentences: [
          {
            id: 's07-s01',
            japanese: 'ぼく　は　とうきょうえき　に　います。',
            romaji: 'Boku wa Toukyou-eki ni imasu.',
            english: 'I am at Tokyo Station.',
            vocabHighlight: [
              { word: 'ぼく', romaji: 'boku', meaning: 'I / me (boy/casual)', type: 'noun' },
              { word: 'えき', romaji: 'eki', meaning: 'station / train station', type: 'noun' }
            ]
          },
          {
            id: 's07-s02',
            japanese: 'きょう　は　かぞく　と　きょうと　へ　りょこう　に　いきます。',
            romaji: 'Kyou wa kazoku to Kyouto e ryokou ni ikimasu.',
            english: 'Today I am traveling to Kyoto on a trip with my family.',
            vocabHighlight: [
              { word: 'かぞく', romaji: 'kazoku', meaning: 'family', type: 'noun' },
              { word: 'りょこう', romaji: 'ryokou', meaning: 'travel / trip', type: 'noun' }
            ]
          },
          {
            id: 's07-s03',
            japanese: 'ホーム　に　しろい　かっこいい　しんかんせん　が　はいって　きました。',
            romaji: 'Hoomu ni shiroi kakkoii shinkansen ga haitte kimashita.',
            english: 'A cool white bullet train entered onto the platform.',
            vocabHighlight: [
              { word: 'ホーム', romaji: 'hoomu', meaning: 'station platform', type: 'noun' },
              { word: 'かっこいい', romaji: 'kakkoii', meaning: 'cool / stylish', type: 'adjective' },
              { word: 'しんかんせん', romaji: 'shinkansen', meaning: 'bullet train', type: 'noun' }
            ]
          },
          {
            id: 's07-s04',
            japanese: '「わあ、　すごく　ながいね！」　と　ぼく　は　いいました。',
            romaji: '"Waa, sugoku nagai ne!" to boku wa iimashita.',
            english: '"Wow, it\'s super long!" I said.',
            vocabHighlight: [
              { word: 'すごく', romaji: 'sugoku', meaning: 'greatly / very', type: 'adjective' },
              { word: 'ながい', romaji: 'nagai', meaning: 'long', type: 'adjective' }
            ]
          }
        ]
      },
      {
        id: 's07-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'mountain',
          altJa: 'しんかんせん の まど から みえる ゆき の ふじさん',
          altEn: 'Snow-capped Mount Fuji standing tall against a bright blue sky viewed from the train window.',
        },
        sentences: [
          {
            id: 's07-s05',
            japanese: 'しんかんせん　が　しゅっぱつ　しました。　スピード　が　とても　はやい　です。',
            romaji: 'Shinkansen ga shuppatsu shimashita. Supiido ga totemo hayai desu.',
            english: 'The bullet train departed. Its speed is remarkably fast.',
            vocabHighlight: [
              { word: 'しゅっぱつ', romaji: 'shuppatsu', meaning: 'departure', type: 'noun' },
              { word: 'はやい', romaji: 'hayai', meaning: 'fast / quick', type: 'adjective' }
            ]
          },
          {
            id: 's07-s06',
            japanese: 'まど　の　そと　を　みると、　おおきな　ふじさん　が　みえました。',
            romaji: 'Mado no soto o miru to, ookina Fujisan ga miemashita.',
            english: 'When looking out the window, giant Mount Fuji could be seen.',
            vocabHighlight: [
              { word: 'そと', romaji: 'soto', meaning: 'outside', type: 'noun' },
              { word: 'ふじさん', romaji: 'Fujisan', meaning: 'Mt. Fuji', type: 'noun' },
              { word: 'みえました', romaji: 'miemashita', meaning: 'could see / appeared', type: 'verb' }
            ]
          },
          {
            id: 's07-s07',
            japanese: 'ふじさん　の　うえ　には　しろい　ゆき　が　つもって　います。',
            romaji: 'Fujisan no ue niwa shiroi yuki ga tsumotte imasu.',
            english: 'On top of Mount Fuji, white snow was piled up.',
            vocabHighlight: [
              { word: 'ゆき', romaji: 'yuki', meaning: 'snow', type: 'noun' }
            ]
          },
          {
            id: 's07-s08',
            japanese: 'おとうさん　と　おかあさん　と　おいしい　えきべん　を　たべました。',
            romaji: 'Otousan to okaasan to oishii ekiben o tabemashita.',
            english: 'With father and mother, I ate delicious train station bento.',
            vocabHighlight: [
              { word: 'おとうさん', romaji: 'otousan', meaning: 'father', type: 'noun' },
              { word: 'えきべん', romaji: 'ekiben', meaning: 'train station bento lunch', type: 'noun' }
            ]
          },
          {
            id: 's07-s09',
            japanese: 'さいこう　の　でんしゃ　の　たび　でした！',
            romaji: 'Saikou no densha no tabi deshita!',
            english: 'It was the best train journey ever!',
            vocabHighlight: [
              { word: 'さいこう', romaji: 'saikou', meaning: 'best / highest', type: 'noun' },
              { word: 'でんしゃ', romaji: 'densha', meaning: 'train', type: 'noun' },
              { word: 'たび', romaji: 'tabi', meaning: 'journey / travel', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 8
  {
    id: 'story-08',
    slug: 'kaguyahime',
    title: 'かぐやひめ',
    romajiTitle: 'Kaguya-hime',
    englishTitle: 'The Bamboo Princess',
    category: 'folktale',
    categoryLabelJa: 'むかしばなし',
    categoryLabelEn: 'Folktale',
    difficulty: 'N5 Standard',
    charCount: 450,
    estimatedMinutes: 5,
    description: 'Inside a shining stalk of bamboo, an old bamboo cutter finds a glowing baby girl destined for the moon.',
    coverEmoji: '🎋',
    coverTheme: 'lavender',
    paragraphs: [
      {
        id: 's08-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'forest',
          altJa: 'ひかる たけ の なか に かわいい ちいさな おんなのこ',
          altEn: 'A magical golden glowing bamboo stalk split open revealing a tiny luminous baby princess.',
        },
        sentences: [
          {
            id: 's08-s01',
            japanese: 'むかし、　たけ　を　とる　おじいさん　が　いました。',
            romaji: 'Mukashi, take o toru ojiisan ga imashita.',
            english: 'Long ago, there lived an old man who harvested bamboo.',
            vocabHighlight: [
              { word: 'たけ', romaji: 'take', meaning: 'bamboo', type: 'noun' },
              { word: 'とる', romaji: 'toru', meaning: 'take / harvest', type: 'verb' }
            ]
          },
          {
            id: 's08-s02',
            japanese: 'あるひ、　たけやぶ　の　なか　で　ぴかぴか　ひかる　たけ　を　みつけました。',
            romaji: 'Aru hi, takeyabu no naka de pikapika hikaru take o mitsukemashita.',
            english: 'One day, in the bamboo grove, he found a bamboo stalk shining brilliantly.',
            vocabHighlight: [
              { word: 'ひかる', romaji: 'hikaru', meaning: 'shining / glowing', type: 'verb' },
              { word: 'みつけました', romaji: 'mitsukemashita', meaning: 'found', type: 'verb' }
            ]
          },
          {
            id: 's08-s03',
            japanese: 'ふしぎ　に　おもって　その　たけ　を　きって　みました。',
            romaji: 'Fushigi ni omotte sono take o kitte mimashita.',
            english: 'Feeling wonder, he decided to cut that bamboo open.',
            vocabHighlight: [
              { word: 'ふしぎ', romaji: 'fushigi', meaning: 'mysterious / wonderful', type: 'noun' },
              { word: 'おもって', romaji: 'omotte', meaning: 'thinking / feeling', type: 'verb' }
            ]
          },
          {
            id: 's08-s04',
            japanese: 'なか　に、　とても　ちいさくて　かわいい　おんなのこ　が　すわって　いました。',
            romaji: 'Naka ni, totemo chiisakute kawaii onnanoko ga suwatte imashita.',
            english: 'Inside, a very tiny and adorable little girl was sitting.',
            vocabHighlight: [
              { word: 'ちいさくて', romaji: 'chiisakute', meaning: 'small and...', type: 'adjective' },
              { word: 'すわって', romaji: 'suwatte', meaning: 'sitting', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's08-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'night',
          altJa: 'まんげつ の よる に つき を みあげる うつくしい かぐやひめ',
          altEn: 'Princess Kaguya gazing softly at a brilliant full moon glowing in the night sky.',
        },
        sentences: [
          {
            id: 's08-s05',
            japanese: 'おじいさん　は　その　こ　を　「かぐやひめ」　と　なまえ　を　つけました。',
            romaji: 'Ojiisan wa sono ko o "Kaguya-hime" to namae o tsukemashita.',
            english: 'The old man gave the girl the name "Kaguya-hime".',
            vocabHighlight: [
              { word: 'つけました', romaji: 'tsukemashita', meaning: 'attached / gave (a name)', type: 'verb' }
            ]
          },
          {
            id: 's08-s06',
            japanese: 'かぐやひめ　は　みるみる　うつくしい　おとな　に　そだちました。',
            romaji: 'Kaguya-hime wa mirumiru utsukushii otona ni sodachimashita.',
            english: 'Before their very eyes, Kaguya-hime grew into a breathtaking young woman.',
            vocabHighlight: [
              { word: 'うつくしい', romaji: 'utsukushii', meaning: 'beautiful', type: 'adjective' },
              { word: 'そだちました', romaji: 'sodachimashita', meaning: 'grew up', type: 'verb' }
            ]
          },
          {
            id: 's08-s07',
            japanese: 'あき　の　よる、　かぐやひめ　は　まんまるい　つき　を　みて　ないて　いました。',
            romaji: 'Aki no yoru, Kaguya-hime wa manmarui tsuki o mite naite imashita.',
            english: 'On an autumn night, Kaguya-hime gazed at the full round moon and wept softly.',
            vocabHighlight: [
              { word: 'あき', romaji: 'aki', meaning: 'autumn', type: 'noun' },
              { word: 'よる', romaji: 'yoru', meaning: 'night', type: 'noun' },
              { word: 'つき', romaji: 'tsuki', meaning: 'moon', type: 'noun' },
              { word: 'ないて', romaji: 'naite', meaning: 'crying / weeping', type: 'verb' }
            ]
          },
          {
            id: 's08-s08',
            japanese: '「わたし　は　つき　の　くに　へ　かえらなければ　なりません。」',
            romaji: '"Watashi wa tsuki no kuni e kaeranakereba narimasen."',
            english: '"I must return to the country of the moon."',
            vocabHighlight: [
              { word: 'わたし', romaji: 'watashi', meaning: 'I / me', type: 'noun' },
              { word: 'くに', romaji: 'kuni', meaning: 'country / homeland', type: 'noun' }
            ]
          },
          {
            id: 's08-s09',
            japanese: 'つき　から　ひかり　が　おりてきて、　ひめ　は　そら　へ　かえって　いきました。',
            romaji: 'Tsuki kara hikari ga orite kite, hime wa sora e kaette ikimashita.',
            english: 'A beam of light descended from the moon, and the princess returned into the sky.',
            vocabHighlight: [
              { word: 'ひかり', romaji: 'hikari', meaning: 'light / beam', type: 'noun' },
              { word: 'そら', romaji: 'sora', meaning: 'sky', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 9
  {
    id: 'story-09',
    slug: 'kouen-no-pikunikku',
    title: 'こうえん　の　ピクニック',
    romajiTitle: 'Kouen no Pikunikku',
    englishTitle: 'Picnic in the Park',
    category: 'daily-life',
    categoryLabelJa: 'にちじょう',
    categoryLabelEn: 'Daily Life',
    difficulty: 'N5 Easy',
    charCount: 390,
    estimatedMinutes: 3,
    description: 'A cheerful family picnic beneath gentle pink cherry blossom trees with tasty sandwiches, strawberries, and games.',
    coverEmoji: '🧺',
    coverTheme: 'sakura',
    paragraphs: [
      {
        id: 's09-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'park',
          altJa: 'さくら の き の した で シート を ひろげて ピクニック',
          altEn: 'A family sitting on a blue picnic mat under pink blooming cherry blossoms with a basket of delicious snacks.',
        },
        sentences: [
          {
            id: 's09-s01',
            japanese: 'にちようび　の　あさ、　かぞく　で　こうえん　へ　いきました。',
            romaji: 'Nichiyoubi no asa, kazoku de kouen e ikimashita.',
            english: 'On Sunday morning, we went to the park as a family.',
            vocabHighlight: [
              { word: 'にちようび', romaji: 'nichiyoubi', meaning: 'Sunday', type: 'noun' },
              { word: 'こうえん', romaji: 'kouen', meaning: 'park', type: 'noun' }
            ]
          },
          {
            id: 's09-s02',
            japanese: 'はる　の　さくら　の　はな　が　まんかい　です。',
            romaji: 'Haru no sakura no hana ga mankai desu.',
            english: 'The spring cherry blossoms are in full bloom.',
            vocabHighlight: [
              { word: 'はる', romaji: 'haru', meaning: 'spring', type: 'noun' },
              { word: 'さくら', romaji: 'sakura', meaning: 'cherry blossom', type: 'noun' },
              { word: 'まんかい', romaji: 'mankai', meaning: 'full bloom', type: 'noun' }
            ]
          },
          {
            id: 's09-s03',
            japanese: 'みどり　の　くさ　の　うえ　に　シート　を　ひろげました。',
            romaji: 'Midori no kusa no ue ni shiito o hirogemashita.',
            english: 'We spread out the picnic mat on top of the green grass.',
            vocabHighlight: [
              { word: 'みどり', romaji: 'midori', meaning: 'green', type: 'noun' },
              { word: 'くさ', romaji: 'kusa', meaning: 'grass', type: 'noun' }
            ]
          },
          {
            id: 's09-s04',
            japanese: 'おかあさん　が　サンドイッチ　を　つくって　くれました。',
            romaji: 'Okaasan ga sandoitchi o tsukutte kuremashita.',
            english: 'Mom made us sandwiches.',
            vocabHighlight: [
              { word: 'サンドイッチ', romaji: 'sandoitchi', meaning: 'sandwich', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's09-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'park',
          altJa: 'こどもたち が バドミントン を して あそぶ',
          altEn: 'Two happy kids playing badminton together on the grass while parents watch with smiles.',
        },
        sentences: [
          {
            id: 's09-s05',
            japanese: 'あかい　いちご　も　ありました。　とても　あまい　です。',
            romaji: 'Akai ichigo mo arimashita. Totemo amai desu.',
            english: 'There were also red strawberries. They are very sweet.',
            vocabHighlight: [
              { word: 'いちご', romaji: 'ichigo', meaning: 'strawberry', type: 'noun' },
              { word: 'あまい', romaji: 'amai', meaning: 'sweet', type: 'adjective' }
            ]
          },
          {
            id: 's09-s06',
            japanese: 'ごはん　の　あと、　いもうと　と　ボール　で　あそびました。',
            romaji: 'Gohan no ato, imouto to booru de asobimashita.',
            english: 'After our meal, I played ball with my little sister.',
            vocabHighlight: [
              { word: 'いもうと', romaji: 'imouto', meaning: 'younger sister', type: 'noun' },
              { word: 'ボール', romaji: 'booru', meaning: 'ball', type: 'noun' }
            ]
          },
          {
            id: 's09-s07',
            japanese: 'かぜ　が　すずしくて、　きもち　が　いい　です。',
            romaji: 'Kaze ga suzushikute, kimochi ga ii desu.',
            english: 'The breeze was cool and felt so pleasant.',
            vocabHighlight: [
              { word: 'かぜ', romaji: 'kaze', meaning: 'wind / breeze', type: 'noun' },
              { word: 'すずしくて', romaji: 'suzushikute', meaning: 'cool and...', type: 'adjective' },
              { word: 'きもち が いい', romaji: 'kimochi ga ii', meaning: 'feels good / comfortable', type: 'adjective' }
            ]
          },
          {
            id: 's09-s08',
            japanese: 'また　みんな　で　ピクニック　に　きたい　です。',
            romaji: 'Mata minna de pikunikku ni kitai desu.',
            english: 'I want to come on a picnic together with everyone again.',
            vocabHighlight: [
              { word: 'きたい', romaji: 'kitai', meaning: 'want to come', type: 'verb' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 10
  {
    id: 'story-10',
    slug: 'kitsune-to-tanuki-no-mahou',
    title: 'きつね　と　たぬき　の　まほう',
    romajiTitle: 'Kitsune to Tanuki no Mahou',
    englishTitle: 'The Magic of Fox and Raccoon',
    category: 'fantasy',
    categoryLabelJa: 'ファンタジー',
    categoryLabelEn: 'Fantasy',
    difficulty: 'N5 Standard',
    charCount: 440,
    estimatedMinutes: 4,
    description: 'A mischievous red fox and a round raccoon dog put leaves on their heads to show off cute magical transformations.',
    coverEmoji: '🦊',
    coverTheme: 'yuzu',
    paragraphs: [
      {
        id: 's10-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'forest',
          altJa: 'あたま に このは を のせた きつね と たぬき',
          altEn: 'A cunning cute fox and a fluffy tanuki balancing autumn leaves on their heads ready to do magic.',
        },
        sentences: [
          {
            id: 's10-s01',
            japanese: 'やま　の　おく　に、　きつね　の　コンくん　と　たぬき　の　ポンくん　が　いました。',
            romaji: 'Yama no oku ni, kitsune no Kon-kun to tanuki no Pon-kun ga imashita.',
            english: 'Deep in the mountain lived Kon the fox and Pon the raccoon dog.',
            vocabHighlight: [
              { word: 'おく', romaji: 'oku', meaning: 'deep inside / back', type: 'noun' },
              { word: 'きつね', romaji: 'kitsune', meaning: 'fox', type: 'noun' },
              { word: 'たぬき', romaji: 'tanuki', meaning: 'raccoon dog', type: 'noun' }
            ]
          },
          {
            id: 's10-s02',
            japanese: 'ふたり　は　ばけくらべ　の　まほう　が　だいすき　です。',
            romaji: 'Futari wa bakekurabe no mahou ga daisuki desu.',
            english: 'The two loved transformation magic competitions.',
            vocabHighlight: [
              { word: 'まほう', romaji: 'mahou', meaning: 'magic', type: 'noun' },
              { word: 'だいすき', romaji: 'daisuki', meaning: 'love / like very much', type: 'adjective' }
            ]
          },
          {
            id: 's10-s03',
            japanese: '「ぼく　の　まほう　の　ほう　が　すごいぞ！」　と　コンくん　が　いいました。',
            romaji: '"Boku no mahou no hou ga sugoi zo!" to Kon-kun ga iimashita.',
            english: '"My magic is more awesome!" said Kon.',
            vocabHighlight: [
              { word: 'すごい', romaji: 'sugoi', meaning: 'amazing / awesome', type: 'adjective' }
            ]
          },
          {
            id: 's10-s04',
            japanese: 'コンくん　は　あたま　に　きいろい　このは　を　のせました。',
            romaji: 'Kon-kun wa atama ni kiiroi konoha o nosemashita.',
            english: 'Kon placed a yellow tree leaf upon his head.',
            vocabHighlight: [
              { word: 'あたま', romaji: 'atama', meaning: 'head', type: 'noun' },
              { word: 'このは', romaji: 'konoha', meaning: 'tree leaf', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's10-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'forest',
          altJa: 'きつね が とり に ばけて、たぬき が ちゃがま に ばける',
          altEn: 'The fox transformed into a graceful bird and the raccoon into a round tea kettle with cute eyes.',
        },
        sentences: [
          {
            id: 's10-s05',
            japanese: 'ドロン！　コンくん　は　はやい　とり　に　へんしん　しました。',
            romaji: 'Doron! Kon-kun wa hayai tori ni henshin shimashita.',
            english: 'Poof! Kon transformed into a swift bird.',
            vocabHighlight: [
              { word: 'とり', romaji: 'tori', meaning: 'bird', type: 'noun' },
              { word: 'へんしん', romaji: 'henshin', meaning: 'transformation', type: 'noun' }
            ]
          },
          {
            id: 's10-s06',
            japanese: 'つぎ　は　ポンくん　の　ばんです。　ポンポコポン！',
            romaji: 'Tsugi wa Pon-kun no ban desu. Ponpokopon!',
            english: 'Next was Pon\'s turn. Tap-tap-drumming his belly!',
            vocabHighlight: [
              { word: 'つぎ', romaji: 'tsugi', meaning: 'next', type: 'noun' },
              { word: 'ばん', romaji: 'ban', meaning: 'turn / order', type: 'noun' }
            ]
          },
          {
            id: 's10-s07',
            japanese: 'ポンくん　は　まるい　ちゃがま　に　なりました。',
            romaji: 'Pon-kun wa marui chagama ni narimashita.',
            english: 'Pon turned into a round iron tea kettle.',
            vocabHighlight: [
              { word: 'まるい', romaji: 'marui', meaning: 'round / circular', type: 'adjective' },
              { word: 'ちゃがま', romaji: 'chagama', meaning: 'tea kettle', type: 'noun' }
            ]
          },
          {
            id: 's010-s08',
            japanese: 'でも、　しっぽ　が　ちょっと　でて　います！',
            romaji: 'Demo, shippo ga chotto dete imasu!',
            english: 'However, his tail was sticking out just a little bit!',
            vocabHighlight: [
              { word: 'しっぽ', romaji: 'shippo', meaning: 'tail', type: 'noun' },
              { word: 'ちょっと', romaji: 'chotto', meaning: 'a little', type: 'adjective' }
            ]
          },
          {
            id: 's10-s09',
            japanese: 'ふたり　は　「あっはっは！」　と　おおわらい　しました。',
            romaji: 'Futari wa "Ahhaha!" to oowarai shimashita.',
            english: 'The two burst out laughing heartily, "Aha-ha!"',
            vocabHighlight: [
              { word: 'おおわらい', romaji: 'oowarai', meaning: 'big laughter', type: 'noun' }
            ]
          },
          {
            id: 's10-s10',
            japanese: 'きょう　も　もり　の　なか　は　とても　にぎやか　です。',
            romaji: 'Kyou mo mori no naka wa totemo nigiyaka desu.',
            english: 'Today again, it is so lively inside the forest.',
            vocabHighlight: [
              { word: 'にぎやか', romaji: 'nigiyaka', meaning: 'lively / bustling', type: 'adjective' }
            ]
          }
        ]
      }
    ]
  }
];
