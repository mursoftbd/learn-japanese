import { Story } from '../types/story';

export const storiesGroup3: Story[] = [
  // STORY 11
  {
    id: 'story-11',
    slug: 'robotto-no-harou-kun',
    title: 'ロボット　の　ハローくん',
    romajiTitle: 'Robotto no Harou-kun',
    englishTitle: 'Hello the Friendly Robot',
    category: 'adventure',
    categoryLabelJa: 'ぼうけん',
    categoryLabelEn: 'Adventure',
    difficulty: 'N5 Easy',
    charCount: 410,
    estimatedMinutes: 4,
    description: 'A helpful little white robot with bright LED eyes helps tidy the room, water garden flowers, and pour green tea.',
    coverEmoji: '🤖',
    coverTheme: 'fuji',
    paragraphs: [
      {
        id: 's11-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'home',
          altJa: 'あおい め が ぴかぴか ひかる かわいい ロボット',
          altEn: 'A shiny round white robot with sparkling blue LED eyes and a little antenna smiling friendly in a room.',
          prompt: 'Cute round white robot with big blue glowing LED digital eyes, tiny antenna, smiling warmly in a modern Japanese apartment room, 3D animated style'
        },
        sentences: [
          {
            id: 's11-s01',
            japanese: 'わたし　の　いえ　には、　ちいさな　ロボット　が　います。',
            romaji: 'Watashi no ie niwa, chiisana robotto ga imasu.',
            english: 'In my house, there is a small robot.',
            vocabHighlight: [
              { word: 'ロボット', romaji: 'robotto', meaning: 'robot', type: 'noun' },
              { word: 'います', romaji: 'imasu', meaning: 'exists / is there (living/animated)', type: 'verb' }
            ]
          },
          {
            id: 's11-s02',
            japanese: 'ロボット　の　なまえ　は　「ハローくん」　です。',
            romaji: 'Robotto no namae wa "Harou-kun" desu.',
            english: 'The robot\'s name is "Hello-kun".',
            vocabHighlight: [
              { word: 'なまえ', romaji: 'namae', meaning: 'name', type: 'noun' }
            ]
          },
          {
            id: 's11-s03',
            japanese: 'あたま　に　アンテナ　が　あって、　め　が　あおく　ひかります。',
            romaji: 'Atama ni antena ga atte, me ga aoku hikarimasu.',
            english: 'He has an antenna on his head, and his eyes glow blue.',
            vocabHighlight: [
              { word: 'アンテナ', romaji: 'antena', meaning: 'antenna', type: 'noun' },
              { word: 'あおく', romaji: 'aoku', meaning: 'blue (adverbial)', type: 'adjective' }
            ]
          },
          {
            id: 's11-s04',
            japanese: '「ピピッ！　みなさん、　こんにちは！」　と　げんき　に　あいさつ　します。',
            romaji: '"Pipit! Minasan, konnichiwa!" to genki ni aisatsu shimasu.',
            english: '"Beep-beep! Hello everyone!" he greets cheerfully.',
            vocabHighlight: [
              { word: 'こんにちは', romaji: 'konnichiwa', meaning: 'hello / good afternoon', type: 'greeting' },
              { word: 'あいさつ', romaji: 'aisatsu', meaning: 'greeting', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's11-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'kitchen',
          altJa: 'ロボット が おばあちゃん に あたたかい おちゃ を はこぶ',
          altEn: 'The friendly robot carrying a tray with warm green tea to grandmother resting on the sofa.',
          prompt: 'Cute robot carefully carrying a small tray with steaming green tea in Japanese teacup to smiling grandmother on sofa, heartwarming, pastel tones'
        },
        sentences: [
          {
            id: 's11-s05',
            japanese: 'ハローくん　は　へや　の　そうじ　が　とても　とくい　です。',
            romaji: 'Harou-kun wa heya no souji ga totemo tokui desu.',
            english: 'Hello-kun is very good at cleaning the room.',
            vocabHighlight: [
              { word: 'そうじ', romaji: 'souji', meaning: 'cleaning', type: 'noun' },
              { word: 'とくい', romaji: 'tokui', meaning: 'good at / skilled in', type: 'adjective' }
            ]
          },
          {
            id: 's11-s06',
            japanese: 'にわ　の　おはな　に　おみず　を　あげます。',
            romaji: 'Niwa no ohana ni omizu o agemasu.',
            english: 'He gives water to the flowers in the garden.',
            vocabHighlight: [
              { word: 'おはな', romaji: 'ohana', meaning: 'flower (polite)', type: 'noun' },
              { word: 'おみず', romaji: 'omizu', meaning: 'water (polite)', type: 'noun' },
              { word: 'あげます', romaji: 'agemasu', meaning: 'gives', type: 'verb' }
            ]
          },
          {
            id: 's11-s07',
            japanese: 'そして、　おばあちゃん　に　あたたかい　おちゃ　を　はこびました。',
            romaji: 'Soshite, obaachan ni atatakai ocha o hakobimashita.',
            english: 'And then, he brought warm green tea to grandma.',
            vocabHighlight: [
              { word: 'あたたかい', romaji: 'atatakai', meaning: 'warm', type: 'adjective' },
              { word: 'おちゃ', romaji: 'ocha', meaning: 'green tea', type: 'noun' },
              { word: 'はこびました', romaji: 'hakobimashita', meaning: 'carried / delivered', type: 'verb' }
            ]
          },
          {
            id: 's11-s08',
            japanese: '「ハローくん、　いつも　ありがとうね。」',
            romaji: '"Harou-kun, itsumo arigatou ne."',
            english: '"Hello-kun, thank you always."',
            vocabHighlight: [
              { word: 'いつも', romaji: 'itsumo', meaning: 'always', type: 'adjective' }
            ]
          },
          {
            id: 's11-s09',
            japanese: 'ハローくん　は　うれしそう　に　くるくる　まわりました。',
            romaji: 'Harou-kun wa ureshisou ni kurukuru mawarimashita.',
            english: 'Hello-kun spun round and round with happiness.',
            vocabHighlight: [
              { word: 'くるくる', romaji: 'kurukuru', meaning: 'spinning around and around', type: 'adjective' },
              { word: 'まわりました', romaji: 'mawarimashita', meaning: 'turned / spun', type: 'verb' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 12
  {
    id: 'story-12',
    slug: 'tsuru-no-ongaeshi',
    title: 'つる　の　おんがえし',
    romajiTitle: 'Tsuru no Ongaeshi',
    englishTitle: 'The Grateful Crane',
    category: 'folktale',
    categoryLabelJa: 'むかしばなし',
    categoryLabelEn: 'Folktale',
    difficulty: 'N5 Standard',
    charCount: 450,
    estimatedMinutes: 5,
    description: 'A young man frees a white crane caught in a trap. On a snowy night, a mysterious kind woman knocks on his door.',
    coverEmoji: '🕊️',
    coverTheme: 'lavender',
    paragraphs: [
      {
        id: 's12-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'mountain',
          altJa: 'ゆき の なか で わな に かかった つる を たすける わかもの',
          altEn: 'A kind young man freeing a trapped white crane with red crown in a snowy field.',
          prompt: 'Snowy Japanese landscape, gentle young peasant rescuing a beautiful white red-crowned crane caught in wooden trap, falling snowflakes, traditional Japanese story'
        },
        sentences: [
          {
            id: 's12-s01',
            japanese: 'さむい　ふゆ　の　ひ、　ひとりの　わかもの　が　ゆきみち　を　あるいて　いました。',
            romaji: 'Samui fuyu no hi, hitori no wakamono ga yukimichi o aruite imashita.',
            english: 'On a cold winter day, a young man was walking along a snowy path.',
            vocabHighlight: [
              { word: 'さむい', romaji: 'samui', meaning: 'cold (weather)', type: 'adjective' },
              { word: 'ふゆ', romaji: 'fuyu', meaning: 'winter', type: 'noun' },
              { word: 'わかもの', romaji: 'wakamono', meaning: 'young person / youth', type: 'noun' },
              { word: 'ゆきみち', romaji: 'yukimichi', meaning: 'snow road', type: 'noun' }
            ]
          },
          {
            id: 's12-s02',
            japanese: 'すると、　わな　に　かかって　くるしんで　いる　つる　を　みつけました。',
            romaji: 'Suruto, wana ni kakatte kurushinde iru tsuru o mitsukemashita.',
            english: 'Then, he found a crane trapped and struggling in a snare.',
            vocabHighlight: [
              { word: 'つる', romaji: 'tsuru', meaning: 'crane (bird)', type: 'noun' },
              { word: 'みつけました', romaji: 'mitsukemashita', meaning: 'found', type: 'verb' }
            ]
          },
          {
            id: 's12-s03',
            japanese: 'わかもの　は　やさしく　わな　を　はずして　あげました。',
            romaji: 'Wakamono wa yasashiku wana o hazushite agemashita.',
            english: 'The young man gently took off the snare for it.',
            vocabHighlight: [
              { word: 'やさしく', romaji: 'yasashiku', meaning: 'kindly / gently', type: 'adjective' }
            ]
          },
          {
            id: 's12-s04',
            japanese: 'つる　は　「クワーッ」　と　なき、　そら　たかく　とびたちました。',
            romaji: 'Tsuru wa "Kuwaat" to naki, sora takaku tobitachimashita.',
            english: 'The crane cried "Caww" and took flight high into the sky.',
            vocabHighlight: [
              { word: 'たかく', romaji: 'takaku', meaning: 'high', type: 'adjective' },
              { word: 'とびたちました', romaji: 'tobitachimashita', meaning: 'flew away', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's12-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'home',
          altJa: 'ゆき の よる に いえ を たずねてきた うつくしい むすめ',
          altEn: 'A graceful woman with a white shawl standing by the wooden door in gentle snowfall.',
          prompt: 'Traditional Japanese farmhouse porch at snowy night, kind young man opening sliding door, a beautiful delicate young woman standing outside in warm light, poetic scene'
        },
        sentences: [
          {
            id: 's12-s05',
            japanese: 'その　ばん、　とんとん　と　とびら　を　たたく　おと　が　しました。',
            romaji: 'Sono ban, tonton to tobira o tataku oto ga shimashita.',
            english: 'That evening, there was a tap-tap sound knocking at the door.',
            vocabHighlight: [
              { word: 'ばん', romaji: 'ban', meaning: 'evening / night', type: 'noun' },
              { word: 'おと', romaji: 'oto', meaning: 'sound', type: 'noun' }
            ]
          },
          {
            id: 's12-s06',
            japanese: 'あけて　みると、　うつくしい　むすめ　が　たって　いました。',
            romaji: 'Akete miru to, utsukushii musume ga tatte imashita.',
            english: 'When he opened it, a beautiful maiden was standing there.',
            vocabHighlight: [
              { word: 'むすめ', romaji: 'musume', meaning: 'maiden / daughter', type: 'noun' },
              { word: 'たって', romaji: 'tatte', meaning: 'standing', type: 'verb' }
            ]
          },
          {
            id: 's12-s07',
            japanese: '「みち　に　まよいました。　ひとばん　とめて　ください。」',
            romaji: '"Michi ni mayoimashita. Hitoban tomete kudasai."',
            english: '"I lost my way. Please let me stay for one night."',
            vocabHighlight: [
              { word: 'まよいました', romaji: 'mayoimashita', meaning: 'got lost', type: 'verb' },
              { word: 'ひとばん', romaji: 'hitoban', meaning: 'one night', type: 'counter' }
            ]
          },
          {
            id: 's12-s08',
            japanese: 'かのじょ　は　たすけて　くれた　あの　つる　でした。',
            romaji: 'Kanojo wa tasukete kureta ano tsuru deshita.',
            english: 'She was indeed that crane who had been rescued.',
            vocabHighlight: [
              { word: 'かのじょ', romaji: 'kanojo', meaning: 'she / her', type: 'noun' },
              { word: 'あの', romaji: 'ano', meaning: 'that (over there)', type: 'particle' }
            ]
          },
          {
            id: 's12-s09',
            japanese: 'むすめ　は　こころ　を　こめて　きん　の　ぬの　を　おりました。',
            romaji: 'Musume wa kokoro o komete kin no nuno o orimashita.',
            english: 'With all her heart, the maiden wove shimmering cloth of gold.',
            vocabHighlight: [
              { word: 'こころ', romaji: 'kokoro', meaning: 'heart / spirit', type: 'noun' },
              { word: 'きん', romaji: 'kin', meaning: 'gold', type: 'noun' },
              { word: 'ぬの', romaji: 'nuno', meaning: 'cloth / fabric', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 13
  {
    id: 'story-13',
    slug: 'ame-no-hi-no-kaeru-kun',
    title: 'あめ　の　ひ　の　カエルくん',
    romajiTitle: 'Ame no Hi no Kaeru-kun',
    englishTitle: 'The Frog on a Rainy Day',
    category: 'animals',
    categoryLabelJa: 'どうぶつ',
    categoryLabelEn: 'Animals',
    difficulty: 'N5 Kana',
    charCount: 400,
    estimatedMinutes: 3,
    description: 'Wearing little red rain boots and holding a bright yellow umbrella, Kero-kun leaps through puddles with snail friends.',
    coverEmoji: '🐸',
    coverTheme: 'matcha',
    paragraphs: [
      {
        id: 's13-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'park',
          altJa: 'きいろい かさ と あかい ながぐつ を はいた カエルくん',
          altEn: 'A joyful little green frog wearing red rainboots holding a tiny yellow umbrella in the rain.',
          prompt: 'Cute chibi green frog holding yellow leaf umbrella wearing red rain boots, gentle raindrops falling into puddles with ripples, lush hydrangeas, storybook art'
        },
        sentences: [
          {
            id: 's13-s01',
            japanese: 'きょう　は　あさ　から　あめ　が　ざあざあ　ふって　います。',
            romaji: 'Kyou wa asa kara ame ga zaazaa futte imasu.',
            english: 'Today from morning, rain has been pouring heavily.',
            vocabHighlight: [
              { word: 'あめ', romaji: 'ame', meaning: 'rain', type: 'noun' },
              { word: 'ふって', romaji: 'futte', meaning: 'falling (rain/snow)', type: 'verb' }
            ]
          },
          {
            id: 's13-s02',
            japanese: 'でも、　カエル　の　ケロくん　は　あめ　が　だいすき　です。',
            romaji: 'Demo, kaeru no Kero-kun wa ame ga daisuki desu.',
            english: 'However, Kero the frog loves the rain very much.',
            vocabHighlight: [
              { word: 'カエル', romaji: 'kaeru', meaning: 'frog', type: 'noun' }
            ]
          },
          {
            id: 's13-s03',
            japanese: 'きいろい　かさ　を　さして、　あかい　ながぐつ　を　はきました。',
            romaji: 'Kiiroi kasa o sashite, akai nagagutsu o hakimashita.',
            english: 'He put up a yellow umbrella and wore red rainboots.',
            vocabHighlight: [
              { word: 'かさ', romaji: 'kasa', meaning: 'umbrella', type: 'noun' },
              { word: 'ながぐつ', romaji: 'nagagutsu', meaning: 'rainboots', type: 'noun' },
              { word: 'はきました', romaji: 'hakimashita', meaning: 'put on (boots/shoes)', type: 'verb' }
            ]
          },
          {
            id: 's13-s04',
            japanese: '「ケロケロ、　おさんぽ　に　いこう！」',
            romaji: '"Kerokero, osanpo ni ikou!"',
            english: '"Ribbit-ribbit, let\'s go for a walk!"',
            vocabHighlight: [
              { word: 'おさんぽ', romaji: 'osanpo', meaning: 'walk / stroll', type: 'noun' }
            ]
          }
        ]
      },
      {
        id: 's13-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'park',
          altJa: 'あじさい の はっぱ の うえ の かたつむり と おしゃべり',
          altEn: 'The frog chatting happily with a tiny spiral-shelled snail on a purple hydrangea leaf.',
          prompt: 'Little frog and cute snail with spiral shell smiling at each other under large green hydrangea leaf with dew drops, purple and blue flowers, wet glistening nature'
        },
        sentences: [
          {
            id: 's13-s05',
            japanese: 'みずたまり　の　なか　へ　ぴょん！　と　とびこみました。',
            romaji: 'Mizutamari no naka e pyon! to tobikomimashita.',
            english: 'Hop! He jumped right into a water puddle.',
            vocabHighlight: [
              { word: 'みずたまり', romaji: 'mizutamari', meaning: 'puddle', type: 'noun' },
              { word: 'とびこみました', romaji: 'tobikomimashita', meaning: 'jumped into', type: 'verb' }
            ]
          },
          {
            id: 's13-s06',
            japanese: 'あじさい　の　はっぱ　の　うえ　に　かたつむりくん　が　いました。',
            romaji: 'Ajisai no happa no ue ni katatsumuri-kun ga imashita.',
            english: 'On top of a hydrangea leaf, Mr. Snail was sitting.',
            vocabHighlight: [
              { word: 'あじさい', romaji: 'ajisai', meaning: 'hydrangea flower', type: 'noun' },
              { word: 'はっぱ', romaji: 'happa', meaning: 'leaf', type: 'noun' },
              { word: 'かたつむり', romaji: 'katatsumuri', meaning: 'snail', type: 'noun' }
            ]
          },
          {
            id: 's13-s07',
            japanese: '「こんにちは、　いい　あめ　だね。」　と　かたつむりくん。',
            romaji: '"Konnichiwa, ii ame da ne." to katatsumuri-kun.',
            english: '"Hello, nice rain isn\'t it," said Mr. Snail.',
            vocabHighlight: [
              { word: 'だね', romaji: 'da ne', meaning: 'isn\'t it?', type: 'particle' }
            ]
          },
          {
            id: 's13-s08',
            japanese: 'あめ　が　やむと、　そら　に　きれいな　にじ　が　かかりました。',
            romaji: 'Ame ga yamu to, sora ni kireina niji ga kakarimashita.',
            english: 'When the rain stopped, a gorgeous rainbow spanned across the sky.',
            vocabHighlight: [
              { word: 'やむと', romaji: 'yamu to', meaning: 'when it stops (rain)', type: 'verb' },
              { word: 'にじ', romaji: 'niji', meaning: 'rainbow', type: 'noun' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 14
  {
    id: 'story-14',
    slug: 'suupaa-de-okaimono',
    title: 'スーパー　で　おかいもの',
    romajiTitle: 'Suupaa de Okaimono',
    englishTitle: 'Shopping at the Supermarket',
    category: 'daily-life',
    categoryLabelJa: 'にちじょう',
    categoryLabelEn: 'Daily Life',
    difficulty: 'N5 Easy',
    charCount: 420,
    estimatedMinutes: 4,
    description: 'Yuka goes grocery shopping with mother to gather onions, carrots, potatoes, and curry roux to cook dinner.',
    coverEmoji: '🛒',
    coverTheme: 'coral',
    paragraphs: [
      {
        id: 's14-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'market',
          altJa: 'スーパーマーケット で カート を おす おんなのこ と おかあさん',
          altEn: 'A young girl pushing a red shopping cart beside her mother at the produce aisle.',
          prompt: 'Bright Japanese supermarket interior, smiling mother and cheerful little daughter pushing red wire cart near colorful apples and oranges shelves, clean anime style'
        },
        sentences: [
          {
            id: 's14-s01',
            japanese: 'きょう　の　ばんごはん　は　カレーライス　です。',
            romaji: 'Kyou no bangohan wa kareeraisu desu.',
            english: 'Tonight\'s dinner is Japanese curry rice.',
            vocabHighlight: [
              { word: 'ばんごはん', romaji: 'bangohan', meaning: 'dinner / evening meal', type: 'noun' },
              { word: 'カレーライス', romaji: 'kareeraisu', meaning: 'curry rice', type: 'noun' }
            ]
          },
          {
            id: 's14-s02',
            japanese: 'ゆかちゃん　は　おかあさん　と　スーパー　へ　いきました。',
            romaji: 'Yuka-chan wa okaasan to suupaa e ikimashita.',
            english: 'Yuka-chan went to the supermarket with her mom.',
            vocabHighlight: [
              { word: 'スーパー', romaji: 'suupaa', meaning: 'supermarket', type: 'noun' }
            ]
          },
          {
            id: 's14-s03',
            japanese: 'ゆかちゃん　は　あかい　カート　を　おします。',
            romaji: 'Yuka-chan wa akai kaato o oshimasu.',
            english: 'Yuka-chan pushes the red shopping cart.',
            vocabHighlight: [
              { word: 'カート', romaji: 'kaato', meaning: 'cart', type: 'noun' },
              { word: 'おします', romaji: 'oshimasu', meaning: 'pushes', type: 'verb' }
            ]
          },
          {
            id: 's14-s04',
            japanese: '「まず　やさい　を　かいましょうね。」',
            romaji: '"Mazu yasai o kaimashou ne."',
            english: '"First, let\'s buy vegetables, shall we?"',
            vocabHighlight: [
              { word: 'まず', romaji: 'mazu', meaning: 'first of all', type: 'adjective' },
              { word: 'やさい', romaji: 'yasai', meaning: 'vegetable', type: 'noun' },
              { word: 'かいましょう', romaji: 'kaimashou', meaning: 'let\'s buy', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's14-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'kitchen',
          altJa: 'おなべ で ぐつぐつ にえる おいしい カレー',
          altEn: 'A silver cooking pot simmering fragrant brown curry with potatoes and carrots on the stove.',
          prompt: 'Steaming cooking pot on stove simmering rich Japanese curry with diced carrots and potatoes, mother and daughter smiling in cozy kitchen'
        },
        sentences: [
          {
            id: 's14-s05',
            japanese: 'じゃがいも　を　みっつ、　にんじん　を　にほん　かご　に　いれました。',
            romaji: 'Jagaimo o mittsu, ninjin o nihon kago ni iremashita.',
            english: 'She put three potatoes and two carrots into the basket.',
            vocabHighlight: [
              { word: 'じゃがいも', romaji: 'jagaimo', meaning: 'potato', type: 'noun' },
              { word: 'みっつ', romaji: 'mittsu', meaning: 'three items', type: 'counter' },
              { word: 'にんじん', romaji: 'ninjin', meaning: 'carrot', type: 'noun' },
              { word: 'にほん', romaji: 'nihon', meaning: 'two long objects', type: 'counter' },
              { word: 'かご', romaji: 'kago', meaning: 'basket', type: 'noun' }
            ]
          },
          {
            id: 's14-s06',
            japanese: 'それから、　たまねぎ　と　カレーのルー　も　えらびました。',
            romaji: 'Sorekara, tamanegi to karee no ruu mo erabimashita.',
            english: 'After that, they also picked onions and curry roux.',
            vocabHighlight: [
              { word: 'たまねぎ', romaji: 'tamanegi', meaning: 'onion', type: 'noun' },
              { word: 'カレーのルー', romaji: 'karee no ruu', meaning: 'curry roux', type: 'noun' }
            ]
          },
          {
            id: 's14-s07',
            japanese: 'レジ　で　おかね　を　はらって、　いえ　へ　かえりました。',
            romaji: 'Reji de okane o haratte, ie e kaerimashita.',
            english: 'They paid money at the cash register and returned home.',
            vocabHighlight: [
              { word: 'レジ', romaji: 'reji', meaning: 'cash register / checkout', type: 'noun' },
              { word: 'おかね', romaji: 'okane', meaning: 'money', type: 'noun' },
              { word: 'はらって', romaji: 'haratte', meaning: 'paying', type: 'verb' }
            ]
          },
          {
            id: 's14-s08',
            japanese: 'みんな　で　つくった　カレー　は　とびきり　おいしかった　です！',
            romaji: 'Minna de tsukutta karee wa tobikiri oishikatta desu!',
            english: 'The curry everyone made together was exceptionally delicious!',
            vocabHighlight: [
              { word: 'つくった', romaji: 'tsukutta', meaning: 'made', type: 'verb' },
              { word: 'おいしかった', romaji: 'oishikatta', meaning: 'was delicious', type: 'adjective' }
            ]
          }
        ]
      }
    ]
  },

  // STORY 15
  {
    id: 'story-15',
    slug: 'pengin-no-natsuyasumi',
    title: 'ペンギン　の　なつやすみ',
    romajiTitle: 'Pengin no Natsuyasumi',
    englishTitle: 'The Penguin\'s Summer Vacation',
    category: 'animals',
    categoryLabelJa: 'どうぶつ',
    categoryLabelEn: 'Animals',
    difficulty: 'N5 Kana',
    charCount: 410,
    estimatedMinutes: 4,
    description: 'Pippo the little penguin visits the seaside, eats blue Hawaii shaved ice, and swims with colorful ocean fish.',
    coverEmoji: '🐧',
    coverTheme: 'fuji',
    paragraphs: [
      {
        id: 's15-p1',
        paragraphNumber: 1,
        image: {
          svgTheme: 'beach',
          altJa: 'うきわ を もった ペンギン の ピッポくん',
          altEn: 'A baby penguin wearing swimming goggles holding a striped swim ring on a sandy beach.',
          prompt: 'Adorable little penguin with yellow goggles around neck holding red-white striped swim ring, standing on sunny tropical sand beach, palm trees, blue water'
        },
        sentences: [
          {
            id: 's15-s01',
            japanese: 'なつ　が　やって　きました。　きょう　は　とても　あつい　です。',
            romaji: 'Natsu ga yatte kimashita. Kyou wa totemo atsui desu.',
            english: 'Summer has arrived. Today is very hot.',
            vocabHighlight: [
              { word: 'なつ', romaji: 'natsu', meaning: 'summer', type: 'noun' },
              { word: 'あつい', romaji: 'atsui', meaning: 'hot (temperature)', type: 'adjective' }
            ]
          },
          {
            id: 's15-s02',
            japanese: 'ペンギン　の　ピッポくん　は　うみ　へ　あそび　に　いきました。',
            romaji: 'Pengin no Pippo-kun wa umi e asobi ni ikimashita.',
            english: 'Pippo the penguin went to play at the ocean.',
            vocabHighlight: [
              { word: 'ペンギン', romaji: 'pengin', meaning: 'penguin', type: 'noun' },
              { word: 'あそび に', romaji: 'asobi ni', meaning: 'for playing', type: 'noun' }
            ]
          },
          {
            id: 's15-s03',
            japanese: 'しろ　と　あか　の　しましま　うきわ　を　もって　います。',
            romaji: 'Shiro to aka no shimashima ukiwa o motte imasu.',
            english: 'He carries a red-and-white striped swim ring.',
            vocabHighlight: [
              { word: 'うきわ', romaji: 'ukiwa', meaning: 'swim ring / float', type: 'noun' },
              { word: 'もって', romaji: 'motte', meaning: 'holding / carrying', type: 'verb' }
            ]
          },
          {
            id: 's15-s04',
            japanese: 'すなはま　の　うえ　を　ペタペタ　あるきました。',
            romaji: 'Sunahama no ue o petapeta arukimashita.',
            english: 'He waddled pat-pat along the sandy beach.',
            vocabHighlight: [
              { word: 'すなはま', romaji: 'sunahama', meaning: 'sandy beach', type: 'noun' },
              { word: 'あるきました', romaji: 'arukimashita', meaning: 'walked', type: 'verb' }
            ]
          }
        ]
      },
      {
        id: 's15-p2',
        paragraphNumber: 2,
        image: {
          svgTheme: 'beach',
          altJa: 'あおい シロップ の かきごおり を たべる ペンギン',
          altEn: 'The penguin happily licking cold blue shaved ice under a beach parasol.',
          prompt: 'Chibi penguin sitting on striped beach chair under parasol eating tall cup of blue syrup shaved ice with spoon, sunshine, turquoise ocean'
        },
        sentences: [
          {
            id: 's15-s05',
            japanese: 'うみ　の　いえ　で　あおい　かきごおり　を　かいました。',
            romaji: 'Umi no ie de aoi kakigoori o kaimashita.',
            english: 'He bought a blue shaved ice at the beach shack.',
            vocabHighlight: [
              { word: 'うみのいえ', romaji: 'umi no ie', meaning: 'beach hut / sea hut', type: 'noun' },
              { word: 'かきごおり', romaji: 'kakigoori', meaning: 'shaved ice dessert', type: 'noun' }
            ]
          },
          {
            id: 's15-s06',
            japanese: '「つめたくて、　あまくて、　おいしい！」',
            romaji: '"Tsumetakute, amakute, oishii!"',
            english: '"Cold, sweet, and delicious!"',
            vocabHighlight: [
              { word: 'つめたくて', romaji: 'tsumetakute', meaning: 'cold (touch/food) and...', type: 'adjective' }
            ]
          },
          {
            id: 's15-s07',
            japanese: 'そのあと、　なみ　の　なか　を　すいすい　およぎました。',
            romaji: 'Sono ato, nami no naka o suisui oyogimashita.',
            english: 'After that, he swam smoothly through the waves.',
            vocabHighlight: [
              { word: 'なみ', romaji: 'nami', meaning: 'wave / ocean wave', type: 'noun' },
              { word: 'すいすい', romaji: 'suisui', meaning: 'smoothly / effortlessly', type: 'adjective' }
            ]
          },
          {
            id: 's15-s08',
            japanese: 'なつやすみ　は　さいこう　に　たのしい　です！',
            romaji: 'Natsuyasumi wa saikou ni tanoshii desu!',
            english: 'Summer vacation is the most fun ever!',
            vocabHighlight: [
              { word: 'なつやすみ', romaji: 'natsuyasumi', meaning: 'summer vacation', type: 'noun' }
            ]
          }
        ]
      }
    ]
  }
];
