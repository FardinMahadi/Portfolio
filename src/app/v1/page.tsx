'use client';

import dynamic from 'next/dynamic';

const V1App = dynamic(() => import('@/archive/v1/V1App').then(m => m.V1App), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#0a0e1a',
        color: '#4b5563',
        fontFamily: 'monospace',
        fontSize: '13px',
      }}
    >
      loading archive...
    </div>
  ),
});

export default function V1Page() {
  return <V1App />;
}
