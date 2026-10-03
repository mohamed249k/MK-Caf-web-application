from pathlib import Path
import re

root = Path(r"C:\Users\K I N G\OneDrive\Desktop\Antigravity p\first mobil app")
products_dir = root / "assets" / "images" / "products"
products_dir.mkdir(parents=True, exist_ok=True)

items = [
    ("espresso", "☕", "#2E1A19", "#D7A66D"),
    ("cappuccino", "☕", "#4A2C2A", "#E0B982"),
    ("latte", "🥛", "#3C2B2B", "#D6B693"),
    ("americano", "☕", "#38241F", "#C98A5E"),
    ("mocha", "🍫", "#3B1D1E", "#C98A5E"),
    ("flat-white", "☕", "#2F2321", "#E3B87B"),
    ("iced-latte", "🧊", "#2F4A68", "#A7D5F5"),
    ("iced-mocha", "🥤", "#3A2B29", "#D69475"),
    ("frappuccino", "❄️", "#315E76", "#88C7D8"),
    ("spanish-latte", "☕", "#3D2E2C", "#E5B99B"),
    ("mint-tea", "🍃", "#2B5B4A", "#A8D39D"),
    ("green-tea", "🍵", "#1B5E49", "#8BCF9A"),
    ("karak-tea", "🫖", "#6F4025", "#E6C78C"),
    ("cheesecake", "🍰", "#775E4B", "#F0D3A8"),
    ("brownies", "🍫", "#4A2A2E", "#C98A5E"),
    ("cookies", "🍪", "#9E6A3A", "#F7D4A1"),
    ("croissant", "🥐", "#C68A4A", "#F1DEAE"),
    ("mango-juice", "🥭", "#D98A00", "#FFD36C"),
    ("strawberry-juice", "🍓", "#A8354E", "#FF9BB2"),
    ("orange-juice", "🍊", "#E78A1E", "#FFD77C"),
    ("lemon-mint", "🍋", "#A1B83A", "#F4E7A1"),
    ("signature-latte", "✨", "#5A3227", "#DCA170"),
    ("caramel-cloud", "☁️", "#7A4D2A", "#F2C185"),
    ("mk-special", "⭐", "#3E2C28", "#D1A06A"),
]

for slug, emoji, c1, c2 in items:
    label = slug.replace("-", " ").title()
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-label="{slug}">
  <defs>
    <linearGradient id="bg-{slug}" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <radialGradient id="glow-{slug}" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.24"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="800" fill="url(#bg-{slug})"/>
  <rect width="800" height="800" fill="url(#glow-{slug})"/>
  <circle cx="150" cy="120" r="110" fill="rgba(255,255,255,0.08)"/>
  <circle cx="650" cy="180" r="120" fill="rgba(255,255,255,0.08)"/>
  <circle cx="570" cy="660" r="170" fill="rgba(0,0,0,0.12)"/>
  <g transform="translate(0 10)">
    <rect x="205" y="210" width="390" height="230" rx="70" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.22)" stroke-width="6"/>
    <rect x="260" y="310" width="280" height="160" rx="42" fill="rgba(255,255,255,0.16)"/>
    <path d="M270 350 Q400 280 530 350" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="10" stroke-linecap="round"/>
    <path d="M360 250 C300 220, 250 220, 230 250" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="12" stroke-linecap="round"/>
    <path d="M440 250 C500 220, 550 220, 570 250" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="12" stroke-linecap="round"/>
    <text x="400" y="470" text-anchor="middle" font-size="160" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif">{emoji}</text>
  </g>
  <rect x="90" y="610" width="620" height="110" rx="28" fill="rgba(18,12,11,0.18)"/>
  <text x="400" y="675" text-anchor="middle" font-size="48" font-weight="700" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" letter-spacing="2">{label}</text>
</svg>
'''
    (products_dir / f"{slug}.svg").write_text(svg, encoding="utf-8")

app_js = root / "app.js"
text = app_js.read_text(encoding="utf-8")
pattern = re.compile(r"image:\s*'assets/images/products/[^']+'", re.MULTILINE)
files = [f"{slug}.svg" for slug, *_ in items]

new_text, match_count = pattern.subn(
    lambda m: "image: 'assets/images/products/" + files.pop(0) + "'",
    text,
)

if match_count != len(items):
    raise RuntimeError(f"Expected {len(items)} image replacements but found {match_count}")

app_js.write_text(new_text, encoding="utf-8")

all_files = sorted(p.name for p in products_dir.glob("*.svg"))
print(f"generated_svg_count={len(all_files)}")
print(f"unique_filenames={len(set(all_files)) == len(all_files)}")
print(f"sample={all_files[:5]}")
