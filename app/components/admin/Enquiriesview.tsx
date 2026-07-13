



"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const c = {
  bg: "#0F1C2E",
  surface: "#0A1628",
  card: "#111D30",
  border: "#1E293B",
  borderMid: "#334155",
  text: "#F1F5F9",
  muted: "#94A3B8",
  faint: "#475569",
  primary: "#3B82F6",
  danger: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
  pink: "#EC4899",
  purple: "#A855F7",
};

function btn(variant: "primary" | "ghost" | "danger" | "outline" | "success" | "warning") {
  const base = {
    display: "inline-flex" as const, alignItems: "center" as const, gap: 6,
    padding: "8px 16px", borderRadius: 10, fontSize: 12, fontWeight: 600,
    cursor: "pointer", border: "1px solid", fontFamily: "inherit",
    transition: "all 0.15s", whiteSpace: "nowrap" as const,
  };
  switch (variant) {
    case "primary": return { ...base, background: c.primary, color: "#fff", borderColor: c.primary };
    case "success": return { ...base, background: c.success, color: "#fff", borderColor: c.success };
    case "warning": return { ...base, background: "transparent", color: c.warning, borderColor: `${c.warning}40` };
    case "danger": return { ...base, background: "transparent", color: c.danger, borderColor: `${c.danger}40` };
    case "ghost": return { ...base, background: "transparent", color: c.muted, borderColor: c.border };
    case "outline": return { ...base, background: "transparent", color: c.text, borderColor: c.borderMid };
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────
type EnquiryStatus = "New" | "Replied" | "Archived";
type ContactStatus = "Not Contacted" | "Enquired" | "Pending" | "Follow-up" | "Closed";

type Comment = {
  id: string;
  text: string;
  author: string;
  createdAt: string;
};

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services?: string;
  // Firebase me "service" field bhi ho sakta hai
  service?: string;
  subject?: string;
  message: string;
  status: EnquiryStatus;
  contactStatus: ContactStatus;
  source: string;
  createdAt: string;
  comments: Comment[];
};

// ─── Colour maps ──────────────────────────────────────────────────────────────
const statusColor = (s: EnquiryStatus) =>
  s === "New" ? c.pink : s === "Replied" ? c.success : c.faint;

const contactStatusMeta: Record<ContactStatus, { color: string; icon: string }> = {
  "Not Contacted": { color: c.faint, icon: "○" },
  "Enquired": { color: c.primary, icon: "◎" },
  "Pending": { color: c.warning, icon: "◑" },
  "Follow-up": { color: c.purple, icon: "↻" },
  "Closed": { color: c.success, icon: "✓" },
};

// ─── Format date ──────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "numeric",
    });
  } catch {
    return iso;
  }
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────
const T = {
  overlay: {
    position: "fixed" as const, inset: 0,
    background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)",
    zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
  },
  modal: {
    background: "#0D1829", border: `1px solid ${c.border}`, borderRadius: 18,
    width: "100%", maxWidth: 620, maxHeight: "92vh", overflowY: "auto" as const,
    display: "flex", flexDirection: "column" as const,
  },
  sectionLabel: {
    display: "block" as const, fontSize: 10, fontWeight: 700, color: c.faint,
    textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 6,
  },
};

function DetailModal({ enquiry, onClose, onStatusChange, onContactStatusChange, onAddComment, onDeleteComment }: {
  enquiry: Enquiry;
  onClose: () => void;
  onStatusChange: (id: string, s: EnquiryStatus) => void;
  onContactStatusChange: (id: string, s: ContactStatus) => void;
  onAddComment: (id: string, text: string) => void;
  onDeleteComment: (enquiryId: string, commentId: string) => void;
}) {
  const [newComment, setNewComment] = useState("");
  // const csMeta = contactStatusMeta[enquiry.contactStatus];

  const submit = () => {
    if (!newComment.trim()) return;
    onAddComment(enquiry.id, newComment.trim());
    setNewComment("");
  };

  const displayService = enquiry.services || enquiry.service || "—";
  const displaySubject = enquiry.subject || displayService;

  return (
    <div style={T.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={T.modal}>

        {/* ── Modal Header ── */}
        <div style={{ padding: "24px 28px 20px", borderBottom: `1px solid ${c.border}` }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: `${c.primary}20`, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18, fontWeight: 800, color: c.primary,
              }}>
                {enquiry.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: c.text }}>{enquiry.name}</div>
                <div style={{ fontSize: 12, color: c.faint, marginTop: 2 }}>
                  {enquiry.email}{enquiry.phone ? ` · ${enquiry.phone}` : ""}
                </div>
              </div>
            </div>
            <button style={{ background: "none", border: "none", color: c.faint, cursor: "pointer", fontSize: 18, lineHeight: 1 }} onClick={onClose}>✕</button>
          </div>
        </div>

        <div style={{ padding: "20px 28px", flex: 1, overflowY: "auto" as const }}>

          {/* ── Meta ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
            {[
              { label: "Source", value: enquiry.source, color: c.primary },
              { label: "Date", value: formatDate(enquiry.createdAt), color: c.text },
              { label: "Status", value: enquiry.status, color: statusColor(enquiry.status) },
            ].map((m) => (
              <div key={m.label}>
                <span style={T.sectionLabel}>{m.label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: m.color }}>{m.value}</span>
              </div>
            ))}
            <div>
              <span style={T.sectionLabel}>Notes</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: c.muted }}>{enquiry.comments.length}</span>
            </div>
          </div>

          {/* ── Contact Status Selector ── */}
          <div style={{ marginBottom: 20 }}>
            <span style={T.sectionLabel}>Contact Status</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
              {(Object.keys(contactStatusMeta) as ContactStatus[]).map((cs) => {
                const meta = contactStatusMeta[cs];
                const active = enquiry.contactStatus === cs;
                return (
                  <button key={cs} onClick={() => onContactStatusChange(enquiry.id, cs)} style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit", border: "1px solid",
                    background: active ? `${meta.color}20` : "transparent",
                    borderColor: active ? `${meta.color}50` : c.border,
                    color: active ? meta.color : c.faint,
                    transition: "all 0.15s",
                  }}>
                    <span style={{ fontSize: 11 }}>{meta.icon}</span> {cs}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Subject / Service ── */}
          <div style={{ marginBottom: 16 }}>
            <span style={T.sectionLabel}>Service / Subject</span>
            <div style={{ fontSize: 14, fontWeight: 700, color: c.text }}>{displaySubject}</div>
          </div>

          {/* ── Company ── */}
          {enquiry.company && (
            <div style={{ marginBottom: 16 }}>
              <span style={T.sectionLabel}>Company</span>
              <div style={{ fontSize: 13, color: c.muted }}>{enquiry.company}</div>
            </div>
          )}

          {/* ── Message ── */}
          <div style={{ marginBottom: 24 }}>
            <span style={T.sectionLabel}>Message</span>
            <div style={{
              fontSize: 13, color: c.muted, lineHeight: 1.7,
              background: c.surface, border: `1px solid ${c.border}`,
              borderRadius: 10, padding: "12px 16px",
            }}>
              {enquiry.message || "—"}
            </div>
          </div>

          {/* ── Comments ── */}
          <div>
            <span style={T.sectionLabel}>Internal Notes &amp; Comments</span>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8, marginBottom: 14 }}>
              {enquiry.comments.length === 0 ? (
                <div style={{
                  fontSize: 12, color: c.faint, fontStyle: "italic",
                  textAlign: "center", padding: "16px 0",
                  background: c.surface, borderRadius: 10, border: `1px solid ${c.border}`,
                }}>
                  No comments yet. Add the first one below.
                </div>
              ) : enquiry.comments.map((cm) => (
                <div key={cm.id} style={{
                  background: c.surface, border: `1px solid ${c.border}`,
                  borderRadius: 10, padding: "12px 14px",
                  display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: c.text, lineHeight: 1.6 }}>{cm.text}</div>
                    <div style={{ fontSize: 10, color: c.faint, marginTop: 6, fontWeight: 600, letterSpacing: "0.06em" }}>
                      ADMIN · {formatDate(cm.createdAt)}
                    </div>
                  </div>
                  <button
                    title="Delete comment"
                    onClick={() => onDeleteComment(enquiry.id, cm.id)}
                    style={{
                      background: "none", border: "none", color: c.faint, cursor: "pointer",
                      fontSize: 12, padding: "2px 4px", borderRadius: 4, flexShrink: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = c.danger)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = c.faint)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <textarea
                placeholder="Add a note (e.g. 'Called today, sent proposal...')"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submit(); }}
                rows={2}
                style={{
                  flex: 1, background: c.surface, border: `1px solid ${c.borderMid}`,
                  borderRadius: 10, padding: "10px 14px", color: c.text, fontSize: 13,
                  fontFamily: "inherit", outline: "none", resize: "none", lineHeight: 1.6,
                }}
              />
              <button style={{ ...btn("primary"), alignSelf: "flex-end", padding: "10px 16px" }} onClick={submit}>
                Add
              </button>
            </div>
            <div style={{ fontSize: 10, color: c.faint, marginTop: 5 }}>⌘ + Enter to submit</div>
          </div>
        </div>

        {/* ── Modal Footer ── */}
        <div style={{
          padding: "16px 28px", borderTop: `1px solid ${c.border}`,
          display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap",
        }}>
          {enquiry.status !== "Replied" && (
            <button style={btn("success")} onClick={() => { onStatusChange(enquiry.id, "Replied"); onClose(); }}>
              ✓ Mark Replied
            </button>
          )}
          {enquiry.status !== "Archived" && (
            <button style={btn("ghost")} onClick={() => { onStatusChange(enquiry.id, "Archived"); onClose(); }}>
              Archive
            </button>
          )}
          {enquiry.status === "Archived" && (
            <button style={btn("outline")} onClick={() => { onStatusChange(enquiry.id, "New"); onClose(); }}>
              Restore
            </button>
          )}
          <button style={btn("ghost")} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main EnquiriesView ───────────────────────────────────────────────────────
export default function EnquiriesView() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterContact, setFilterContact] = useState("All");
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const PAGE_SIZE = 10;
  const [page, setPage] = useState(1);

  // ── Fetch from Firebase via API ──────────────────────────────────────────
  const fetchEnquiries = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/enquiries?limit=100");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to fetch");
      // Normalize: ensure contactStatus default
      const normalized = (data.enquiries as Enquiry[]).map((e) => ({
        ...e,
        contactStatus: (e.contactStatus ?? "Not Contacted") as ContactStatus,
        comments: e.comments ?? [],
        source: e.source ?? "Contact Form",
      }));
      setEnquiries(normalized);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchEnquiries(); }, [fetchEnquiries]);

  // ── Filters ──────────────────────────────────────────────────────────────
  const filtered = enquiries.filter((e) => {
    const matchStatus = filterStatus === "All" || e.status === filterStatus;
    const matchContact = filterContact === "All" || e.contactStatus === filterContact;
    const matchSearch = !search
      || e.name.toLowerCase().includes(search.toLowerCase())
      || e.email.toLowerCase().includes(search.toLowerCase())
      || (e.services || e.service || "").toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchContact && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const stats = {
    total: enquiries.length,
    new: enquiries.filter(e => e.status === "New").length,
    replied: enquiries.filter(e => e.status === "Replied").length,
    archived: enquiries.filter(e => e.status === "Archived").length,
  };

  const contactStats = (Object.keys(contactStatusMeta) as ContactStatus[]).reduce((acc, k) => {
    acc[k] = enquiries.filter(e => e.contactStatus === k).length;
    return acc;
  }, {} as Record<ContactStatus, number>);

  // ── Mutators (optimistic + API) ───────────────────────────────────────────
  const handleStatus = async (id: string, status: EnquiryStatus) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
    } catch { /* optimistic already applied */ }
  };

  const handleContactStatus = async (id: string, contactStatus: ContactStatus) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, contactStatus } : e));
    setSelected(prev => prev?.id === id ? { ...prev, contactStatus } : prev);
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactStatus }),
      });
    } catch { /* optimistic */ }
  };

  const handleAddComment = async (enquiryId: string, text: string) => {
    const comment: Comment = {
      id: `c${Date.now()}`,
      text,
      author: "Admin",
      createdAt: new Date().toISOString(),
    };
    setEnquiries(prev => prev.map(e =>
      e.id === enquiryId ? { ...e, comments: [...e.comments, comment] } : e
    ));
    setSelected(prev =>
      prev?.id === enquiryId ? { ...prev, comments: [...prev.comments, comment] } : prev
    );
    try {
      await fetch(`/api/enquiries/${enquiryId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, author: "Admin" }),
      });
    } catch { /* optimistic */ }
  };

  const handleDeleteComment = async (enquiryId: string, commentId: string) => {
    setEnquiries(prev => prev.map(e =>
      e.id === enquiryId ? { ...e, comments: e.comments.filter(c => c.id !== commentId) } : e
    ));
    setSelected(prev =>
      prev?.id === enquiryId ? { ...prev, comments: prev.comments.filter(c => c.id !== commentId) } : prev
    );
    try {
      await fetch(`/api/enquiries/${enquiryId}/comments/${commentId}`, { method: "DELETE" });
    } catch { /* optimistic */ }
  };

  const filterInput = {
    background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10,
    padding: "8px 14px", color: c.text, fontSize: 12, outline: "none",
    fontFamily: "inherit", cursor: "pointer",
  };

  // ── Loading / Error states ───────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200, color: c.faint, fontSize: 13 }}>
        Loading enquiries...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: c.danger, background: `${c.danger}10`, border: `1px solid ${c.danger}30`, borderRadius: 12, padding: 20, fontSize: 13 }}>
        Error: {error}{" "}
        <button onClick={fetchEnquiries} style={{ color: c.primary, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: c.text, marginBottom: 4 }}>Enquiries</div>
          <div style={{ fontSize: 12, color: c.faint }}>
            {stats.total} total &nbsp;·&nbsp; <span style={{ color: c.pink }}>{stats.new} new</span>
          </div>
        </div>
        <button onClick={fetchEnquiries} style={{ ...btn("ghost"), fontSize: 11 }}>↻ Refresh</button>
      </div>

      {/* ── Enquiry Status Pills ── */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[
          { label: "All", count: stats.total, color: c.primary, filterVal: "All" },
          { label: "New", count: stats.new, color: c.pink, filterVal: "New" },
          { label: "Replied", count: stats.replied, color: c.success, filterVal: "Replied" },
          { label: "Archived", count: stats.archived, color: c.faint, filterVal: "Archived" },
        ].map((s) => {
          const active = filterStatus === s.filterVal;
          return (
            <button key={s.label} onClick={() => { setFilterStatus(s.filterVal); setPage(1); }} style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "7px 14px", borderRadius: 10, border: "1px solid",
              background: active ? `${s.color}18` : "transparent",
              borderColor: active ? `${s.color}40` : c.border,
              color: active ? s.color : c.faint,
              fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>
              {s.label}
              <span style={{ background: `${s.color}25`, color: s.color, borderRadius: 6, padding: "1px 7px", fontSize: 11, fontWeight: 700 }}>
                {s.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Contact Status Pills ── */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
          Contact Tracking
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={() => { setFilterContact("All"); setPage(1); }} style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "6px 12px", borderRadius: 8, border: "1px solid",
            background: filterContact === "All" ? `${c.primary}15` : "transparent",
            borderColor: filterContact === "All" ? `${c.primary}40` : c.border,
            color: filterContact === "All" ? c.primary : c.faint,
            fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          }}>
            All <span style={{ background: `${c.primary}20`, color: c.primary, borderRadius: 5, padding: "0px 6px", fontSize: 10, fontWeight: 700 }}>{stats.total}</span>
          </button>
          {(Object.keys(contactStatusMeta) as ContactStatus[]).map((cs) => {
            const meta = contactStatusMeta[cs];
            const active = filterContact === cs;
            return (
              <button key={cs} onClick={() => { setFilterContact(cs); setPage(1); }} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "6px 12px", borderRadius: 8, border: "1px solid",
                background: active ? `${meta.color}15` : "transparent",
                borderColor: active ? `${meta.color}40` : c.border,
                color: active ? meta.color : c.faint,
                fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>
                <span style={{ fontSize: 10 }}>{meta.icon}</span> {cs}
                <span style={{ background: `${meta.color}20`, color: meta.color, borderRadius: 5, padding: "0px 6px", fontSize: 10, fontWeight: 700 }}>
                  {contactStats[cs] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Search + Filter ── */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c.faint} strokeWidth="2"
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            placeholder="Search name, email, service…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            style={{ ...filterInput, width: "100%", paddingLeft: 36, boxSizing: "border-box" as const }}
          />
        </div>
        <select style={filterInput} value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}>
          <option value="All">All Status</option>
          <option>New</option>
          <option>Replied</option>
          <option>Archived</option>
        </select>
        <select style={filterInput} value={filterContact} onChange={(e) => { setFilterContact(e.target.value); setPage(1); }}>
          <option value="All">All Contact Status</option>
          {(Object.keys(contactStatusMeta) as ContactStatus[]).map(cs => (
            <option key={cs}>{cs}</option>
          ))}
        </select>
      </div>

      {/* ── Table ── */}
      <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: c.bg }}>
                {["Sender", "Service", "Contact Status", "Source", "Date", "Status", "Notes", "Actions"].map((h, i) => (
                  <th key={h} style={{
                    padding: "12px 16px",
                    textAlign: (i >= 6 ? "center" : "left") as "center" | "left",
                    fontSize: 10, fontWeight: 700, color: c.faint,
                    textTransform: "uppercase", letterSpacing: "0.12em",
                    borderBottom: `1px solid ${c.border}`, whiteSpace: "nowrap",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", color: c.faint, padding: "48px 0", fontStyle: "italic", fontSize: 13 }}>
                    {enquiries.length === 0 ? "No enquiries yet." : "No enquiries match your filters."}
                  </td>
                </tr>
              ) : paginated.map((e) => {
                const csMeta = contactStatusMeta[e.contactStatus];
                const displaySvc = e.services || e.service || "—";
                return (
                  <tr key={e.id}
                    style={{ borderBottom: `1px solid ${c.bg}`, cursor: "pointer" }}
                    onClick={() => setSelected(e)}
                    onMouseEnter={(ev) => (ev.currentTarget.style.background = "#ffffff05")}
                    onMouseLeave={(ev) => (ev.currentTarget.style.background = "transparent")}
                  >
                    {/* Sender */}
                    <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                          background: `${c.primary}20`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 13, fontWeight: 700, color: c.primary,
                        }}>
                          {e.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, color: c.text, whiteSpace: "nowrap" }}>{e.name}</div>
                          <div style={{ fontSize: 11, color: c.faint }}>{e.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* Service */}
                    <td style={{ padding: "12px 16px", verticalAlign: "middle", maxWidth: 180 }}>
                      <div style={{ fontWeight: 600, color: c.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {displaySvc}
                      </div>
                      <div style={{ fontSize: 11, color: c.faint, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>
                        {e.message}
                      </div>
                    </td>

                    {/* Contact Status */}
                    <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                        background: `${csMeta.color}15`, color: csMeta.color,
                        border: `1px solid ${csMeta.color}30`, whiteSpace: "nowrap",
                      }}>
                        <span style={{ fontSize: 10 }}>{csMeta.icon}</span>
                        {e.contactStatus}
                      </span>
                    </td>

                    {/* Source */}
                    <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                      <span style={{
                        display: "inline-block", padding: "2px 8px", borderRadius: 4,
                        fontSize: 11, fontWeight: 600,
                        background: "#3B82F610", color: c.primary, border: "1px solid #3B82F620",
                      }}>
                        {e.source}
                      </span>
                    </td>

                    {/* Date */}
                    <td style={{ padding: "12px 16px", color: c.faint, fontSize: 12, whiteSpace: "nowrap", verticalAlign: "middle" }}>
                      {formatDate(e.createdAt)}
                    </td>

                    {/* Enquiry Status */}
                    <td style={{ padding: "12px 16px", textAlign: "center", verticalAlign: "middle" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                        background: `${statusColor(e.status)}15`, color: statusColor(e.status),
                        border: `1px solid ${statusColor(e.status)}30`,
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
                        {e.status}
                      </span>
                    </td>

                    {/* Notes */}
                    <td style={{ padding: "12px 16px", textAlign: "center", verticalAlign: "middle" }}>
                      {e.comments.length > 0 ? (
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          padding: "3px 9px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                          background: `${c.warning}15`, color: c.warning,
                          border: `1px solid ${c.warning}25`,
                        }}>
                          💬 {e.comments.length}
                        </span>
                      ) : (
                        <span style={{ color: c.faint, fontSize: 12 }}>—</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td style={{ padding: "12px 16px", textAlign: "right", verticalAlign: "middle" }}>
                      <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}
                        onClick={(ev) => ev.stopPropagation()}>
                        {e.status === "New" && (
                          <button style={btn("primary")} onClick={() => handleStatus(e.id, "Replied")}>
                            ✓ Reply
                          </button>
                        )}
                        {e.status !== "Archived" && (
                          <button style={btn("ghost")} onClick={() => handleStatus(e.id, "Archived")}>
                            Archive
                          </button>
                        )}
                        {e.status === "Archived" && (
                          <button style={btn("outline")} onClick={() => handleStatus(e.id, "New")}>
                            Restore
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: `1px solid ${c.border}` }}>
            <span style={{ fontSize: 11, color: c.faint, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Page {page} of {totalPages} · {filtered.length} enquiries
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              {[{ label: "← Prev", disabled: page <= 1, action: () => setPage(p => p - 1) },
              { label: "Next →", disabled: page >= totalPages, action: () => setPage(p => p + 1) }].map(({ label, disabled, action }) => (
                <button key={label}
                  style={{ padding: "6px 14px", background: disabled ? "transparent" : c.border, border: `1px solid ${c.border}`, borderRadius: 8, color: disabled ? "#334155" : c.muted, fontSize: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, fontFamily: "inherit" }}
                  disabled={disabled} onClick={action}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selected && (
        <DetailModal
          enquiry={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatus}
          onContactStatusChange={handleContactStatus}
          onAddComment={handleAddComment}
          onDeleteComment={handleDeleteComment}
        />
      )}
    </div>
  );
}