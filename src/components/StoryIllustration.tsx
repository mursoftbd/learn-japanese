import React, { useState } from 'react';
import { StoryImage } from '../types/story';
import { Image as ImageIcon } from 'lucide-react';

interface Props {
  image: StoryImage;
  paragraphIndex: number;
}

export const StoryIllustration: React.FC<Props> = ({ image, paragraphIndex }) => {
  const [imageError, setImageError] = useState(false);

  // Resolve image source with Vite's BASE_URL for GitHub Pages
  const getImageSrc = () => {
    if (!image.src) return null;
    if (image.src.startsWith('http://') || image.src.startsWith('https://')) {
      return image.src;
    }
    const cleanPath = image.src.replace(/^\.?\//, '');
    const baseUrl = import.meta.env.BASE_URL || './';
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${normalizedBase}${cleanPath}`;
  };

  const imageSrc = getImageSrc();

  // Render thematic SVG scene as fallback if image cannot be loaded
  const renderSvgTheme = (theme?: StoryImage['svgTheme']) => {
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
            <path d="M-20,180 Q80,110 180,160 T380,140 T420,170 L420,240 L-20,240 Z" fill="#86efac" />
            <path d="M0,170 Q110,130 220,175 T420,150 L420,240 L0,240 Z" fill="#4ade80" />
            <path d="M60,165 Q160,195 240,185 T400,225 L400,240 L0,240 L0,200 Z" fill="url(#waterGrad)" />
            <g transform="translate(180, 160)">
              <circle cx="20" cy="20" r="24" fill="#fda4af" />
              <circle cx="28" cy="20" r="22" fill="#f43f5e" opacity="0.8" />
              <path d="M22, -2 Q24, -12 18, -15" stroke="#15803d" strokeWidth="3" fill="none" />
              <ellipse cx="28" cy="-8" rx="8" ry="4" fill="#22c55e" transform="rotate(-20 28 -8)" />
            </g>
          </svg>
        );

      case 'forest':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#ecfdf5" />
            <circle cx="80" cy="60" r="45" fill="#fef08a" opacity="0.6" />
            <rect x="50" y="70" width="16" height="170" rx="4" fill="#10b981" />
            <polygon points="180,60 140,130 220,130" fill="#059669" />
            <polygon points="180,100 130,170 230,170" fill="#047857" />
            <polygon points="180,140 120,210 240,210" fill="#065f46" />
            <rect x="172" y="210" width="16" height="30" fill="#78350f" />
          </svg>
        );

      case 'home':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#fef3c7" />
            <rect x="0" y="160" width="400" height="80" fill="#e2d9b8" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="#78350f" strokeWidth="4" />
            <rect x="60" y="30" width="140" height="100" fill="#ffffff" stroke="#92400e" strokeWidth="4" />
            <ellipse cx="280" cy="190" rx="45" ry="18" fill="#fb7185" />
            <circle cx="280" cy="180" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          </svg>
        );

      case 'mountain':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#e0f2fe" />
            <circle cx="200" cy="110" r="50" fill="#f87171" opacity="0.85" />
            <polygon points="200,60 80,240 320,240" fill="#3b82f6" />
            <polygon points="200,60 160,110 180,105 200,120 220,105 240,110" fill="#ffffff" />
          </svg>
        );

      case 'beach':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#bae6fd" />
            <circle cx="330" cy="50" r="32" fill="#fde047" />
            <path d="M0,120 Q100,105 200,120 T400,120 L400,240 L0,240 Z" fill="#0284c7" />
            <path d="M0,175 Q150,165 300,185 T400,195 L400,240 L0,240 Z" fill="#fde68a" />
          </svg>
        );

      case 'kitchen':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#fff7ed" />
            <rect x="0" y="140" width="400" height="100" fill="#fed7aa" />
            <ellipse cx="200" cy="170" rx="55" ry="18" fill="#ef4444" />
            <path d="M145,170 C145,215 255,215 255,170 Z" fill="#dc2626" />
          </svg>
        );

      case 'night':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#0f172a" />
            <circle cx="50" cy="40" r="2" fill="#ffffff" />
            <circle cx="120" cy="70" r="2.5" fill="#fef08a" />
            <circle cx="280" cy="30" r="3" fill="#ffffff" />
            <circle cx="200" cy="110" r="50" fill="#fde047" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
            <rect width="400" height="240" fill="#f0fdf4" />
            <rect x="70" y="30" width="260" height="130" rx="8" fill="#14532d" stroke="#854d0e" strokeWidth="6" />
            <text x="95" y="75" fill="#ffffff" fontSize="22" fontFamily="monospace" fontWeight="bold">あ い う え お</text>
            <circle cx="290" cy="80" r="14" fill="none" stroke="#ef4444" strokeWidth="4" />
          </svg>
        );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-amber-200/70 bg-amber-50/50 shadow-md transition-all duration-300 hover:shadow-lg">
      {/* Visual Header / Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={image.altJa}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
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
      </div>

      {/* Caption bar */}
      <div className="bg-white/95 px-4 py-3 border-t border-amber-100">
        <p className="font-japanese text-sm font-medium text-slate-800 leading-snug">
          {image.altJa}
        </p>
        <p className="text-xs text-slate-500 mt-1 italic">
          {image.altEn}
        </p>
      </div>
    </div>
  );
};
