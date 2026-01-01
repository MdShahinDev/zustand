import { Product } from "./product";

export type CartItem = Product & {
  quantity: number;
};
export type CartStore ={
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}