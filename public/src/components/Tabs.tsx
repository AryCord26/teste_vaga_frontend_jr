import React from 'react';

type Props = { categories: string[]; active: string; setActive: (v: string) => void };

export default function Tabs({ categories, active, setActive }: Props) {
  const all = ['VER TODOS', ...categories];
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
      {all.map(c => (
        <button key={c} onClick={() => setActive(c)} style={{ padding: '8px 16px', borderRadius: '999px', border: active===c?'2px solid #FF2E6A':'1px solid #ccc', background: active===c?'#FF2E6A':'#fff', color: active===c?'#fff':'#333', cursor: 'pointer' }}>{c}</button>
      ))}
    </div>
  );
}

