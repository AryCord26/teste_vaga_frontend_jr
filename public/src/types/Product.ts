export type Product = {
  id: string | number;
  productName: string;
  descriptionShort?: string;
  photo: string;
  price: number;
  oldPrice?: number;
  installment?: { count: number; value: number };
  category?: string;
};

