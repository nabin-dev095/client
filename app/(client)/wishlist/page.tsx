'use client'
import withAuth from "@/hoc/withAuth.hoc";
import { Role } from "@/types/global.types";
import React from "react";

const WishlistPage = () => {
  return (
    <main className="min-h-[80vh] px-10 py-4">
      {/* heading */}
      <header className="flex justify-between items-center">
        <div className="flex flex-col ">
          <h3 className="text-lg font-bold text-gray-700">Wishlist</h3>
          <p className="text-sm text-gray-500 -mt-1">-
          </p>
        </div>
      </header>
      {/* wishlist */}
    </main>
  );
};

const ProtectedWishlistPage = withAuth(WishlistPage, [Role.USER])
export default ProtectedWishlistPage
