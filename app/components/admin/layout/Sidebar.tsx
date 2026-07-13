
"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  applications: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  ),
  dashboard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  blogs: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  enquiries: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const MENU = [
  { id: "applications", label: "Applications", group: "Content", path: "/admin/dashboard/applications" },
  { id: "dashboard", label: "Dashboard", group: "Main", path: "/admin/dashboard/dashboard" },
  { id: "blogs", label: "Blog Manager", group: "Content", path: "/admin/dashboard/blogs" },
  { id: "enquiries", label: "Enquiries", group: "Content", path: "/admin/dashboard/enquiries" },
];

type Props = { active?: string };

export default function Sidebar({ active = "dashboard" }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const groups = useMemo(() => {
    const map: Record<string, typeof MENU> = {};
    MENU.forEach((item) => {
      if (!map[item.group]) map[item.group] = [];
      map[item.group].push(item);
    });
    return map;
  }, []);

  const filtered = search.trim()
    ? MENU.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
    : null;

  const renderItem = (item: (typeof MENU)[0]) => {
    const isActive = active === item.id;
    return (
      <button
        key={item.id}
        onClick={() => router.push(item.path)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "9px 12px",
          borderRadius: 9,
          border: isActive ? "1px solid rgba(59,130,246,0.35)" : "1px solid transparent",
          background: isActive ? "rgba(59,130,246,0.15)" : "transparent",
          color: isActive ? "#60A5FA" : "#94A3B8",
          fontSize: 13,
          fontWeight: isActive ? 600 : 400,
          cursor: "pointer",
          textAlign: "left",
          transition: "all 0.15s",
          fontFamily: "inherit",
          marginBottom: 2,
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLButtonElement).style.color = "#E2E8F0";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
          }
        }}
      >
        <span style={{ opacity: isActive ? 1 : 0.7, flexShrink: 0 }}>{icons[item.id]}</span>
        <span style={{ flex: 1 }}>{item.label}</span>
      </button>
    );
  };

  return (
    <aside style={{
      width: 240,
      flexShrink: 0,
      background: "#0F1C2E",
      borderRight: "1px solid #1E293B",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
      {/* Logo */}
      <div style={{
        padding: "20px 20px 16px",
        borderBottom: "1px solid #1E293B",
      }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#F1F5F9", letterSpacing: "-0.02em" }}>
          Aerovince
        </div>
        <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>
          Admin Panel
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: "12px 12px 8px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search menu..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 8,
            background: "#0A1628",
            border: "1px solid #1E293B",
            color: "#F1F5F9",
            fontSize: 12,
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "inherit",
          }}
        />
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "4px 10px" }}>
        {filtered
          ? filtered.map(renderItem)
          : Object.entries(groups).map(([group, items]) => (
            <div key={group} style={{ marginBottom: 20 }}>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#334155",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0 6px",
                marginBottom: 6,
              }}>
                {group}
              </div>
              {items.map(renderItem)}
            </div>
          ))}
      </nav>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1E293B",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <div style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 800,
          color: "#fff",
          flexShrink: 0,
        }}>
          A
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#F1F5F9" }}>Admin</div>
          <div style={{ fontSize: 11, color: "#475569" }}>aerovince.com</div>
        </div>
      </div>
    </aside>
  );
}