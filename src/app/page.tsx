"use client";

import { useState, useEffect, useCallback } from "react";
import HomeScreen from "@/components/narro/HomeScreen";
import RestaurantDetail from "@/components/narro/RestaurantDetail";
import DealsScreen from "@/components/narro/DealsScreen";

const ACCENT = "#E8553A";
const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif';

// ─── Waitlist form ────────────────────────────────────────────────────────────
function WaitlistForm({ size = "default" }: { size?: "default" | "large" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const inputSize = size === "large" ? { fontSize: 17, padding: "16px 20px" } : { fontSize: 15, padding: "13px 18px" };
  const btnSize = size === "large" ? { fontSize: 17, padding: "16px 28px" } : { fontSize: 15, padding: "13px 24px" };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const r = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await r.json();
      if (r.ok) {
        setStatus("success");
        setMessage("You're on the list! We'll be in touch when we launch. 🎉");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }, [email, status]);

  if (status === "success") {
    return (
      <div style={{ background: "rgba(7,193,96,0.12)", border: "1px solid rgba(7,193,96,0.3)", borderRadius: 14, padding: "16px 20px", color: "#07C160", fontSize: 15, fontWeight: 600, lineHeight: 1.5, maxWidth: 480 }}>
        {message}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 480 }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{ flex: 1, minWidth: 200, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, color: "#fff", outline: "none", fontFamily: FONT, ...inputSize }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1, fontFamily: FONT, whiteSpace: "nowrap" as const, ...btnSize }}
        >
          {status === "loading" ? "Joining..." : "Join the Waitlist"}
        </button>
      </form>
      {status === "error" && (
        <p style={{ margin: "8px 0 0", fontSize: 13, color: "#FF453A" }}>{message}</p>
      )}
    </div>
  );
}

// ─── CSS phone frame ──────────────────────────────────────────────────────────
function PhoneFrame({ children, scale, rotate = 0, style }: {
  children: React.ReactNode;
  scale: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  const W = 430, H = 932;
  return (
    <div style={{
      width: W * scale,
      height: H * scale,
      borderRadius: 46 * scale,
      background: "#1C1C1E",
      border: `${8 * scale}px solid #2C2C2E`,
      boxShadow: "0 32px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.07)",
      overflow: "hidden",
      transform: `rotate(${rotate}deg)`,
      flexShrink: 0,
      position: "relative",
      ...style,
    }}>
      <div style={{ width: W, transformOrigin: "top left", transform: `scale(${scale})`, pointerEvents: "none", userSelect: "none" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ solid }: { solid: boolean }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 32px",
      height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: solid ? "rgba(10,10,10,0.95)" : "transparent",
      backdropFilter: solid ? "blur(16px)" : "none",
      borderBottom: solid ? "1px solid rgba(255,255,255,0.07)" : "none",
      transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
      fontFamily: FONT,
    }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 800 }}>N</div>
        <span style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>narro</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a href="/narro" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Demo</a>
        <a href="/screenshots" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Press Kit</a>
        <a href="#waitlist" style={{ background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, padding: "8px 20px", borderRadius: 22, textDecoration: "none" }}>Join Waitlist</a>
      </div>
    </nav>
  );
}

// ─── Landing page ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [navSolid, setNavSolid] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((r) => r.json())
      .then((d) => setWaitlistCount(d.count ?? 0))
      .catch(() => {});
  }, []);

  const countLabel = waitlistCount === null
    ? null
    : waitlistCount > 0
    ? `Join ${waitlistCount.toLocaleString()}+ Londoners already on the list`
    : "Be the first to know when we launch";

  return (
    <div style={{ background: "#0A0A0A", color: "#fff", fontFamily: FONT, overflowX: "hidden" }}>
      <Nav solid={navSolid} />

      {/* ── Hero ── */}
      <section style={{ minHeight: "100dvh", padding: "64px 0 0", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Background glows */}
        <div style={{ position: "absolute", top: -200, left: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,85,58,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,85,58,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px", width: "100%", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap" as const }}>
          {/* Left: text */}
          <div style={{ flex: "1 1 440px", minWidth: 300 }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,85,58,0.12)", border: "1px solid rgba(232,85,58,0.25)", borderRadius: 22, padding: "6px 14px", marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: ACCENT }}>Coming to London, 2026</span>
            </div>

            <h1 style={{ margin: "0 0 20px", fontSize: "clamp(52px, 6vw, 80px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: -2, color: "#fff" }}>
              Narrow down<br />
              <span style={{ color: ACCENT }}>your options.</span>
            </h1>

            <p style={{ margin: "0 0 36px", fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, maxWidth: 460 }}>
              London's local discovery app. Real reviews, exclusive deals, and instant reservations — all in one place. Think Yelp, Groupon, and OpenTable merged into one beautiful app.
            </p>

            <WaitlistForm size="large" />

            {countLabel && (
              <p style={{ margin: "16px 0 0", fontSize: 14, color: "rgba(255,255,255,0.38)" }}>
                {countLabel}
              </p>
            )}
          </div>

          {/* Right: phone mockup */}
          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              {/* Glow beneath phone */}
              <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: 280, height: 120, borderRadius: "50%", background: "rgba(232,85,58,0.25)", filter: "blur(40px)", pointerEvents: "none" }} />
              <PhoneFrame scale={0.65}>
                <HomeScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" as const, marginBottom: 16 }}>Why Narro</p>
          <h2 style={{ margin: 0, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -1 }}>Everything you need to eat,<br />drink, and explore London</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {/* Feature 1: Reviews */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,149,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⭐</div>
            <div>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>Real reviews that matter</h3>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>Every venue scored on Taste, Service, and Ambiance by real diners — not algorithms.</p>
            </div>
            {/* Mini score visual */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 0 }}>
              {[{ label: "Taste", score: "9.2" }, { label: "Service", score: "9.0" }, { label: "Ambiance", score: "8.8" }].map((s, i) => (
                <div key={s.label} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: ACCENT }}>{s.score}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature 2: Deals */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(7,193,96,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏷️</div>
            <div>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>Save 20–50% on every meal</h3>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>Exclusive group-buy vouchers for London's best restaurants, bars, and activities.</p>
            </div>
            {/* Mini deal visual */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "16px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Sticks'n'Sushi · Covent Garden</span>
                <span style={{ background: ACCENT, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>32% OFF</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#07C160" }}>£44</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>£65</span>
              </div>
            </div>
          </div>

          {/* Feature 3: Reserve */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(232,85,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📅</div>
            <div>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 700 }}>Reserve a table instantly</h3>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>Book at hundreds of London venues directly in-app. No phone calls, no third-party fees.</p>
            </div>
            {/* Mini booking visual */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "16px 20px" }}>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Brat · Shoreditch</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                {["7pm", "7:30pm", "8pm"].map((t, i) => (
                  <div key={t} style={{ flex: 1, background: i === 1 ? ACCENT : "rgba(255,255,255,0.07)", borderRadius: 8, padding: "6px 0", textAlign: "center", fontSize: 12, fontWeight: 600, color: i === 1 ? "#fff" : "rgba(255,255,255,0.5)" }}>{t}</div>
                ))}
              </div>
              <div style={{ background: ACCENT, borderRadius: 10, padding: "9px 0", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#fff" }}>Confirm Reservation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── App screenshot showcase ── */}
      <section style={{ padding: "80px 40px 120px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" as const, marginBottom: 16 }}>The App</p>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>Built for how Londoners<br />actually discover the city</h2>
        </div>

        {/* 3 phones */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 24, position: "relative" }}>
          {/* Glow */}
          <div style={{ position: "absolute", bottom: -60, left: "50%", transform: "translateX(-50%)", width: 600, height: 200, borderRadius: "50%", background: "rgba(232,85,58,0.12)", filter: "blur(60px)", pointerEvents: "none" }} />

          <PhoneFrame scale={0.48} rotate={-6} style={{ opacity: 0.75, marginBottom: 40 }}>
            <RestaurantDetail />
          </PhoneFrame>

          <PhoneFrame scale={0.62} rotate={0} style={{ zIndex: 10 }}>
            <HomeScreen />
          </PhoneFrame>

          <PhoneFrame scale={0.48} rotate={6} style={{ opacity: 0.75, marginBottom: 40 }}>
            <DealsScreen />
          </PhoneFrame>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 56, flexWrap: "wrap" as const }}>
          {["★ 4.8 avg rating", "200+ London venues", "New deals daily"].map((item) => (
            <div key={item} style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{item}</div>
          ))}
        </div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section id="waitlist" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          {/* Decorative glow */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,85,58,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
          </div>

          <div style={{ background: "rgba(232,85,58,0.08)", border: "1px solid rgba(232,85,58,0.2)", borderRadius: 28, padding: "60px 48px", position: "relative" }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 800, color: "#fff", margin: "0 auto 28px" }}>N</div>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: -1 }}>Be first when<br />we launch in London</h2>
            <p style={{ margin: "0 0 36px", fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>Join the waitlist and get early access, exclusive launch deals, and updates on our rollout across London.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <WaitlistForm size="large" />
            </div>
            {countLabel && (
              <p style={{ margin: "20px 0 0", fontSize: 14, color: "rgba(255,255,255,0.3)" }}>{countLabel}</p>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 800 }}>N</div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>narro</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginLeft: 6 }}>London 2026</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="/narro" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Demo App</a>
          <a href="/screenshots" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Press Kit</a>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>© 2026 Narro</span>
        </div>
      </footer>
    </div>
  );
}
