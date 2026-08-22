import React from "react";
import Link from "next/link";
import Logo from '@/components/common/ui/logo'
import AuthSection from '@/components/common/auth-section'
import NavLinks from "./links";



const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-24 shadow py-2'>
            {/*logo */}
            <Logo />
            {/*links */}
            <NavLinks />

            {/*auth section */}
            <AuthSection />

        </div>
  );
};

export default NavBar;
