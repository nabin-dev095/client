'use client'
import { AuthContext, TUser } from "@/contexts/auth.context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const AuthSection = () => {
  //* using context
  const { user, isLoading } = useContext(AuthContext);
  return (
    <div className="min-w-20">
      {isLoading && <p>Loading</p>}

      {!isLoading && user && <UserProfile user={user} />}

      {!isLoading && !user && <AuthButton />}
    </div>
  );
};

const UserProfile = ({
  user: { full_name, profile_image },
}: {
  user: TUser;
}) => {
  return (
    <div className="flex items-center gap-1">
      {/* image */}
      <div>
        <Image
          src={profile_image?.path}
          alt="profile image"
          height={500}
          width={500}
          className="h-full w-full rounded-full"
        />
      </div>
      <div>
        {/* name  */}
        <p className="font-bold text-lg">{full_name} </p>

        {/* logout  */}
        <button className="cursor-pointer text-md font-semibold text-red-500">
          Logout
        </button>
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
