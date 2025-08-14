import React from 'react';
import { Product } from '../types/Product';

type Props = { product: Product | null; onClose: () => void };

export default function Modal({ product, onClose }: Props) {
  if (!product) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center' }} onClick={onClose}>
      <div style={{ background:'#fff', padding:'20px', borderRadius:'12px' }} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} style={{ float:'right' }}>×</button>
        <img src={product.photo} alt={product.productName} style={{ width:'100%', borderRadius:'8px' }}/>
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>
        <strong>R$ {product.price.toFixed(2)}</strong>
      </div>
    </div>
  );
}

