// app\components\admin\ApplicationsView.tsx
"use client";

import { useState, useEffect, useCallback } from "react";

const c = {
    bg: "#0F1C2E",
    surface: "#0A1628",
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

function btn(variant: "primary" | "ghost" | "danger" | "outline" | "success") {
    const base = {
        display: "inline-flex" as const, alignItems: "center" as const, gap: 6,
        padding: "8px 16px", borderRadius: 10, fontSize: 12, fontWeight: 600,
        cursor: "pointer", border: "1px solid", fontFamily: "inherit",
        transition: "all 0.15s", whiteSpace: "nowrap" as const,
    };
    switch (variant) {
        case "primary": return { ...base, background: c.primary, color: "#fff", borderColor: c.primary };
        case "success": return { ...base, background: c.success, color: "#fff", borderColor: c.success };
        case "danger": return { ...base, background: "transparent", color: c.danger, borderColor: `${c.danger}40` };
        case "ghost": return { ...base, background: "transparent", color: c.muted, borderColor: c.border };
        case "outline": return { ...base, background: "transparent", color: c.text, borderColor: c.borderMid };
    }
}

type ApplicationStatus = "New" | "Reviewed" | "Shortlisted" | "Rejected" | "Hired";

type Application = {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    portfolioUrl: string;
    message: string;
    status: ApplicationStatus;
    createdAt: string;
};

const statusMeta: Record<ApplicationStatus, { color: string; icon: string }> = {
    "New": { color: c.pink, icon: "●" },
    "Reviewed": { color: c.primary, icon: "◎" },
    "Shortlisted": { color: c.warning, icon: "★" },
    "Rejected": { color: c.danger, icon: "✕" },
    "Hired": { color: c.success, icon: "✓" },
};

function formatDate(iso: string) {
    try {
        return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    } catch { return iso; }
}

// ── Detail Modal ─────────────────────────────────────────────────────────────
function DetailModal({ app, onClose, onStatusChange }: {
    app: Application;
    onClose: () => void;
    onStatusChange: (id: string, s: ApplicationStatus) => void;
}) {
    const meta = statusMeta[app.status];
    return (
        <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)",
            zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
        }} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div style={{
                background: "#0D1829", border: `1px solid ${c.border}`, borderRadius: 18,
                width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto",
            }}>
                {/* Header */}
                <div style={{ padding: "24px 28px 20px", borderBottom: `1px solid ${c.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${c.primary}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: c.primary }}>
                            {app.name.charAt(0)}
                        </div>
                        <div>
                            <div style={{ fontSize: 16, fontWeight: 700, color: c.text }}>{app.name}</div>
                            <div style={{ fontSize: 12, color: c.faint }}>{app.email} · {app.phone}</div>
                        </div>
                    </div>
                    <button style={{ background: "none", border: "none", color: c.faint, cursor: "pointer", fontSize: 18 }} onClick={onClose}>✕</button>
                </div>

                <div style={{ padding: "20px 28px" }}>
                    {/* Meta */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
                        <div>
                            <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Role</div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: c.primary }}>{app.role}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Applied On</div>
                            <div style={{ fontSize: 13, color: c.text }}>{formatDate(app.createdAt)}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Status</div>
                            <span style={{ fontSize: 12, fontWeight: 600, color: meta.color }}>{meta.icon} {app.status}</span>
                        </div>
                    </div>

                    {/* Portfolio */}
                    {app.portfolioUrl && (
                        <div style={{ marginBottom: 16 }}>
                            <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Portfolio / Resume</div>
                            <a href={app.portfolioUrl} target="_blank" rel="noopener noreferrer"
                                style={{ color: c.primary, fontSize: 13, wordBreak: "break-all" }}>
                                {app.portfolioUrl}
                            </a>
                        </div>
                    )}

                    {/* Message */}
                    {app.message && (
                        <div style={{ marginBottom: 24 }}>
                            <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Cover Note</div>
                            <div style={{ fontSize: 13, color: c.muted, lineHeight: 1.7, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: "12px 16px" }}>
                                {app.message}
                            </div>
                        </div>
                    )}

                    {/* Status Changer */}
                    <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: c.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Update Status</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {(Object.keys(statusMeta) as ApplicationStatus[]).map((s) => {
                                const m = statusMeta[s];
                                const active = app.status === s;
                                return (
                                    <button key={s} onClick={() => onStatusChange(app.id, s)} style={{
                                        display: "inline-flex", alignItems: "center", gap: 5,
                                        padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                                        cursor: "pointer", fontFamily: "inherit", border: "1px solid",
                                        background: active ? `${m.color}20` : "transparent",
                                        borderColor: active ? `${m.color}50` : c.border,
                                        color: active ? m.color : c.faint,
                                    }}>
                                        <span style={{ fontSize: 11 }}>{m.icon}</span> {s}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div style={{ padding: "16px 28px", borderTop: `1px solid ${c.border}`, display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    {app.status === "New" && (
                        <button style={btn("primary")} onClick={() => { onStatusChange(app.id, "Reviewed"); onClose(); }}>
                            Mark Reviewed
                        </button>
                    )}
                    {app.status === "Reviewed" && (
                        <button style={btn("success")} onClick={() => { onStatusChange(app.id, "Shortlisted"); onClose(); }}>
                            ★ Shortlist
                        </button>
                    )}
                    <button style={btn("ghost")} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

// ── Main ApplicationsView ─────────────────────────────────────────────────────
export default function ApplicationsView() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [selected, setSelected] = useState<Application | null>(null);

    const PAGE_SIZE = 10;
    const [page, setPage] = useState(1);

    const fetchApplications = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/applications?limit=100");
            const data = await res.json();
            if (!data.success) throw new Error(data.error || "Failed to fetch");
            setApplications(data.applications as Application[]);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load applications");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchApplications(); }, [fetchApplications]);

    const filtered = applications.filter((a) => {
        const matchStatus = filterStatus === "All" || a.status === filterStatus;
        const matchSearch = !search
            || a.name.toLowerCase().includes(search.toLowerCase())
            || a.email.toLowerCase().includes(search.toLowerCase())
            || a.role.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const stats = {
        total: applications.length,
        new: applications.filter(a => a.status === "New").length,
        reviewed: applications.filter(a => a.status === "Reviewed").length,
        shortlisted: applications.filter(a => a.status === "Shortlisted").length,
        hired: applications.filter(a => a.status === "Hired").length,
    };

    const handleStatusChange = async (id: string, status: ApplicationStatus) => {
        setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
        setSelected(prev => prev?.id === id ? { ...prev, status } : prev);
        try {
            await fetch(`/api/applications/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
        } catch { /* optimistic */ }
    };

    const filterInput = {
        background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10,
        padding: "8px 14px", color: c.text, fontSize: 12, outline: "none",
        fontFamily: "inherit", cursor: "pointer",
    };

    if (loading) return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200, color: c.faint, fontSize: 13 }}>
            Loading applications...
        </div>
    );

    if (error) return (
        <div style={{ color: c.danger, background: `${c.danger}10`, border: `1px solid ${c.danger}30`, borderRadius: 12, padding: 20, fontSize: 13 }}>
            Error: {error}{" "}
            <button onClick={fetchApplications} style={{ color: c.primary, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
                Retry
            </button>
        </div>
    );

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
                <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: c.text, marginBottom: 4 }}>Career Applications</div>
                    <div style={{ fontSize: 12, color: c.faint }}>
                        {stats.total} total &nbsp;·&nbsp; <span style={{ color: c.pink }}>{stats.new} new</span>
                    </div>
                </div>
                <button onClick={fetchApplications} style={{ ...btn("ghost"), fontSize: 11 }}>↻ Refresh</button>
            </div>

            {/* Status Pills */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                    { label: "All", count: stats.total, color: c.primary, val: "All" },
                    { label: "New", count: stats.new, color: c.pink, val: "New" },
                    { label: "Reviewed", count: stats.reviewed, color: c.primary, val: "Reviewed" },
                    { label: "Shortlisted", count: stats.shortlisted, color: c.warning, val: "Shortlisted" },
                    { label: "Hired", count: stats.hired, color: c.success, val: "Hired" },
                ].map((s) => {
                    const active = filterStatus === s.val;
                    return (
                        <button key={s.label} onClick={() => { setFilterStatus(s.val); setPage(1); }} style={{
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

            {/* Search */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c.faint} strokeWidth="2"
                        style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        placeholder="Search name, email, role…"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        style={{ ...filterInput, width: "100%", paddingLeft: 36, boxSizing: "border-box" as const }}
                    />
                </div>
                <select style={filterInput} value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}>
                    <option value="All">All Status</option>
                    {(Object.keys(statusMeta) as ApplicationStatus[]).map(s => <option key={s}>{s}</option>)}
                </select>
            </div>

            {/* Table */}
            <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ background: c.bg }}>
                                {["Applicant", "Role", "Portfolio", "Date", "Status", "Actions"].map((h, i) => (
                                    <th key={h} style={{
                                        padding: "12px 16px",
                                        textAlign: (i >= 4 ? "center" : "left") as "center" | "left",
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
                                    <td colSpan={6} style={{ textAlign: "center", color: c.faint, padding: "48px 0", fontStyle: "italic", fontSize: 13 }}>
                                        {applications.length === 0 ? "No applications yet." : "No applications match your filters."}
                                    </td>
                                </tr>
                            ) : paginated.map((a) => {
                                const meta = statusMeta[a.status];
                                return (
                                    <tr key={a.id}
                                        style={{ borderBottom: `1px solid ${c.bg}`, cursor: "pointer" }}
                                        onClick={() => setSelected(a)}
                                        onMouseEnter={(ev) => (ev.currentTarget.style.background = "#ffffff05")}
                                        onMouseLeave={(ev) => (ev.currentTarget.style.background = "transparent")}
                                    >
                                        {/* Applicant */}
                                        <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                <div style={{
                                                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                                                    background: `${c.purple}20`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: 13, fontWeight: 700, color: c.purple,
                                                }}>
                                                    {a.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 600, color: c.text }}>{a.name}</div>
                                                    <div style={{ fontSize: 11, color: c.faint }}>{a.email}</div>
                                                    <div style={{ fontSize: 11, color: c.faint }}>{a.phone}</div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Role */}
                                        <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
                                            <span style={{
                                                display: "inline-block", padding: "2px 8px", borderRadius: 4,
                                                fontSize: 11, fontWeight: 600,
                                                background: `${c.purple}15`, color: c.purple, border: `1px solid ${c.purple}25`,
                                            }}>
                                                {a.role}
                                            </span>
                                        </td>

                                        {/* Portfolio */}
                                        <td style={{ padding: "12px 16px", verticalAlign: "middle", maxWidth: 180 }}>
                                            {a.portfolioUrl ? (
                                                <a href={a.portfolioUrl} target="_blank" rel="noopener noreferrer"
                                                    style={{ color: c.primary, fontSize: 11, textDecoration: "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}
                                                    onClick={(e) => e.stopPropagation()}>
                                                    🔗 View Link
                                                </a>
                                            ) : (
                                                <span style={{ color: c.faint, fontSize: 12 }}>—</span>
                                            )}
                                        </td>

                                        {/* Date */}
                                        <td style={{ padding: "12px 16px", color: c.faint, fontSize: 12, whiteSpace: "nowrap", verticalAlign: "middle" }}>
                                            {formatDate(a.createdAt)}
                                        </td>

                                        {/* Status */}
                                        <td style={{ padding: "12px 16px", textAlign: "center", verticalAlign: "middle" }}>
                                            <span style={{
                                                display: "inline-flex", alignItems: "center", gap: 5,
                                                padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                                                background: `${meta.color}15`, color: meta.color,
                                                border: `1px solid ${meta.color}30`,
                                            }}>
                                                <span style={{ fontSize: 10 }}>{meta.icon}</span>
                                                {a.status}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td style={{ padding: "12px 16px", textAlign: "center", verticalAlign: "middle" }}>
                                            <div style={{ display: "flex", gap: 6, justifyContent: "center" }}
                                                onClick={(ev) => ev.stopPropagation()}>
                                                {a.status === "New" && (
                                                    <button style={btn("primary")} onClick={() => handleStatusChange(a.id, "Reviewed")}>
                                                        Review
                                                    </button>
                                                )}
                                                {a.status === "Reviewed" && (
                                                    <button style={btn("success")} onClick={() => handleStatusChange(a.id, "Shortlisted")}>
                                                        ★ Shortlist
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
                            Page {page} of {totalPages} · {filtered.length} applications
                        </span>
                        <div style={{ display: "flex", gap: 8 }}>
                            {[{ label: "← Prev", disabled: page <= 1, action: () => setPage(p => p - 1) },
                            { label: "Next →", disabled: page >= totalPages, action: () => setPage(p => p + 1) }].map(({ label, disabled, action }) => (
                                <button key={label}
                                    style={{ padding: "6px 14px", background: disabled ? "transparent" : c.border, border: `1px solid ${c.border}`, borderRadius: 8, color: disabled ? "#334155" : c.muted, fontSize: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, fontFamily: "inherit" }}
                                    disabled={disabled} onClick={action}
                                >{label}</button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {selected && (
                <DetailModal app={selected} onClose={() => setSelected(null)} onStatusChange={handleStatusChange} />
            )}
        </div>
    );
}