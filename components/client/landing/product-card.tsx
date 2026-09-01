import { TCategory } from "@/types/category.types";
import { TProduct } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";

interface IProps {
  product: TProduct;
}

const ProductCard = ({
  product: { _id, name, cover_image, description, price, category, brand },
}: IProps) => {
  return (
    <div className="relative min-w-75 max-w-80 border border-gray-300 rounded-md group overflow-clip ">
      <button className="absolute top-2 right-2 z-10 cursor-pointer border border-primary  h-10 aspect-square rounded-full flex justify-center items-center p-1 bg-primary/10 ">
        <FaRegHeart className="text-primary" size={20} />
      </button>

      {/* image */}
      <div className="w-full h-50 rounded-t-md overflow-clip ">
        <Image
          src={cover_image?.path}
          alt={name + "-" + "image"}
          height={1000}
          width={1000}
          className="object-cover h-full w-full transition-all duration-300 group-hover:scale-[1.1]"
        />
      </div>

      <div className="p-1 pb-2 flex flex-col gap-1 mt-2 ">
        <p className="text-md font-semibold text-gray-700">{name}</p>

        {/*category & brand */}
        <div className="flex gap-1 items-center my-1">
          <p className="px-1 py-0.5 border border-primary bg-primary/20 rounded-lg text-xs">
            {category.name}
          </p>
          <p className="px-1 py-0.5 border border-primary bg-primary/20 rounded-lg text-xs">
            {brand.name}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <TbCurrencyRupeeNepalese size={18} />
          <p className="text-primary font-semibold">{price}</p>
        </div>
        <p className="text-xs text-gray-500 line-clamp-4">{description}</p>
      </div>

      <Link href={`/products/${_id}`}>
        <div className="w-full py-3 text-center bg-primary text-white font-bold">
          View Details
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
