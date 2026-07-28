import { siteConfig } from "@/config/site";

export function renderOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0a0a0f",
        backgroundImage:
          "radial-gradient(circle at 15% 15%, rgba(139,92,246,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(56,189,248,0.28), transparent 55%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            backgroundColor: "#f4f4f5",
          }}
        />
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#f4f4f5" }}>
          {siteConfig.name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.15,
          color: "#f4f4f5",
          maxWidth: "900px",
        }}
      >
        {siteConfig.tagline}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "28px",
          fontSize: 28,
          color: "#a1a1aa",
          maxWidth: "820px",
        }}
      >
        Manage properties, tenants, rent, and maintenance from one
        intelligent dashboard.
      </div>
    </div>
  );
}
