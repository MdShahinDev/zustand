import { persist } from "zustand/middleware";
import { create } from "zustand";
import { WishlistStore } from "@/types/wishlist";
const useWishlistStore = create<WishlistStore>()(
  persist<WishlistStore>(
    (set, get) => ({
      wishlist: [],

      // ➕ Add to wishlist
      addToWishlist: (product) => {
        const wishlist = get().wishlist;

        const exists = wishlist.some(
          (item) => item.id === product.id
        );

        if (!exists) {
          set({
            wishlist: [...wishlist, product],
          });
        }
      },

      // ❌ Remove from wishlist
      removeFromWishlist: (id) => {
        set({
          wishlist: get().wishlist.filter(
            (item) => item.id !== id
          ),
        });
      },

      // ❤️ Check if already in wishlist
      isInWishlist: (id) => {
        return get().wishlist.some(
          (item) => item.id === id
        );
      },

      clearWishlist: () => {
        set({ wishlist: [] });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;