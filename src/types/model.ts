export interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  photo: string;
  new: boolean;
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
