export interface ProductItemQuery {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

export type ProductQuery = ProductItemQuery[];

export interface Product {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  isRedemption: boolean;
  id: string;
}
