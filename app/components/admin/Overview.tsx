"use client";

import { useState, useEffect } from "react";
import { S, Icons, catColor } from "./Common";
import { INITIAL_SERVICES, INITIAL_TEAM } from "./data";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Overview({
  services = INITIAL_SERVICES,
  team = INITIAL_TEAM,
}) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const published = blogs.filter((b) => b.status === "Published").length;
  const draft = blogs.filter((b) => b.status === "Draft").length;
  const recentBlogs = [...blogs].slice(0, 5);

  const catCount: Record<string, number> = {};
  blogs.forEach((b) => {
    catCount[b.category] = (catCount[b.category] || 0) + 1;
  });
  const topCats = Object.entries(catCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const statItems = [
    {
      label: "Total Blogs",
      value: loading ? "..." : blogs.length,
      accent: "#3B82F6",
      icon: "📄",
    },
    {
      label: "Published",
      value: loading ? "..." : published,
      accent: "#10B981",
      icon: "✓",
    },
    {
      label: "Drafts",
      value: loading ? "..." : draft,
      accent: "#F59E0B",
      icon: "✏️",
    },
    {
      label: "Services",
      value: services.length,
      accent: "#8B5CF6",
      icon: "⚙️",
    },
    {
      label: "Team Members",
      value: team.length,
      accent: "#EC4899",
      icon: "👥",
    },
    { label: "Happy Clients", value: "150+", accent: "#EF4444", icon: "⭐" },
  ];

  return (
    <div>
      <div style={S.statsGrid}>
        {statItems.map((s) => (
          <div key={s.label} style={S.statCard}>
            <div style={S.statAccent(s.accent)} />
            <div style={S.statNum}>{s.value}</div>
            <div style={S.statLabel}>{s.label}</div>
            <div style={S.statIcon}>{s.icon}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Recent Blogs</span>
            <button style={S.btn("ghost")}>
              View All <Icons.ChevronRight />
            </button>
          </div>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Title</th>
                <th style={S.th}>Category</th>
                <th style={S.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={3}
                    style={{
                      ...S.td,
                      textAlign: "center",
                      color: "#475569",
                      padding: 24,
                    }}
                  >
                    Loading...
                  </td>
                </tr>
              ) : recentBlogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    style={{
                      ...S.td,
                      textAlign: "center",
                      color: "#475569",
                      padding: 24,
                    }}
                  >
                    No blogs yet.
                  </td>
                </tr>
              ) : (
                recentBlogs.map((b) => (
                  <tr key={b.id}>
                    <td
                      style={{
                        ...S.td,
                        maxWidth: 180,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                      }}
                    >
                      {b.title}
                    </td>
                    <td style={S.td}>
                      <span style={S.tag(catColor(b.category))}>
                        {b.category}
                      </span>
                    </td>
                    <td style={S.td}>
                      <span
                        style={S.badge(
                          b.status === "Published" ? "#10B981" : "#F59E0B",
                        )}
                      >
                        <Icons.Dot /> {b.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Blog Categories</span>
          </div>
          <div style={{ padding: "16px 20px" }}>
            {loading ? (
              <div
                style={{
                  color: "#475569",
                  fontSize: 13,
                  textAlign: "center",
                  padding: 24,
                }}
              >
                Loading...
              </div>
            ) : topCats.length === 0 ? (
              <div
                style={{
                  color: "#475569",
                  fontSize: 13,
                  textAlign: "center",
                  padding: 24,
                }}
              >
                No data yet.
              </div>
            ) : (
              topCats.map(([cat, count]) => (
                <div key={cat} style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                      fontSize: 13,
                      color: "#CBD5E1",
                    }}
                  >
                    <span>{cat}</span>
                    <span style={{ color: catColor(cat), fontWeight: 600 }}>
                      {count}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      background: "#0F0F0F",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(count / blogs.length) * 100}%`,
                        background: catColor(cat),
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHeader}>
          <span style={S.cardTitle}>Quick Info</span>
        </div>
        <div
          style={{
            padding: "20px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            textAlign: "center",
          }}
        >
          {[
            { label: "Growth Rate", value: "10x", color: "#10B981" },
            { label: "Success Rate", value: "98%", color: "#3B82F6" },
            { label: "Brands Served", value: "150+", color: "#F59E0B" },
          ].map((i) => (
            <div key={i.label} style={{ padding: "16px 0" }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: i.color }}>
                {i.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#475569",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: 4,
                }}
              >
                {i.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
