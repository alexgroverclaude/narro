"use client";

import { useState } from "react";
import HomeScreen from "@/components/narro/HomeScreen";
import RestaurantDetail from "@/components/narro/RestaurantDetail";
import DealsScreen from "@/components/narro/DealsScreen";
import FeedScreen from "@/components/narro/FeedScreen";
import ProfileScreen from "@/components/narro/ProfileScreen";

const A = "#E8553A";
const BLACK = "#111110";
const GRAY = "#8E8E93";
const BORDER = "#E5E5EA";

type Tab = "home" | "deals" | "feed" | "me";

function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  const tabs: { id: Tab; icon: React.ReactNode; label: string }[] = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12L12 3l9 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M5 10v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      id: "deals",
      label: "Deals",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
          <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
          <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "feed",
      label: "Feed",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" fill="none"/>
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: "me",
      label: "Me",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" fill="none"/>
          <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderTop: `1px solid ${BORDER}`,
        display: "flex",
        paddingBottom: 28,
        zIndex: 100,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              flex: 1,
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "10px 4px 4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              color: isActive ? A : GRAY,
              position: "relative",
            }}
          >
            {tab.id === "deals" && (
              <span
                style={{
                  position: "absolute",
                  top: 6,
                  left: "calc(50% + 6px)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: A,
                  border: "1.5px solid #fff",
                }}
              />
            )}
            {tab.icon}
            <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 500 }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function NarroApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          width: 430,
          height: 932,
          position: "relative",
          overflow: "hidden",
          borderRadius: 48,
          boxShadow: "0 30px 80px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)",
          border: "10px solid #1a1a1a",
        }}
      >
        {/* Screen Content */}
        <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
          {activeTab === "home" && <HomeScreen />}
          {activeTab === "deals" && <DealsScreen />}
          {activeTab === "feed" && <FeedScreen />}
          {activeTab === "me" && <ProfileScreen />}
        </div>

        {/* Tab Bar */}
        <TabBar active={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  );
}
