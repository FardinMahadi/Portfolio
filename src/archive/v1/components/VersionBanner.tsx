'use client';

export function VersionBanner() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: '#0a0a0f',
        borderBottom: '1px solid #1f2937',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        fontSize: '12px',
        color: '#6b7280',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
      }}
    >
      <span>
        archive / <strong style={{ color: '#e5e7eb' }}>v1</strong>
      </span>
      <span style={{ color: '#374151' }}>·</span>
      <a
        href="/"
        style={{
          color: '#B400D9',
          textDecoration: 'none',
          padding: '2px 10px',
          border: '1px solid #B400D9',
          borderRadius: '3px',
          fontSize: '11px',
        }}
      >
        current version →
      </a>
    </div>
  );
}
