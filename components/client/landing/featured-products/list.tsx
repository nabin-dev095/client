"use client";
import { TCategory } from "@/types/category.types";
import React from "react";
import CategoryCard from "../category-section/card";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/api/product.api";
import { TProduct } from "@/types/product.types";
import ProductCard from "../product-card";

const FeaturedProductsList = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["get-all-featured"],
  });

  return (
    <div className="min-h-50 mt-5">
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-50">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {data?.data?.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProductsList;
