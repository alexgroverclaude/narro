"use client";

const A = "#E8553A";
const GREEN = "#07C160";
const GOLD = "#FF9500";
const BLACK = "#111110";
const GRAY = "#8E8E93";
const BORDER = "#E5E5EA";
const BG = "#F5F5F5";

const reviews = [
  {
    avatar: "E",
    avatarBg: "#5856D6",
    name: "Ella R.",
    time: "2 days ago",
    stars: 5,
    text: "The wood-fired turbot was absolutely otherworldly — golden, smoky, with charred herbs that perfumed the whole table. Brat's cooking is deceptively simple: quality ingredients treated with respect and fire. One of the best meals I've had in London this year.",
    photos: ["linear-gradient(135deg,#E8553A,#B33020)", "linear-gradient(135deg,#C4956A,#8B5E3C)", "linear-gradient(135deg,#5C3D2E,#3A2318)"],
    likes: 142,
    comments: 23,
  },
  {
    avatar: "J",
    avatarBg: "#30C05D",
    name: "James K.",
    time: "5 days ago",
    stars: 5,
    text: "Came for the chicken, stayed for the whole experience. Service was warm and knowledgeable — they walked us through the daily menu with genuine enthusiasm. The leeks with romesco and the lamb chops were standouts. Book well in advance.",
    photos: ["linear-gradient(135deg,#4A7C59,#2D5A3D)", "linear-gradient(135deg,#E8A030,#C27310)"],
    likes: 87,
    comments: 11,
  },
];

function Stars({ n }: { n: number }) {
  return <span style={{ color: GOLD, fontSize: 12 }}>{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;
}

export default function RestaurantDetail() {
  return (
    <div style={{ width: 430, background: BG, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", overflowY: "auto", overflowX: "hidden", height: 932, position: "relative" }}>
      {/* Status Bar */}
      <div style={{ background: "transparent", padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>9:41</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="3" width="3" height="9" rx="1" fill="white" opacity="0.7"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill="white" opacity="0.85"/><rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="white"/><rect x="13.5" y="0.5" width="3" height="11.5" rx="1" fill="white" opacity="0.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.6"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill="white"/><path d="M23 4.5v3a1.5 1.5 0 000-3z" fill="white" fillOpacity="0.5"/></svg>
        </div>
      </div>

      {/* Hero Image */}
      <div style={{ height: 280, background: "linear-gradient(170deg,#B33020 0%,#7B1D10 100%)", position: "relative" }}>
        {/* Overlay gradient for text readability */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
        {/* Hero text overlay */}
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <span style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.2)" }}>
            🔥 Wood-Fired Cooking
          </span>
        </div>
        {/* Nav buttons */}
        <div style={{ position: "absolute", top: 48, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
          <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.4)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.4)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 15.5S2 11 2 6.5a4 4 0 018 0 4 4 0 018 0C18 11 9 15.5 9 15.5z" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>
            </button>
            <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.4)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Info Card */}
      <div style={{ background: "#fff", padding: "18px 16px 0", marginTop: -12, borderRadius: "16px 16px 0 0", position: "relative", zIndex: 5 }}>
        {/* Name + Tags */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: BLACK, margin: 0, lineHeight: 1.15 }}>Brat</h1>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
              <span style={{ background: "#FFF0EE", color: A, fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20 }}>Must-Eat</span>
              <span style={{ background: "#FFF8E7", color: "#B8860B", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20 }}>Trending</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: A }}>4.8</div>
            <div style={{ fontSize: 11, color: GRAY }}>12,843 reviews</div>
          </div>
        </div>

        {/* Rating + Price */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
          <span style={{ color: GOLD, fontSize: 16 }}>★★★★★</span>
          <span style={{ fontSize: 13, color: GRAY }}>Modern British · Shoreditch</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: BLACK, marginLeft: "auto" }}>£££</span>
          <span style={{ fontSize: 13, color: GRAY }}>~£80pp</span>
        </div>

        {/* Score Breakdown — Dianping style */}
        <div style={{ padding: "16px 0", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 12, color: GRAY, fontWeight: 600, marginBottom: 12, letterSpacing: 0.3 }}>SCORE BREAKDOWN</div>
          <div style={{ display: "flex", gap: 0 }}>
            {[{ label: "Taste", score: 9.2 }, { label: "Service", score: 9.0 }, { label: "Ambiance", score: 8.8 }].map((s, i) => (
              <div key={s.label} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? `1px solid ${BORDER}` : "none" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: A }}>{s.score}</div>
                <div style={{ fontSize: 12, color: GRAY, marginTop: 2, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}` }}>
          {[
            { icon: "📍", text: "First Floor, 4 Redchurch Street, Shoreditch, E2 7DD" },
            { icon: "🕐", text: "Tue–Sat 12:00–15:00, 18:00–22:30  ·  Open Now" },
            { icon: "📞", text: "+44 20 7729 5692" },
            { icon: "💰", text: "Average spend £80 per person" },
          ].map((item) => (
            <div key={item.icon} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <span style={{ fontSize: 13, color: BLACK, lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", borderBottom: `1px solid ${BORDER}`, marginTop: 4 }}>
          {["Menu & Info", "Reviews (12,843)", "Deals & Vouchers"].map((tab, i) => (
            <button key={tab} style={{ flex: 1, border: "none", background: "none", padding: "12px 4px", fontSize: 12, fontWeight: i === 1 ? 700 : 500, color: i === 1 ? A : GRAY, cursor: "pointer", borderBottom: i === 1 ? `2px solid ${A}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div style={{ padding: "16px 16px 0", background: BG }}>
        {reviews.map((r) => (
          <div key={r.name} style={{ background: "#fff", borderRadius: 16, padding: "14px", marginBottom: 12, boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: r.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>
                  {r.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: BLACK }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: GRAY }}>{r.time}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
                <Stars n={r.stars} />
              </div>
            </div>
            <p style={{ fontSize: 13, color: BLACK, lineHeight: 1.55, margin: 0 }}>{r.text}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {r.photos.map((p, i) => (
                <div key={i} style={{ width: 80, height: 80, borderRadius: 10, background: p, flexShrink: 0 }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 12, paddingTop: 10, borderTop: `1px solid ${BORDER}` }}>
              <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: GRAY, fontSize: 13 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 13.5S1.5 9.5 1.5 5.5a3.5 3.5 0 017 0 3.5 3.5 0 017 0C15.5 9.5 8 13.5 8 13.5z" stroke={GRAY} strokeWidth="1.3" fill="none"/></svg>
                {r.likes}
              </button>
              <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: GRAY, fontSize: 13 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2h12a1 1 0 011 1v7a1 1 0 01-1 1H5l-3 3V3a1 1 0 011-1z" stroke={GRAY} strokeWidth="1.3" fill="none"/></svg>
                {r.comments}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom sticky action bar */}
      <div style={{ position: "sticky", bottom: 0, background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "12px 16px", display: "flex", gap: 10, paddingBottom: 28 }}>
        <button style={{ width: 44, height: 44, borderRadius: 12, border: `1.5px solid ${BORDER}`, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
          📞
        </button>
        <button style={{ flex: 1, height: 44, borderRadius: 12, border: "none", background: GREEN, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          🏷️ Buy Voucher
        </button>
        <button style={{ flex: 1, height: 44, borderRadius: 12, border: "none", background: A, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          📅 Reserve Table
        </button>
      </div>
    </div>
  );
}
