# 🌸 にほんご よもう！ (Nihongo Yomou) - Japanese N5 Kana Reading Practice

A modern, responsive, and kid-friendly Japanese reading web application crafted specifically for JLPT N5 beginners and children. 

Built with **React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons**, with **100% zero Kanji** (pure spaced Hiragana & Katakana), dual Romaji & English meaning dropdowns for every sentence, native Web Speech audio pronunciation, interactive 50-sound Kana charts, and ready-to-deploy **GitHub Pages** support.

---

## ✨ Features

- **20 Complete Graded Japanese Stories**:
  - Covering classic folklore (Momotaro, Urashima Taro, Kaguya-hime, Kintaro, Tsuru no Ongaeshi), adorable animal adventures, school life, shopping, trains (Shinkansen), ramen, four seasons, and polite phrases.
- **Strictly N5 Beginner Friendly**:
  - **No Kanji**: Written 100% in pure Hiragana and Katakana.
  - **Wakachigaki (わかちがき)**: Natural word-spacing to help beginners instantly distinguish words and grammatical particles (`は`, `が`, `を`, `に`, `で`).
  - **JLPT N5 Vocabulary**: High-frequency beginner words with optional vocabulary breakdown chips.
- **Interactive Sentence-by-Sentence Dropdowns**:
  - Each sentence has two dedicated toggle options:
    - 🔤 **Romaji**: English phonetic pronunciation guide.
    - 🌐 **English Meaning**: Accurate, natural sentence translation.
  - Global toggle bar to reveal/hide all Romaji or English translations simultaneously.
- **Native Japanese Text-to-Speech (TTS)**:
  - Powered by browser Web Speech API (`ja-JP`). Tap the speaker icon beside any sentence to hear crystal-clear Japanese pronunciation.
  - Adjustable reading speeds (`0.8x` beginner slow, `1.0x` natural).
- **Speaking Practice Mode (Microphone)**:
  - Future-ready speaking practice module using browser Web Speech Recognition! Read the sentence aloud, and the app calculates pronunciation similarity percentage with encouraging feedback.
- **Kid-Friendly Visual Illustrations**:
  - Built-in colorful theme vector SVG scenes for every story and paragraph (river, forest, Japanese room, school, Mount Fuji, ramen shop, space, seaside).
  - Expandable **AI Image Generation Prompts** included for every scene so you can effortlessly copy prompts and generate photorealistic or storybook images with Midjourney / DALL-E / Imagen.
- **Story Catalog & Indexing**:
  - Stories are cleanly indexed (#1 to #20), never cluttered on a single page.
  - Search by Japanese title, Romaji, English, or keywords.
  - Filter by category pills (Folktales, Animals, Daily Life, School, Food, Adventure, Fantasy).
  - LocalStorage progress tracker and confetti celebrations!
- **Interactive Kana 50-Sound Chart (ひらがな ひょう)**:
  - Tap any syllable on the Kana chart to listen to its pronunciation.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 How to Deploy to GitHub Pages

This project is pre-configured with relative base paths (`base: './'`) and URL hash routing (`#/story/story-01`), making it completely foolproof on GitHub Pages.

### Method 1: Automatic GitHub Actions (Recommended)

1. Create a repository on GitHub (e.g. `learn-japanese`).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Nihongo Yomou"
   git branch -M main
   git remote add origin https://github.com/<your-username>/learn-japanese.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site at `https://<your-username>.github.io/learn-japanese/`!

### Method 2: Manual / gh-pages Branch

If you prefer building locally and pushing to `gh-pages`:
```bash
npm run build
# Deploy the contents of the `dist/` directory to your `gh-pages` branch.
```

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD
├── public/
│   └── 404.html                # GitHub Pages SPA fallback
├── src/
│   ├── types/
│   │   └── story.ts            # TypeScript definitions (Story, Sentence, Vocab)
│   ├── data/
│   │   ├── storiesGroup1.ts    # Stories 1 - 5 (Momotaro, Mii-chan, School, etc.)
│   │   ├── storiesGroup2.ts    # Stories 6 - 10 (Omusubi, Shinkansen, Kaguya, etc.)
│   │   ├── storiesGroup3.ts    # Stories 11 - 15 (Robot Hello, Crane, Frog, etc.)
│   │   ├── storiesGroup4.ts    # Stories 16 - 20 (Kintaro, Ramen, Space, Seasons, etc.)
│   │   └── index.ts            # Story index & search filter utilities
│   ├── utils/
│   │   ├── speech.ts           # Web Speech API TTS engine (ja-JP)
│   │   └── speechRecognition.ts# Web Speech Recognition speaking practice
│   ├── components/
│   │   ├── Navbar.tsx          # App header with logo, chart toggle, progress
│   │   ├── StoryCatalog.tsx    # Index catalog with search & filters
│   │   ├── StoryCard.tsx       # Story preview card
│   │   ├── StoryReader.tsx     # Sentence-by-sentence reading interface
│   │   ├── StoryIllustration.tsx # Thematic SVG vector scene & AI prompt viewer
│   │   ├── HiraganaChartModal.tsx# Interactive Kana 50-sound audio reference
│   │   └── Footer.tsx          # App footer with N5 tips & roadmap
│   ├── App.tsx                 # Hash routing & global state
│   ├── main.tsx                # Entrypoint
│   └── index.css               # Tailwind CSS & Japanese font styling
├── package.json
├── tailwind.config.js
├── vite.config.ts              # Vite config with relative base path './'
└── tsconfig.json
```

---

## 🔮 Future Roadmap (Phase 2 & Beyond)

- **AI Image Asset Integration**: Simply drop custom AI-generated PNG/JPG files into `public/images/stories/` and link them in the story data.
- **Enhanced Voice Evaluation**: Expand Web Speech Recognition with real-time phoneme matching and score history.
- **Vocabulary Flashcards**: Interactive spaced repetition flashcards for all N5 vocabulary found in the stories.
