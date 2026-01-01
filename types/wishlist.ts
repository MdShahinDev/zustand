import { Product } from "./product";

export type WishlistStore = {
  wishlist: Product[];

  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
};