import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import Tabs from '../components/Tabs';
import { Product } from '../types/Product';

export default function Home() {
  const { data, loading, error } = useProducts();
  const [active, setActive] = useState('VER TODOS');
  const [selected, setSelected] = useState<Product | null>(null);

  const categories = Array.from(new Set(data.map(d=>d.category)));
  const filtered = active==='VER TODOS'?data:data.filter(p=>p.category===active);

  if(loading) return <p>Carregando...</p>;
  if(error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Tabs categories={categories} active={active} setActive={setActive} />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'20px' }}>
        {filtered.map(p=><ProductCard key={p.id} product={p} onClick={setSelected} />)}
      </div>
      <Modal product={selected} onClose={()=>setSelected(null)} />
    </div>
  );
}

