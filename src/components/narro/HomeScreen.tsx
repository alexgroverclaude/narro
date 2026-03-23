"use client";

const A = "#E8553A";
const GOLD = "#FF9500";
const BLACK = "#111110";
const GRAY = "#8E8E93";
const BORDER = "#E5E5EA";
const BG = "#F5F5F5";

const categories = [
  { name: "Food", emoji: "🍜", bg: "#FFF0EE", dot: "#E8553A" },
  { name: "Cafés", emoji: "☕", bg: "#FFF3E8", dot: "#C47A2A" },
  { name: "Drinks", emoji: "🍸", bg: "#F0EEFF", dot: "#5856D6" },
  { name: "Events", emoji: "🎭", bg: "#FFF0F4", dot: "#FF2D55" },
  { name: "Beauty", emoji: "✂️", bg: "#FFF0F7", dot: "#FF4181" },
  { name: "Fitness", emoji: "🏃", bg: "#EDFFF3", dot: "#30C05D" },
  { name: "Hotels", emoji: "🏨", bg: "#EEF2FF", dot: "#3B5BDB" },
  { name: "Cinema", emoji: "🎬", bg: "#F0F0F5", dot: "#3D3D3D" },
  { name: "Shopping", emoji: "🛍️", bg: "#E8FEFF", dot: "#00BCD4" },
  { name: "More", emoji: "···", bg: "#F0F0F0", dot: "#8E8E93" },
];

const mustEat = [
  { rank: 1, name: "Brat", cuisine: "Modern British", area: "Shoreditch", rating: 4.8, g: "linear-gradient(135deg,#E8553A,#B33020)" },
  { rank: 2, name: "Manteca", cuisine: "Italian", area: "Shoreditch", rating: 4.7, g: "linear-gradient(135deg,#C4956A,#8B5E3C)" },
  { rank: 3, name: "Darjeeling Express", cuisine: "Indian", area: "Soho", rating: 4.6, g: "linear-gradient(135deg,#E8A030,#C27310)" },
  { rank: 4, name: "Smokestak", cuisine: "BBQ", area: "Shoreditch", rating: 4.7, g: "linear-gradient(135deg,#5C3D2E,#3A2318)" },
  { rank: 5, name: "Native", cuisine: "British", area: "Borough", rating: 4.5, g: "linear-gradient(135deg,#4A7C59,#2D5A3D)" },
];

const badges: Record<number, { label: string; bg: string; color: string }> = {
  1: { label: "🥇 #1", bg: "#FFF3CD", color: "#B8860B" },
  2: { label: "🥈 #2", bg: "#F0F0F0", color: "#888" },
  3: { label: "🥉 #3", bg: "#FBE8D9", color: "#C97A4A" },
};

const restaurants = [
  {
    name: "Brat",
    tags: ["Must-Eat", "Trending"],
    rating: 4.8, reviews: "2,341", cuisine: "Modern British", area: "Shoreditch",
    price: "£££", avg: "£80pp", dist: "0.4 mi",
    g: "linear-gradient(135deg,#E8553A,#B33020)",
  },
  {
    name: "Manteca",
    tags: ["Must-Eat"],
    rating: 4.7, reviews: "1,892", cuisine: "Italian", area: "Shoreditch",
    price: "££", avg: "£45pp", dist: "0.6 mi",
    g: "linear-gradient(135deg,#C4956A,#8B5E3C)",
  },
  {
    name: "Darjeeling Express",
    tags: ["New"],
    rating: 4.6, reviews: "3,218", cuisine: "Indian", area: "Soho",
    price: "££", avg: "£35pp", dist: "1.2 mi",
    g: "linear-gradient(135deg,#E8A030,#C27310)",
  },
  {
    name: "Smokestak",
    tags: ["Trending"],
    rating: 4.7, reviews: "2,109", cuisine: "BBQ", area: "Shoreditch",
    price: "££", avg: "£42pp", dist: "0.8 mi",
    g: "linear-gradient(135deg,#5C3D2E,#3A2318)",
  },
  {
    name: "Flat Iron",
    tags: [],
    rating: 4.5, reviews: "8,432", cuisine: "Steak", area: "Covent Garden",
    price: "££", avg: "£28pp", dist: "1.5 mi",
    g: "linear-gradient(135deg,#9B3A3A,#6B1515)",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: GOLD, fontSize: 11 }}>
      {"★".repeat(Math.floor(n))}{"☆".repeat(5 - Math.floor(n))}
    </span>
  );
}

function TagPill({ label }: { label: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    "Must-Eat": { bg: "#FFF0EE", color: A },
    "Trending": { bg: "#FFF8E7", color: "#B8860B" },
    "New": { bg: "#EDFFF3", color: "#1B9C52" },
  };
  const style = map[label] || { bg: "#F0F0F0", color: "#666" };
  return (
    <span style={{ background: style.bg, color: style.color, fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20 }}>
      {label}
    </span>
  );
}

export default function HomeScreen() {
  return (
    <div style={{ width: 430, background: BG, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", overflowY: "auto", overflowX: "hidden", height: 932 }}>
      {/* Status Bar */}
      <div style={{ background: "#fff", padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: BLACK }}>9:41</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="3" width="3" height="9" rx="1" fill={BLACK} opacity="0.35"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill={BLACK} opacity="0.6"/><rect x="9" y="0.5" width="3" height="11.5" rx="1" fill={BLACK}/><rect x="13.5" y="0.5" width="3" height="11.5" rx="1" fill={BLACK} opacity="0.4"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 2.5 C5 2.5 2.5 4.5 2.5 7 C2.5 9.5 5 11.5 8 11.5 C11 11.5 13.5 9.5 13.5 7" stroke={BLACK} strokeWidth="1.5" fill="none" opacity="0.4"/><path d="M8 4.5 C6 4.5 4.5 5.8 4.5 7.5 C4.5 9.2 6 10.5 8 10.5 C10 10.5 11.5 9.2 11.5 7.5" stroke={BLACK} strokeWidth="1.5" fill="none" opacity="0.7"/><circle cx="8" cy="9" r="1.5" fill={BLACK}/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={BLACK} strokeOpacity="0.35"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill={BLACK}/><path d="M23 4.5v3a1.5 1.5 0 000-3z" fill={BLACK} fillOpacity="0.4"/></svg>
        </div>
      </div>

      {/* Top Nav */}
      <div style={{ background: "#fff", padding: "8px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{ display: "flex", alignItems: "center", gap: 5, border: "none", background: "none", cursor: "pointer", padding: 0 }}>
          <span style={{ fontSize: 14 }}>📍</span>
          <span style={{ fontSize: 17, fontWeight: 700, color: BLACK }}>London</span>
          <span style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>▼</span>
        </button>
        <div style={{ display: "flex", gap: 16 }}>
          <button style={{ border: "none", background: "none", cursor: "pointer", padding: 4 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2C8 2 5.5 4.5 5.5 7.5c0 4.5 5.5 11 5.5 11s5.5-6.5 5.5-11C16.5 4.5 14 2 11 2z" stroke={BLACK} strokeWidth="1.6" fill="none"/><circle cx="11" cy="7.5" r="2" stroke={BLACK} strokeWidth="1.6" fill="none"/></svg>
          </button>
          <button style={{ border: "none", background: "none", cursor: "pointer", padding: 4, position: "relative" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 16h14M4 11h14M4 6h14" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round"/></svg>
            <span style={{ position: "absolute", top: 2, right: 2, width: 8, height: 8, borderRadius: "50%", background: A, border: "1.5px solid #fff" }}/>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ background: "#fff", padding: "0 16px 14px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ background: BG, borderRadius: 12, padding: "11px 14px", display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke={GRAY} strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke={GRAY} strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={{ fontSize: 14, color: GRAY }}>Search restaurants, bars, activities...</span>
        </div>
      </div>

      {/* Category Grid */}
      <div style={{ background: "#fff", margin: "8px 0 0", padding: "14px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
          {categories.map((c) => (
            <button key={c.name} style={{ border: "none", background: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: 4 }}>
              <div style={{ width: 50, height: 50, borderRadius: 16, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {c.emoji}
              </div>
              <span style={{ fontSize: 11, color: BLACK, fontWeight: 500, textAlign: "center" }}>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ borderRadius: 16, overflow: "hidden", height: 120, background: "linear-gradient(135deg,#E8553A 0%,#C2302A 100%)", position: "relative", display: "flex", alignItems: "center", padding: "0 20px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 600, letterSpacing: 0.5, marginBottom: 4 }}>LONDON RESTAURANT WEEK</div>
            <div style={{ fontSize: 21, fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>Up to 40% off<br/>at 200+ venues</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>Ends Sun 23 Mar →</div>
          </div>
          <div style={{ fontSize: 52, opacity: 0.2, position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }}>🍽️</div>
        </div>
      </div>

      {/* Must-Eat List */}
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px 10px" }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: BLACK }}>🏆 Must-Eat List — London 2026</span>
          <span style={{ fontSize: 13, color: A, fontWeight: 600 }}>See All</span>
        </div>
        <div style={{ display: "flex", gap: 12, paddingLeft: 16, paddingRight: 16, overflowX: "auto" }}>
          {mustEat.map((r) => (
            <div key={r.name} style={{ flexShrink: 0, width: 130, background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 80, background: r.g, position: "relative" }}>
                {badges[r.rank] && (
                  <div style={{ position: "absolute", top: 8, left: 8, background: badges[r.rank].bg, color: badges[r.rank].color, fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 20 }}>
                    {badges[r.rank].label}
                  </div>
                )}
                {!badges[r.rank] && (
                  <div style={{ position: "absolute", top: 8, left: 8, background: "rgba(0,0,0,0.4)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 20 }}>
                    #{r.rank}
                  </div>
                )}
              </div>
              <div style={{ padding: "9px 10px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: BLACK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.name}</div>
                <div style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>{r.cuisine}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <span style={{ color: GOLD, fontSize: 11 }}>★</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: BLACK }}>{r.rating}</span>
                  <span style={{ fontSize: 11, color: GRAY }}>· {r.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Near You */}
      <div style={{ marginTop: 20, padding: "0 16px" }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: BLACK, marginBottom: 12 }}>Recommended Near You</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {restaurants.map((r) => (
            <div key={r.name} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
              <div style={{ height: 130, background: r.g, position: "relative" }}>
                <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.45)", color: "#fff", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>
                  {r.dist}
                </div>
              </div>
              <div style={{ padding: "12px 14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: BLACK }}>{r.name}</div>
                    <div style={{ display: "flex", gap: 5, marginTop: 4 }}>
                      {r.tags.map((t) => <TagPill key={t} label={t} />)}
                    </div>
                  </div>
                  <button style={{ border: "none", background: "none", cursor: "pointer", padding: 4 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 17.5S2.5 12.5 2.5 7.5a4.5 4.5 0 019 0 4.5 4.5 0 019 0C20.5 12.5 10 17.5 10 17.5z" stroke={GRAY} strokeWidth="1.5" fill="none"/></svg>
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 7 }}>
                  <Stars n={r.rating} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: BLACK }}>{r.rating}</span>
                  <span style={{ fontSize: 12, color: GRAY }}>({r.reviews} reviews)</span>
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 7, alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: GRAY }}>{r.cuisine}</span>
                  <span style={{ color: BORDER, fontSize: 10 }}>|</span>
                  <span style={{ fontSize: 12, color: GRAY }}>{r.area}</span>
                  <span style={{ color: BORDER, fontSize: 10 }}>|</span>
                  <span style={{ fontSize: 12, color: GRAY, fontWeight: 600 }}>{r.price}</span>
                  <span style={{ color: BORDER, fontSize: 10 }}>|</span>
                  <span style={{ fontSize: 12, color: GRAY }}>{r.avg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar Spacer */}
      <div style={{ height: 90 }} />
    </div>
  );
}
