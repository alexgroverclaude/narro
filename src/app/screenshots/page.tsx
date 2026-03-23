"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import HomeScreen from "@/components/narro/HomeScreen";
import RestaurantDetail from "@/components/narro/RestaurantDetail";
import DealsScreen from "@/components/narro/DealsScreen";
import FeedScreen from "@/components/narro/FeedScreen";

// ─── Canvas & Mockup constants ────────────────────────────────────────────────
const CW = 1320;
const CH = 2868;
const MK_W = 1022;
const MK_H = 2082;
const SC_L = (52 / MK_W) * 100;
const SC_T = (46 / MK_H) * 100;
const SC_W_PCT = (918 / MK_W) * 100;
const SC_H_PCT = (1990 / MK_H) * 100;
const SC_RX = (126 / 918) * 100;
const SC_RY = (126 / 1990) * 100;
const NW = 430;

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif';
const ACCENT = "#E8553A";

const SIZES = [
  { label: '6.9"', w: 1320, h: 2868 },
  { label: '6.5"', w: 1284, h: 2778 },
  { label: '6.3"', w: 1206, h: 2622 },
  { label: '6.1"', w: 1125, h: 2436 },
] as const;

const SLIDE_NAMES = ["hero", "discovery", "deals", "social", "all-in-one"];
const SLIDE_LABELS = [
  "Hero — Narrow down your options.",
  "Discovery — Reviewed by real people.",
  "Deals — Save 20-50% at London's best.",
  "Social — See where friends actually go.",
  "All-in-one — Reviews. Deals. Reservations.",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function phoneScale(pct: number) {
  return (CW * pct * (918 / 1022)) / NW;
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function Phone({
  children,
  pct = 0.82,
  leftPct = 50,
  translateY = "14%",
}: {
  children: React.ReactNode;
  pct?: number;
  leftPct?: number;
  translateY?: string;
}) {
  const scale = phoneScale(pct);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: `${leftPct}%`,
        width: `${pct * 100}%`,
        transform: `translateX(-50%) translateY(${translateY})`,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div style={{ position: "relative", aspectRatio: `${MK_W}/${MK_H}` }}>
        <img
          src="/mockup.png"
          alt=""
          style={{ display: "block", width: "100%", height: "100%" }}
          draggable={false}
        />
        <div
          style={{
            position: "absolute",
            left: `${SC_L}%`,
            top: `${SC_T}%`,
            width: `${SC_W_PCT}%`,
            height: `${SC_H_PCT}%`,
            borderRadius: `${SC_RX}% / ${SC_RY}%`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: NW,
              transformOrigin: "top left",
              transform: `scale(${scale})`,
              userSelect: "none",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Narro Logo ───────────────────────────────────────────────────────────────
function NarroLogo({ color = "#fff", s = 1 }: { color?: string; s?: number }) {
  const u = CW * 0.036 * s;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: u * 0.55 }}>
      <div
        style={{
          width: u * 1.35,
          height: u * 1.35,
          background: ACCENT,
          borderRadius: u * 0.32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: u * 0.9,
          fontWeight: 800,
        }}
      >
        N
      </div>
      <span style={{ fontSize: u * 1.0, fontWeight: 800, color, letterSpacing: -u * 0.02 }}>
        narro
      </span>
    </div>
  );
}

// ─── Caption ─────────────────────────────────────────────────────────────────
function Caption({
  label,
  headline,
  sub,
  align = "center",
  color = "#fff",
  labelColor = "rgba(255,255,255,0.58)",
}: {
  label: string;
  headline: string;
  sub?: string;
  align?: "left" | "center";
  color?: string;
  labelColor?: string;
}) {
  return (
    <div style={{ textAlign: align }}>
      <div
        style={{
          fontSize: CW * 0.022,
          color: labelColor,
          fontWeight: 700,
          letterSpacing: CW * 0.003,
          textTransform: "uppercase" as const,
          marginBottom: CW * 0.022,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: CW * 0.09,
          fontWeight: 800,
          color,
          lineHeight: 0.94,
          letterSpacing: -CW * 0.0025,
        }}
      >
        {headline.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      {sub && (
        <div
          style={{
            fontSize: CW * 0.03,
            color: labelColor,
            marginTop: CW * 0.03,
            fontWeight: 500,
            lineHeight: 1.45,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

// ─── Slide 1 — Hero ───────────────────────────────────────────────────────────
function Slide1() {
  return (
    <div
      style={{
        width: CW,
        height: CH,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(162deg,#E8553A 0%,#C2302A 50%,#8B1D18 100%)",
      }}
    >
      <div style={{ position: "absolute", top: -CW * 0.2, right: -CW * 0.15, width: CW * 0.75, height: CW * 0.75, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: CW * 0.08, right: CW * 0.04, width: CW * 0.28, height: CW * 0.28, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: CH * 0.36, left: -CW * 0.1, width: CW * 0.35, height: CW * 0.35, borderRadius: "50%", background: "rgba(0,0,0,0.14)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: CH * 0.07, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: CW * 0.032 }}>
        <NarroLogo color="#fff" s={0.88} />
        <Caption
          label="The London Discovery App"
          headline={"Narrow down\nyour options."}
          sub="Restaurants · Deals · Reservations"
          align="center"
        />
      </div>
      <Phone pct={0.84} leftPct={50}><HomeScreen /></Phone>
    </div>
  );
}

// ─── Slide 2 — Discovery ─────────────────────────────────────────────────────
function Slide2() {
  return (
    <div
      style={{
        width: CW,
        height: CH,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
        background: "#111110",
      }}
    >
      <div style={{ position: "absolute", top: -CH * 0.06, left: -CW * 0.12, width: CW * 0.75, height: CW * 0.75, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,85,58,0.22) 0%,transparent 68%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: CH * 0.22, right: -CW * 0.06, width: CW * 0.45, height: CW * 0.45, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,85,58,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: CH * 0.07, left: CW * 0.07, display: "flex", flexDirection: "column", gap: CW * 0.03, maxWidth: CW * 0.5 }}>
        <NarroLogo color="#fff" s={0.82} />
        <Caption
          label="Trusted Reviews"
          headline={"Every restaurant.\nReviewed by\nreal people."}
          sub="Taste · Service · Ambiance. All scored."
          align="left"
        />
      </div>
      <Phone pct={0.8} leftPct={60}><RestaurantDetail /></Phone>
    </div>
  );
}

// ─── Slide 3 — Deals ─────────────────────────────────────────────────────────
function Slide3() {
  return (
    <div
      style={{
        width: CW,
        height: CH,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(162deg,#0A4D2E 0%,#052E1A 100%)",
      }}
    >
      <div style={{ position: "absolute", top: -CW * 0.2, right: -CW * 0.12, width: CW * 0.65, height: CW * 0.65, borderRadius: "50%", background: "radial-gradient(circle,rgba(7,193,96,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
      {[{ x: 0.07, y: 0.17, sz: 0.012 }, { x: 0.38, y: 0.07, sz: 0.008 }, { x: 0.05, y: 0.26, sz: 0.01 }, { x: 0.44, y: 0.04, sz: 0.007 }, { x: 0.13, y: 0.11, sz: 0.009 }].map((d, i) => (
        <div key={i} style={{ position: "absolute", left: CW * d.x, top: CH * d.y, width: CW * d.sz, height: CW * d.sz, borderRadius: "50%", background: "#FFD700", opacity: 0.45, pointerEvents: "none" }} />
      ))}
      <div style={{ position: "absolute", top: CH * 0.07, left: CW * 0.065, display: "flex", flexDirection: "column", gap: CW * 0.03, maxWidth: CW * 0.48 }}>
        <NarroLogo color="#fff" s={0.82} />
        <Caption
          label="Exclusive Deals"
          headline={"Save 20-50%\nat London's\nbest spots."}
          sub="New deals added daily"
          align="left"
        />
        <div style={{ marginTop: CW * 0.01, display: "inline-flex", alignItems: "center", gap: CW * 0.018 }}>
          <div style={{ background: ACCENT, color: "#fff", fontSize: CW * 0.032, fontWeight: 800, padding: `${CW * 0.011}px ${CW * 0.024}px`, borderRadius: CW * 0.025 }}>Up to 50% off</div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: CW * 0.024 }}>6 venues today</div>
        </div>
      </div>
      <Phone pct={0.76} leftPct={63}><DealsScreen /></Phone>
    </div>
  );
}

// ─── Slide 4 — Social ────────────────────────────────────────────────────────
function Slide4() {
  return (
    <div
      style={{
        width: CW,
        height: CH,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(172deg,#0C1520 0%,#1A2A3F 100%)",
      }}
    >
      <div style={{ position: "absolute", top: -CH * 0.06, right: -CW * 0.12, width: CW * 0.7, height: CW * 0.7, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,160,255,0.14) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: CH * 0.24, left: -CW * 0.06, width: CW * 0.48, height: CW * 0.48, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,160,255,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: CH * 0.07, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: CW * 0.032 }}>
        <NarroLogo color="#fff" s={0.82} />
        <Caption
          label="Your City, Socially"
          headline={"See where your\nfriends actually go."}
          sub="Real reviews from real Londoners"
          align="center"
        />
      </div>
      <Phone pct={0.82} leftPct={50}><FeedScreen /></Phone>
    </div>
  );
}

// ─── Slide 5 — All-in-one ────────────────────────────────────────────────────
function Slide5() {
  const pills = ["⭐ Reviews", "🏷️ Deals", "📅 Reservations", "🗺️ Discovery", "💬 Social Feed"];
  return (
    <div
      style={{
        width: CW,
        height: CH,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(172deg,#111110 0%,#1F0D07 100%)",
      }}
    >
      <div style={{ position: "absolute", bottom: CH * 0.18, right: -CW * 0.12, width: CW * 0.7, height: CW * 0.7, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,85,58,0.22) 0%,transparent 62%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -CH * 0.04, left: -CW * 0.1, width: CW * 0.55, height: CW * 0.55, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,85,58,0.12) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: CH * 0.065, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: CW * 0.028 }}>
        <NarroLogo color="#fff" s={0.82} />
        <Caption
          label="Everything in One Place"
          headline={"Reviews. Deals.\nReservations.\nOne app."}
          sub="Launching in London — Download now"
          align="center"
        />
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: CW * 0.014, justifyContent: "center", maxWidth: CW * 0.72, marginTop: CW * 0.008 }}>
          {pills.map((p) => (
            <div key={p} style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontSize: CW * 0.024, fontWeight: 600, padding: `${CW * 0.01}px ${CW * 0.022}px`, borderRadius: CW * 0.04, border: "1px solid rgba(255,255,255,0.12)" }}>{p}</div>
          ))}
        </div>
      </div>
      <Phone pct={0.8} leftPct={50}><HomeScreen /></Phone>
    </div>
  );
}

// ─── Slide registry ──────────────────────────────────────────────────────────
const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5];

// ─── Preview ─────────────────────────────────────────────────────────────────
const PW = 210;
const PSCALE = PW / CW;
const PH = Math.round(CH * PSCALE);

function PreviewCard({ SlideComp, index, isActive, onClick }: {
  SlideComp: React.FC;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <div style={{ width: PW, height: PH, borderRadius: 12, overflow: "hidden", transition: "box-shadow 0.15s", boxShadow: isActive ? `0 0 0 3px ${ACCENT}, 0 8px 32px rgba(232,85,58,0.3)` : "0 4px 20px rgba(0,0,0,0.5)" }}>
        <div style={{ width: CW, height: CH, transformOrigin: "top left", transform: `scale(${PSCALE})`, pointerEvents: "none", userSelect: "none" }}>
          <SlideComp />
        </div>
      </div>
      <div style={{ fontSize: 11, textAlign: "center", color: isActive ? ACCENT : "rgba(255,255,255,0.4)", fontWeight: isActive ? 700 : 500, maxWidth: PW }}>
        <span style={{ opacity: 0.6 }}>{String(index + 1).padStart(2, "0")} </span>
        {SLIDE_LABELS[index].split(" — ")[0]}
      </div>
    </div>
  );
}

// ─── Export helpers ───────────────────────────────────────────────────────────
async function captureSlide(el: HTMLElement): Promise<string> {
  const opts = { width: CW, height: CH, pixelRatio: 1, cacheBust: true };
  el.style.left = "0";
  el.style.opacity = "1";
  el.style.zIndex = "999";
  await new Promise((r) => setTimeout(r, 100));
  await toPng(el, opts);
  const url = await toPng(el, opts);
  el.style.left = "-9999px";
  el.style.opacity = "";
  el.style.zIndex = "";
  return url;
}

async function resizeDataUrl(dataUrl: string, w: number, h: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d")!.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = dataUrl;
  });
}

function triggerDownload(dataUrl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ScreenshotsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [exportMsg, setExportMsg] = useState("");

  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const exportRefs = [ref0, ref1, ref2, ref3, ref4];

  const currentSize = SIZES[sizeIdx];

  async function doExportOne(index: number) {
    const el = exportRefs[index].current;
    if (!el) return;
    setExporting(true);
    setExportMsg(`Capturing slide ${index + 1}...`);
    try {
      const url = await captureSlide(el);
      const final = currentSize.w === CW ? url : await resizeDataUrl(url, currentSize.w, currentSize.h);
      const name = `${String(index + 1).padStart(2, "0")}-narro-${SLIDE_NAMES[index]}-${currentSize.w}x${currentSize.h}.png`;
      triggerDownload(final, name);
      setExportMsg(`✓ Saved ${name}`);
      setTimeout(() => setExportMsg(""), 3000);
    } catch (e) {
      setExportMsg("Export failed — try again");
      console.error(e);
    } finally {
      setExporting(false);
    }
  }

  async function doExportAll() {
    setExporting(true);
    for (let i = 0; i < SLIDES.length; i++) {
      const el = exportRefs[i].current;
      if (!el) continue;
      setExportMsg(`Capturing ${i + 1}/${SLIDES.length}...`);
      try {
        const url = await captureSlide(el);
        const final = currentSize.w === CW ? url : await resizeDataUrl(url, currentSize.w, currentSize.h);
        triggerDownload(final, `${String(i + 1).padStart(2, "0")}-narro-${SLIDE_NAMES[i]}-${currentSize.w}x${currentSize.h}.png`);
        await new Promise((r) => setTimeout(r, 400));
      } catch (e) {
        console.error(`Slide ${i + 1} failed`, e);
      }
    }
    setExportMsg("✓ All 5 slides exported");
    setTimeout(() => setExportMsg(""), 4000);
    setExporting(false);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", fontFamily: FONT, color: "#fff", overflowX: "hidden" }}>

      {/* Hidden export canvases */}
      <div aria-hidden="true" style={{ position: "fixed", top: 0, pointerEvents: "none" }}>
        {SLIDES.map((SlideComp, i) => (
          <div key={i} ref={exportRefs[i]} style={{ position: "absolute", left: -9999, top: 0, width: CW, height: CH, zIndex: -1, opacity: 0 }}>
            <SlideComp />
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 32px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" as const }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 15, fontWeight: 800 }}>N</div>
          <span style={{ fontSize: 15, fontWeight: 800 }}>narro</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", marginLeft: 2 }}>· screenshots</span>
        </div>
        <div style={{ flex: 1 }} />
        {exportMsg && <span style={{ fontSize: 12, color: exportMsg.startsWith("✓") ? "#07C160" : "rgba(255,255,255,0.6)", fontWeight: 600 }}>{exportMsg}</span>}
        <a href="/narro" target="_blank" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "none", padding: "6px 14px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8 }}>View App ↗</a>
        <select value={sizeIdx} onChange={(e) => setSizeIdx(Number(e.target.value))} style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 8, padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>
          {SIZES.map((s, i) => <option key={i} value={i} style={{ background: "#1a1a1a" }}>{s.label} — {s.w}×{s.h}</option>)}
        </select>
        <button onClick={() => doExportOne(activeSlide)} disabled={exporting} style={{ background: "rgba(232,85,58,0.12)", color: ACCENT, border: `1px solid rgba(232,85,58,0.4)`, borderRadius: 8, padding: "6px 16px", fontSize: 12, fontWeight: 600, cursor: exporting ? "not-allowed" : "pointer", opacity: exporting ? 0.5 : 1 }}>
          Export Slide {activeSlide + 1}
        </button>
        <button onClick={doExportAll} disabled={exporting} style={{ background: exporting ? "rgba(232,85,58,0.5)" : ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "6px 18px", fontSize: 12, fontWeight: 700, cursor: exporting ? "not-allowed" : "pointer" }}>
          {exporting ? "Exporting..." : "Export All 5"}
        </button>
      </div>

      {/* Header */}
      <div style={{ padding: "44px 40px 20px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: 30, fontWeight: 800, background: "linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.55) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          App Store Screenshots
        </h1>
        <p style={{ margin: "10px 0 0", fontSize: 14, color: "rgba(255,255,255,0.38)" }}>
          5 slides · Designed at 1320×2868 · All 4 Apple required sizes
        </p>
      </div>

      {/* Preview grid */}
      <div style={{ display: "flex", gap: 20, padding: "12px 40px 52px", overflowX: "auto", justifyContent: "center", alignItems: "flex-start" }}>
        {SLIDES.map((SlideComp, i) => (
          <PreviewCard key={i} SlideComp={SlideComp} index={i} isActive={activeSlide === i} onClick={() => setActiveSlide(i)} />
        ))}
      </div>

      {/* Slide label + dots */}
      <div style={{ textAlign: "center", paddingBottom: 48 }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
          {SLIDE_LABELS[activeSlide]}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} style={{ width: i === activeSlide ? 24 : 8, height: 8, borderRadius: 4, border: "none", background: i === activeSlide ? ACCENT : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "all 0.2s ease", padding: 0 }} />
          ))}
        </div>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 24 }}>
          Click any slide to select · Export downloads as PNG
        </p>
      </div>
    </div>
  );
}
