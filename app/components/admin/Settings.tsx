"use client";

import { useState } from "react";
import { S, Icons } from "./Common";

type SettingsState = {
  siteName: string;
  tagline: string;
  email: string;
  address: string;
  growth: string;
  brands: string;
  success: string;
};

export default function Settings() {
  const [settings, setSettings] = useState<SettingsState>({
    siteName: "Aerovince",
    tagline: "Elevating Brands. Accelerating Growth.",
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
      "hello@aerovince.com",
    address:
      "Plot No. 141, Sector 14, Dwarka, New Delhi – 110078",
    growth: "10X",
    brands: "150+",
    success: "98%",
  });

  const [saved, setSaved] = useState(false);

  const updateSetting = (
    key: keyof SettingsState,
    value: string
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveSettings = () => {
    // TODO:
    // Save these settings to your backend/database.
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={S.sectionTitle}>Website Settings</div>
        <div style={S.sectionSub}>
          Manage your Aerovince website branding, contact details,
          and homepage statistics.
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {/* Brand Information */}
        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Brand Information</span>
          </div>

          <div style={{ padding: "20px" }}>
            {(["siteName", "tagline"] as const).map((key) => (
              <div key={key} style={S.formGroup}>
                <label style={S.label}>
                  {key === "siteName"
                    ? "Website Name"
                    : "Tagline"}
                </label>

                <input
                  style={S.input}
                  value={settings[key]}
                  onChange={(e) =>
                    updateSetting(key, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Contact Information</span>
          </div>

          <div style={{ padding: "20px" }}>
            <div style={S.formGroup}>
              <label style={S.label}>Email Address</label>

              <input
                style={S.input}
                value={settings.email}
                onChange={(e) =>
                  updateSetting("email", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div
          style={{
            ...S.card,
            gridColumn: "1 / -1",
          }}
        >
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>
              Office Address
            </span>
          </div>

          <div style={{ padding: "20px" }}>
            <textarea
              style={{
                ...S.input,
                minHeight: 80,
              }}
              value={settings.address}
              onChange={(e) =>
                updateSetting(
                  "address",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        {/* Hero Stats */}
        <div
          style={{
            ...S.card,
            gridColumn: "1 / -1",
          }}
        >
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>
              Homepage Statistics
            </span>
          </div>

          <div
            style={{
              padding: "20px",
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: 16,
            }}
          >
            {[
              ["Growth (10X)", "growth"],
              ["Brands Served", "brands"],
              ["Client Success", "success"],
            ].map(([label, key]) => (
              <div
                key={key}
                style={S.formGroup}
              >
                <label style={S.label}>
                  {label}
                </label>

                <input
                  style={S.input}
                  value={
                    settings[
                      key as keyof SettingsState
                    ]
                  }
                  onChange={(e) =>
                    updateSetting(
                      key as keyof SettingsState,
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <button
          style={S.btn("primary")}
          onClick={saveSettings}
        >
          <Icons.Save />
          &nbsp;Save Settings
        </button>

        {saved && (
          <span
            style={{
              color: "#10B981",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Icons.Check />
            &nbsp;Settings saved successfully!
          </span>
        )}
      </div>
    </div>
  );
}