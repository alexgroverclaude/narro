"use client";

const A = "#E8553A";
const GOLD = "#FF9500";
const BLACK = "#111110";
const GRAY = "#8E8E93";
const BORDER = "#E5E5EA";
const BG = "#F5F5F5";

const posts = [
  {
    avatar: "E",
    avatarBg: "#5856D6",
    name: "Ella R.",
    handle: "@ella_eats",
    time: "2h ago",
    venue: "Brat",
    venueArea: "Shoreditch",
    stars: 5,
    text: "The wood-fired turbot was absolutely otherworldly. Golden, smoky, charred herbs perfuming the whole table. Brat's cooking is deceptively simple: quality ingredients treated with respect and fire. Best meal in London this year — book now, thank me later.",
    photos: [
      "linear-gradient(135deg,#E8553A,#B33020)",
      "linear-gradient(135deg,#C4956A,#8B5E3C)",
      "linear-gradient(135deg,#5C3D2E,#3A2318)",
    ],
    likes: 284,
    comments: 41,
    isFollowing: false,
  },
  {
    avatar: "J",
    avatarBg: "#30C05D",
    name: "James K.",
    handle: "@jkfoodie",
    time: "5h ago",
    venue: "Nightjar",
    venueArea: "Old Street",
    stars: 4,
    text: "Speakeasy vibes, incredible cocktails. Nightjar is hidden under Old Street and it shows — you feel like you've discovered a secret. The 'Lychee & Rose' is borderline illegal it's so good. Go for the cocktails, stay for the jazz.",
    photos: [
      "linear-gradient(135deg,#1A1A2E,#0F0F23)",
      "linear-gradient(135deg,#3D2B1F,#1A0F08)",
    ],
    likes: 167,
    comments: 28,
    isFollowing: true,
  },
  {
    avatar: "P",
    avatarBg: "#FF9500",
    name: "Priya S.",
    handle: "@priya_london",
    time: "1d ago",
    venue: "Darjeeling Express",
    venueArea: "Soho",
    stars: 5,
    text: "Asma Khan's cooking is pure magic. The lamb biryani had me emotional — it tasted like someone's grandmother made it with love. The dumplings and the dal were phenomenal. This is the Indian food London has always deserved.",
    photos: [
      "linear-gradient(135deg,#E8A030,#C27310)",
      "linear-gradient(135deg,#C4956A,#8B5E3C)",
      "linear-gradient(135deg,#E8553A,#B33020)",
    ],
    likes: 421,
    comments: 65,
    isFollowing: false,
  },
  {
    avatar: "T",
    avatarBg: "#FF2D55",
    name: "Tom B.",
    handle: "@tomboroughmarket",
    time: "2d ago",
    venue: "Franco Manca",
    venueArea: "Brixton",
    stars: 5,
    text: "Still the best sourdough pizza in London. Simple, honest, perfect. The #4 with capers, anchovies, and mozzarella is unbeatable at £10.75. Franco Manca never disappoints. A London institution for a reason.",
    photos: [
      "linear-gradient(135deg,#C84B31,#8B2318)",
    ],
    likes: 193,
    comments: 19,
    isFollowing: true,
  },
];

function Stars({ n }: { n: number }) {
  return <span style={{ color: GOLD, fontSize: 12 }}>{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;
}

export default function FeedScreen() {
  return (
    <div style={{ width: 430, background: BG, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", overflowY: "auto", overflowX: "hidden", height: 932 }}>
      {/* Status Bar */}
      <div style={{ background: "#fff", padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: BLACK }}>9:41</span>
        <div style={{ display: "flex", gap: 6 }}>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={BLACK} strokeOpacity="0.35"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill={BLACK}/></svg>
        </div>
      </div>

      {/* Header */}
      <div style={{ background: "#fff", padding: "10px 16px 0", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: BLACK }}>Feed</h1>
          <button style={{ border: "none", background: "none", cursor: "pointer", padding: 4 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4h14M3 10h14M3 16h14" stroke={BLACK} strokeWidth="1.7" strokeLinecap="round"/></svg>
          </button>
        </div>
        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 0 }}>
          {["Following", "Nearby", "Trending"].map((tab, i) => (
            <button key={tab} style={{ flex: 1, border: "none", background: "none", padding: "10px 4px", fontSize: 14, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? BLACK : GRAY, cursor: "pointer", borderBottom: i === 0 ? `2.5px solid ${BLACK}` : "2.5px solid transparent" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div style={{ padding: "12px 0" }}>
        {posts.map((post) => (
          <div key={post.handle} style={{ background: "#fff", marginBottom: 8, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
            {/* Post header */}
            <div style={{ padding: "14px 16px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: post.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 17, fontWeight: 700 }}>
                  {post.avatar}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: BLACK }}>{post.name}</span>
                    <span style={{ fontSize: 12, color: GRAY }}>{post.handle}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                    <span style={{ fontSize: 12, color: A, fontWeight: 600 }}>{post.venue}</span>
                    <span style={{ fontSize: 12, color: GRAY }}>· {post.venueArea}</span>
                    <span style={{ fontSize: 11, color: GRAY }}>· {post.time}</span>
                  </div>
                </div>
              </div>
              <button style={{ border: `1.5px solid ${post.isFollowing ? BORDER : A}`, background: post.isFollowing ? "#fff" : "#FFF0EE", color: post.isFollowing ? GRAY : A, fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20, cursor: "pointer" }}>
                {post.isFollowing ? "Following" : "Follow"}
              </button>
            </div>

            {/* Stars */}
            <div style={{ paddingLeft: 16, marginBottom: 8 }}>
              <Stars n={post.stars} />
            </div>

            {/* Review text */}
            <p style={{ margin: "0 16px 12px", fontSize: 14, color: BLACK, lineHeight: 1.6 }}>
              {post.text}
            </p>

            {/* Photos */}
            {post.photos.length > 0 && (
              <div style={{ display: "flex", gap: 3, padding: "0 16px", marginBottom: 12, overflowX: "auto" }}>
                {post.photos.map((p, i) => (
                  <div key={i} style={{ flexShrink: 0, width: post.photos.length === 1 ? "100%" : 130, height: post.photos.length === 1 ? 200 : 130, borderRadius: 10, background: p }} />
                ))}
              </div>
            )}

            {/* Actions */}
            <div style={{ padding: "10px 16px 14px", borderTop: `1px solid ${BORDER}`, display: "flex", gap: 24, alignItems: "center" }}>
              <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: GRAY, fontSize: 13, padding: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 15.5S2 11 2 6.5a4 4 0 018 0 4 4 0 018 0C18 11 9 15.5 9 15.5z" stroke={GRAY} strokeWidth="1.4" fill="none"/></svg>
                <span>{post.likes}</span>
              </button>
              <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: GRAY, fontSize: 13, padding: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 2h14a1 1 0 011 1v8a1 1 0 01-1 1H5.5L2 16V3a1 1 0 011-1z" stroke={GRAY} strokeWidth="1.4" fill="none"/></svg>
                <span>{post.comments}</span>
              </button>
              <button style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: GRAY, fontSize: 13, padding: 0, marginLeft: "auto" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l12-6-5 6 5 6L3 9z" stroke={GRAY} strokeWidth="1.4" fill="none" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 90 }} />
    </div>
  );
}
