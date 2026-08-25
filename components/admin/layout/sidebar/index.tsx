import Logo from "@/components/common/ui/logo";
import Link from "next/link";
import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { PiGraphBold } from "react-icons/pi";
import { TbBrandAlipay } from "react-icons/tb";

const Links: {
  label: string;
  route: string;
  id: string;
  icon?: React.ReactNode;
}[] = [
  {
    label: "Dashborad",
    id: "dashboard",
    route: "/admin",
    icon: <RiDashboardLine size={22} />,
  },
  {
    label: "Brands",
    id: "brand",
    route: "/admin/brands",
    icon: <TbBrandAlipay size={22} />,
  },
  {
    label: "Categories",
    id: "category",
    route: "/admin/categories",
    icon: <PiGraphBold size={32} />,
  },

  {
    label: "Products",
    id: "product",
    route: "/admin/products",
    icon: <RiDashboardLine size={22} />,
  },
  {
    label: "Users",
    id: "users",
    route: "/admin/users",
    icon: <FaUsers size={22} />,
  },
];

const Sidebar = () => {
  return (
    <div>
      <aside className="h-full w-65 border-r border-gray-300">
        {/* logo */}
        <div className="h-14 flex justify-center items-center border border-gray-300 py-1">
          <Logo />
        </div>
        {/* links */}
        <div className="flex flex-col gap-1 px-1 py-2">
          {Links.map(({ label, id, route, icon }) => {
            return (
              <Link key={id} href={route}>
                <div className="text-primary  flex py-2 border border-gray-200 rounded items-center gap-1 hover:bg-primary/40 transition-all duration-300 hover:text-white font-semibold">
                  {icon}
                  <p>{label} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
