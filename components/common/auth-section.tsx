"use client";
import { AuthContext, TUser } from "@/contexts/auth.context";
import { Role } from "@/types/global.types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";

const AuthSection = () => {
  //* using context
  const { user, isLoading, logout } = useContext(AuthContext);
  return (
    <div className="min-w-20">
      {isLoading && <p>Loading</p>}

      {!isLoading && user && <UserProfile user={user} logout={logout} />}

      {!isLoading && !user && <AuthButton />}
    </div>
  );
};

const UserProfile = ({
  user: { full_name, profile_image, role },
  logout,
}: {
  user: TUser;
  logout: () => void;
}) => {
  return (
    <div className="flex items-center gap-5 ">
      {/*icons */}
      {role !== Role.ADMIN && (
        <div className="flex gap-2">
          <Link href={"/wishlist"}>
            <IoMdHeart size={28} className="text-red-500 mt-0.5" />
          </Link>
          <Link href={"/cart"}>
            <HiShoppingBag size={26} className="text-primary" />
          </Link>
        </div>
      )}

      {/*user profile */}
      <div className="flex items-center gap-1">
        {/* image */}
        <div className="h-14 w-14 p-0.5 border border-primary rounded-full overflow-clip">
          <Image
            src={profile_image?.path ?? "/profile.jpg"}
            alt="profile image"
            height={500}
            width={500}
            className="h-full w-full rounded-full"
          />
        </div>
        <div>
          {/* name  */}
          <p className="font-bold text-primary text-lg">{full_name}</p>
          {/* logout */}
          <button
            onClick={logout}
            className="cursor-pointer text-md font-semibold text-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const AuthButton = () => {
  return (
    <div className="flex gap-3">
      <Link href={"/login"}>
        <p
          className="bg-teal-500 text-white min-w-30 px-1 text-center font-bold  py-3  cursor-pointer rounded-sm hover:bg-teal-400
                    active:bg-teal-600 transition-all duration-300"
        >
          Login
        </p>
      </Link>
      <Link href={"/login"}>
        <p
          className="border border-teal-500 text-teal-500 min-w-30 px-1 text-center font-bold  py-3  cursor-pointer rounded-sm hover:bg-teal-400 hover:text-white
                    active:bg-teal-600 transition-all duration-300"
        >
          Sign Up
        </p>
      </Link>
    </div>
  );
};
export default AuthSection;
