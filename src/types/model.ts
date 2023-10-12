export interface Product {
  id: number;
  photos?: string[];
  title: string;
  price: number;
  discount: { discountRate: number; discountDate: string }[];
  new?: boolean;
  rating?: number;
  description?: string;
  category?: string;
  colors?: string[];
  sizes?: string[];
  stock?: Stock[];
  reviews?: Review[];
  weight?: number;
  questions?: Question[];
}

export interface Review {
  id: number;
  productName: string;
  userName: string;
  userAvatar: string;
  review: string;
  rating: number;
  productID: number;
  date?: string;
}

export interface Question {
  id: number;
  userName: string;
  question: string;
  date: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  userName: string;
  date: string;
  answer: string;
}

export interface Stock {
  color: string;
  sizes: {
    [key: string]: number;
  };
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
}

export interface CartState {
  cartItems: CartItem[];
  total: number;
  isFlyoutOpen: boolean;
  shipping: number;
}

export interface Filters {
  category: string[],
  color: string[],
  size: string[],
  style: string[],
  price: number[],
}

