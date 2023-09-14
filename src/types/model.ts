export interface Product {
  id: number;
  photos?: string[];
  title: string;
  price: number;
  discount: { discountRate: number; discountDate: string; }[]; 
  new?: boolean;
  rating?: number;
  description?: string;
  category?: string;
  colors?: string[];
  sizes?: string[];
  stock?: object[];
  reviews?: Review[];
  weight?: number;
}

export interface Review {
  id: number;
  productName: string;
  userName: string;
  userAvatar: string;
  review: string;
  rating: number;
  productID: number;
}
