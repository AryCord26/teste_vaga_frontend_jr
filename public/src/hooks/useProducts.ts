import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

export function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/produtos.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => setError('Não foi possível carregar produtos'))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

