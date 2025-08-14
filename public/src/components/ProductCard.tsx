import React from 'react';
import { Product } from '../types/Product';

type Props = { product: Product; onClick: (p: Product) => void };

export default function ProductCard({ product, onClick }: Props) {
  return (
    <div onClick={() => onClick(product)} style={{ border: '1px solid #eee', padding: '12px', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <img src={product.photo} alt={product.productName} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{product.productName}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
    </div>
  );
}

