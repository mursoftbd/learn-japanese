import React, { useState } from 'react';
import { StoryImage } from '../types/story';
import { Sparkles, Copy, Check, Image as ImageIcon } from 'lucide-react';

interface Props {
  image: StoryImage;
  storyTitle: string;
  paragraphIndex: number;
}

export const StoryIllustration: React.FC<Props> = ({ image, storyTitle, paragraphIndex }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(image.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render thematic SVG scene for beginner/child-friendly aesthetic
  const renderSvgTheme = (theme: StoryImage['svgTheme']) => {
    switch (theme) {
      case 'river':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" fill="url(#skyGrad)" />
            <circle cx="340" cy="50" r="30" fill="#fef08a" opacity="0.9" />
            {/* Green Rolling Hills */}
            <path d="M-20,180 Q80,110 180,160 T380,140 T420,170 L420,240 L-20,240 Z" fill="#86efac" />
            <path d="M0,170 Q110,130 220,175 T420,150 L420,240 L0,240 Z" fill="#4ade80" />
            {/* Sparkling Winding River */}
            <path d="M60,165 Q160,195 240,185 T400,225 L400,240 L0,240 L0,200 Z" fill="url(#waterGrad)" />
            {/* Ripple details */}
            <path d="M120,200 Q150,195 180,200" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
            <path d="M220,215 Q260,210 300,215" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* Floating Giant Peach */}
            <g transform="translate(180, 160)">
              <circle cx="20" cy="20" r="24" fill="#fda4af" />
              <circle cx="28" cy="20" r="22" fill="#f43f5e" opacity="0.8" />
              <path d="M22, -2 Q24, -12 18, -15" stroke="#15803d" strokeWidth="3" fill="none" />
              <ellipse cx="28" cy="-8" rx="8" ry="4" fill="#22c55e" transform="rotate(-20 28 -8)" />
            </g>
            {/* Sakura Blossom Petals */}
            <circle cx="70" cy="70" r="4" fill="#fbcfe8" />
            <circle cx="110" cy="90" r="3" fill="#fbcfe8" />
            <circle cx="280" cy="60" r="4" fill="#fbcfe8" />
          </svg>
        );

      case 'forest':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#ecfdf5" />
            {/* Sun Rays & Trees */}
            <circle cx="80" cy="60" r="45" fill="#fef08a" opacity="0.6" />
            {/* Bamboo / Trees */}
            <rect x="50" y="70" width="16" height="170" rx="4" fill="#10b981" />
            <line x1="50" y1="120" x2="66" y2="120" stroke="#047857" strokeWidth="2" />
            <line x1="50" y1="160" x2="66" y2="160" stroke="#047857" strokeWidth="2" />
            <rect x="300" y="60" width="18" height="180" rx="4" fill="#10b981" />
            <line x1="300" y1="110" x2="318" y2="110" stroke="#047857" strokeWidth="2" />
            {/* Big Pine Trees */}
            <polygon points="180,60 140,130 220,130" fill="#059669" />
            <polygon points="180,100 130,170 230,170" fill="#047857" />
            <polygon points="180,140 120,210 240,210" fill="#065f46" />
            <rect x="172" y="210" width="16" height="30" fill="#78350f" />
            {/* Cute Mushroom */}
            <path d="M100,210 C100,195 130,195 130,210 Z" fill="#ef4444" />
            <circle cx="110" cy="202" r="2.5" fill="#ffffff" />
            <circle cx="120" cy="205" r="2" fill="#ffffff" />
            <rect x="112" y="210" width="6" height="12" fill="#fef3c7" rx="2" />
          </svg>
        );

      case 'home':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            {/* Warm room wallpaper */}
            <rect width="400" height="240" fill="#fef3c7" />
            {/* Tatami Floor */}
            <rect x="0" y="160" width="400" height="80" fill="#e2d9b8" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="#78350f" strokeWidth="4" />
            <line x1="130" y1="160" x2="130" y2="240" stroke="#a89f78" strokeWidth="2" />
            <line x1="270" y1="160" x2="270" y2="240" stroke="#a89f78" strokeWidth="2" />
            {/* Shoji Window with Sunlight */}
            <rect x="60" y="30" width="140" height="100" fill="#ffffff" stroke="#92400e" strokeWidth="4" />
            <line x1="60" y1="80" x2="200" y2="80" stroke="#b45309" strokeWidth="2" />
            <line x1="130" y1="30" x2="130" y2="130" stroke="#b45309" strokeWidth="2" />
            {/* Cushion & Sleeping Cat / Teacup */}
            <ellipse cx="280" cy="190" rx="45" ry="18" fill="#fb7185" />
            {/* Cozy Cat */}
            <circle cx="280" cy="180" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <polygon points="268,168 273,160 278,168" fill="#fda4af" />
            <polygon points="282,168 287,160 292,168" fill="#fda4af" />
            {/* Japanese Teacup */}
            <rect x="160" y="170" width="22" height="20" rx="3" fill="#38bdf8" />
            <path d="M167,162 Q169,155 166,150" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          </svg>
        );

      case 'mountain':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#e0f2fe" />
            {/* Red Rising Sun */}
            <circle cx="200" cy="110" r="50" fill="#f87171" opacity="0.85" />
            {/* Mount Fuji */}
            <polygon points="200,60 80,240 320,240" fill="#3b82f6" />
            {/* Snow Crown */}
            <polygon points="200,60 160,110 180,105 200,120 220,105 240,110" fill="#ffffff" />
            {/* Fluffy Clouds */}
            <ellipse cx="70" cy="90" rx="35" ry="16" fill="#ffffff" opacity="0.9" />
            <ellipse cx="100" cy="85" rx="25" ry="14" fill="#ffffff" opacity="0.9" />
            <ellipse cx="320" cy="80" rx="40" ry="18" fill="#ffffff" opacity="0.9" />
            {/* Red Pagoda / Maple detail */}
            <path d="M0,210 Q200,190 400,210 L400,240 L0,240 Z" fill="#22c55e" />
          </svg>
        );

      case 'beach':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#bae6fd" />
            <circle cx="330" cy="50" r="32" fill="#fde047" />
            {/* Ocean Waves */}
            <path d="M0,120 Q100,105 200,120 T400,120 L400,240 L0,240 Z" fill="#0284c7" />
            <path d="M0,145 Q100,135 200,145 T400,145 L400,240 L0,240 Z" fill="#38bdf8" />
            {/* Yellow Beach Sand */}
            <path d="M0,175 Q150,165 300,185 T400,195 L400,240 L0,240 Z" fill="#fde68a" />
            {/* Striped Beach Parasol */}
            <g transform="translate(80, 130)">
              <line x1="20" y1="20" x2="35" y2="70" stroke="#78350f" strokeWidth="3" />
              <path d="M0,20 Q20,-10 40,20 Z" fill="#ef4444" />
              <path d="M10,20 Q20,-10 30,20 Z" fill="#ffffff" />
            </g>
            {/* Little Sea Turtle or starfish */}
            <circle cx="280" cy="205" r="5" fill="#f97316" />
          </svg>
        );

      case 'kitchen':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#fff7ed" />
            {/* Kitchen counter */}
            <rect x="0" y="140" width="400" height="100" fill="#fed7aa" />
            <line x1="0" y1="140" x2="400" y2="140" stroke="#ea580c" strokeWidth="4" />
            {/* Giant Ramen / Soup Bowl */}
            <ellipse cx="200" cy="170" rx="55" ry="18" fill="#ef4444" />
            <path d="M145,170 C145,215 255,215 255,170 Z" fill="#dc2626" />
            <ellipse cx="200" cy="170" rx="50" ry="14" fill="#fbbf24" />
            {/* Ramen Toppings */}
            <ellipse cx="180" cy="170" rx="12" ry="7" fill="#ffffff" />
            <circle cx="180" cy="170" r="4" fill="#f59e0b" />
            <rect x="205" y="165" width="20" height="6" fill="#15803d" rx="2" />
            {/* Rising Steam */}
            <path d="M185,150 Q180,135 188,120" stroke="#f97316" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
            <path d="M205,150 Q212,130 205,115" stroke="#f97316" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
          </svg>
        );

      case 'night':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#0f172a" />
            {/* Twinkling Stars */}
            <circle cx="50" cy="40" r="2" fill="#ffffff" />
            <circle cx="120" cy="70" r="2.5" fill="#fef08a" />
            <circle cx="280" cy="30" r="3" fill="#ffffff" />
            <circle cx="340" cy="90" r="1.5" fill="#ffffff" />
            <circle cx="90" cy="140" r="2" fill="#ffffff" />
            <circle cx="230" cy="65" r="2" fill="#fef08a" />
            {/* Giant Glowing Moon */}
            <circle cx="200" cy="110" r="50" fill="#fde047" />
            <circle cx="215" cy="100" r="48" fill="#0f172a" opacity="0.1" />
            {/* Whimsical Cloud passing moon */}
            <ellipse cx="160" cy="130" rx="40" ry="12" fill="#334155" opacity="0.7" />
            <ellipse cx="220" cy="125" rx="50" ry="14" fill="#334155" opacity="0.7" />
          </svg>
        );

      case 'school':
      default:
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#f0fdf4" />
            {/* Blackboard */}
            <rect x="70" y="30" width="260" height="130" rx="8" fill="#14532d" stroke="#854d0e" strokeWidth="6" />
            <text x="95" y="75" fill="#ffffff" fontSize="22" fontFamily="monospace" fontWeight="bold">あ い う え お</text>
            <text x="95" y="115" fill="#fef08a" fontSize="22" fontFamily="monospace" fontWeight="bold">か き く け こ</text>
            <circle cx="290" cy="80" r="14" fill="none" stroke="#ef4444" strokeWidth="4" />
            {/* Teacher desk with apple and books */}
            <rect x="0" y="180" width="400" height="60" fill="#e2e8f0" />
            <rect x="150" y="160" width="100" height="30" rx="3" fill="#d97706" />
            <rect x="170" y="152" width="28" height="8" rx="2" fill="#3b82f6" />
            <circle cx="220" cy="155" r="7" fill="#ef4444" />
          </svg>
        );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-amber-200/70 bg-amber-50/50 shadow-md transition-all duration-300 hover:shadow-lg">
      {/* Visual Header / Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        {image.src ? (
          <img
            src={image.src}
            alt={image.altJa}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          renderSvgTheme(image.svgTheme)
        )}

        {/* Floating Theme Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur-sm">
          <ImageIcon className="h-3.5 w-3.5 text-sakura-500" />
          <span>Scene {paragraphIndex + 1}</span>
        </div>

        {/* AI Prompt Button for future image generation */}
        <button
          onClick={() => setShowPrompt(!showPrompt)}
          title="View AI Image Generation Prompt"
          className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-amber-100 hover:text-amber-900"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span>{showPrompt ? 'Hide Prompt' : 'Image Prompt'}</span>
        </button>
      </div>

      {/* Caption bar */}
      <div className="bg-white/90 px-4 py-2.5 border-t border-amber-100">
        <p className="font-japanese text-sm text-slate-700 leading-snug">
          {image.altJa}
        </p>
        <p className="text-xs text-slate-500 mt-0.5 italic">
          {image.altEn}
        </p>
      </div>

      {/* Expandable Prompt Drawer for Image Generation */}
      {showPrompt && (
        <div className="border-t border-amber-200 bg-amber-50/90 p-4 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              AI Image Generation Prompt ({storyTitle})
            </span>
            <button
              onClick={handleCopyPrompt}
              className="flex items-center gap-1 rounded-md bg-amber-200/80 px-2.5 py-1 text-xs font-medium text-amber-900 transition-colors hover:bg-amber-300"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-green-700" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs font-mono text-slate-700 bg-white/80 p-2.5 rounded-lg border border-amber-200/70 select-all leading-relaxed">
            {image.prompt}
          </p>
          <p className="text-[11px] text-slate-500 mt-2">
            Tip: You can use Midjourney, DALL-E, or Imagen to generate this picture and place it into your assets folder!
          </p>
        </div>
      )}
    </div>
  );
};
