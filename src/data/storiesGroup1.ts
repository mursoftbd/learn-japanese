import { Story } from '../types/story';

export const storiesGroup1: Story[] = [
  // STORY 1
  {
    id: 'story-01',
    slug: 'momotarou',
    title: 'ももたろう',
    romajiTitle: 'Momotarou',
    englishTitle: 'Momotaro, The Peach Boy',
    category: 'folktale',
    categoryLabelJa: 'むかしばなし',
    categoryLabelEn: 'Folktale',
    difficulty: 'N5 Kana',
    charCount: 420,
    estimatedMinutes: 4,
    description: 'The famous Japanese tale of a brave boy born from a giant peach who travels with animal friends to bring peace.',
    coverEmoji: '🍑',
    coverTheme: 'sakura',
    paragraphs: [
      {
        id: 's01-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'river',
          altJa: 'かわ から おおきな もも が ながれて きます',
          altEn: 'A giant pink peach floating down a clear blue river towards an elderly woman.',
          prompt: 'Cute children picture book style, an elderly Japanese grandmother standing by a sparkling river looking with joy at a giant peach floating down the river, vibrant watercolor, warm colors, no kanji, friendly atmosphere'
        },
        sentences: [
          {
            id: 's01-s01',
            japanese: 'むかし　むかし、　ある　ところに　おじいさん　と　おばあさん　が　いました。',
            romaji: 'Mukashi mukashi, aru tokoro ni ojiisan to obaasan ga imashita.',
            english: 'Long, long ago, in a certain place, there lived an old man and an old woman.',
            vocabHighlight: [
              { word: 'むかし', romaji: 'mukashi', meaning: 'old times / ago', type: 'noun' },
              { word: 'ところ', romaji: 'tokoro', meaning: 'place', type: 'noun' },
              { word: 'おじいさん', romaji: 'ojiisan', meaning: 'grandfather / old man', type: 'noun' },
              { word: 'おばあさん', romaji: 'obaasan', meaning: 'grandmother / old woman', type: 'noun' }
            ]
          },
          {
            id: 's01-s02',
            japanese: 'おじいさん　は　やま　へ　き　を　きり　に　いきました。',
            romaji: 'Ojiisan wa yama e ki o kiri ni ikimashita.',
            english: 'The old man went to the mountain to cut wood.',
            vocabHighlight: [
              { word: 'やま', romaji: 'yama', meaning: 'mountain', type: 'noun' },
              { word: 'き', romaji: 'ki', meaning: 'tree / wood', type: 'noun' },
              { word: 'いきました', romaji: 'ikimashita', meaning: 'went (past polite)', type: 'verb' }
            ]
          },
          {
            id: 's01-s03',
            japanese: 'おばあさん　は　かわ　へ　せんたく　に　いきました。',
            romaji: 'Obaasan wa kawa e sentaku ni ikimashita.',
            english: 'The old woman went to the river to do the laundry.',
            vocabHighlight: [
              { word: 'かわ', romaji: 'kawa', meaning: 'river', type: 'noun' },
              { word: 'せんたく', romaji: 'sentaku', meaning: 'laundry / washing', type: 'noun' }
            ]
          },
          {
            id: 's01-s04',
            japanese: 'かわ　の　うえ　から、　どんぶらこ、　どんぶらこ　と　おおきな　もも　が　ながれて　きました。',
            romaji: 'Kawa no ue kara, donburako, donburako to ookina momo ga nagarete kimashita.',
            english: 'From up the river, tumbling and bobbing along, a huge peach came floating down.',
            vocabHighlight: [
              { word: 'おおきな', romaji: 'ookina', meaning: 'big / large', type: 'adjective' },
              { word: 'もも', romaji: 'momo', meaning: 'peach', type: 'noun' },
              { word: 'きました', romaji: 'kimashita', meaning: 'came', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's01-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'home',
          altJa: 'もも の なか から あかちゃん が でてきました',
          altEn: 'A healthy smiling baby boy emerging from the giant open peach inside the cozy house.',
          prompt: 'Cute Japanese folk illustration, a giant ripe peach cut open on tatami mat, a healthy smiling baby boy popping out, elderly Japanese couple with big happy smiles, storybook art'
        },
        sentences: [
          {
            id: 's01-s05',
            japanese: 'おばあさん　は　その　もも　を　いえ　に　もちかえりました。',
            romaji: 'Obaasan wa sono momo o ie ni mochikaerimashita.',
            english: 'The old woman took that peach back home.',
            vocabHighlight: [
              { word: 'いえ', romaji: 'ie', meaning: 'house / home', type: 'noun' },
              { word: 'もちかえりました', romaji: 'mochikaerimashita', meaning: 'carried home', type: 'verb' }
            ]
          },
          {
            id: 's01-s06',
            japanese: 'おじいさん　と　おばあさん　が　もも　を　きろう　と　しました。',
            romaji: 'Ojiisan to obaasan ga momo o kirou to shimashita.',
            english: 'The old man and old woman prepared to cut the peach.',
            vocabHighlight: [
              { word: 'きろう', romaji: 'kirou', meaning: 'cut (volitional)', type: 'verb' }
            ]
          },
          {
            id: 's01-s07',
            japanese: 'すると、　もも　が　ぱっかーん　と　われて、　げんきな　おとこのこ　が　うまれました！',
            romaji: 'Suruto, momo ga pakkaan to warete, genkina otokonoko ga umaremashita!',
            english: 'Then, the peach split wide open with a pop, and a cheerful baby boy was born!',
            vocabHighlight: [
              { word: 'げんきな', romaji: 'genkina', meaning: 'healthy / lively / cheerful', type: 'adjective' },
              { word: 'おとこのこ', romaji: 'otokonoko', meaning: 'boy', type: 'noun' },
              { word: 'うまれました', romaji: 'umaremashita', meaning: 'was born', type: 'verb' }
            ]
          },
          {
            id: 's01-s08',
            japanese: 'ふたり　は　その　こ　を　「ももたろう」　と　なづけました。',
            romaji: 'Futari wa sono ko o "Momotarou" to nadukemashita.',
            english: 'The two named the child "Momotaro".',
            vocabHighlight: [
              { word: 'ふたり', romaji: 'futari', meaning: 'two people', type: 'counter' },
              { word: 'こ', romaji: 'ko', meaning: 'child', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's01-p3',
        paragraphNumber: 3,
        image: {
          svgTheme: 'forest',
          altJa: 'ももたろう と いぬ、さる、きじ が ともだち に なります',
          altEn: 'Momotaro sharing delicious sweet dumplings with a friendly dog, monkey, and pheasant along a scenic mountain trail.',
          prompt: 'Chibi Momotaro boy with a headband giving round dumplings to a cute dog, clever monkey, and colorful pheasant on a sunny green path, Japanese traditional children picture book'
        },
        sentences: [
          {
            id: 's01-s09',
            japanese: 'ももたろう　は　すくすく　おおきく　つよく　なりました。',
            romaji: 'Momotarou wa sukusuku ookiku tsuyoku narimashita.',
            english: 'Momotaro grew up fast, becoming big and strong.',
            vocabHighlight: [
              { word: 'つよく', romaji: 'tsuyoku', meaning: 'strong', type: 'adjective' },
              { word: 'なりました', romaji: 'narimashita', meaning: 'became', type: 'verb' }
            ]
          },
          {
            id: 's01-s10',
            japanese: 'おばあさん　は　おいしい　きびだんご　を　たくさん　つくって　くれました。',
            romaji: 'Obaasan wa oishii kibidango o takusan tsukutte kuremashita.',
            english: 'The grandmother made him lots of delicious millet dumplings.',
            vocabHighlight: [
              { word: 'おいしい', romaji: 'oishii', meaning: 'delicious / tasty', type: 'adjective' },
              { word: 'たくさん', romaji: 'takusan', meaning: 'many / a lot', type: 'adjective' },
              { word: 'つくって', romaji: 'tsukutte', meaning: 'made (te-form)', type: 'verb' }
            ]
          },
          {
            id: 's01-s11',
            japanese: 'みち　の　とちゅう　で、　いぬ　と　さる　と　きじ　に　あいました。',
            romaji: 'Michi no tochuu de, inu to saru to kiji ni aimashita.',
            english: 'Along the road, he met a dog, a monkey, and a pheasant.',
            vocabHighlight: [
              { word: 'みち', romaji: 'michi', meaning: 'road / path', type: 'noun' },
              { word: 'いぬ', romaji: 'inu', meaning: 'dog', type: 'noun' },
              { word: 'さる', romaji: 'saru', meaning: 'monkey', type: 'noun' },
              { word: 'きじ', romaji: 'kiji', meaning: 'pheasant', type: 'noun' }
            ]
          },
          {
            id: 's01-s12',
            japanese: '「きびだんご　を　ひとつ　ください。　おとも　します！」',
            romaji: '"Kibidango o hitotsu kudasai. Otomo shimasu!"',
            english: '"Please give me one dumpling. I will accompany you!"',
            vocabHighlight: [
              { word: 'ひとつ', romaji: 'hitotsu', meaning: 'one (thing)', type: 'counter' },
              { word: 'ください', romaji: 'kudasai', meaning: 'please give', type: 'greeting' }
            ]
          },
          {
            id: 's01-s13',
            japanese: 'みんな　は　なかよし　の　ともだち　に　なりました。',
            romaji: 'Minna wa nakayoshi no tomodachi ni narimashita.',
            english: 'Everyone became close friends.',
            vocabHighlight: [
              { word: 'みんな', romaji: 'minna', meaning: 'everyone / all', type: 'noun' },
              { word: 'ともだち', romaji: 'tomodachi', meaning: 'friend', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's01-p4',
        paragraphNumber: 4,
        image: {
          svgTheme: 'home',
          altJa: 'みんな で えがお で いえ に かえります',
          altEn: 'Momotaro and all animal friends returning happily home to grandfather and grandmother under a sunny sky.',
          prompt: 'Happy ending storybook art, Momotaro, dog, monkey, pheasant smiling together with old grandfather and grandmother outside traditional Japanese cottage, colorful, joyful'
        },
        sentences: [
          {
            id: 's01-s14',
            japanese: 'ももたろう　たち　は　ちから　を　あわせて　がんばりました。',
            romaji: 'Momotarou-tachi wa chikara o awasete gambarimashita.',
            english: 'Momotaro and his friends joined forces and worked hard together.',
            vocabHighlight: [
              { word: 'ちから', romaji: 'chikara', meaning: 'strength / power', type: 'noun' },
              { word: 'がんばりました', romaji: 'gambarimashita', meaning: 'worked hard / did their best', type: 'verb' }
            ]
          },
          {
            id: 's01-s15',
            japanese: 'そして、　みんな　で　おじいさん　と　おばあさん　の　いえ　へ　かえりました。',
            romaji: 'Soshite, minna de ojiisan to obaasan no ie e kaerimashita.',
            english: 'And then, all together, they returned to the grandfather and grandmother\'s house.',
            vocabHighlight: [
              { word: 'そして', romaji: 'soshite', meaning: 'and then', type: 'particle' },
              { word: 'かえりました', romaji: 'kaerimashita', meaning: 'returned / went home', type: 'verb' }
            ]
          },
          {
            id: 's01-s16',
            japanese: 'おじいさん　も　おばあさん　も　とても　よろこびました。',
            romaji: 'Ojiisan mo obaasan mo totemo yorokobimashita.',
            english: 'Both grandfather and grandmother were overjoyed.',
            vocabHighlight: [
              { word: 'とても', romaji: 'totemo', meaning: 'very', type: 'adjective' },
              { word: 'よろこびました', romaji: 'yorokobimashita', meaning: 'were very glad / rejoiced', type: 'verb' }
            ]
          },
          {
            id: 's01-s17',
            japanese: 'それから、　ずっと　しあわせ　に　くらしました。　めでたし、　めでたし。',
            romaji: 'Sorekara, zutto shiawase ni kurashimashita. Medetashi, medetashi.',
            english: 'From then on, they lived happily ever after. And they lived happily ever after.',
            vocabHighlight: [
              { word: 'しあわせ', romaji: 'shiawase', meaning: 'happy / peaceful', type: 'noun' },
              { word: 'めでたし', romaji: 'medetashi', meaning: 'happily ever after', type: 'greeting' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 2
  {
    id: 'story-02',
    slug: 'shiroi-neko-no-mii-chan',
    title: 'しろい　ねこ　の　ミーちゃん',
    romajiTitle: 'Shiroi Neko no Mii-chan',
    englishTitle: 'Mii-chan the White Cat',
    category: 'animals',
    categoryLabelJa: 'どうぶつ',
    categoryLabelEn: 'Animals',
    difficulty: 'N5 Kana',
    charCount: 380,
    estimatedMinutes: 3,
    description: 'Follow the adorable adventures of Mii-chan, a fluffy white kitten playing in the sun-drenched flower garden.',
    coverEmoji: '🐱',
    coverTheme: 'matcha',
    paragraphs: [
      {
        id: 's02-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'home',
          altJa: 'まど の そば で ねている しろい こねこ',
          altEn: 'A fluffy white kitten sleeping peacefully on a soft yellow cushion beside a sunny window.',
          prompt: 'Super cute fluffy white kitten sleeping warmly in sunbeam on a cushion, Japanese room, cozy, bright daylight, pastel colors, children book style'
        },
        sentences: [
          {
            id: 's02-s01',
            japanese: 'ここ　は　しずかな　いえ　の　へや　です。',
            romaji: 'Koko wa shizukana ie no heya desu.',
            english: 'This is a room in a quiet house.',
            vocabHighlight: [
              { word: 'ここ', romaji: 'koko', meaning: 'here', type: 'noun' },
              { word: 'しずかな', romaji: 'shizukana', meaning: 'quiet / peaceful', type: 'adjective' },
              { word: 'へや', romaji: 'heya', meaning: 'room', type: 'noun' }
            ]
          },
          {
            id: 's02-s02',
            japanese: 'まど　の　そば　に、　しろい　ねこ　が　います。',
            romaji: 'Mado no soba ni, shiroi neko ga imasu.',
            english: 'Beside the window, there is a white cat.',
            vocabHighlight: [
              { word: 'まど', romaji: 'mado', meaning: 'window', type: 'noun' },
              { word: 'そば', romaji: 'soba', meaning: 'beside / near', type: 'noun' },
              { word: 'しろい', romaji: 'shiroi', meaning: 'white', type: 'adjective' },
              { word: 'ねこ', romaji: 'neko', meaning: 'cat', type: 'noun' }
            ]
          },
          {
            id: 's02-s03',
            japanese: 'なまえ　は　ミーちゃん　です。',
            romaji: 'Namae wa Mii-chan desu.',
            english: 'Her name is Mii-chan.',
            vocabHighlight: [
              { word: 'なまえ', romaji: 'namae', meaning: 'name', type: 'noun' }
            ]
          },
          {
            id: 's02-s04',
            japanese: 'ミーちゃん　の　め　は　あおい　いろ　をして　います。',
            romaji: 'Mii-chan no me wa aoi iro o shite imasu.',
            english: 'Mii-chan\'s eyes are blue in color.',
            vocabHighlight: [
              { word: 'め', romaji: 'me', meaning: 'eye / eyes', type: 'noun' },
              { word: 'あおい', romaji: 'aoi', meaning: 'blue', type: 'adjective' },
              { word: 'いろ', romaji: 'iro', meaning: 'color', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's02-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'park',
          altJa: 'にわ で きいろい ちょうちょ を おいかける こねこ',
          altEn: 'A playful white cat leaping gently to chase a bright yellow butterfly in a garden with red flowers.',
          prompt: 'Adorable white kitten jumping playfully in green grass garden with red and yellow tulips, yellow butterfly fluttering, sunshine, cute watercolor'
        },
        sentences: [
          {
            id: 's02-s05',
            japanese: 'あさ　に　なりました。　たいよう　が　あかるい　です。',
            romaji: 'Asa ni narimashita. Taiyou ga akarui desu.',
            english: 'Morning has come. The sun is bright.',
            vocabHighlight: [
              { word: 'あさ', romaji: 'asa', meaning: 'morning', type: 'noun' },
              { word: 'たいよう', romaji: 'taiyou', meaning: 'sun', type: 'noun' },
              { word: 'あかるい', romaji: 'akarui', meaning: 'bright / cheerful', type: 'adjective' }
            ]
          },
          {
            id: 's02-s06',
            japanese: 'ミーちゃん　は　にわ　へ　でかけました。',
            romaji: 'Mii-chan wa niwa e dekakemashita.',
            english: 'Mii-chan went out to the garden.',
            vocabHighlight: [
              { word: 'にわ', romaji: 'niwa', meaning: 'garden', type: 'noun' },
              { word: 'でかけました', romaji: 'dekakemashita', meaning: 'went out', type: 'verb' }
            ]
          },
          {
            id: 's02-s07',
            japanese: 'にわ　には　あかい　はな　が　さいて　います。',
            romaji: 'Niwa niwa akai hana ga saite imasu.',
            english: 'In the garden, red flowers are in bloom.',
            vocabHighlight: [
              { word: 'あかい', romaji: 'akai', meaning: 'red', type: 'adjective' },
              { word: 'はな', romaji: 'hana', meaning: 'flower', type: 'noun' },
              { word: 'さいて', romaji: 'saite', meaning: 'blooming', type: 'verb' }
            ]
          },
          {
            id: 's02-s08',
            japanese: 'きいろい　ちょうちょ　が　ひらひら　と　とんで　きました。',
            romaji: 'Kiiroi choucho ga hirahira to tonde kimashita.',
            english: 'A yellow butterfly came fluttering along.',
            vocabHighlight: [
              { word: 'きいろい', romaji: 'kiiroi', meaning: 'yellow', type: 'adjective' },
              { word: 'ちょうちょ', romaji: 'choucho', meaning: 'butterfly', type: 'noun' },
              { word: 'とんで', romaji: 'tonde', meaning: 'flying', type: 'verb' }
            ]
          },
          {
            id: 's02-s09',
            japanese: '「にゃーお！」　ミーちゃん　は　うれしそう　に　はしりました。',
            romaji: '"Nyaao!" Mii-chan wa ureshisou ni hashirimashita.',
            english: '"Meow!" Mii-chan ran delightfully.',
            vocabHighlight: [
              { word: 'うれしそう', romaji: 'ureshisou', meaning: 'joyfully / happily', type: 'adjective' },
              { word: 'はしりました', romaji: 'hashirimashita', meaning: 'ran', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's02-p3',
        paragraphNumber: 3,
        image: {
          svgTheme: 'kitchen',
          altJa: 'おさら の ミルク を のむ かわいい こねこ',
          altEn: 'The white cat drinking tasty milk from a blue saucer dish beside its owner.',
          prompt: 'Cute white cat happily drinking warm white milk from a shallow ceramic bowl, cheerful Japanese kitchen floor, heartwarming illustration'
        },
        sentences: [
          {
            id: 's02-s10',
            japanese: 'たくさん　あそんで、　おなか　が　すきました。',
            romaji: 'Takusan asonde, onaka ga sukimashita.',
            english: 'After playing a lot, her belly got hungry.',
            vocabHighlight: [
              { word: 'あそんで', romaji: 'asonde', meaning: 'having played', type: 'verb' },
              { word: 'おなか が すきました', romaji: 'onaka ga sukimashita', meaning: 'got hungry (idiom)', type: 'noun' }
            ]
          },
          {
            id: 's02-s11',
            japanese: 'おんなのこ　の　さくらちゃん　が　ミルク　を　もって　きました。',
            romaji: 'Onnanoko no Sakura-chan ga miruku o motte kimashita.',
            english: 'A little girl named Sakura-chan brought some milk.',
            vocabHighlight: [
              { word: 'おんなのこ', romaji: 'onnanoko', meaning: 'girl', type: 'noun' },
              { word: 'ミルク', romaji: 'miruku', meaning: 'milk', type: 'noun' }
            ]
          },
          {
            id: 's02-s12',
            japanese: '「ミーちゃん、　おいしい　ごはん　だよ。」',
            romaji: '"Mii-chan, oishii gohan da yo."',
            english: '"Mii-chan, here is tasty food."',
            vocabHighlight: [
              { word: 'ごはん', romaji: 'gohan', meaning: 'meal / food / rice', type: 'noun' }
            ]
          },
          {
            id: 's02-s13',
            japanese: 'ミーちゃん　は　ミルク　を　ぺろぺろ　と　のみました。',
            romaji: 'Mii-chan wa miruku o peropero to nomimashita.',
            english: 'Mii-chan lapped up the milk with tiny sips.',
            vocabHighlight: [
              { word: 'のみました', romaji: 'nomimashita', meaning: 'drank', type: 'verb' }
            ]
          },
          {
            id: 's02-s14',
            japanese: 'おなかいっぱい　に　なって、　また　すやすや　ねました。',
            romaji: 'Onakanippai ni natte, mata suyasuya nemashita.',
            english: 'Full and content, she fell peacefully asleep again.',
            vocabHighlight: [
              { word: 'おなかいっぱい', romaji: 'onakaippai', meaning: 'full stomach', type: 'adjective' },
              { word: 'ねました', romaji: 'nemashita', meaning: 'slept', type: 'verb' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 3
  {
    id: 'story-03',
    slug: 'tanoshii-gakkou-no-ichinichi',
    title: 'たのしい　がっこう　の　いちにち',
    romajiTitle: 'Tanoshii Gakkou no Ichinichi',
    englishTitle: 'A Fun Day at School',
    category: 'school',
    categoryLabelJa: 'がっこう',
    categoryLabelEn: 'School Life',
    difficulty: 'N5 Easy',
    charCount: 450,
    estimatedMinutes: 4,
    description: 'Join Ken-kun on a lively day at Japanese elementary school: morning greetings, reading class, delicious bento, and soccer!',
    coverEmoji: '🎒',
    coverTheme: 'fuji',
    paragraphs: [
      {
        id: 's03-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'school',
          altJa: 'ランドセル を せおって がっこう へ いく おとこのこ',
          altEn: 'A smiling Japanese schoolboy wearing a blue randoseru backpack walking to school in the morning.',
          prompt: 'Cute elementary school student wearing navy uniform and blue backpack walking cheerfully down a cherry blossom lined street towards Japanese school gate, bright morning'
        },
        sentences: [
          {
            id: 's03-s01',
            japanese: 'きょう　は　げつようび　です。　てんき　が　とても　いい　です。',
            romaji: 'Kyou wa getsuyoubi desu. Tenki ga totemo ii desu.',
            english: 'Today is Monday. The weather is very nice.',
            vocabHighlight: [
              { word: 'きょう', romaji: 'kyou', meaning: 'today', type: 'noun' },
              { word: 'げつようび', romaji: 'getsuyoubi', meaning: 'Monday', type: 'noun' },
              { word: 'てんき', romaji: 'tenki', meaning: 'weather', type: 'noun' },
              { word: 'いい', romaji: 'ii', meaning: 'good', type: 'adjective' }
            ]
          },
          {
            id: 's03-s02',
            japanese: 'けんくん　は　あおい　ランドセル　を　せおいました。',
            romaji: 'Ken-kun wa aoi randoseru o seoimashita.',
            english: 'Ken-kun put on his blue school backpack.',
            vocabHighlight: [
              { word: 'ランドセル', romaji: 'randoseru', meaning: 'school backpack (randoseru)', type: 'noun' },
              { word: 'せおいました', romaji: 'seoimashita', meaning: 'carried on back', type: 'verb' }
            ]
          },
          {
            id: 's03-s03',
            japanese: '「おかあさん、　いってきます！」',
            romaji: '"Okaasan, ittekimasu!"',
            english: '"Mom, I\'m heading off!"',
            vocabHighlight: [
              { word: 'おかあさん', romaji: 'okaasan', meaning: 'mother', type: 'noun' },
              { word: 'いってきます', romaji: 'ittekimasu', meaning: 'I am leaving (and will return)', type: 'greeting' }
            ]
          },
          {
            id: 's03-s04',
            japanese: '「いってらっしゃい、　き　をつけてね。」',
            romaji: '"Itterasshai, ki o tsukete ne."',
            english: '"Have a good day, take care."',
            vocabHighlight: [
              { word: 'いってらっしゃい', romaji: 'itterasshai', meaning: 'take care / see you later', type: 'greeting' },
              { word: 'き を つけて', romaji: 'ki o tsukete', meaning: 'be careful / take care', type: 'greeting' }
            ]
          }
        ]
      },
      {
        id: 's03-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'school',
          altJa: 'きょうしつ で せんせい と ひらがな を べんきょう する こどもたち',
          altEn: 'Children sitting at wooden desks in a bright Japanese classroom learning Hiragana with a kind teacher.',
          prompt: 'Friendly Japanese classroom scene, kind female teacher at blackboard with colorful Hiragana cards, enthusiastic smiling students sitting at desks'
        },
        sentences: [
          {
            id: 's03-s05',
            japanese: 'がっこう　に　つきました。　きょうしつ　に　はいります。',
            romaji: 'Gakkou ni tsukimashita. Kyoushitsu ni hairimasu.',
            english: 'He arrived at school. He enters the classroom.',
            vocabHighlight: [
              { word: 'がっこう', romaji: 'gakkou', meaning: 'school', type: 'noun' },
              { word: 'つきました', romaji: 'tsukimashita', meaning: 'arrived', type: 'verb' },
              { word: 'きょうしつ', romaji: 'kyoushitsu', meaning: 'classroom', type: 'noun' },
              { word: 'はいります', romaji: 'hairimasu', meaning: 'enters', type: 'verb' }
            ]
          },
          {
            id: 's03-s06',
            japanese: '「みなさん、　おはようございます！」　と　せんせい　が　いいました。',
            romaji: '"Minasan, ohayou gozaimasu!" to sensei ga iimashita.',
            english: '"Good morning, everyone!" said the teacher.',
            vocabHighlight: [
              { word: 'おはようございます', romaji: 'ohayou gozaimasu', meaning: 'good morning (polite)', type: 'greeting' },
              { word: 'せんせい', romaji: 'sensei', meaning: 'teacher', type: 'noun' }
            ]
          },
          {
            id: 's03-s07',
            japanese: 'いちじかんめ　は　こくご　の　じかん　です。',
            romaji: 'Ichijikanme wa kokugo no jikan desu.',
            english: 'First period is Japanese language class.',
            vocabHighlight: [
              { word: 'じかん', romaji: 'jikan', meaning: 'time / period', type: 'noun' },
              { word: 'こくご', romaji: 'kokugo', meaning: 'national language (Japanese)', type: 'noun' }
            ]
          },
          {
            id: 's03-s08',
            japanese: 'みんな　で　おおきな　こえ　で　ほん　を　よみました。',
            romaji: 'Minna de ookina koe de hon o yomimashita.',
            english: 'Everyone read the book aloud with loud, clear voices.',
            vocabHighlight: [
              { word: 'こえ', romaji: 'koe', meaning: 'voice', type: 'noun' },
              { word: 'ほん', romaji: 'hon', meaning: 'book', type: 'noun' },
              { word: 'よみました', romaji: 'yomimashita', meaning: 'read', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's03-p3',
        paragraphNumber: 3,
        image: {
          svgTheme: 'kitchen',
          altJa: 'かわいい おべんとう を たべる こどもたち',
          altEn: 'An open Japanese bento box with octopus sausages, rolled egg, and smiling rice ball.',
          prompt: 'Japanese character bento box close-up, smiling onigiri rice ball with nori face, red octopus sausage, yellow tamagoyaki, green broccoli, colorful and appetizing'
        },
        sentences: [
          {
            id: 's03-s09',
            japanese: 'ひるやすみ　に　なりました。　おべんとう　の　じかん　です。',
            romaji: 'Hiruyasumi ni narimashita. Obentou no jikan desu.',
            english: 'Lunch break has arrived. It is bento time.',
            vocabHighlight: [
              { word: 'ひるやすみ', romaji: 'hiruyasumi', meaning: 'lunch break', type: 'noun' },
              { word: 'おべんとう', romaji: 'obentou', meaning: 'boxed lunch / bento', type: 'noun' }
            ]
          },
          {
            id: 's03-s10',
            japanese: 'けんくん　の　おべんとう　には　おにぎり　と　たまごやき　が　はいって　います。',
            romaji: 'Ken-kun no obentou niwa onigiri to tamagoyaki ga haitte imasu.',
            english: 'In Ken-kun\'s bento, there are rice balls and rolled omelet.',
            vocabHighlight: [
              { word: 'おにぎり', romaji: 'onigiri', meaning: 'rice ball', type: 'noun' },
              { word: 'たまごやき', romaji: 'tamagoyaki', meaning: 'rolled egg omelet', type: 'noun' }
            ]
          },
          {
            id: 's03-s11',
            japanese: '「いただきます！」　とても　おいしい　です。',
            romaji: '"Itadakimasu!" Totemo oishii desu.',
            english: '"Thank you for the food!" It is very delicious.',
            vocabHighlight: [
              { word: 'いただきます', romaji: 'itadakimasu', meaning: 'let\'s eat / grateful phrase before meals', type: 'greeting' }
            ]
          },
          {
            id: 's03-s12',
            japanese: 'ごはん　の　あと、　こうてい　で　サッカー　を　しました。',
            romaji: 'Gohan no ato, koutei de sakkaa o shimashita.',
            english: 'After eating, they played soccer in the schoolyard.',
            vocabHighlight: [
              { word: 'こうてい', romaji: 'koutei', meaning: 'school playground', type: 'noun' },
              { word: 'サッカー', romaji: 'sakkaa', meaning: 'soccer / football', type: 'noun' }
            ]
          },
          {
            id: 's03-s13',
            japanese: 'きょう　も　たのしい　いちにち　でした！',
            romaji: 'Kyou mo tanoshii ichinichi deshita!',
            english: 'Today was another fun day!',
            vocabHighlight: [
              { word: 'たのしい', romaji: 'tanoshii', meaning: 'fun / enjoyable', type: 'adjective' },
              { word: 'いちにち', romaji: 'ichinichi', meaning: 'one day', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 4
  {
    id: 'story-04',
    slug: 'urashimatarou',
    title: 'うらしまたろう',
    romajiTitle: 'Urashima Tarou',
    englishTitle: 'Urashima Taro and the Sea Turtle',
    category: 'folktale',
    categoryLabelJa: 'むかしばなし',
    categoryLabelEn: 'Folktale',
    difficulty: 'N5 Standard',
    charCount: 460,
    estimatedMinutes: 5,
    description: 'A kind young fisherman rescues a sea turtle and is invited deep under the sea to the glittering Dragon Palace.',
    coverEmoji: '🐢',
    coverTheme: 'fuji',
    paragraphs: [
      {
        id: 's04-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'beach',
          altJa: 'うみべ で こどもたち に いじめられている かめ を たすける うらしまたろう',
          altEn: 'Urashima Taro by the sandy sea shore protecting a gentle green sea turtle.',
          prompt: 'Japanese fisherman youth saving a cute sea turtle on a sandy ocean beach, gentle waves, blue sky, traditional Japanese folklore art'
        },
        sentences: [
          {
            id: 's04-s01',
            japanese: 'むかし、　うみ　の　ちかく　に　うらしまたろう　という　やさしい　ひと　が　いました。',
            romaji: 'Mukashi, umi no chikaku ni Urashima Tarou to iu yasashii hito ga imashita.',
            english: 'Long ago, near the sea, there lived a kind man named Urashima Taro.',
            vocabHighlight: [
              { word: 'うみ', romaji: 'umi', meaning: 'sea / ocean', type: 'noun' },
              { word: 'ちかく', romaji: 'chikaku', meaning: 'near / nearby', type: 'noun' },
              { word: 'やさしい', romaji: 'yasashii', meaning: 'kind / gentle', type: 'adjective' },
              { word: 'ひと', romaji: 'hito', meaning: 'person', type: 'noun' }
            ]
          },
          {
            id: 's04-s02',
            japanese: 'あるひ、　はまべ　を　あるいて　いると、　こどもたち　が　かめ　を　いじめて　いました。',
            romaji: 'Aru hi, hamabe o aruite iru to, kodomotachi ga kame o ijimete imashita.',
            english: 'One day, while walking on the beach, children were teasing a sea turtle.',
            vocabHighlight: [
              { word: 'はまべ', romaji: 'hamabe', meaning: 'beach / seashore', type: 'noun' },
              { word: 'かめ', romaji: 'kame', meaning: 'turtle', type: 'noun' },
              { word: 'こどもたち', romaji: 'kodomotachi', meaning: 'children', type: 'noun' }
            ]
          },
          {
            id: 's04-s03',
            japanese: 'たろう　は　「かわいそう　だよ。　やめなさい。」　と　いいました。',
            romaji: 'Tarou wa "Kawaisou da yo. Yamenasai." to iimashita.',
            english: 'Taro said, "Poor thing. Please stop."',
            vocabHighlight: [
              { word: 'かわいそう', romaji: 'kawaisou', meaning: 'pitiful / poor thing', type: 'adjective' },
              { word: 'いいました', romaji: 'iimashita', meaning: 'said', type: 'verb' }
            ]
          },
          {
            id: 's04-s04',
            japanese: 'たろう　は　かめ　を　たすけて、　うみ　へ　にがして　あげました。',
            romaji: 'Tarou wa kame o tasukete, umi e nigashite agemashita.',
            english: 'Taro rescued the turtle and released it safely back into the ocean.',
            vocabHighlight: [
              { word: 'たすけて', romaji: 'tasukete', meaning: 'saving / rescuing', type: 'verb' },
              { word: 'にがして', romaji: 'nigashite', meaning: 'releasing / letting go', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's04-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'beach',
          altJa: 'かめ の せなか に のって うみ の そこ の おしろ へ いく',
          altEn: 'Urashima Taro riding upon the large shell of the turtle descending under magical blue ocean waters towards a glowing coral palace.',
          prompt: 'Urashima Taro riding on a majestic swimming sea turtle underwater, colorful tropical fish, glowing coral reef, fairy tale palace in background'
        },
        sentences: [
          {
            id: 's04-s05',
            japanese: 'なんにちか　あと、　かめ　が　また　やって　きました。',
            romaji: 'Nannichika ato, kame ga mata yatte kimashita.',
            english: 'A few days later, the turtle came back.',
            vocabHighlight: [
              { word: 'あと', romaji: 'ato', meaning: 'after / later', type: 'noun' },
              { word: 'また', romaji: 'mata', meaning: 'again', type: 'adjective' }
            ]
          },
          {
            id: 's04-s06',
            japanese: '「たすけて　くれて　ありがとう。　りゅうぐうじょう　へ　あんない　します。」',
            romaji: '"Tasukete kurete arigatou. Ryuuguujou e annai shimasu."',
            english: '"Thank you for rescuing me. I will guide you to the Dragon Palace."',
            vocabHighlight: [
              { word: 'ありがとう', romaji: 'arigatou', meaning: 'thank you', type: 'greeting' },
              { word: 'りゅうぐうじょう', romaji: 'ryuuguujou', meaning: 'Dragon King\'s undersea palace', type: 'noun' },
              { word: 'あんない', romaji: 'annai', meaning: 'guidance / tour', type: 'noun' }
            ]
          },
          {
            id: 's04-s07',
            japanese: 'たろう　は　かめ　の　せなか　に　のりました。',
            romaji: 'Tarou wa kame no senaka ni norimashita.',
            english: 'Taro climbed onto the turtle\'s back.',
            vocabHighlight: [
              { word: 'せなか', romaji: 'senaka', meaning: 'back (body)', type: 'noun' },
              { word: 'のりました', romaji: 'norimashita', meaning: 'rode / climbed on', type: 'verb' }
            ]
          },
          {
            id: 's04-s08',
            japanese: 'ふたり　は　ふかい　あおい　うみ　の　そこ　へ　およぎました。',
            romaji: 'Futari wa fukai aoi umi no soko e oyogimashita.',
            english: 'The two swam down towards the bottom of the deep blue sea.',
            vocabHighlight: [
              { word: 'ふかい', romaji: 'fukai', meaning: 'deep', type: 'adjective' },
              { word: 'そこ', romaji: 'soko', meaning: 'bottom', type: 'noun' },
              { word: 'およぎました', romaji: 'oyogimashita', meaning: 'swam', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's04-p3',
        paragraphNumber: 3,
        image: {
          svgTheme: 'night',
          altJa: 'りゅうぐうじょう で おとひめさま と さかな たち が おどる',
          altEn: 'Princess Otohime welcoming Urashima Taro inside the shining underwater castle with dancing colorful fish.',
          prompt: 'Beautiful underwater crystal palace, kind Princess Otohime in elegant kimono smiling at Urashima Taro, colorful fish dancing in circles, magical glowing underwater lanterns'
        },
        sentences: [
          {
            id: 's04-s09',
            japanese: 'そこ　には　きらきら　ひかる　きれいな　おしろ　が　ありました。',
            romaji: 'Soko niwa kirakira hikaru kireina oshiro ga arimashita.',
            english: 'There, a sparkling, gorgeous castle stood.',
            vocabHighlight: [
              { word: 'きらきら', romaji: 'kirakira', meaning: 'sparkling / glittering', type: 'adjective' },
              { word: 'きれいな', romaji: 'kireina', meaning: 'beautiful / pretty', type: 'adjective' },
              { word: 'おしろ', romaji: 'oshiro', meaning: 'castle / palace', type: 'noun' }
            ]
          },
          {
            id: 's04-s10',
            japanese: 'おとひめさま　が　「ようこそ！」　と　えがお　で　むかえて　くれました。',
            romaji: 'Otohimesama ga "Youkoso!" to egao de mukaete kuremashita.',
            english: 'Princess Otohime welcomed him with a warm smile, saying "Welcome!"',
            vocabHighlight: [
              { word: 'ようこそ', romaji: 'youkoso', meaning: 'welcome', type: 'greeting' },
              { word: 'えがお', romaji: 'egao', meaning: 'smiling face', type: 'noun' }
            ]
          },
          {
            id: 's04-s11',
            japanese: 'さかな　たち　が　たのしく　おどり、　おいしい　りょうり　を　たくさん　たべました。',
            romaji: 'Sakana-tachi ga tanoshiku odori, oishii ryouri o takusan tabemashita.',
            english: 'Fishes danced delightfully, and they ate plenty of delicious food.',
            vocabHighlight: [
              { word: 'さかな', romaji: 'sakana', meaning: 'fish', type: 'noun' },
              { word: 'おどり', romaji: 'odori', meaning: 'dancing', type: 'verb' },
              { word: 'りょうり', romaji: 'ryouri', meaning: 'cuisine / dishes', type: 'noun' },
              { word: 'たべました', romaji: 'tabemashita', meaning: 'ate', type: 'verb' }
            ]
          },
          {
            id: 's04-s12',
            japanese: 'ゆめ　の　ような　じかん　を　すごしました。',
            romaji: 'Yume no youna jikan o sugoshimashita.',
            english: 'They spent a time that felt just like a dream.',
            vocabHighlight: [
              { word: 'ゆめ', romaji: 'yume', meaning: 'dream', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 5
  {
    id: 'story-05',
    slug: 'panda-no-pan-ya-san',
    title: 'パンダ　の　パンやさん',
    romajiTitle: 'Panda no Pan-ya-san',
    englishTitle: 'The Panda\'s Bakery',
    category: 'food',
    categoryLabelJa: 'たべもの',
    categoryLabelEn: 'Food & Cooking',
    difficulty: 'N5 Kana',
    charCount: 410,
    estimatedMinutes: 4,
    description: 'Chef Panda wakes up at dawn to bake fluffy melon pan, buttery croissants, and warm sweet treats for forest friends.',
    coverEmoji: '🐼',
    coverTheme: 'yuzu',
    paragraphs: [
      {
        id: 's05-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'kitchen',
          altJa: 'しろい ぼうし を かぶった パンダ の コックさん が パン を やく',
          altEn: 'A cute chubby panda in a white baker hat kneading soft dough in a warm cottage bakery.',
          prompt: 'Adorable panda wearing chef hat and apron kneading bread dough on a floury wooden table, warm oven in background, cozy bakery kitchen, storybook style'
        },
        sentences: [
          {
            id: 's05-s01',
            japanese: 'もり　の　なか　に、　ちいさな　パンやさん　が　あります。',
            romaji: 'Mori no naka ni, chiisana pan-ya-san ga arimasu.',
            english: 'Inside the forest, there is a small bakery.',
            vocabHighlight: [
              { word: 'もり', romaji: 'mori', meaning: 'forest', type: 'noun' },
              { word: 'ちいさな', romaji: 'chiisana', meaning: 'small / tiny', type: 'adjective' },
              { word: 'パンやさん', romaji: 'pan-ya-san', meaning: 'bakery / baker', type: 'noun' }
            ]
          },
          {
            id: 's05-s02',
            japanese: 'パンダ　の　パンシェフ　は、　まいあさ　はやく　おきます。',
            romaji: 'Panda no pan shefu wa, maiasa hayaku okimasu.',
            english: 'The panda bread chef wakes up early every morning.',
            vocabHighlight: [
              { word: 'まいあさ', romaji: 'maiasa', meaning: 'every morning', type: 'noun' },
              { word: 'はやく', romaji: 'hayaku', meaning: 'early / fast', type: 'adjective' },
              { word: 'おきます', romaji: 'okimasu', meaning: 'wakes up', type: 'verb' }
            ]
          },
          {
            id: 's05-s03',
            japanese: 'しろい　こむぎこ　と　あまい　ミルク　を　まぜます。',
            romaji: 'Shiroi komugiko to amai miruku o mazemasu.',
            english: 'He mixes white flour and sweet milk together.',
            vocabHighlight: [
              { word: 'こむぎこ', romaji: 'komugiko', meaning: 'flour / wheat flour', type: 'noun' },
              { word: 'あまい', romaji: 'amai', meaning: 'sweet', type: 'adjective' },
              { word: 'まぜます', romaji: 'mazemasu', meaning: 'mixes / stirs', type: 'verb' }
            ]
          },
          {
            id: 's05-s04',
            japanese: 'パン　の　いい　におい　が　ふわーっと　ひろがります。',
            romaji: 'Pan no ii nioi ga fuwaatto hirogarimasu.',
            english: 'The wonderful smell of bread gently spreads all around.',
            vocabHighlight: [
              { word: 'パン', romaji: 'pan', meaning: 'bread', type: 'noun' },
              { word: 'におい', romaji: 'nioi', meaning: 'scent / smell', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's05-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'market',
          altJa: 'どうぶつ たち が パン を かいに くる',
          altEn: 'Cute rabbit, bear, and squirrel lining up at the bakery window to buy delicious melon bread.',
          prompt: 'Forest animals rabbit bear squirrel queuing in front of quaint wooden bakery counter, panda chef handing over golden baked bread, sunny morning'
        },
        sentences: [
          {
            id: 's05-s05',
            japanese: '「いらっしゃいませ！」　と　パンダさん　が　いいました。',
            romaji: '"Irasshaimase!" to Panda-san ga iimashita.',
            english: '"Welcome to the shop!" said Mr. Panda.',
            vocabHighlight: [
              { word: 'いらっしゃいませ', romaji: 'irasshaimase', meaning: 'welcome (in shops)', type: 'greeting' }
            ]
          },
          {
            id: 's05-s06',
            japanese: 'うさぎさん　が　メロンパン　を　ふたつ　かいました。',
            romaji: 'Usagi-san ga meronpan o futatsu kaimashita.',
            english: 'The rabbit bought two melon breads.',
            vocabHighlight: [
              { word: 'うさぎ', romaji: 'usagi', meaning: 'rabbit', type: 'noun' },
              { word: 'メロンパン', romaji: 'meronpan', meaning: 'melon bread (sweet Japanese bread)', type: 'noun' },
              { word: 'ふたつ', romaji: 'futatsu', meaning: 'two (items)', type: 'counter' },
              { word: 'かいました', romaji: 'kaimashita', meaning: 'bought', type: 'verb' }
            ]
          },
          {
            id: 's05-s07',
            japanese: 'くまさん　は　おおきな　クロワッサン　を　えらびました。',
            romaji: 'Kuma-san wa ookina kurowassan o erabimashita.',
            english: 'The bear chose a large croissant.',
            vocabHighlight: [
              { word: 'くま', romaji: 'kuma', meaning: 'bear', type: 'noun' },
              { word: 'クロワッサン', romaji: 'kurowassan', meaning: 'croissant', type: 'noun' },
              { word: 'えらびました', romaji: 'erabimashita', meaning: 'chose / selected', type: 'verb' }
            ]
          },
          {
            id: 's05-s08',
            japanese: 'みんな　「とても　おいしい！」　と　にこにこ　たべました。',
            romaji: 'Minna "Totemo oishii!" to nikoniko tabemashita.',
            english: 'Everyone smiled happily and ate, saying "So delicious!"',
            vocabHighlight: [
              { word: 'にこにこ', romaji: 'nikoniko', meaning: 'smilingly', type: 'adjective' }
            ]
          },
          {
            id: 's05-s09',
            japanese: 'パンダさん　の　パンやさん　は　きょう　も　だいせいこう　です！',
            romaji: 'Panda-san no pan-ya-san wa kyou mo daiseikou desu!',
            english: 'Mr. Panda\'s bakery was a huge success today as well!',
            vocabHighlight: [
              { word: 'だいせいこう', romaji: 'daiseikou', meaning: 'great success', type: 'noun' }
            ]
          }
        ]
      }
    ]
  }
];
