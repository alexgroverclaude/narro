"use client";

const A = "#E8553A";
const GREEN = "#07C160";
const BLACK = "#111110";
const GRAY = "#8E8E93";
const BORDER = "#E5E5EA";
const BG = "#F5F5F5";

const filters = ["All", "Food", "Drinks", "Activities", "Beauty", "Fitness"];

const deals = [
  {
    venue: "Sticks'n'Sushi",
    area: "Covent Garden",
    title: "Sushi & Sake Dinner Set for 2",
    originalPrice: 65,
    discountedPrice: 44,
    discountPct: 32,
    sold: "847 bought",
    expiry: "Expires in 3 days",
    g: "linear-gradient(135deg,#2A5B8B,#1A3D6B)",
  },
  {
    venue: "Nightjar",
    area: "Old Street",
    title: "2 Signature Cocktails",
    originalPrice: 22,
    discountedPrice: 14,
    discountPct: 36,
    sold: "2,341 bought",
    expiry: "Expires tomorrow",
    g: "linear-gradient(135deg,#1A1A2E,#0F0F23)",
  },
  {
    venue: "Monmouth Coffee",
    area: "Borough Market",
    title: "Coffee + Pastry Combo",
    originalPrice: 8.5,
    discountedPrice: 5.5,
    discountPct: 35,
    sold: "4,892 bought",
    expiry: "Expires in 5 days",
    g: "linear-gradient(135deg,#5C3D1E,#3A2510)",
  },
  {
    venue: "Franco Manca",
    area: "Brixton",
    title: "3-Course Meal for 2 People",
    originalPrice: 52,
    discountedPrice: 34,
    discountPct: 35,
    sold: "3,211 bought",
    expiry: "Expires in 7 days",
    g: "linear-gradient(135deg,#C84B31,#8B2318)",
  },
  {
    venue: "Flat Iron",
    area: "Covent Garden",
    title: "Steak + House Wine for 1",
    originalPrice: 38,
    discountedPrice: 26,
    discountPct: 32,
    sold: "5,601 bought",
    expiry: "Expires in 2 days",
    g: "linear-gradient(135deg,#9B3A3A,#6B1515)",
  },
  {
    venue: "BOXPARK Shoreditch",
    area: "Shoreditch",
    title: "Street Food Bundle — 4 Dishes",
    originalPrice: 28,
    discountedPrice: 18,
    discountPct: 36,
    sold: "1,893 bought",
    expiry: "Expires in 4 days",
    g: "linear-gradient(135deg,#E85D04,#C24A00)",
  },
];

export default function DealsScreen() {
  return (
    <div style={{ width: 430, background: BG, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", overflowY: "auto", overflowX: "hidden", height: 932 }}>
      {/* Status Bar */}
      <div style={{ background: "#fff", padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: BLACK }}>9:41</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={BLACK} strokeOpacity="0.35"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill={BLACK}/><path d="M23 4.5v3a1.5 1.5 0 000-3z" fill={BLACK} fillOpacity="0.4"/></svg>
        </div>
      </div>

      {/* Header */}
      <div style={{ background: "#fff", padding: "10px 16px 14px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: BLACK }}>Deals & Vouchers</h1>
          <button style={{ border: "none", background: "none", cursor: "pointer", padding: 4 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5.5" stroke={BLACK} strokeWidth="1.6"/><path d="M12.5 12.5L17 17" stroke={BLACK} strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div style={{ background: "#fff", padding: "10px 16px 14px", display: "flex", gap: 8, overflowX: "auto", borderBottom: `1px solid ${BORDER}` }}>
        {filters.map((f, i) => (
          <button key={f} style={{ flexShrink: 0, border: "none", cursor: "pointer", padding: "7px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, background: i === 0 ? A : "#F0F0F0", color: i === 0 ? "#fff" : BLACK }}>
            {f}
          </button>
        ))}
      </div>

      {/* Deal Cards */}
      <div style={{ padding: "14px 16px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {deals.map((d) => (
          <div key={d.title} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
            {/* Image */}
            <div style={{ height: 110, background: d.g, position: "relative" }}>
              <div style={{ position: "absolute", top: 10, right: 10, background: A, color: "#fff", fontSize: 13, fontWeight: 800, padding: "4px 10px", borderRadius: 20 }}>
                {d.discountPct}% OFF
              </div>
              <div style={{ position: "absolute", bottom: 10, left: 12 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{d.venue}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{d.area}</div>
              </div>
            </div>

            {/* Deal info */}
            <div style={{ padding: "12px 14px 14px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, marginBottom: 8, lineHeight: 1.3 }}>{d.title}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: A }}>£{d.discountedPrice}</span>
                    <span style={{ fontSize: 14, color: GRAY, textDecoration: "line-through" }}>£{d.originalPrice}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: GRAY }}>🔥 {d.sold}</span>
                    <span style={{ fontSize: 11, color: GRAY }}>⏰ {d.expiry}</span>
                  </div>
                </div>
                <button style={{ border: "none", cursor: "pointer", background: GREEN, color: "#fff", fontSize: 13, fontWeight: 700, padding: "10px 18px", borderRadius: 12 }}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 90 }} />
    </div>
  );
}
