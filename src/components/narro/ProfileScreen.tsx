"use client";

const A = "#E8553A";
const GOLD = "#FF9500";
const BLACK = "#111110";
const GRAY = "#8E8E93";
const BORDER = "#E5E5EA";
const BG = "#F5F5F5";

const stats = [
  { label: "Reviews", value: "47" },
  { label: "Following", value: "182" },
  { label: "Followers", value: "341" },
  { label: "Vouchers", value: "8" },
];

const menuItems = [
  { icon: "⭐", label: "My Reviews", count: "47", color: GOLD },
  { icon: "🔖", label: "Saved Places", count: "23", color: "#5856D6" },
  { icon: "🏷️", label: "My Vouchers", count: "8", color: A },
  { icon: "📅", label: "Reservations", count: "2 upcoming", color: "#30C05D" },
  { icon: "📋", label: "My Lists", count: "5", color: "#007AFF" },
  { icon: "🏆", label: "Achievements", count: "12 badges", color: GOLD },
];

const bottomMenu = [
  { icon: "🔔", label: "Notifications" },
  { icon: "🔒", label: "Privacy & Safety" },
  { icon: "⚙️", label: "Settings" },
  { icon: "❓", label: "Help & Support" },
];

export default function ProfileScreen() {
  return (
    <div style={{ width: 430, background: BG, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", overflowY: "auto", overflowX: "hidden", height: 932 }}>
      {/* Hero Header with gradient */}
      <div style={{ background: "linear-gradient(160deg,#E8553A 0%,#C2302A 100%)", paddingBottom: 24, position: "relative", overflow: "hidden" }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
        <div style={{ position: "absolute", top: 40, right: 20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />

        {/* Status Bar */}
        <div style={{ padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>9:41</span>
          <div style={{ display: "flex", gap: 6 }}>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.6"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill="white"/></svg>
          </div>
        </div>

        {/* Header title */}
        <div style={{ padding: "8px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#fff" }}>Me</h1>
          <button style={{ border: "none", background: "rgba(255,255,255,0.15)", cursor: "pointer", width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/><path d="M9 6v4M9 11.5v.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Avatar + user info */}
        <div style={{ padding: "0 16px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 74, height: 74, borderRadius: "50%", background: "linear-gradient(135deg,#fff,#f0f0f0)", border: "3px solid rgba(255,255,255,0.8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>
              S
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, borderRadius: "50%", background: "#30C05D", border: "2.5px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 19, fontWeight: 800, color: "#fff" }}>Sophie Chen</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>@sophialondon</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>📍 London · Joined Jan 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ background: "#fff", display: "flex", borderBottom: `1px solid ${BORDER}`, marginTop: -1 }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ flex: 1, padding: "14px 4px", textAlign: "center", borderRight: i < 3 ? `1px solid ${BORDER}` : "none" }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: BLACK }}>{s.value}</div>
            <div style={{ fontSize: 11, color: GRAY, marginTop: 2, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Level Badge */}
      <div style={{ background: "#fff", margin: "8px 16px", borderRadius: 16, padding: "14px 16px", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#FFD700,#FF9500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
              🏅
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: BLACK }}>Lv3 — Gold Explorer</div>
              <div style={{ fontSize: 12, color: GRAY }}>78% to Level 4</div>
            </div>
          </div>
          <span style={{ fontSize: 12, color: A, fontWeight: 600 }}>View Perks</span>
        </div>
        {/* Progress Bar */}
        <div style={{ height: 8, background: "#F0F0F0", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: "78%", height: "100%", background: "linear-gradient(90deg,#FFD700,#FF9500)", borderRadius: 4 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: GRAY }}>1,240 points</span>
          <span style={{ fontSize: 11, color: GRAY }}>1,600 points for Lv4</span>
        </div>
      </div>

      {/* Main Menu Items */}
      <div style={{ background: "#fff", margin: "8px 0", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        {menuItems.map((item, i) => (
          <button key={item.label} style={{ width: "100%", border: "none", background: "none", cursor: "pointer", padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, borderBottom: i < menuItems.length - 1 ? `1px solid ${BORDER}` : "none", textAlign: "left" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>
              {item.icon}
            </div>
            <span style={{ flex: 1, fontSize: 15, color: BLACK, fontWeight: 500 }}>{item.label}</span>
            <span style={{ fontSize: 13, color: GRAY }}>{item.count}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke={GRAY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        ))}
      </div>

      {/* Bottom Menu */}
      <div style={{ background: "#fff", margin: "8px 0", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        {bottomMenu.map((item, i) => (
          <button key={item.label} style={{ width: "100%", border: "none", background: "none", cursor: "pointer", padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, borderBottom: i < bottomMenu.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <span style={{ fontSize: 17, flexShrink: 0, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F5F5", borderRadius: 10 }}>
              {item.icon}
            </span>
            <span style={{ flex: 1, fontSize: 15, color: BLACK, fontWeight: 500, textAlign: "left" }}>{item.label}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke={GRAY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        ))}
      </div>

      {/* Sign Out */}
      <div style={{ padding: "8px 16px" }}>
        <button style={{ width: "100%", border: `1.5px solid ${BORDER}`, background: "#fff", color: "#FF3B30", fontSize: 15, fontWeight: 600, padding: "14px", borderRadius: 14, cursor: "pointer" }}>
          Sign Out
        </button>
      </div>

      <div style={{ height: 90 }} />
    </div>
  );
}
